const EMAILJS_URL = 'https://api.emailjs.com/api/v1.0/email/send';

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { name, email, service, message } = req.body || {};
    if (!name || !email || !message) return res.status(400).json({ error: 'name, email and message are required' });

    const payload = {
      service_id: process.env.EMAILJS_SERVICE_ID || 'service_irish',
      template_id: process.env.EMAILJS_TEMPLATE_ID || 'template_ju13k1i',
      user_id: process.env.EMAILJS_USER_ID || 'JRD9In1aJZxgkNWkU',
      template_params: { name, email, service, message },
      accessToken: process.env.EMAILJS_PRIVATE_KEY
    };

    if (!payload.accessToken) return res.status(500).json({ error: 'Server misconfigured: EMAILJS_PRIVATE_KEY missing' });

    const r = await fetch(EMAILJS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (r.ok) return res.status(200).json({ ok: true });

    const detail = await r.text();
    return res.status(502).json({ error: 'Email provider error', detail });
  } catch (err) {
    console.error('Server error', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
