// Simple Express Proxy Server for Twitter/X and Instagram APIs
// Run with: node proxy-server.js
// Make sure to set environment variables: TWITTER_BEARER_TOKEN, INSTAGRAM_ACCESS_TOKEN

import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Twitter/X Proxy Endpoint
app.get('/api/twitter/user/:username', async (req, res) => {
  try {
    const { username } = req.params;
    const bearerToken = process.env.TWITTER_BEARER_TOKEN;
    
    if (!bearerToken) {
      return res.status(500).json({ error: 'Twitter Bearer Token not configured' });
    }
    
    const response = await fetch(
      `https://api.twitter.com/2/users/by/username/${username}?user.fields=public_metrics`,
      {
        headers: {
          'Authorization': `Bearer ${bearerToken}`
        }
      }
    );
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return res.status(response.status).json({ error: errorData });
    }
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Twitter proxy error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Instagram Proxy Endpoint
app.get('/api/instagram/user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
    
    if (!accessToken) {
      return res.status(500).json({ error: 'Instagram Access Token not configured' });
    }
    
    const response = await fetch(
      `https://graph.instagram.com/${userId}?fields=followers_count,media_count&access_token=${accessToken}`
    );
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return res.status(response.status).json({ error: errorData });
    }
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Instagram proxy error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Proxy server is running' });
});

app.listen(PORT, () => {
  console.log(`🚀 Proxy server running on http://localhost:${PORT}`);
  console.log(`📡 Twitter endpoint: http://localhost:${PORT}/api/twitter/user/:username`);
  console.log(`📸 Instagram endpoint: http://localhost:${PORT}/api/instagram/user/:userId`);
});

