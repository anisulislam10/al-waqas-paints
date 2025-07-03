import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { fullName, phone, enquiryType, brandName, message } = await request.json();

    if (!fullName || !enquiryType || !brandName) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const submittedDate = new Date().toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });

    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: 'support@sharplogician.com', 
        pass: 'qhuaporqopxnznvk', 
      },
    });

    // Email options
    const mailOptions = {
      from: `"Al Waqas Paint Quote Form" <${'support@sharplogician.com'}>`,
      to: 'adeel@sharplogician.com', 
      subject: `Al Waqas Paint New Quote Request from ${fullName}`,
      text: `
        Full Name: ${fullName}
        Phone: ${phone}
        Enquiry Type: ${enquiryType}
        Brand Name: ${brandName}
        Message: ${message}
        Submitted On: ${submittedDate}
      `,
      html: `
        <h3>Al Waqas Paint New Quote Request from</h3>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Enquiry Type:</strong> ${enquiryType}</p>
        <p><strong>Brand Name:</strong> ${brandName}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Submitted On:</strong> ${submittedDate}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}