import { NextResponse } from "next/server";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePayload(payload: ContactPayload): { valid: true; data: { name: string; email: string; message: string } } | { valid: false; message: string } {
  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";

  if (!name) {
    return { valid: false, message: "Name is required." };
  }

  if (!email) {
    return { valid: false, message: "Email is required." };
  }

  if (!isValidEmail(email)) {
    return { valid: false, message: "Email is invalid." };
  }

  if (!message) {
    return { valid: false, message: "Message is required." };
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
      return NextResponse.json({ message: validation.message }, { status: 400 });
    }

    return NextResponse.json({ message: "Message sent successfully." }, { status: 200 });
  } catch (error) {
    console.error("Send API error:", error);
    return NextResponse.json({ message: "Failed to send message." }, { status: 500 });
  }
}
