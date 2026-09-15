/**
 * Euro Soccer Passport — website form submissions → this Google Sheet.
 *
 * Paste this whole file into the Apps Script project attached to the sheet
 * (Extensions → Apps Script), set the WEBHOOK_SECRET script property, and deploy
 * it as a Web app (Execute as: Me, Who has access: Anyone).
 * Full walkthrough: docs/FORM_SUBMISSIONS.md in the repo.
 *
 * The site POSTs JSON shaped like:
 *   { secret: "…", sheet: "Priority List", submittedAt: "2026-09-15T17:30:00.000Z",
 *     row: { "Type": "Priority List Application", "Parent name": "…", "Email": "…", … } }
 *
 * Each `sheet` gets its own tab (created on first use). The header row is written from the
 * row's keys the first time; after that, values are matched to columns BY HEADER NAME, so you
 * can reorder or rename-and-restore columns in the sheet without breaking anything. A key the
 * sheet has never seen is added as a new column at the end.
 */

var SECRET_PROPERTY = 'WEBHOOK_SECRET'

function doPost(e) {
  var lock = LockService.getScriptLock()
  lock.waitLock(10000) // two submissions at the same instant must not write over each other
  try {
    var body = JSON.parse((e && e.postData && e.postData.contents) || '{}')

    var expected = PropertiesService.getScriptProperties().getProperty(SECRET_PROPERTY)
    if (!expected) return json_({ ok: false, error: 'Script property ' + SECRET_PROPERTY + ' is not set' })
    if (body.secret !== expected) return json_({ ok: false, error: 'Bad secret' })
    if (!body.sheet || !body.row || typeof body.row !== 'object') {
      return json_({ ok: false, error: 'Expected { sheet, row }' })
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet()
    var sheet = ss.getSheetByName(body.sheet) || ss.insertSheet(body.sheet)

    var submitted = body.submittedAt ? new Date(body.submittedAt) : new Date()
    var row = { 'Submitted at': Utilities.formatDate(submitted, ss.getSpreadsheetTimeZone(), 'yyyy-MM-dd HH:mm:ss') }
    Object.keys(body.row).forEach(function (k) { row[k] = body.row[k] })
    var keys = Object.keys(row)

    var headers = readHeaders_(sheet)
    if (headers.length === 0) {
      headers = keys
      writeHeaders_(sheet, 1, headers)
      sheet.setFrozenRows(1)
    } else {
      var missing = keys.filter(function (k) { return headers.indexOf(k) === -1 })
      if (missing.length) {
        writeHeaders_(sheet, headers.length + 1, missing)
        headers = headers.concat(missing)
      }
    }

    var values = headers.map(function (h) { return h in row ? cell_(row[h]) : '' })
    var target = sheet.getRange(sheet.getLastRow() + 1, 1, 1, headers.length)
    // Plain-text format first so a value like "=HYPERLINK(...)" or "+1 305…" is stored as text,
    // never evaluated as a formula.
    target.setNumberFormat('@').setValues([values])

    return json_({ ok: true, sheet: sheet.getName(), row: sheet.getLastRow() })
  } catch (err) {
    return json_({ ok: false, error: String((err && err.message) || err) })
  } finally {
    lock.releaseLock()
  }
}

// Visiting the /exec URL in a browser gives a quick "is it deployed?" check.
function doGet() {
  return json_({ ok: true, message: 'ESP form webhook is live. POST JSON to this URL.' })
}

function readHeaders_(sheet) {
  var lastCol = sheet.getLastColumn()
  if (lastCol === 0) return []
  var headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0].map(function (h) { return String(h).trim() })
  while (headers.length && headers[headers.length - 1] === '') headers.pop()
  return headers
}

function writeHeaders_(sheet, startCol, names) {
  sheet.getRange(1, startCol, 1, names.length).setValues([names]).setFontWeight('bold')
}

function cell_(v) {
  if (v === null || v === undefined) return ''
  if (typeof v === 'object') return JSON.stringify(v)
  return String(v)
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON)
}
