import nodemailer from 'nodemailer';

// Create reusable transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify transporter configuration
export const verifyEmailConfig = async () => {
  try {
    await transporter.verify();
    console.log('Email server is ready to send messages');
    return true;
  } catch (error) {
    console.error('Email configuration error:', error);
    return false;
  }
};

interface Attachment {
  filename: string;
  content: Buffer;
  contentType?: string;
}

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
  attachments?: Attachment[];
}

export const sendEmail = async ({
  to,
  subject,
  html,
  text,
  attachments,
}: EmailOptions) => {
  try {
    const info = await transporter.sendMail({
      from: `BlessFourchette <${process.env.SMTP_FROM}>`,
      to,
      subject,
      text: text || "",
      html,
      attachments: attachments || [],
    });

    console.log("Email sent:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
};

interface ConsultationBookingData {
  eventType: string;
  selectedDate: string;
  selectedTime: string;
  numberOfPeople: string;
  theme: string;
  name: string;
  email: string;
  phone: string;
  notes?: string;
}

export const sendConsultationBookingEmail = async (booking: ConsultationBookingData) => {
  const businessEmail = process.env.BUSINESS_EMAIL || 'info@blessfourchette.com';
  const formattedDate = new Date(booking.selectedDate).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Email to business owner
  const businessSubject = `New Consultation Booking Request - ${booking.eventType}`;
  const businessHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1a4d3a;">New Consultation Booking Request</h2>
      
      <h3 style="color: #7cb342;">Event Details</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Event Type:</strong></td>
          <td style="padding: 8px; border-bottom: 1px solid #eee;">${booking.eventType}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Preferred Date:</strong></td>
          <td style="padding: 8px; border-bottom: 1px solid #eee;">${formattedDate}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Preferred Time:</strong></td>
          <td style="padding: 8px; border-bottom: 1px solid #eee;">${booking.selectedTime}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Expected Guests:</strong></td>
          <td style="padding: 8px; border-bottom: 1px solid #eee;">${booking.numberOfPeople}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Event Theme:</strong></td>
          <td style="padding: 8px; border-bottom: 1px solid #eee;">${booking.theme}</td>
        </tr>
      </table>
      
      <h3 style="color: #7cb342; margin-top: 20px;">Contact Information</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
          <td style="padding: 8px; border-bottom: 1px solid #eee;">${booking.name}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
          <td style="padding: 8px; border-bottom: 1px solid #eee;">${booking.email}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
          <td style="padding: 8px; border-bottom: 1px solid #eee;">${booking.phone}</td>
        </tr>
        ${booking.notes ? `
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Additional Notes:</strong></td>
          <td style="padding: 8px; border-bottom: 1px solid #eee;">${booking.notes}</td>
        </tr>
        ` : ''}
      </table>
      
      <p style="margin-top: 20px; color: #666; font-size: 12px;">
        This booking request was submitted through the BlessFourchette website consultation form.
      </p>
    </div>
  `;

  // Email to customer
  const customerSubject = 'Consultation Booking Request Received - BlessFourchette';
  const customerHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1a4d3a;">Thank You for Your Booking Request!</h2>
      
      <p>Dear ${booking.name},</p>
      
      <p>We have received your consultation booking request. Here is a summary of your request:</p>
      
      <table style="width: 100%; border-collapse: collapse; background-color: #f9f9f9;">
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Event Type:</strong></td>
          <td style="padding: 8px; border-bottom: 1px solid #eee;">${booking.eventType}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Preferred Date:</strong></td>
          <td style="padding: 8px; border-bottom: 1px solid #eee;">${formattedDate}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Preferred Time:</strong></td>
          <td style="padding: 8px; border-bottom: 1px solid #eee;">${booking.selectedTime}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Expected Guests:</strong></td>
          <td style="padding: 8px; border-bottom: 1px solid #eee;">${booking.numberOfPeople}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Event Theme:</strong></td>
          <td style="padding: 8px; border-bottom: 1px solid #eee;">${booking.theme}</td>
        </tr>
      </table>
      
      <p style="margin-top: 20px;">
        <strong>What happens next?</strong><br/>
        Our team will review your request and contact you within 24-48 hours to confirm your consultation slot and discuss the details of your event.
      </p>
      
      <p>If you have any urgent questions, please don't hesitate to contact us directly.</p>
      
      <p style="margin-top: 30px;">Best regards,<br/>
      <strong>The BlessFourchette Team</strong></p>
      
      <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;"/>
      <p style="color: #666; font-size: 12px;">
        BlessFourchette - Vegetarian Catering Services<br/>
        Email: ${businessEmail}
      </p>
    </div>
  `;

  // Send emails
  const businessResult = await sendEmail({
    to: businessEmail,
    subject: businessSubject,
    html: businessHtml,
  });

  const customerResult = await sendEmail({
    to: booking.email,
    subject: customerSubject,
    html: customerHtml,
  });

  return {
    business: businessResult,
    customer: customerResult,
  };
};
