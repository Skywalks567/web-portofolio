import { sendEmail } from '@/lib/email/email';
import { generateContactEmailHtml } from '@/lib/email/templates/contact';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 },
      );
    }

    const emailHtml = generateContactEmailHtml(name, email, message);

    const result = await sendEmail({
      to: process.env.MY_CONTACT_EMAIL || (process.env.SMTP_USER as string),
      subject: `[PORTOFOLIO_CONTACT] Transmission from ${name}`,
      html: emailHtml,
    });

    if (result.success) {
      return NextResponse.json(
        { message: 'Transmission successful' },
        { status: 200 },
      );
    } else {
      return NextResponse.json(
        { error: result.error || 'Failed to transmit message' },
        { status: 500 },
      );
    }
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal system error' },
      { status: 500 },
    );
  }
}
