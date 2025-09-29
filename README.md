# TradeHax Website

## Project Description
This project is a website for TradeHax, a tech repair and customization service. The website serves as a platform to showcase the services offered, display a portfolio of previous work, and provide a contact form for inquiries.

## File Structure
```
shamrekt14.github.io
├── index.html        # Main landing page
├── services.html     # Services offered by TradeHax
├── portfolio.html     # Portfolio showcasing previous work
├── contact.html      # Contact form for inquiries
└── README.md         # Project documentation
```

## Setup Instructions
1. Clone the repository to your local machine.
   ```
   git clone https://github.com/shamrekt14/shamrekt14.github.io.git
   ```
2. Navigate to the project directory.
   ```
   cd shamrekt14.github.io
   ```
3. Open `index.html` in a web browser to view the website.

## Features
- **Responsive Design**: The website is designed to be mobile-friendly and responsive across different devices.
- **Smooth Transitions**: Page transitions are enhanced using GSAP for a better user experience.
- **Service Details**: Each service offered by TradeHax is detailed in the `services.html` page.
- **Portfolio Showcase**: The `portfolio.html` page displays examples of previous work and customizations.
- **Contact Form**: Users can reach out via the `contact.html` page, which includes a form for inquiries.

## Technologies Used
- HTML
- CSS (Tailwind CSS)
- JavaScript (GSAP, EmailJS)
- Swiper.js for carousel functionality

## Contribution
Feel free to fork the repository and submit pull requests for any improvements or bug fixes.

## Deploying the contact endpoint to Vercel

This project includes a serverless function at `api/send.js` which forwards contact form submissions to EmailJS securely (using your private key on the server).

1. Install the Vercel CLI (optional):

   npm i -g vercel

2. From the repo root run `vercel` and follow the prompts to deploy.

3. In the Vercel dashboard for the project, set these Environment Variables:

   - EMAILJS_PRIVATE_KEY (your private key)
   - EMAILJS_USER_ID (JRD9In1aJZxgkNWkU)
   - EMAILJS_SERVICE_ID (service_irish)
   - EMAILJS_TEMPLATE_ID (template_ju13k1i)

4. After deployment the endpoint will be available at: `https://<your-project>.vercel.app/api/send`.

5. Update `contact.html` to POST to the deployed endpoint if the site will be hosted separately.