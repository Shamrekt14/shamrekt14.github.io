const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const EMAILJS_URL = 'https://api.emailjs.com/api/v1.0/email/send';
const SERVICE_ID = process.env.EMAILJS_SERVICE_ID || 'service_irish';
const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID || 'template_ju13k1i';
const USER_ID = process.env.EMAILJS_USER_ID || 'JRD9In1aJZxgkNWkU';
const ACCESS_TOKEN = process.env.EMAILJS_PRIVATE_KEY; // must be set in .env

app.get('/health', (req, res) => res.json({ ok: true }));

app.post('/api/send', async (req, res) => {
  const { name, email, service, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email and message are required' });
  }

  if (!ACCESS_TOKEN) {
    return res.status(500).json({ error: 'Server misconfigured: EMAILJS_PRIVATE_KEY is not set' });
  }

  const payload = {
    service_id: SERVICE_ID,
    template_id: TEMPLATE_ID,
    user_id: USER_ID,
    template_params: { name, email, service, message },
    accessToken: ACCESS_TOKEN
  };

  try {
    const response = await axios.post(EMAILJS_URL, payload, {
      headers: { 'Content-Type': 'application/json' }
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('EmailJS send error:', err.response ? err.response.data : err.message);
    const detail = err.response && err.response.data ? err.response.data : err.message;
    return res.status(500).json({ error: 'Failed to send email', detail });
  }
});

app.listen(PORT, () => console.log(`Contact server listening on http://localhost:${PORT}`));
