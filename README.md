# Saurabh Portfolio (React + Vite)

A modern developer portfolio rebuilt with **React 19** and **Vite**, featuring interactive project showcases, responsive design, smooth scroll reveals, and a Node.js contact form powered by Nodemailer.

## Tech Stack
- **Frontend**: React, Vite, Modern CSS
- **Backend / Mailer**: Node.js, Express, Nodemailer, Dotenv

---

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Configure Environment Variables (Optional for contact form)
Copy `.env.example` to `.env` and fill in your SMTP credentials:
```bash
cp .env.example .env
```
*(For Gmail, generate and use an App Password instead of your regular password)*

### 3. Run Development Server (Vite)
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser. Vite provides instant Hot Module Replacement (HMR).

### 4. Run Backend Server (Express + Nodemailer)
In a separate terminal:
```bash
npm run server
```
Runs at [http://localhost:3000](http://localhost:3000). The Vite dev server automatically proxies `/api` calls to `http://localhost:3000`.

### 5. Production Build
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory.

To serve the production build via Express:
```bash
npm start
```
and visit [http://localhost:3000](http://localhost:3000).
