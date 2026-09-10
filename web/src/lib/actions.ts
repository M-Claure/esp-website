'use server'

import { z } from 'zod'
import { headers } from 'next/headers'
import { rateLimit } from './rate-limit'

const ApplySchema = z.object({
  parentName: z.string().min(1, 'Parent name is required').max(200),
  email: z.string().email('Valid email required'),
  mobile: z.string().min(1, 'Mobile is required').max(30),
  playerAge: z.string().min(1, 'Player age is required').max(10),
  gender: z.string().min(1, 'Gender is required').max(30),
  homeCity: z.string().min(1, 'Home city is required').max(100),
  currentClub: z.string().min(1, 'Current club is required').max(100),
  travelPeriod: z.string().min(1, 'Travel period is required').max(100),
  interest: z.enum(['Player-only', 'Family interested', 'Team']),
  _honey: z.string().max(0, 'Bot detected'),
})

const PartnerSchema = z.object({
  clubName: z.string().min(1, 'Club name is required').max(200),
  contactName: z.string().min(1, 'Contact name is required').max(200),
  email: z.string().email('Valid email required'),
  role: z.string().min(1, 'Role is required').max(100),
  message: z.string().max(2000).optional(),
  _honey: z.string().max(0, 'Bot detected'),
})

export type FormState = {
  success: boolean
  message: string
  errors?: Record<string, string[]>
}

async function getClientIP(): Promise<string> {
  const h = await headers()
  return h.get('x-forwarded-for')?.split(',')[0]?.trim() ?? h.get('x-real-ip') ?? 'unknown'
}

async function submitToBackend(type: string, data: Record<string, unknown>) {
  const resendKey = process.env.RESEND_API_KEY
  const sheetWebhook = process.env.GOOGLE_SHEET_WEBHOOK_URL

  if (resendKey) {
    const to = process.env.FORM_RECIPIENT_EMAIL ?? 'hello@eurosoccerpassport.com'
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'ESP Forms <forms@eurosoccerpassport.com>',
        to,
        subject: `[ESP] New ${type} submission`,
        text: Object.entries(data).map(([k, v]) => `${k}: ${v}`).join('\n'),
      }),
    })
    return
  }

  if (sheetWebhook) {
    await fetch(sheetWebhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, ...data, submittedAt: new Date().toISOString() }),
    })
    return
  }

  console.log(`[ESP Form: ${type}]`, JSON.stringify({ ...data, submittedAt: new Date().toISOString() }, null, 2))
}

export async function submitApply(_prev: FormState, formData: FormData): Promise<FormState> {
  const ip = await getClientIP()
  if (!rateLimit(ip + ':apply').ok) {
    return { success: false, message: 'Too many submissions. Please try again in a minute.' }
  }

  const raw = {
    parentName: formData.get('parentName'),
    email: formData.get('email'),
    mobile: formData.get('mobile'),
    playerAge: formData.get('playerAge'),
    gender: formData.get('gender'),
    homeCity: formData.get('homeCity'),
    currentClub: formData.get('currentClub'),
    travelPeriod: formData.get('travelPeriod'),
    interest: formData.get('interest'),
    _honey: formData.get('_honey') ?? '',
  }

  const result = ApplySchema.safeParse(raw)
  if (!result.success) {
    return { success: false, message: 'Please fix the errors below.', errors: result.error.flatten().fieldErrors as Record<string, string[]> }
  }

  const { _honey, ...data } = result.data
  await submitToBackend('Priority List Application', data)
  return { success: true, message: "You're on the list! We'll be in touch with next steps." }
}

export async function submitPartnerInquiry(_prev: FormState, formData: FormData): Promise<FormState> {
  const ip = await getClientIP()
  if (!rateLimit(ip + ':partner').ok) {
    return { success: false, message: 'Too many submissions. Please try again in a minute.' }
  }

  const raw = {
    clubName: formData.get('clubName'),
    contactName: formData.get('contactName'),
    email: formData.get('email'),
    role: formData.get('role'),
    message: formData.get('message') ?? '',
    _honey: formData.get('_honey') ?? '',
  }

  const result = PartnerSchema.safeParse(raw)
  if (!result.success) {
    return { success: false, message: 'Please fix the errors below.', errors: result.error.flatten().fieldErrors as Record<string, string[]> }
  }

  const { _honey, ...data } = result.data
  await submitToBackend('Partner Inquiry', data)
  return { success: true, message: "Thanks! We'll be in touch about partnership opportunities." }
}
