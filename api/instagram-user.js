// Vercel Serverless Function for Instagram API
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
    const { userId } = req.query;
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
    
    if (!accessToken) {
      return res.status(500).json({ error: 'Instagram Access Token not configured' });
    }
    
    if (!userId) {
      return res.status(400).json({ error: 'User ID parameter is required' });
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
    console.error('Instagram API error:', error);
    res.status(500).json({ error: error.message });
  }
}

