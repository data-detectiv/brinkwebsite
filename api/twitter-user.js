// Vercel Serverless Function for Twitter/X API
// This file should be in the /api folder for Vercel deployment

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { username } = req.query;
    const bearerToken = process.env.TWITTER_BEARER_TOKEN;
    
    if (!bearerToken) {
      return res.status(500).json({ error: 'Twitter Bearer Token not configured' });
    }
    
    if (!username) {
      return res.status(400).json({ error: 'Username parameter is required' });
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
    console.error('Twitter API error:', error);
    res.status(500).json({ error: error.message });
  }
}

