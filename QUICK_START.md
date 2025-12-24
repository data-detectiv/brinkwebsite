# Quick Start Guide - Fix CORS Issues

## 🚀 Quick Setup (Choose One)

### Option A: Local Proxy Server (Easiest for Development)

1. **Install dependencies**:
   ```bash
   npm install express cors
   ```

2. **Add to your `.env` file**:
   ```
   TWITTER_BEARER_TOKEN=your_twitter_bearer_token_here
   INSTAGRAM_ACCESS_TOKEN=your_instagram_access_token_here
   VITE_TWITTER_PROXY_URL=http://localhost:3001
   VITE_INSTAGRAM_PROXY_URL=http://localhost:3001
   ```

3. **Start the proxy server** (in a separate terminal):
   ```bash
   npm run proxy
   ```

4. **Start your frontend** (in another terminal):
   ```bash
   npm run dev
   ```

✅ **Done!** Your social media stats should now work without CORS errors.

---

### Option B: Vercel Serverless Functions (For Production)

1. **Deploy to Vercel**:
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Add environment variables in Vercel Dashboard**:
   - Go to: Project Settings → Environment Variables
   - Add:
     - `TWITTER_BEARER_TOKEN` = your Twitter bearer token
     - `INSTAGRAM_ACCESS_TOKEN` = your Instagram access token

3. **Update your `.env` file**:
   ```
   VITE_TWITTER_PROXY_URL=https://your-app.vercel.app
   VITE_INSTAGRAM_PROXY_URL=https://your-app.vercel.app
   ```

4. **Redeploy**:
   ```bash
   vercel --prod
   ```

✅ **Done!** Your production site will use serverless functions.

---

## 🧪 Testing

1. Open your website and go to the Contact page
2. Check browser console (F12) - you should see:
   - "Twitter followers fetched: X.XK" (if using proxy)
   - "Instagram followers fetched: X.XK" (if using proxy)
3. No more CORS errors! 🎉

---

## ❓ Troubleshooting

**Proxy server won't start?**
- Make sure port 3001 is free: `netstat -ano | findstr :3001` (Windows) or `lsof -i :3001` (Mac/Linux)
- Check that express and cors are installed: `npm list express cors`

**Still seeing CORS errors?**
- Make sure proxy server is running: Check terminal where you ran `npm run proxy`
- Verify `.env` file has correct proxy URLs (no trailing slashes)
- Restart both proxy server AND frontend dev server after changing `.env`

**Stats not showing?**
- Check browser console for error messages
- Verify API keys are correct in `.env` file
- For Instagram: Make sure you're using numeric User ID, not username

---

## 📝 Files Created

- `proxy-server.js` - Express proxy server for local development
- `api/twitter-user.js` - Vercel serverless function for Twitter
- `api/instagram-user.js` - Vercel serverless function for Instagram
- `vercel.json` - Vercel configuration
- `PROXY_SETUP.md` - Detailed setup guide

See `PROXY_SETUP.md` for more detailed instructions!

