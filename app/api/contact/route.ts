import { NextResponse } from 'next/server';
import { createContactMessage } from '@/models/ContactMessage';

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  message?: unknown;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePayload(payload: ContactPayload): { valid: true; data: { name: string; email: string; message: string } } | { valid: false; error: string } {
  const name = typeof payload.name === 'string' ? payload.name.trim() : '';
  const email = typeof payload.email === 'string' ? payload.email.trim() : '';
  const message = typeof payload.message === 'string' ? payload.message.trim() : '';

  if (!name) {
    return { valid: false, error: 'Name is required.' };
  }

  if (!email) {
    return { valid: false, error: 'Email is required.' };
  }

  if (!isValidEmail(email)) {
    return { valid: false, error: 'Email is invalid.' };
  }

  if (!message) {
    return { valid: false, error: 'Message is required.' };
  }

  return {
    valid: true,
    data: { name, email, message },
  };
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const validation = validatePayload(payload);

    if (!validation.valid) {
      return NextResponse.json(
        { success: false, error: validation.error },
        { status: 400 },
      );
    }

    await createContactMessage(validation.data);

    return NextResponse.json(
      { success: true, message: 'Message submitted successfully.' },
      { status: 201 },
    );
  } catch (error) {
    console.error('Contact API error:', error);

    return NextResponse.json(
      { success: false, error: 'Failed to submit message.' },
      { status: 500 },
    );
  }
}
