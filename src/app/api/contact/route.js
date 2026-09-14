import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { SiteConfig } from "@/app/data";

// visitor input goes into an HTML email, so escape it
const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const failure = (message = "Something went wrong, please try again.", status = 500) =>
  NextResponse.json({ error: true, message }, { status });

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return failure("Invalid request.", 400);
  }

  const { name, email, phoneNumber, subject, message } = data || {};
  if (!name || !email || !subject || !message || !/^\S+@\S+\.\S+$/.test(email)) {
    return failure("Please fill in your name, a valid email, subject and message.", 400);
  }

  if (!process.env.EMAIL || !process.env.PASSWORD) {
    console.error("Contact form: EMAIL / PASSWORD environment variables are not set");
    // the form falls back to opening the visitor's email app
    return NextResponse.json(
      { error: true, code: "not_configured", message: "Email sending is not configured." },
      { status: 503 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: `"${SiteConfig.name} Portfolio" <${process.env.EMAIL}>`,
      to: process.env.EMAIL,
      replyTo: email,
      subject: `Portfolio inquiry: ${String(subject).slice(0, 150)}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phoneNumber || "-"}\nSubject: ${subject}\n\n${message}`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: Arial, sans-serif; }
    .email-container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fff; border: 2px solid #48AEDD; border-radius: 10px; }
    .title { font-size: 20px; line-height: 1.5; margin-bottom: 10px; border-radius: 50px 20px; background-color: #48AEDD; color: white; padding: 5px; text-align: center; font-weight: 900; }
    ul { list-style-type: none; padding: 0; }
    li { margin-bottom: 8px; }
  </style>
</head>
<body>
  <div class="email-container">
    <p class="title">New inquiry from your portfolio</p>
    <ul>
      <li><strong>Name:</strong> ${escapeHtml(name)}</li>
      <li><strong>Email:</strong> ${escapeHtml(email)}</li>
      <li><strong>Phone:</strong> ${escapeHtml(phoneNumber || "-")}</li>
      <li><strong>Subject:</strong> ${escapeHtml(subject)}</li>
      <li><strong>Message:</strong><br>${escapeHtml(message).replace(/\n/g, "<br>")}</li>
    </ul>
  </div>
</body>
</html>`,
    });

    if (info.messageId) {
      return NextResponse.json({
        error: false,
        message: `Message sent! Thank you for contacting ${SiteConfig.shortName} — I'll get back to you soon.`,
      });
    }
    return failure();
  } catch (e) {
    console.error(e);
    return failure();
  }
}
