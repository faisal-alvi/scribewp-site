const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Freemius proxy server — endpoints: GET /freemius, POST /create-checkout');
});

app.get('/freemius', (req, res) => {
  // Only expose non-secret, public values to the frontend.
  res.json({
    public_key: process.env.FREEMIUS_PUBLIC_KEY || null,
    // Optional: expose public product/plan IDs for the UI to use. These
    // should be the non-secret IDs you want embedded in the frontend.
    plans: {
      professional: process.env.FREEMIUS_PUBLIC_PROFESSIONAL_PLAN_ID || null,
      starter: process.env.FREEMIUS_PUBLIC_STARTER_PLAN_ID || null,
    },
    is_premium: false,
  });
});

// Optional sandbox endpoint for testing Freemius checkout in sandbox mode.
let FreemiusSDK = null;
let freemiusClient = null;
try {
  // Attempt to require the official SDK if installed
  const { Freemius } = require('@freemius/sdk');
  FreemiusSDK = Freemius;
  if (process.env.FREEMIUS_PRODUCT_ID && (process.env.FREEMIUS_SECRET_KEY || process.env.FREEMIUS_API_KEY)) {
    freemiusClient = new Freemius({
      productId: process.env.FREEMIUS_PRODUCT_ID,
      apiKey: process.env.FREEMIUS_API_KEY,
      secretKey: process.env.FREEMIUS_SECRET_KEY,
      publicKey: process.env.FREEMIUS_PUBLIC_KEY,
    });
  }
} catch (err) {
  console.warn('@freemius/sdk not installed or failed to load; sandbox endpoint will return a safe placeholder.');
}

app.get('/freemius-sandbox', async (req, res) => {
  if (!freemiusClient) {
    // If SDK not present or client not configured, return 204 so frontend knows there is no sandbox.
    return res.status(204).json({});
  }

  try {
    const sandboxParams = await freemiusClient.checkout.getSandboxParams();
    return res.json(sandboxParams.getOptions());
  } catch (err) {
    console.error('Error getting Freemius sandbox params:', err);
    return res.status(500).json({ error: 'freemius_sandbox_failed' });
  }
});

app.post('/create-checkout', async (req, res) => {
  const { planId } = req.body || {};
  // Placeholder behavior: if you provide real Freemius secret and API endpoint,
  // perform the server-side request here to create a checkout and return the URL.
  if (!process.env.FREEMIUS_SECRET_KEY) {
    console.warn('FREEMIUS_SECRET_KEY not set — returning placeholder checkout URL');
    return res.json({ checkout_url: `https://freemius.com/checkout-placeholder?plan=${encodeURIComponent(planId || 'default')}` });
  }

  // Example: call Freemius API here (pseudo-code)
  try {
    // Replace with actual Freemius API call if available
    // const apiRes = await fetch('https://api.freemius.com/checkout', { method: 'POST', headers: { Authorization: `Bearer ${process.env.FREEMIUS_SECRET_KEY}` }, body: JSON.stringify({ plan: planId }) });
    // const data = await apiRes.json();
    // return res.json({ checkout_url: data.checkout_url });

    // For now return placeholder
    return res.json({ checkout_url: `https://freemius.com/checkout-placeholder?plan=${encodeURIComponent(planId || 'default')}` });
  } catch (err) {
    console.error('Error creating Freemius checkout:', err);
    return res.status(500).json({ error: 'checkout_failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Freemius proxy server running on http://localhost:${PORT}`);
});
