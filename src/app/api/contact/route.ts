import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, business, area, service, localSEO, phone } =
    await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `${process.env.NEXT_PUBLIC_EMAIL_USER}`,
    to: `alexch19831@gmail.com`,
    subject: "New Inquiry from a Florist - Agency Services",
    html: `
      <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333; line-height: 1.5; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px; background-color: #f9f9f9; border-radius: 12px;">
        <h2 style="color: #007BFF; text-align: center;">New Florist Inquiry</h2>
        <p>Dear Team,</p>
        <p>You have received a new inquiry from a florist interested in our services. Below are the details:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0; background-color: #ffffff;">
          <tr style="background-color: #f2f2f2;">
            <th style="text-align: left; padding: 10px; border: 1px solid #ddd;">Field</th>
            <th style="text-align: left; padding: 10px; border: 1px solid #ddd;">Details</th>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Full Name</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Email</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Business Name</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${business}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Area</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${area}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Service Interested In</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${service}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Local SEO</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${localSEO}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Phone Number</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
          </tr>
        </table>
        
        <p style="margin-top: 20px;">Please get in touch with the client at your earliest convenience.</p>
        
        <p>Best Regards,<br><strong>Your Agency Team</strong></p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email.",
      },
      {
        status: 500,
      }
    );
  }
}
