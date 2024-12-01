import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const { name, email, message } = await req.json()
  console.log(process.env.EMAIL_USER);
  // Create transporter using Gmail's SMTP service
  const transporter = nodemailer.createTransport({
    service: 'gmail',        // Gmail service (uses SMTP settings automatically)
    secure: true,            // Use SSL (recommended with port 465)
    port: 465,               // Port 465 for SSL
    auth: {
      user: process.env.EMAIL_USER,    // Your Gmail address
      pass: process.env.EMAIL_PASSWORD,  // App password (if 2FA is enabled)
    },
  })

  try {
    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,      // Sender email
      to: process.env.EMAIL_TO,          // Recipient email
      subject: `New message from ${name}`, // Subject of the email
      text: `
        Name: ${name}
        Email/Number: ${email}
        Message: ${message}
      `,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email/Number:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })

    // Return success response
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
  } catch (error) {
    // Log the error to the console and return error response
    console.error('Failed to send email:', error)
    return NextResponse.json({ error: `Failed to send email` }, { status: 500 })
  }
}
