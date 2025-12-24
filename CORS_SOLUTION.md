# CORS Solution for Twitter/X and Instagram APIs

## The Problem

Both Twitter/X API and Instagram API have CORS (Cross-Origin Resource Sharing) restrictions that prevent direct browser requests. This is a security feature that blocks frontend JavaScript from making API calls to these services.

## Solutions

### Option 1: Backend Proxy (Recommended for Production)

Create a simple backend endpoint that makes the API calls server-side and returns the data to your frontend.

#### Example: Node.js/Express Backend Proxy

Create a file `server.js`:

```javascript
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
app.use(cors());

// Twitter Proxy Endpoint
app.get('/api/twitter/user/:username', async (req, res) => {
  try {
    const { username } = req.params;
    const bearerToken = process.env.TWITTER_BEARER_TOKEN;
    
    const response = await fetch(
      `https://api.twitter.com/2/users/by/username/${username}?user.fields=public_metrics`,
      {
        headers: {
          'Authorization': `Bearer ${bearerToken}`
        }
      }
    );
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Instagram Proxy Endpoint
app.get('/api/instagram/user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
    
    const response = await fetch(
      `https://graph.instagram.com/${userId}?fields=followers_count,media_count&access_token=${accessToken}`
    );
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => {
  console.log('Proxy server running on http://localhost:3001');
});
```

Then update your `.env`:
```
VITE_TWITTER_PROXY_URL=http://localhost:3001
VITE_INSTAGRAM_PROXY_URL=http://localhost:3001
```

### Option 2: Vercel/Netlify Serverless Functions

#### Vercel Function Example

Create `api/twitter-user.js`:

```javascript
export default async function handler(req, res) {
  const { username } = req.query;
  const bearerToken = process.env.TWITTER_BEARER_TOKEN;
  
  try {
    const response = await fetch(
      `https://api.twitter.com/2/users/by/username/${username}?user.fields=public_metrics`,
      {
        headers: {
          'Authorization': `Bearer ${bearerToken}`
        }
      }
    );
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
```

Then use: `https://your-domain.vercel.app/api/twitter-user?username=BGodbless25`

### Option 3: Use a Public CORS Proxy (Not Recommended for Production)

⚠️ **Warning**: Only use for development/testing. Not secure for production.

You can use a public CORS proxy service, but this exposes your API keys and is not secure.

### Option 4: Disable CORS in Development (Chrome Only)

For local development only, you can launch Chrome with CORS disabled:

```bash
# Windows
chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security

# Mac
open -na Google\ Chrome --args --user-data-dir=/tmp/chrome_dev --disable-web-security

# Linux
google-chrome --user-data-dir=/tmp/chrome_dev --disable-web-security
```

⚠️ **Warning**: Only use this for development. Never browse the web with CORS disabled.

## Quick Fix: Update Code to Use Proxy

The code has been updated to support a proxy URL. Simply add to your `.env`:

```
VITE_TWITTER_PROXY_URL=http://your-proxy-url.com
VITE_INSTAGRAM_PROXY_URL=http://your-proxy-url.com
```

## Instagram API Specific Issues

Instagram API 400 errors usually mean:
1. **Wrong User ID**: Make sure you're using the numeric Instagram User ID, not the username
2. **Invalid Access Token**: Token might be expired or incorrect
3. **Wrong API Endpoint**: Make sure you're using Instagram Graph API, not Basic Display API

To get your Instagram User ID:
1. Go to https://www.instagram.com/your_username/?__a=1&__d=dis
2. Look for `"id"` in the response
3. Or use a tool like https://www.instagram.com/username/?__a=1

## Recommended Approach

For production, use **Option 1 (Backend Proxy)** or **Option 2 (Serverless Functions)**. This is the most secure and reliable solution.

