import { NextRequest, NextResponse } from 'next/server';

const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbw9YlL6Wpttj71LezmhK0Oz7dQL00bqhQ7tYCuzfydwfUnsVsBF3e7Wzx7j6LIy5zc/exec';

const TURNSTILE_VERIFY_URL =
  'https://challenges.cloudflare.com/turnstile/v0/siteverify';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { turnstileToken, ...formFields } = body;

    // Verify Turnstile token before doing anything else
    if (!turnstileToken) {
      return NextResponse.json({ success: false, error: 'Missing verification token' }, { status: 400 });
    }

    const verification = await fetch(TURNSTILE_VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: turnstileToken,
      }),
    });

    const verificationData = await verification.json();

    if (!verificationData.success) {
      return NextResponse.json({ success: false, error: 'Verification failed' }, { status: 400 });
    }

    // Token verified — forward form data to Apps Script
    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formFields),
      redirect: 'follow',
    });

    if (!response.ok) {
      return NextResponse.json({ success: false }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
