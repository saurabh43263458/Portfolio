# Saurabh Portfolio

This portfolio includes a Node.js contact endpoint that sends form submissions through Nodemailer.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Copy `.env.example` to `.env` and fill in your SMTP credentials:

```bash
cp .env.example .env
```

For Gmail, use an app password instead of your normal Gmail password.

3. Start the portfolio:

```bash
npm start
```

4. Open:

```bash
http://localhost:3000
```

The contact form sends name, email, phone, subject, and message to `MAIL_TO`.
