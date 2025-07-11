// app/api/contact/route.ts

import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as React from 'react'; 

import  ContactFormEmail  from '@/components/email/email';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  if (!process.env.CONTACT_EMAIL_TO || !process.env.CONTACT_EMAIL_FROM) {
    console.error('Error: Variables de entorno de email no configuradas.');
    return NextResponse.json(
      { message: 'Server email configuration error' },
      { status: 500 }
    );
  }

  try {
    const { name, email, company, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM,
      to: process.env.CONTACT_EMAIL_TO,
      subject: `Nuevo mensaje de ${name} desde tu portfolio`,
      replyTo: email,
      
      react: React.createElement(ContactFormEmail, { name, email, company, message }),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error al enviar el email:', error);
    return NextResponse.json({ message: 'Error sending email', error: (error as Error).message }, { status: 500 });
  }
}