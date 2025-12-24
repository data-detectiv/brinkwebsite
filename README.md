# BR!NK Website

A modern, responsive website for BR!NK - Empowering the Next Generation to Lead with Clarity, Purpose, and Impact.

## Features

- 🎨 Modern, clean design with smooth animations
- 🌓 Enhanced dark/Light mode toggle with improved readability
- 📱 Fully responsive design optimized for all devices
- 🚀 Built with React, Vite, and Tailwind CSS
- ✨ Framer Motion animations
- 📊 Analytics page with social media stats and impact metrics
- 📧 Contact form with EmailJS integration
- 🎯 Modern non-profit design patterns with BR!NK brand colors

## Pages

- **Home** - Hero section, impact snapshot, and CTAs
- **About** - Mission, vision, why, and core values
- **Programs** - All 5 BR!NK programs and services
- **Impact** - Statistics and student stories
- **Analytics** - Social media stats, engagement metrics, and growth trends
- **Get Involved** - Volunteer, mentor, partner opportunities
- **Donate** - Donation information and ways to give
- **Stories** - Blog and student highlights
- **Contact** - Contact form with EmailJS integration and social media stats
- **Board** - Board of directors and leadership
- **Events** - BR!NK Summit and other events
- **Resources** - Resource center with downloadable materials
- **FAQ** - Frequently asked questions

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Configuration

### EmailJS Setup (Contact Form)

To enable the contact form to send emails:

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with the following variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
   - `{{to_email}}` - Recipient email (thebrinkpodcastglobal@gmail.com)
   - `{{reply_to}}` - Reply-to email
4. Copy your Service ID, Template ID, and Public Key
5. Create a `.env` file in the root directory (see `.env.example`)
6. Add your EmailJS credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

The contact form will automatically use EmailJS if configured, or fall back to opening the user's email client.

### Social Media Stats

The website includes placeholder social media stats. To integrate real stats:

1. Set up API keys for:
   - YouTube Data API v3
   - Instagram Basic Display API (or Meta Graph API)
   - Twitter API v2
   - LinkedIn API
   - Spotify Web API

2. Add your API keys to the `.env` file (see `.env.example`)

3. The stats will automatically update on the Contact and Analytics pages

## Logo

Place your BR!NK logo at `public/assets/brink-logo.jpg` or update the path in `src/components/Navbar.jsx`.

## Color Scheme

The website uses BR!NK brand colors throughout:
- **Navy Blue**: `#1E3A5F` - Primary brand color
- **Mustard Gold**: `#D4AF37` - Accent and highlight color
- **Dark Gray**: `#2C2C2C` - Secondary background
- **Medium Gray**: `#808080` - Text and borders
- **White**: `#FFFFFF` - Light mode background
- **Black**: `#000000` - Text in light mode

Dark mode features enhanced contrast and readability with carefully selected color combinations.

## License

See LICENSE file for details.
