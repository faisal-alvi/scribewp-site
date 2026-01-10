Local Freemius proxy server
=================================

This small Express server provides two endpoints for local development:

- `GET /freemius` — returns `{ public_key, is_premium }` from env
- `POST /create-checkout` — creates a checkout session (placeholder if no secret)

Setup

1. From the `server` folder install dependencies:

```bash
cd server
npm install
```

2. Create a `.env` file with your Freemius keys (optional for placeholders):

```
FREEMIUS_PUBLIC_KEY=pk_test_your_public_key
FREEMIUS_SECRET_KEY=sk_test_your_secret_key
PORT=4000
```

3. Run the server:

```bash
npm start
```

Notes
- This server currently returns a placeholder checkout URL unless `FREEMIUS_SECRET_KEY` is set and you implement the real Freemius API call in `index.js`.
- When deploying, protect the secret key and host this server as a small serverless function (Vercel, Netlify, AWS Lambda, etc.).
