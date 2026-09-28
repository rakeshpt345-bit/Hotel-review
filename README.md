# Shree Ramdev Rajasthani Dhaba — QR Feedback System

A focused QR feedback web app. Customers scan one Main Table QR, submit a rating and optional feedback, then continue to the hotel's Google review page. The admin app only shows total scans and generates/downloads the Main Table QR.

## Stack
- React + Vite + Tailwind CSS
- Node.js + Express
- MongoDB / MongoDB Atlas + Mongoose
- JWT admin authentication
- QRCode generation

## Customer flow
QR scan → `/review` → rating + feedback → save to MongoDB → Google review → `/thank-you`

Google controls its review page, so the app cannot verify whether a Google review was actually posted.

## Admin flow
`/admin/login` → dashboard → total scans + Main Table QR → download PNG/SVG

## Setup
### 1. Server
```bash
cd server
npm install
copy .env.example .env
npm run dev
```
Fill `.env` with your MongoDB Atlas connection string, Google review URL, admin email/password, and public review URL.

### 2. Client
```bash
cd client
npm install
copy .env.example .env
npm run dev
```

For local development, use:
- Server: `http://localhost:5000`
- Client: `http://localhost:5173`

## MongoDB Atlas
Create a database user, allow the development machine IP in Network Access, then put the connection string in `server/.env` as `MONGO_URI`.

## Production
Set:
- `CLIENT_URL` to the deployed frontend URL
- `PUBLIC_REVIEW_URL` to the deployed `/review` URL
- `GOOGLE_REVIEW_URL` to the hotel's Google review URL
- `MONGO_URI` to MongoDB Atlas
- `ADMIN_EMAIL` and `ADMIN_PASSWORD`

Deploy the client and server separately, or host the Express API on a Node-compatible service and the Vite client on a static host.
