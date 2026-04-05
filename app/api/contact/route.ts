import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      replyTo: email,
      to: "vikasgurjar9638@gmail.com",
      subject: `[Portfolio Contact] ${subject}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: auto; background: #f9fafb; padding: 32px; border-radius: 12px; border: 1px solid #e5e7eb;">
          <h2 style="color: #4f46e5; margin-bottom: 8px;">New Contact Message</h2>
          <p style="color: #6b7280; font-size: 14px;">You received a message from your portfolio contact form.</p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #374151; font-weight: 600; width: 100px;">From:</td>
              <td style="padding: 8px 0; color: #374151;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #374151; font-weight: 600;">Email:</td>
              <td style="padding: 8px 0; color: #4f46e5;"><a href="mailto:${email}" style="color: #4f46e5;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #374151; font-weight: 600;">Subject:</td>
              <td style="padding: 8px 0; color: #374151;">${subject}</td>
            </tr>
          </table>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />

          <p style="color: #374151; font-weight: 600; margin-bottom: 8px;">Message:</p>
          <p style="color: #4b5563; white-space: pre-line; background: #fff; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb;">${message}</p>

          <p style="font-size: 12px; color: #9ca3af; margin-top: 24px;">Sent from your portfolio at vikasgurjar.dev</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
