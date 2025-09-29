Server for handling contact form submissions and forwarding them to EmailJS securely.

Setup

1. Install Node.js (v18+ recommended).
2. From the `server/` folder install dependencies:

   npm install

3. Create a `.env` file in `server/` (copy from `.env.example`) and set:

   EMAILJS_PRIVATE_KEY=your_private_key_here

4. Start the server:

   npm start

By default the server listens on port 3000. It exposes:

- GET /health — simple health check
- POST /api/send — accepts JSON { name, email, service, message }

Example curl test:

curl -X POST http://localhost:3000/api/send -H "Content-Type: application/json" -d '{"name":"Test","email":"you@example.com","service":"Phone Repair","message":"Hello"}'

Security notes

- Keep your EmailJS private key secret. Do NOT commit it to source control.
- The `.env.example` file contains placeholders only.

Deployment

Deploy this server separately (e.g., Heroku, Vercel Serverless Functions, AWS, DigitalOcean) and point your site's form action to the deployed endpoint (e.g., https://api.yoursite.com/api/send).

Vercel (recommended, free tier)

1. Install the Vercel CLI (optional but convenient):

   npm i -g vercel

2. From the repo root run:

   vercel

3. When prompted, set the following Environment Variables in the Vercel dashboard (Project Settings → Environment Variables) or via CLI:

   - EMAILJS_PRIVATE_KEY = <your private key>
   - EMAILJS_USER_ID = JRD9In1aJZxgkNWkU
   - EMAILJS_SERVICE_ID = service_irish
   - EMAILJS_TEMPLATE_ID = template_ju13k1i

4. Deploy. The serverless function will be available at: https://<your-project>.vercel.app/api/send

Update `contact.html` if necessary to POST to the absolute URL above.