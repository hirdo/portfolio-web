import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    // Validate form fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const hasEmailConfig = process.env.EMAIL && process.env.EMAIL_PASSWORD;

    if (hasEmailConfig) {
      // Send email notification
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: "New Contact Form Submission",
        text: `You have a new contact form submission:
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}`,
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
      } catch (emailError) {
        console.error("Error sending email:", emailError);
        return NextResponse.json(
          { error: "Failed to send email. Please try again later." },
          { status: 500 },
        );
      }
    } else {
      // Log the submission instead of saving to DB or sending email
      console.log("Contact form submission (no email config):", {
        name,
        email,
        phone,
        message,
      });
    }

    return NextResponse.json({ message: "Form submitted successfully" }, { status: 201 });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json({ error: "Failed to submit the form" }, { status: 500 });
  }
}
