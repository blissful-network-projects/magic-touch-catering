
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface CateringFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  eventDate: string;
  eventType: string;
  guestCount: string;
  message: string;
  cateringItems?: Array<{ name: string; category: string; quantity: number }>;
}

const createTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.BREVO_SMTP_HOST,
    port: parseInt(process.env.BREVO_SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.BREVO_SMTP_USER,
      pass: process.env.BREVO_SMTP_PASS,
    },
  });
};

const createContactEmailTemplate = (data: ContactFormData) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Inquiry - Magic Touch Catering</title>
      <style>
        body { 
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
          margin: 0; 
          padding: 0; 
          background-color: #f8f9fa; 
          color: #1a1a1a;
        }
        .container { 
          max-width: 600px; 
          margin: 0 auto; 
          background: #ffffff; 
          border-radius: 12px; 
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        .header { 
          background: linear-gradient(135deg, #9B8FC7 0%, #A8C4A0 100%); 
          padding: 40px 30px; 
          text-align: center; 
        }
        .header h1 { 
          color: white; 
          margin: 0; 
          font-size: 28px; 
          font-weight: 300; 
          letter-spacing: 1px;
        }
        .content { 
          padding: 40px 30px; 
        }
        .inquiry-type {
          background: #f8f9fa;
          border-left: 4px solid #9B8FC7;
          padding: 15px 20px;
          margin-bottom: 30px;
          border-radius: 0 8px 8px 0;
        }
        .inquiry-type h2 {
          margin: 0;
          color: #9B8FC7;
          font-size: 18px;
          font-weight: 500;
        }
        .field-group { 
          margin-bottom: 25px; 
        }
        .field-label { 
          font-weight: 600; 
          color: #555; 
          font-size: 14px; 
          text-transform: uppercase; 
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }
        .field-value { 
          background: #f8f9fa; 
          padding: 15px 20px; 
          border-radius: 8px; 
          border-left: 3px solid #A8C4A0;
          font-size: 16px;
          line-height: 1.5;
        }
        .message-field {
          border-left: 3px solid #9B8FC7;
        }
        .footer { 
          background: #1a1a1a; 
          color: #f5f3f0; 
          padding: 30px; 
          text-align: center; 
          font-size: 14px;
        }
        .timestamp {
          background: #e8f5e8;
          padding: 10px 15px;
          border-radius: 6px;
          font-size: 12px;
          color: #555;
          text-align: center;
          margin-bottom: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Magic Touch Catering</h1>
        </div>
        <div class="content">
          <div class="inquiry-type">
            <h2>📧 General Contact Inquiry</h2>
          </div>
          
          <div class="timestamp">
            Received on ${new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </div>

          <div class="field-group">
            <div class="field-label">Full Name</div>
            <div class="field-value">${data.name}</div>
          </div>

          <div class="field-group">
            <div class="field-label">Email Address</div>
            <div class="field-value">${data.email}</div>
          </div>

          <div class="field-group">
            <div class="field-label">Phone Number</div>
            <div class="field-value">${data.phone || 'Not provided'}</div>
          </div>

          <div class="field-group">
            <div class="field-label">Subject</div>
            <div class="field-value">${data.subject || 'General Inquiry'}</div>
          </div>

          <div class="field-group">
            <div class="field-label">Message</div>
            <div class="field-value message-field">${data.message}</div>
          </div>
        </div>
        <div class="footer">
          <p>This inquiry was submitted through the Magic Touch Catering website contact form.</p>
          <p style="margin-top: 15px; font-size: 12px; opacity: 0.8;">Magic Touch Catering | Scottsdale, AZ</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

const createCateringEmailTemplate = (data: CateringFormData) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Catering Request - Magic Touch Catering</title>
      <style>
        body { 
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
          margin: 0; 
          padding: 0; 
          background-color: #f8f9fa; 
          color: #1a1a1a;
        }
        .container { 
          max-width: 600px; 
          margin: 0 auto; 
          background: #ffffff; 
          border-radius: 12px; 
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        .header { 
          background: linear-gradient(135deg, #A8C4A0 0%, #9B8FC7 100%); 
          padding: 40px 30px; 
          text-align: center; 
        }
        .header h1 { 
          color: white; 
          margin: 0; 
          font-size: 28px; 
          font-weight: 300; 
          letter-spacing: 1px;
        }
        .content { 
          padding: 40px 30px; 
        }
        .inquiry-type {
          background: #f0f8f0;
          border-left: 4px solid #A8C4A0;
          padding: 15px 20px;
          margin-bottom: 30px;
          border-radius: 0 8px 8px 0;
        }
        .inquiry-type h2 {
          margin: 0;
          color: #A8C4A0;
          font-size: 18px;
          font-weight: 500;
        }
        .event-summary {
          background: linear-gradient(135deg, #f8f9fa 0%, #e8f5e8 100%);
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 30px;
          border: 1px solid #A8C4A0;
        }
        .event-summary h3 {
          margin: 0 0 15px 0;
          color: #555;
          font-size: 16px;
          font-weight: 600;
          text-align: center;
        }
        .event-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          text-align: center;
        }
        .event-detail {
          background: white;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        .event-detail-label {
          font-size: 12px;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 5px;
        }
        .event-detail-value {
          font-size: 16px;
          font-weight: 600;
          color: #333;
        }
        .field-group { 
          margin-bottom: 25px; 
        }
        .field-label { 
          font-weight: 600; 
          color: #555; 
          font-size: 14px; 
          text-transform: uppercase; 
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }
        .field-value { 
          background: #f8f9fa; 
          padding: 15px 20px; 
          border-radius: 8px; 
          border-left: 3px solid #9B8FC7;
          font-size: 16px;
          line-height: 1.5;
        }
        .message-field {
          border-left: 3px solid #A8C4A0;
        }
        .catering-items {
          background: #f0f8f0;
          padding: 20px;
          border-radius: 12px;
          margin-top: 20px;
        }
        .catering-items h4 {
          margin: 0 0 15px 0;
          color: #A8C4A0;
          font-size: 16px;
          font-weight: 600;
        }
        .item {
          background: white;
          padding: 12px 15px;
          border-radius: 6px;
          margin-bottom: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        .item:last-child {
          margin-bottom: 0;
        }
        .item-info {
          flex: 1;
        }
        .item-name {
          font-weight: 600;
          color: #333;
        }
        .item-category {
          font-size: 12px;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .item-quantity {
          background: #A8C4A0;
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
        }
        .footer { 
          background: #1a1a1a; 
          color: #f5f3f0; 
          padding: 30px; 
          text-align: center; 
          font-size: 14px;
        }
        .timestamp {
          background: #e8f5e8;
          padding: 10px 15px;
          border-radius: 6px;
          font-size: 12px;
          color: #555;
          text-align: center;
          margin-bottom: 20px;
        }
        .priority-notice {
          background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
          border: 1px solid #ffeb3b;
          padding: 15px 20px;
          border-radius: 8px;
          margin-bottom: 20px;
          text-align: center;
        }
        .priority-notice strong {
          color: #e65100;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Magic Touch Catering</h1>
        </div>
        <div class="content">
          <div class="inquiry-type">
            <h2>🍽️ Catering Event Request</h2>
          </div>
          
          <div class="priority-notice">
            <strong>⚡ Priority Lead:</strong> This is a catering event inquiry requiring immediate attention
          </div>
          
          <div class="timestamp">
            Received on ${new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </div>

          <div class="event-summary">
            <h3>📅 Event Overview</h3>
            <div class="event-details">
              <div class="event-detail">
                <div class="event-detail-label">Event Date</div>
                <div class="event-detail-value">${new Date(data.eventDate).toLocaleDateString('en-US', { 
                  weekday: 'short',
                  month: 'short', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}</div>
              </div>
              <div class="event-detail">
                <div class="event-detail-label">Event Type</div>
                <div class="event-detail-value">${data.eventType.charAt(0).toUpperCase() + data.eventType.slice(1)}</div>
              </div>
              <div class="event-detail">
                <div class="event-detail-label">Guest Count</div>
                <div class="event-detail-value">${data.guestCount} People</div>
              </div>
              <div class="event-detail">
                <div class="event-detail-label">Days Until Event</div>
                <div class="event-detail-value">${Math.ceil((new Date(data.eventDate).getTime() - new Date().getTime()) / (1000 * 3600 * 24))} Days</div>
              </div>
            </div>
          </div>

          <div class="field-group">
            <div class="field-label">Contact Name</div>
            <div class="field-value">${data.name}</div>
          </div>

          <div class="field-group">
            <div class="field-label">Email Address</div>
            <div class="field-value">${data.email}</div>
          </div>

          <div class="field-group">
            <div class="field-label">Phone Number</div>
            <div class="field-value">${data.phone}</div>
          </div>

          ${data.company ? `
          <div class="field-group">
            <div class="field-label">Company/Organization</div>
            <div class="field-value">${data.company}</div>
          </div>
          ` : ''}

          ${data.message ? `
          <div class="field-group">
            <div class="field-label">Special Requests & Notes</div>
            <div class="field-value message-field">${data.message}</div>
          </div>
          ` : ''}

          ${data.cateringItems && data.cateringItems.length > 0 ? `
          <div class="catering-items">
            <h4>🍽️ Selected Catering Items</h4>
            ${data.cateringItems.map(item => `
              <div class="item">
                <div class="item-info">
                  <div class="item-name">${item.name}</div>
                  <div class="item-category">${item.category}</div>
                </div>
                <div class="item-quantity">×${item.quantity}</div>
              </div>
            `).join('')}
          </div>
          ` : ''}
        </div>
        <div class="footer">
          <p><strong>🚀 Action Required:</strong> This catering request needs immediate follow-up within 24 hours.</p>
          <p style="margin-top: 15px; font-size: 12px; opacity: 0.8;">Magic Touch Catering | Scottsdale, AZ</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

export const sendContactEmail = async (data: ContactFormData) => {
  const transporter = createTransporter();
  const htmlContent = createContactEmailTemplate(data);

  const mailOptions = {
    from: process.env.BREVO_FROM_EMAIL,
    to: process.env.BREVO_TO_EMAIL,
    subject: `New Contact Inquiry - ${data.subject || 'General'} | Magic Touch Catering`,
    html: htmlContent,
    replyTo: data.email,
  };

  return await transporter.sendMail(mailOptions);
};

export const sendCateringEmail = async (data: CateringFormData) => {
  const transporter = createTransporter();
  const htmlContent = createCateringEmailTemplate(data);

  const mailOptions = {
    from: process.env.BREVO_FROM_EMAIL,
    to: process.env.BREVO_TO_EMAIL,
    subject: `🍽️ URGENT: Catering Request for ${new Date(data.eventDate).toLocaleDateString()} - ${data.name} | Magic Touch Catering`,
    html: htmlContent,
    replyTo: data.email,
  };

  return await transporter.sendMail(mailOptions);
};
