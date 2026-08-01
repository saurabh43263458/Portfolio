import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json({ limit: '20kb' }));
app.use(express.static(__dirname));

const requiredFields = ['name', 'email', 'subject', 'message'];

const escapeHtml = (value) => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#039;');

const getTransporter = () => {
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    throw new Error('Missing SMTP configuration.');
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === 'true',
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS
    }
  });
};

app.post('/api/contact', async (req, res) => {
  const details = Object.fromEntries(
    Object.entries(req.body || {}).map(([key, value]) => [key, String(value || '').trim()])
  );

  const missingField = requiredFields.find((field) => !details[field]);

  if (missingField) {
    return res.status(400).json({ message: `Please provide ${missingField}.` });
  }

  try {
    const transporter = getTransporter();
    const phone = details.phone || 'Not provided';
    const mailTo = process.env.MAIL_TO || 'sm427878@gmail.com';
    const safeDetails = {
      name: escapeHtml(details.name),
      email: escapeHtml(details.email),
      phone: escapeHtml(phone),
      message: escapeHtml(details.message).replace(/\n/g, '<br>')
    };

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      replyTo: details.email,
      to: mailTo,
      subject: details.subject,
      text: [
        `Name: ${details.name}`,
        `Email: ${details.email}`,
        `Phone: ${phone}`,
        '',
        'Message:',
        details.message
      ].join('\n'),
      html: `
        <h2>New portfolio message</h2>
        <p><strong>Name:</strong> ${safeDetails.name}</p>
        <p><strong>Email:</strong> ${safeDetails.email}</p>
        <p><strong>Phone:</strong> ${safeDetails.phone}</p>
        <p><strong>Message:</strong></p>
        <p>${safeDetails.message}</p>
      `
    });

    return res.json({ message: 'Message sent successfully.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Message could not be sent right now.' });
  }
});

app.listen(port, () => {
  console.log(`Portfolio running at http://localhost:${port}`);
});
