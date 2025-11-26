# BR!NK Website

A modern, responsive website for BR!NK - Empowering the Next Generation to Lead with Clarity, Purpose, and Impact.

## Features

- 🎨 Modern, clean design with smooth animations
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive design
- 🚀 Built with React, Vite, and Tailwind CSS
- ✨ Framer Motion animations
- 📊 Social media stats integration (with placeholders)

## Pages

- **Home** - Hero section, impact snapshot, and CTAs
- **About** - Mission, vision, why, and core values
- **Programs** - All 5 BR!NK programs and services
- **Impact** - Statistics and student stories
- **Get Involved** - Volunteer, mentor, partner opportunities
- **Donate** - Donation information and ways to give
- **Stories** - Blog and student highlights
- **Contact** - Contact form and social media links
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

## Social Media Stats

The website includes placeholder social media stats. To integrate real stats:

1. Set up API keys for:
   - YouTube Data API v3
   - Instagram Basic Display API (or Meta Graph API)
   - Twitter API v2
   - LinkedIn API

2. Update `src/utils/socialStats.js` with actual API calls

## Logo

Place your BR!NK logo at `public/assets/brink-logo.jpg` or update the path in `src/components/Navbar.jsx`.

## Color Scheme

The website uses a teal/cyan color scheme that can be customized in the Tailwind CSS classes throughout the components. Main colors:
- Primary: Teal-500/Teal-600
- Accent: Purple-500/Purple-400
- Background: Gray-950 (dark) / Gray-50 (light)

## License

See LICENSE file for details.
