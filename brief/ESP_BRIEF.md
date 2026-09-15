# EURO SOCCER PASSPORT (ESP) — WEBSITE CONTENT BRIEF

Source: "Euro Soccer Passport — Website Brief V4" deck (Website Blueprint V2 + Design Mockup V3.0, Sept 2026).
This file is the single source of truth for copy, hierarchy and art direction. The agent building the site in Pencil should read this file before creating any frame.

Rule from the deck: **use the copy and hierarchy in the deck directly; use the mockups as art direction, not literal screenshots.** Where mockup copy and deck copy differ, this file marks the deck version as PRIMARY and the mockup version as ALT.

**Update — deck review comments (Roque Monsalve, Sept 7, 2026), these supersede the deck copy:**
- Ages are now **8–18**. Players **8–12 travel with a parent or guardian**; players **13–18 have all access** (player-only, player + family, full team).
- ESP must read as clearly open to **individual players** (no team needed — they join ESP groups matched by age and level) **as well as full teams**.

---

## 1. POSITIONING

**Core message (use everywhere):** TRAIN WITH THE CLUBS. LIVE THE CULTURE. EXPERIENCE EUROPEAN FOOTBALL.

**Cover lines:** Professional clubs at the center. City & culture as part of the experience. Family travel optional from age 13 — required for ages 8–12.

**Thesis:** We are not selling a Spain tour. We are selling access to professional European football — with the club, the place and the culture forming one unforgettable experience.

**Design principle:** Every page should feel like BOTH a serious soccer-development experience and an unforgettable week in Europe. The club earns credibility; the city and culture create desire; ESP makes it accessible and manageable for the family.

**Product hierarchy (this order drives every page):** The website should sell access to European football — without losing the magic of place.
1. THE CLUB — the reason to go. Professional coaches, methodology, facilities and football identity.
2. THE EXPERIENCE — what the player does. Train, compete, learn, live and travel with the group.
3. CITY & CULTURE — what makes each week unique. Food, language, history, beaches, mountains and local football culture.
4. OPTIONAL FAMILY — a second product, not a requirement from age 13. Families can join — or players 13–18 can travel independently. Players 8–12 travel with a parent or guardian.

**Core promise:** Train with professional clubs. Live the culture. Experience European football.

**Program facts:** Spain 2027 · Boys & Girls · Ages 8–18 · Week-long experiences · Individual players or full teams · Player-only (ages 13–18), player + family (required for ages 8–12), or full-team travel.

**Secondary taglines (script/handwritten style in mockups):**
- "More than a trip. A different future."
- "Different clubs. One unforgettable country."
- "Football opens doors. Travel makes them bigger." — ESP

## 2. AUDIENCES

- **PLAYERS** — Boys and girls ages 8–18 who love soccer and want to experience the game differently. Individual players join on their own — no team needed — and are placed in ESP groups with players from across the U.S. Not only future professionals. Programs should be matched to age and competitive level.
- **PARENTS** — Parents who want a credible, supervised international experience — whether they travel or not. The key question is not "can our whole family afford Europe?" but "can I send my child?"
- **U.S. CLUBS & TEAMS** — Clubs that want to offer international access, player development and a memorable family benefit without building European operations.

**Imagery rule:** Show girls deliberately throughout the site (roughly 20–30% of player imagery) so the product visibly reads as for boys and girls. Show boys + girls, teams + individual travelers, players + optional companions.

## 3. BRAND / DESIGN TOKENS

Colors (from deck theme + mockups):
- `navy` #08243A — primary. Dark sections, headings, nav text, footer. (Mockups use a slightly deeper navy ~#0B1F3F for hero overlays; either is fine, pick one and use it everywhere.)
- `gold` #DCB846 — accent. Primary buttons, eyebrow labels, city names, icons, script taglines.
- `ink` #08243A — heading text on light backgrounds.
- `slate` #525E68 — body text on light backgrounds.
- `cream` #F7F5EF — light page background.
- `mist` #E2E7EA — card borders, dividers, subtle panels.
- `stone` #C6CFD3 — image placeholders.
- `white` #FFFFFF — cards, light text on navy.

Typography (mockup art direction):
- Display / headlines: high-contrast serif, ALL CAPS, tight leading (e.g., Playfair Display 700 or Cormorant Garamond 700). Hero H1 ~64–72px desktop.
- Body / UI: humanist sans (e.g., Inter or Source Sans 3), 16–18px body, 14px captions.
- Accent script: handwritten script in gold for taglines (e.g., Caveat or Dancing Script).
- Eyebrow labels: 12–13px, letter-spaced caps, gold.

Motifs:
- Passport stamps / faint stamp textures on navy CTA panels.
- Navy circle crest with gold ring for the mock club marks (text "ESP" or club initials). NEVER use real club crests in the prototype.
- Thin gold rule as divider on dark panels (the deck uses a gold left-edge bar on cards; on the website prefer subtle shadow + border instead).
- Cards: white, radius 16–20px, soft shadow, 1px mist border.
- Buttons: primary = gold fill, navy text, caps, arrow "→"; secondary = white outline on dark / navy outline on light.

Logo: soccer-ball mark + "ESP" wordmark, "EURO SOCCER PASSPORT" in small letter-spaced caps beneath.

Name usage (confirmed Sept 2026 — matches the deck, the logo and the eurosoccerpassport.com domain):
- Full name: **Euro Soccer Passport**. Never "European Soccer Passport".
- Short form: **ESP**. First mention in running text: "Euro Soccer Passport (ESP)"; after that, "ESP" (e.g. "ESP staff", "ESP partner club").
- ALL CAPS "EURO SOCCER PASSPORT" only in the logo lockup and deck headers/footers.
- Website page titles: "Page | Euro Soccer Passport"; the home page is just "Euro Soccer Passport".

## 4. SITEMAP + NAVIGATION

Top nav (mockup): [ESP logo] · Experiences · Clubs · Families · For Teams · About · [Apply Now] (gold button)

Pages:
1. `/` Home
2. `/experiences` Experiences index (all 7 club × city cards)
3. `/experiences/real-sociedad` … one page per club (7 total) — build Real Sociedad deeply first, then clone
4. `/families` For Families
5. `/teams` For U.S. Clubs & Teams
6. `/about` About (Mission / Vision) + final CTA
7. `/faq` FAQ (parent reassurance)
8. `/apply` Priority list form (B2C) — plus a separate B2B form for clubs/coaches on `/teams`

Conversion paths (revised Sept 2026 — one clear way in per audience; labels live in web/src/data/conversion.ts):
- Individual player / family → I'M A PLAYER / FAMILY → /apply (priority list)
- Full team → BRING YOUR TEAM → /teams → form set to "A team trip"
- U.S. club / coach → PARTNER WITH ESP → /teams → form set to "A club partnership"
- Everyone → EXPLORE EXPERIENCES → /experiences

Footer: logo + tagline, nav links, contact, "Spain 2027 · Boys & Girls · Ages 8–18", legal line (see guardrails).

Recommended build order (from deck): Home → one club page → Families → Teams/Clubs → remaining club pages → FAQ + conversion flow.

## 5. HOME PAGE — SECTION BY SECTION

### 5.1 Hero (full-bleed image/video, dark overlay, text left)
Image: boy + girl players in navy ESP kits at a professional Spanish club, Spanish city/coast behind them.
- H1 (3 lines): TRAIN WITH THE CLUBS. / LIVE THE CULTURE. / EXPERIENCE EUROPEAN FOOTBALL.
- Sub: Week-long soccer experiences for boys and girls ages 8–18 with professional clubs in Spain — on your own or with your team.
- Support line: Train with club coaches. Experience their methodology and facilities. Compete against local players. Discover the city and culture surrounding the club.
- Eyebrow above the H1 (updated): SPAIN 2027 · BOYS & GIRLS · AGES 8–18
- CTAs (revised — one per audience): EXPLORE EXPERIENCES → /experiences (primary) · I'M A PLAYER / FAMILY → /apply · BRING YOUR TEAM → /teams

### 5.2 Trust strip (5 icon items, directly under hero — player-only travel must be visible before the FAQ)
- Professional club partners
- Boys & girls ages 8–18
- Individual players or full teams
- Player-only travel from age 13
- Bilingual staff (no Spanish required)

### 5.3 Partner clubs ("lead with the clubs")
- H2: TRAIN WITH SPAIN'S PROFESSIONAL CLUBS
- Intro: Every experience combines the identity of the club with the city and culture around it. (ALT mockup: Get inside the game with some of Spain's most respected clubs. Train with their coaches, experience their methodology, compete against local players and discover the culture of incredible cities.)
- Flow line (gold): Club → methodology → facilities → coaches → competition → city → culture
- Grid of 7 clubs (4 + 3), each: mock crest + club name + city:
  1. Real Sociedad — San Sebastián
  2. Girona FC — Girona / Barcelona
  3. Real Oviedo — Oviedo
  4. Sporting de Gijón — Gijón
  5. Racing Santander — Santander
  6. Deportivo — A Coruña
  7. Levante UD — Valencia
- CTA: EXPLORE ALL CLUB EXPERIENCES →
- Script tagline: Different clubs. One unforgettable country.
- Note on the page (internal only, not public): "For mockup purposes, design as if these are active partner experiences. Replace mock crests with official marks only when permitted."

### 5.4 Club × city experience cards (3 featured)
"The destination still matters — but it should be inseparable from the club."
Card = training + city image, club name, city (gold), 2 lines, CTA "EXPLORE THE EXPERIENCE →".
1. REAL SOCIEDAD — SAN SEBASTIÁN — Train in one of Spain's strongest development cultures. Then experience La Concha, the Old Town, pintxos and the Basque Country.
2. GIRONA FC — GIRONA + BARCELONA — Modern professional football in Catalonia. Medieval Girona, Mediterranean life and optional Barcelona experiences.
3. RACING SANTANDER — SANTANDER — Historic football on Spain's north coast. Beaches, mountains and Cantabrian culture around the soccer program.

### 5.5 How it works (5 numbered steps, icons)
- H2: A SIMPLE PROCESS. AN EXTRAORDINARY EXPERIENCE.
1. Choose your club and dates — Explore our club experiences and find the right fit.
2. Apply and secure your spot — Complete a short application. Reserve your spot with a deposit.
3. We handle the logistics — We coordinate accommodation, training, local transportation and activities.
4. Live the experience — Train, compete, explore and immerse yourself in the club and the city.
5. Return home with more — New skills, new perspectives and memories that last a lifetime.

### 5.5b Who it's for (added after the deck review — individuals and teams)
- Eyebrow: WHO IT'S FOR · H2: ON YOUR OWN. / OR WITH YOUR TEAM. · Sub: ESP is open to individual players and full teams — boys and girls ages 8–18.
- PLAYERS & FAMILIES — No team needed. Each player joins an ESP group matched by age and level. Ages 8–12 travel with a parent or guardian; ages 13–18 can also travel on their own. → I'M A PLAYER / FAMILY (/apply)
- FULL TEAMS — Players and coaches travel together. ESP builds the European side: club access, matches, lodging and logistics. → BRING YOUR TEAM (/teams#team-trip)
- U.S. CLUBS & COACHES — Offer your players international access, player development and a memorable family benefit — without building European operations. → PARTNER WITH ESP (/teams#club-partnership)

### 5.6 Quote band (image: player looking over a Spanish city at sunset)
"Football opens doors. Travel makes them bigger." — ESP

### 5.7 Travel your way (3 columns with photo + checklist)
- H2: COME WITH YOUR TEAM. YOUR FAMILY. OR JUST YOUR BAG.
- Sub: Join on your own or bring your whole team. The soccer experience is the core product.
- Note under the columns: Ages 8–12 travel with a parent or guardian. Ages 13–18 can also travel on their own.
- PLAYER ONLY (Ages 13–18): No team needed — join an ESP group. · Fly to the designated local airport. · ESP staff meet the player at the airport and provide supervised transportation to the program. · Lodging, meals, local transportation, soccer and cultural programming are managed throughout the week. · Return transfer to the designated airport at departure.
  (Short checklist version: Fly to designated airport · ESP airport pickup · Supervised program · Lodging, meals & transportation · Airport drop-off)
- PLAYER + FAMILY (All ages · required for 8–12): No team needed — join an ESP group. · The player participates in the full soccer program. · Parents / companions choose a package with hotel, selected transportation, cultural experiences and opportunities to watch the player. · Optional for ages 13–18; required for ages 8–12.
  (Short: Player joins the program · Family enjoys companion experience · Separate hotels & activities)
- FULL TEAM (All ages): Players and coaches travel as a group. · ESP coordinates the European side of the experience. · Parents join individually through companion packages (required for ages 8–12).
  (Short: We handle all logistics · Players and coaches travel together · Families can join (required for ages 8–12) · Custom itineraries for your club)

### 5.8 Language & cultural immersion (dark navy section, image right)
- H2: NO SPANISH? / NO PROBLEM.
- Gold line: Our programs are designed for players coming from the United States.
- Body: Bilingual ESP staff and/or translators are available throughout the experience to help players communicate with coaches, teammates and local staff.
- Bold close: And being immersed in a different language and culture is part of what makes the week special.
- 3 icons: Bilingual staff · Translation support · Help with daily life
- Image: bilingual ESP staff member translating a Spanish coach's instruction to U.S. boy + girl players.

### 5.9 Optional companion experience (families teaser; split image: player training / parents exploring city)
- H2 (PRIMARY): THEIR SOCCER EXPERIENCE. / YOUR EUROPEAN ADVENTURE. (ALT mockup: TURN A SOCCER EXPERIENCE INTO A FAMILY ADVENTURE.)
- Body: Families who want to join can turn the week into a shared trip — without changing the player's core program.
- Eyebrow: COMPANION PACKAGE — Hotel accommodation · Selected local transportation · Cultural / leisure programming · Selected meals · Opportunities to watch training / matches when available · Free time to explore independently
- Positioning line: Companion travel is optional for ages 13–18 and required for ages 8–12.
- CTA: LEARN MORE ABOUT FAMILY TRAVEL →

### 5.10 The week (8 day cards) — can live on Home or on each club page
- H2: THE WEEK — SOCCER FIRST, CULTURE WOVEN IN
- SUN | ARRIVE — Airport pickup • check-in • orientation • team dinner
- MON | TRAIN — Club session • city orientation
- TUE | TRAIN + CULTURE — Technical/tactical session • cultural activity
- WED | MATCH DAY — Training • local opposition
- THU | LIVE THE CLUB — Club session • tactical/video • club experience
- FRI | COMPETE — Match / tournament • closing experience
- SAT | DISCOVER — Cultural / leisure day • optional family time
- SUN | DEPART — Airport transfer • head home

### 5.11 Parent reassurance / FAQ (accordion)
- H2: PARENTS, WE'VE GOT THIS. (sub: Answer the major objections before the parent has to search for them.)
1. Can my child travel without us? — Yes, for players ages 13–18 — we meet them at the designated local airport and supervise the program through departure. Players ages 8–12 travel with a parent or guardian.
1b. Does my child need a team to join? — No. Individual players join ESP groups matched by age and level, with players from across the U.S. Clubs and teams can also book the experience together.
2. Does my child need to speak Spanish? — No. Bilingual ESP staff and/or translators help players communicate with coaches, teammates and local staff throughout the experience.
3. Is this only for elite players? — No. Players should love the game and be ready for the experience. Groups and competition are matched appropriately.
4. Is this for girls too? — Absolutely. ESP experiences are for boys and girls ages 8–18, with appropriate programming and competition.
5. Can we come too? — Yes. For players 13–18 it's optional — companion packages let families experience the destination around the player's soccer schedule. Players 8–12 travel with a parent or guardian.
6. What about safety and supervision? — [TO FINALIZE: safeguarding, medical, insurance and emergency protocols once finalized.]
7. What's included? — [TO FINALIZE per club: lodging, meals, local transport, training, matches, cultural program.]
8. What if there's an emergency? — [TO FINALIZE: emergency protocols.]

### 5.12 Final CTA (navy panel, passport imagery, stamp texture)
- H2: YOUR FIRST STAMP STARTS HERE.
- Sub: Join the 2027 priority list.
- Form fields: Parent name · Email · Mobile · Player age · Gender · Home city · Current club · Travel period · Interested in: Player-only / Family interested / Team (player age is an 8–18 dropdown; Player-only is unavailable for ages 8–12)
- Buttons (revised): I'M A PLAYER / FAMILY → /apply (primary) + BRING YOUR TEAM → /teams. The same pair closes every page; club pages use APPLY FOR [CLUB] as the player button. GET MY PASSPORT remains the priority-list form's submit button.
- Script: More than a trip. A different future.
- Note: separate B2B form for clubs / coaches (on /teams).

## 6. CLUB EXPERIENCE PAGE — TEMPLATE (build Real Sociedad first, then clone)

Page title pattern: "[CLUB] EXPERIENCE — [CITY]" (e.g., REAL SOCIEDAD EXPERIENCE — SAN SEBASTIÁN)

Sections in order (deck slide 7 + mockup):
1. **Hero** — full-bleed image (club training environment + city). Mock crest top-left. H1: "[CLUB] EXPERIENCE". Tagline. Location pin: "[City] | [Region]".
2. **Sticky sub-nav** — Overview · Training · Facilities · Competition · The City · Dates & Pricing — plus gold button "Apply for [Club] →".
3. **5 pillars (icons)** — Train with official club coaches · World-class facilities · Compete against local teams · Experience matchday culture · Discover [City].
4. **THE CLUB** — Why this club; football identity; academy methodology; facilities; coaches.
5. **3-image row** — TRAIN / FACILITIES / THE CITY with one-line captions.
6. **THE WEEK** — Training sessions, local matches, tactical/video work, club immersion, meals and activities (use the 8 day cards).
7. **THE PLACE** — City highlights, local culture, food, history, beach/mountains and football culture.
8. **Quote band** — club motto over city image.
9. **TRAVEL OPTIONS** — Player-only, player + family, or full-team travel (3 mini cards).
10. **DATES & DETAILS** — Age bands, group size, available weeks, pricing and what is included. (Values TBD — use placeholders like "Week of June 13, 2027" / "From $X,XXX".)
11. **CTA** — Apply for [Club] → / Join the 2027 priority list.

### 6.1 Club data (7 entries)

| Club | City | Region | Tagline (hero) | Football anchor | Pillars row (3) | TRAIN caption | FACILITIES caption | THE CITY caption | Quote band | Deck build direction |
|---|---|---|---|---|---|---|---|---|---|---|
| Real Sociedad | San Sebastián | Basque Country | Elite football. Unique culture. Unforgettable city. (ALT: Elite development. A unique culture.) | Zubieta (training center) + development culture | San Sebastián · Zubieta Training Center · Basque football culture | Learn the Real Sociedad methodology, known for developing top talent. | State-of-the-art Zubieta Training Center. | Beaches. Food. Culture. One of Europe's most beautiful cities. | "Discipline. Talent. Humility. A club with values on and off the field." — Real Sociedad | Lead with Zubieta and the club's development culture. Pair the football story with San Sebastián / Basque culture. Player-only travel and optional companions remain visible. |
| Girona FC | Girona | Catalonia (Barcelona optional) | Ambition. Innovation. A global club. | Modern academy methodology, global-club feel | Girona · First-team methodology · Barcelona (optional) | Develop your game with Girona's modern, attacking style. | World-class training facilities. | Medieval charm. Vibrant culture. Close to Barcelona. | "Dream. Compete. Belong. A club on the rise." — Girona FC (ALT: "A small city. A big football story.") | Position around modern academy methodology and a global-club feel. Keep Girona as the primary destination, with Barcelona as a possible cultural extension rather than the headline. |
| Real Oviedo | Oviedo | Asturias | Tradition. Passion. A bright future. | El Requexón (training center) + club identity | Oviedo · El Requexón Training Center · Asturias & nature | Learn from Oviedo's experienced coaching staff. | El Requexón Training Center. | Mountains. Nature. Authentic Spain. | "Historia, pasión y futuro. Más que un club." — Real Oviedo | Use El Requexón and the club identity as the football anchor. Asturias gives the page a distinctive mountains, food and northern-Spain cultural story. |
| Real Sporting de Gijón | Gijón | Asturias | Passion. People. A proud football tradition. | Mareo (sports city) — live and train inside the club environment | Gijón · Mareo Sports City · Coast & culture | Develop your game in a competitive environment. | Mareo Training Center. | Beaches. Sidra. A true football city. | "Sentimiento rojiblanco. Una forma de vivir el fútbol." — Real Sporting de Gijón (ALT: "History inspires. Football unites.") | Mareo should be central to the proposition. This is one of the strongest 'live and train inside the club environment' stories, complemented by Gijón and the Asturian coast. |
| Racing de Santander | Santander | Cantabria | Character. Community. Cantabrian spirit. | Nando Yosu sports city (La Albericia) + Racing's history | Santander · Nando Yosu Sports City · Beaches & nature | Improve your game with Racing's player development approach. | La Albericia Training Center. | Coastal beauty. Nature. Great food. | "Orgullo. Tradición. Futuro." — Racing de Santander (ALT: "Football and the sea. A perfect match.") | Build around Nando Yosu, Racing's history and the Cantabrian setting. Visually balance training-ground access with beaches, coast and northern-Spain culture. |
| Deportivo de La Coruña | A Coruña | Galicia | History. Resilience. A great football city. | Abegondo (training center) / Método Dépor | A Coruña · Abegondo Training Center · Culture & coastline | Learn from Depor's experienced coaching staff. | Abegondo Training Center. | Atlantic coast. History. Incredible food. | "Unha cidade, un sentimento." — Deportivo de La Coruña (ALT: "A city that never stops supporting.") | Anchor the football story in Abegondo / Método Dépor. The city, Atlantic coast and Galician identity should make the destination feel clearly different from the other northern clubs. |
| Levante UD | Valencia | Comunidad Valenciana | Courage. Talent. Mediterranean spirit. | International-training orientation and methodology; Ciutat de València / Ciudad Deportiva de Buñol | Valencia · Ciutat de València · City & beaches | Develop your game in a professional environment. | Ciudad Deportiva de Buñol. | Beaches. Culture. Mediterranean life. | "Coratge, orgull i futur." — Levante UD (ALT: "Different. Bold. Always forward.") | Lead with Levante's international-training orientation and methodology. Valencia provides a powerful Mediterranean culture, beach and city counterpoint to the football program. |

Image notes per club (from mockups; recreate with licensed photos at web ratios):
- Real Sociedad: blue/white striped kit players at training; La Concha bay + Old Town.
- Girona: red/white striped kit; medieval old town + river houses.
- Oviedo: blue kit; cathedral + green mountains.
- Sporting: red/white stripes; Gijón beach/San Lorenzo + coast.
- Racing: green/white stripes; Santander bay + Sardinero beach.
- Deportivo: blue/white stripes (girl player in hero); Tower of Hercules + Atlantic coast.
- Levante: claret/blue; City of Arts and Sciences + Mediterranean beach.

## 7. FOR FAMILIES PAGE

"This page should convert trust, not sell a luxury family vacation."

1. Hero — image of parents + player looking over a Spanish city. H1 (PRIMARY): THEIR SOCCER EXPERIENCE. YOUR EUROPEAN ADVENTURE. (ALT: TURN A SOCCER EXPERIENCE INTO A FAMILY ADVENTURE.) Body: While your child trains, you can explore incredible cities, enjoy local culture, and create unforgettable memories together. Companion packages include accommodation options, cultural activities and day trips.
2. **WHAT PARENTS NEED TO KNOW** — 9 cards (3×3):
   - Supervision — Who is with the players and how the week is managed.
   - Airport arrival — Designated local airport pickup and departure transfer for player-only travelers (ages 13–18).
   - Language — Bilingual ESP staff and/or translators; Spanish is not required.
   - Accommodation — Player lodging model by club / destination.
   - Meals & transport — What is included during the program.
   - Competitive fit — How players are grouped and local competition is matched.
   - Girls' participation — Girls are fully included; programming/opposition matched appropriately.
   - Companions — Optional family packages; families can also travel independently.
   - Safety — Safeguarding, medical, insurance and emergency protocols once finalized.
3. Player-only travel block (repeat the 4 steps from 5.7).
4. Optional companion package (list from 5.9) + "Companion travel is optional for ages 13–18 and required for ages 8–12."
5. Travel your way (3 columns).
6. FAQ accordion (5.11).
7. CTA: Join the 2027 priority list → GET MY PASSPORT.

## 8. FOR U.S. CLUBS & TEAMS PAGE (dark navy hero)

- H1: GIVE YOUR PLAYERS / A PASSPORT TO EUROPE.
- Gold line: You bring the players. We build the European experience.
- What ESP handles: Professional club access • program design • training • matches • lodging • local transport • cultural experiences • family travel packages • bilingual support • on-the-ground operations
- WHY CLUBS PARTNER (6 items with icons): Differentiation · Player retention · Coach development · International exposure · Family engagement · No need to build European operations
- FULL TEAM travel block: Players and coaches travel as a group. ESP coordinates the European side of the experience. Parents join individually through companion packages (required for ages 8–12).
- Hero CTAs (revised): BRING YOUR TEAM → #team-trip · PARTNER WITH ESP → #club-partnership. The form starts with "I'm interested in: A team trip / A club partnership" (preselected by the link used); submit reads SEND TEAM TRIP INQUIRY or BECOME AN ESP PARTNER CLUB. Link below the form for individuals: Join the priority list → /apply.
- CTA: BECOME AN ESP PARTNER CLUB → separate B2B form: Club name · Contact name · Role · Email · Mobile · City/State · Age groups · Approx. number of players · Preferred travel period · Message.

## 9. ABOUT PAGE

- MISSION: Give young American players access to the training, culture and environments of professional European football.
- VISION: Become the trusted gateway between American youth soccer and Europe's professional clubs.
- Then the final CTA panel (5.12).

## 10. IMAGERY DIRECTION (placeholders in prototype; licensed photos before launch)

- Home hero: boy + girl players training at a professional Spanish club (city/coast backdrop).
- Language section: bilingual ESP staff member translating a Spanish coach's instruction to U.S. boy + girl players.
- Companion section: split image — player training / parents exploring city.
- Club × city cards: training + city image per club.
- Club page hero: club training environment + city.
- Final CTA: navy passport with ESP emblem, boarding passes, stamp textures.
- Girls in ~20–30% of player imagery.

## 11. DECK BUILD INSTRUCTIONS (verbatim, slide 16)

01 Build the homepage first — Use club-led hierarchy, but preserve city/culture throughout.
02 Assume partner clubs for mockup — Real Sociedad, Girona, Oviedo, Sporting, Racing, Deportivo and Levante can be treated as experiences in the prototype.
03 Do not imply formal endorsement publicly yet — Mock site can use placeholder/mock crests internally; official logos and claims require permission before launch.
04 Build one club page deeply — Start with Real Sociedad or Girona, then clone the structure.
05 Make player-only travel obvious — Airport pickup + supervised program should be visible before the FAQ.
06 Use inclusive imagery — Boys + girls, teams + individual travelers, players + optional companions.
07 Language reassurance — No Spanish required; bilingual staff / translators should appear in core trust messaging.

Design handoff note (slide 17): Use the mockups as art direction, not as literal final screenshots. Rebuild the layouts responsively on the website and replace/approve club marks and factual claims before public launch. Recommended build order: 1. Home 2. One club page 3. Families 4. Teams / Clubs 5. Remaining club pages 6. FAQ + conversion flow.

Final notes (slide 26) — What to use directly: the copy and hierarchy in this deck; the page structures; the travel / language / family messaging; the visual compositions as design references; the club + city storytelling framework. What to recreate / validate: recreate generated images at web-ready aspect ratios; use properly licensed photography; confirm official club-logo usage; validate club-specific inclusions before launch; do not imply a signed partnership until one exists.

## 12. GUARDRAILS (non-negotiable before anything is public)

1. Do NOT use official club crests/logos in the prototype — use the ESP mock crest (navy circle, gold ring, "ESP" or initials). Official marks only with permission.
2. Do NOT imply a signed partnership or formal endorsement until one exists. Public copy should say "experiences with" / "training environments of" — never "official partner" — until agreements exist. Consider a footer disclaimer for the public prototype.
3. Recreate generated images at web-ready aspect ratios; use properly licensed photography.
4. Validate club-specific inclusions (facilities, coaches, matches) before launch.
5. Make player-only travel obvious (ages 13–18): airport pickup + supervised program visible before the FAQ. Make it equally clear that individual players can join without a team.
6. Language reassurance (no Spanish required; bilingual staff/translators) appears in core trust messaging on Home, Families and every club page.
7. Inclusive imagery: boys + girls, teams + individuals, players + optional companions.
