# Proxy Server Setup Guide

I've created two solutions to fix the CORS issues with Twitter/X and Instagram APIs. Choose the one that works best for you.

## Solution 1: Local Express Proxy Server (For Development)

### Setup Steps:

1. **Install dependencies** (if not already installed):
   ```bash
   npm install express cors
   ```

2. **Set environment variables** in your `.env` file:
   ```
   TWITTER_BEARER_TOKEN=your_twitter_bearer_token
   INSTAGRAM_ACCESS_TOKEN=your_instagram_access_token
   PORT=3001
   ```

3. **Start the proxy server**:
   ```bash
   npm run proxy
   ```
   
   Or for auto-reload during development:
   ```bash
   npm run proxy:dev
   ```

4. **Update your frontend `.env` file**:
   ```
   VITE_TWITTER_PROXY_URL=http://localhost:3001
   VITE_INSTAGRAM_PROXY_URL=http://localhost:3001
   ```

5. **Restart your Vite dev server**:
   ```bash
   npm run dev
   ```

The proxy server will run on `http://localhost:3001` and handle all API requests.

---

## Solution 2: Vercel Serverless Functions (For Production)

### Setup Steps:

1. **Deploy to Vercel**:
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Set environment variables in Vercel Dashboard**:
   - Go to your project settings → Environment Variables
   - Add:
     - `TWITTER_BEARER_TOKEN` = your Twitter bearer token
     - `INSTAGRAM_ACCESS_TOKEN` = your Instagram access token

3. **Update your frontend `.env` file** (or Vercel environment variables):
   ```
   VITE_TWITTER_PROXY_URL=https://your-domain.vercel.app
   VITE_INSTAGRAM_PROXY_URL=https://your-domain.vercel.app
   ```

4. **Redeploy**:
   ```bash
   vercel --prod
   ```

The serverless functions will be available at:
- `https://your-domain.vercel.app/api/twitter-user?username=BGodbless25`
- `https://your-domain.vercel.app/api/instagram-user?userId=YOUR_USER_ID`

---

## Testing the Proxy

### Test Twitter Proxy:
```bash
# Local
curl http://localhost:3001/api/twitter/user/BGodbless25

# Vercel
curl https://your-domain.vercel.app/api/twitter-user?username=BGodbless25
```

### Test Instagram Proxy:
```bash
# Local
curl http://localhost:3001/api/instagram/user/YOUR_USER_ID

# Vercel
curl https://your-domain.vercel.app/api/instagram-user?userId=YOUR_USER_ID
```

---

## Troubleshooting

### Proxy server won't start:
- Make sure port 3001 is not already in use
- Check that `express` and `cors` are installed: `npm install express cors`

### Still getting CORS errors:
- Make sure the proxy URL in your `.env` matches exactly (no trailing slash)
- Restart both the proxy server AND your Vite dev server after changing `.env`
- Check browser console for the actual error message

### Vercel functions not working:
- Make sure environment variables are set in Vercel dashboard
- Check Vercel function logs in the dashboard
- Ensure `vercel.json` is in your project root

---

## Which Solution to Use?

- **Local Proxy (Solution 1)**: Best for development and testing
- **Vercel Functions (Solution 2)**: Best for production deployment

You can use both - local proxy for development, Vercel functions for production!

