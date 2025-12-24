# BR!NK Website Setup Guide

## EmailJS Configuration (Contact Form)

To enable the contact form to send emails directly to your inbox:

### Step 1: Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

### Step 2: Set Up Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions to connect your email
5. Copy your **Service ID** (e.g., `service_xxxxx`)

### Step 3: Create Email Template
1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Use this template structure:
   ```
   Subject: New Contact Form Message from {{from_name}}
   
   From: {{from_name}} ({{from_email}})
   Reply-To: {{reply_to}}
   
   Message:
   {{message}}
   ```
4. Copy your **Template ID** (e.g., `template_xxxxx`)

### Step 4: Get Public Key
1. Go to **Account** → **General** in EmailJS dashboard
2. Copy your **Public Key** (e.g., `xxxxxxxxxxxxx`)

### Step 5: Configure Environment Variables
1. Create a `.env` file in the root directory
2. Add these variables:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```
3. Restart your development server

**Note:** The contact form will automatically send emails to `thebrinkpodcastglobal@gmail.com` when configured.

---

## Social Media Stats Configuration

To display real follower/subscriber counts on the Contact and Analytics pages:

### YouTube API Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable **YouTube Data API v3**
4. Go to **Credentials** → **Create Credentials** → **API Key**
5. Copy your API key
6. Add to `.env`:
   ```
   VITE_YOUTUBE_API_KEY=your_youtube_api_key_here
   VITE_YOUTUBE_CHANNEL_ID=@brinkwithGodbless
   ```

### Instagram API Setup

1. Go to [Meta for Developers](https://developers.facebook.com/)
2. Create a new app
3. Add **Instagram Basic Display** product
4. Get your **Access Token** and **User ID**
5. Add to `.env`:
   ```
   VITE_INSTAGRAM_ACCESS_TOKEN=your_access_token_here
   VITE_INSTAGRAM_USER_ID=your_user_id_here
   ```

### Twitter/X API Setup

1. Go to [Twitter Developer Portal](https://developer.twitter.com/)
2. Create a new app
3. Get your **Bearer Token**
4. Add to `.env`:
   ```
   VITE_TWITTER_BEARER_TOKEN=your_bearer_token_here
   VITE_TWITTER_USERNAME=BGodbless25
   ```

### LinkedIn API Setup

1. Go to [LinkedIn Developers](https://www.linkedin.com/developers/)
2. Create a new app
3. Get your **Access Token** and **Company/Organization ID**
4. Add to `.env`:
   ```
   VITE_LINKEDIN_ACCESS_TOKEN=your_access_token_here
   VITE_LINKEDIN_COMPANY_ID=your_company_id_here
   ```

### Spotify API Setup

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Create a new app
3. Get your **Client ID** and **Client Secret**
4. Find your **Show/Podcast ID**
5. Add to `.env`:
   ```
   VITE_SPOTIFY_CLIENT_ID=your_client_id_here
   VITE_SPOTIFY_CLIENT_SECRET=your_client_secret_here
   VITE_SPOTIFY_SHOW_ID=your_show_id_here
   ```

---

## Testing

### Test Email Form
1. Fill out the contact form on the Contact page
2. Submit the form
3. Check your email inbox (`thebrinkpodcastglobal@gmail.com`)
4. You should receive the message within seconds

### Test Social Stats
1. Configure at least one social media API (YouTube is easiest)
2. Visit the Contact page or Analytics page
3. The follower/subscriber count should appear instead of "—"
4. Check browser console for any API errors

---

## Troubleshooting

### Email Not Sending
- Verify all EmailJS environment variables are set correctly
- Check EmailJS dashboard for service status
- Ensure email template variables match: `{{from_name}}`, `{{from_email}}`, `{{message}}`, `{{reply_to}}`
- Check browser console for error messages

### Social Stats Not Loading
- Verify API keys are correct in `.env` file
- Check API quotas/limits haven't been exceeded
- Ensure channel IDs/usernames are correct
- Check browser console for specific API errors
- Some APIs require server-side implementation (LinkedIn, TikTok)

---

## Notes

- **Free Tier Limits**: EmailJS free tier allows 200 emails/month
- **API Rate Limits**: Most APIs have rate limits. Stats update on page load.
- **Privacy**: Never commit `.env` file to git. It's already in `.gitignore`.
- **Production**: For production, use environment variables provided by your hosting platform (Vercel, Netlify, etc.)

