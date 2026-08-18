import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server"; // Import NextResponse
import "dotenv/config"; // Ensure environment variables are loaded

const prisma = new PrismaClient();

// Create a Nodemailer transporter for email sending
const transporter = nodemailer.createTransport({
  service: "gmail", // You can use other services like SendGrid or Mailgun
  auth: {
    user: process.env.EMAIL, // Access the email address from environment variables
    pass: process.env.EMAIL_PASSWORD, // Access the email password or app password from environment variables
  },
});

export async function POST(req) {
  try {
    // Extract form data from the request
    const { name, email, phone, message } = await req.json();

    // Validate form fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Save contact data to the database
    let newContact;
    try {
      newContact = await prisma.contact.create({
        data: { name, email, phone, message },
      });
    } catch (dbError) {
      console.error("Database error:", dbError);
      return NextResponse.json(
        { error: "Failed to save contact data" },
        { status: 500 }
      );
    }

    // Send email notification
    const mailOptions = {
      from: process.env.EMAIL, // Use your email as the sender
      to: process.env.EMAIL, // Your email address as the recipient
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
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    // Return successful response
    return NextResponse.json(
      { message: "Form submitted successfully", contact: newContact },
      { status: 201 }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "Failed to submit the form" },
      { status: 500 }
    );
  }
}
