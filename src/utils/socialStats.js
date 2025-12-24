// Social media stats - fetching from APIs
// Note: Most platforms require API keys. Set these in your .env file

const formatNumber = (num) => {
  if (!num) return "—";
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(1) + "K";
  return num.toString();
};

export const getSocialStats = async () => {
  const stats = {
    youtube: { subscribers: null },
    instagram: { followers: null },
    twitter: { followers: null },
    linkedin: { followers: null },
    spotify: { listeners: null },
    applePodcast: { subscribers: null },
    tiktok: { followers: null }
  };

  try {
    // YouTube Stats - requires YouTube Data API v3
    const youtubeApiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
    const youtubeChannelId = import.meta.env.VITE_YOUTUBE_CHANNEL_ID || "@brinkwithGodbless";
    
    if (youtubeApiKey) {
      try {
        let channelId = youtubeChannelId.replace('@', '');
        let actualChannelId = null;
        
        // If it's a handle (starts with @ or doesn't look like a channel ID), search for it
        if (youtubeChannelId.startsWith('@') || !channelId.startsWith('UC')) {
          // Search for channel by handle
          const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(youtubeChannelId)}&type=channel&maxResults=1&key=${youtubeApiKey}`;
          const searchResponse = await fetch(searchUrl);
          const searchData = await searchResponse.json();
          
          if (searchData.items && searchData.items.length > 0) {
            actualChannelId = searchData.items[0].id.channelId;
          }
        } else {
          // It's already a channel ID
          actualChannelId = channelId;
        }
        
        // Get channel statistics
        if (actualChannelId) {
          const statsUrl = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${actualChannelId}&key=${youtubeApiKey}`;
          const response = await fetch(statsUrl);
          const data = await response.json();
          
          if (data.items && data.items[0] && data.items[0].statistics) {
            const subscriberCount = parseInt(data.items[0].statistics.subscriberCount);
            if (!isNaN(subscriberCount)) {
              stats.youtube.subscribers = formatNumber(subscriberCount);
            }
          }
        }
      } catch (error) {
        console.error("YouTube API error:", error);
      }
    }

    // Instagram Stats - requires Meta Graph API
    const instagramAccessToken = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;
    const instagramUserId = import.meta.env.VITE_INSTAGRAM_USER_ID;
    const instagramProxyUrl = import.meta.env.VITE_INSTAGRAM_PROXY_URL; // Optional: backend proxy URL
    
    if (instagramAccessToken && instagramUserId) {
      try {
        // Instagram Graph API endpoint - ensure user ID is numeric
        const userId = instagramUserId.toString().trim();
        let apiUrl;
        let headers = {};
        
        if (instagramProxyUrl) {
          // Use backend proxy to avoid CORS issues
          // Check if it's Vercel (uses query params) or Express (uses path params)
          if (instagramProxyUrl.includes('vercel.app') || instagramProxyUrl.includes('netlify.app')) {
            // Vercel/Netlify serverless function - uses query parameters
            apiUrl = `${instagramProxyUrl}/api/instagram-user?userId=${encodeURIComponent(userId)}`;
          } else {
            // Express proxy - uses path parameters
            apiUrl = `${instagramProxyUrl}/api/instagram/user/${userId}`;
          }
          headers = {
            'Content-Type': 'application/json'
          };
        } else {
          // Direct API call (may have CORS issues)
          apiUrl = `https://graph.instagram.com/${userId}?fields=followers_count,media_count&access_token=${instagramAccessToken}`;
        }
        
        const response = await fetch(apiUrl, { headers });
        
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          console.error("Instagram API error response:", {
            status: response.status,
            statusText: response.statusText,
            error: errorData
          });
          
          // Common error: Invalid user ID or access token
          if (response.status === 400) {
            console.warn("Instagram API 400 Error - Common causes:");
            console.warn("1. User ID must be numeric (not username)");
            console.warn("2. Access token might be expired or invalid");
            console.warn("3. Account must be Instagram Business/Creator with Graph API access");
            console.warn("4. Check if you're using the correct API endpoint");
          }
          throw new Error(`Instagram API error: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        
        if (data.error) {
          console.error("Instagram API error:", data.error);
          if (data.error.message) {
            console.error("Error message:", data.error.message);
          }
        } else if (data.followers_count) {
          stats.instagram.followers = formatNumber(parseInt(data.followers_count));
          console.log("Instagram followers fetched:", stats.instagram.followers);
        } else {
          console.warn("Instagram API: followers_count not found in response", data);
        }
      } catch (error) {
        if (error.message.includes('Failed to fetch') || error.message.includes('CORS')) {
          console.warn("Instagram API CORS Error: Consider using a backend proxy (see CORS_SOLUTION.md)");
        }
        console.error("Instagram API error:", error);
        console.error("Instagram API error details:", {
          accessToken: instagramAccessToken ? "Present" : "Missing",
          userId: instagramUserId,
          proxyUrl: instagramProxyUrl || "Not configured",
          errorMessage: error.message
        });
      }
    } else {
      console.warn("Instagram credentials not found in environment variables");
    }

    // Twitter/X Stats - requires Twitter API v2
    // NOTE: Twitter API v2 has CORS restrictions and cannot be called directly from browser
    // You need a backend proxy or CORS proxy for this to work
    const twitterBearerToken = import.meta.env.VITE_TWITTER_BEARER_TOKEN;
    const twitterProxyUrl = import.meta.env.VITE_TWITTER_PROXY_URL; // Optional: backend proxy URL
    let twitterUsername = import.meta.env.VITE_TWITTER_USERNAME || "BGodbless25";
    
    // Remove @ symbol if present
    twitterUsername = twitterUsername.replace('@', '').trim();
    
    if (twitterBearerToken) {
      try {
        // If proxy URL is provided, use it (recommended for production)
        let apiUrl;
        let headers;
        
        if (twitterProxyUrl) {
          // Use backend proxy to avoid CORS issues
          // Check if it's Vercel (uses query params) or Express (uses path params)
          if (twitterProxyUrl.includes('vercel.app') || twitterProxyUrl.includes('netlify.app')) {
            // Vercel/Netlify serverless function - uses query parameters
            apiUrl = `${twitterProxyUrl}/api/twitter-user?username=${encodeURIComponent(twitterUsername)}`;
          } else {
            // Express proxy - uses path parameters
            apiUrl = `${twitterProxyUrl}/api/twitter/user/${encodeURIComponent(twitterUsername)}`;
          }
          headers = {
            'Content-Type': 'application/json'
          };
        } else {
          // Direct API call (will fail due to CORS in browser)
          apiUrl = `https://api.twitter.com/2/users/by/username/${encodeURIComponent(twitterUsername)}?user.fields=public_metrics`;
          headers = {
            'Authorization': `Bearer ${twitterBearerToken}`,
            'Content-Type': 'application/json'
          };
        }
        
        const userResponse = await fetch(apiUrl, {
          method: 'GET',
          headers: headers
        });
        
        // Check if response is ok
        if (!userResponse.ok) {
          const errorData = await userResponse.json().catch(() => ({}));
          console.error("Twitter API error response:", {
            status: userResponse.status,
            statusText: userResponse.statusText,
            error: errorData
          });
          throw new Error(`Twitter API error: ${userResponse.status} ${userResponse.statusText}`);
        }
        
        const userData = await userResponse.json();
        
        // Log the response for debugging
        console.log("Twitter API response:", userData);
        
        if (userData.data && userData.data.public_metrics) {
          const followersCount = userData.data.public_metrics.followers_count;
          if (followersCount !== undefined && followersCount !== null) {
            stats.twitter.followers = formatNumber(parseInt(followersCount));
            console.log("Twitter followers fetched:", stats.twitter.followers);
          } else {
            console.warn("Twitter API: followers_count is missing in public_metrics");
          }
        } else if (userData.errors) {
          console.error("Twitter API errors:", userData.errors);
        } else {
          console.warn("Twitter API: Unexpected response structure", userData);
        }
      } catch (error) {
        // CORS error is expected when calling Twitter API directly from browser
        if (error.message.includes('Failed to fetch') || error.message.includes('CORS')) {
          console.warn("Twitter API CORS Error: Twitter API v2 blocks direct browser requests.");
          console.warn("Solution: Set up a backend proxy (see TWITTER_API_TROUBLESHOOTING.md)");
          console.warn("Or set VITE_TWITTER_PROXY_URL in your .env file to use a proxy endpoint");
        } else {
          console.error("Twitter API error:", error);
        }
        console.error("Twitter API error details:", {
          bearerToken: twitterBearerToken ? "Present" : "Missing",
          username: twitterUsername,
          proxyUrl: twitterProxyUrl || "Not configured",
          errorMessage: error.message
        });
      }
    } else {
      console.warn("Twitter Bearer Token not found in environment variables");
    }

    // LinkedIn Stats - requires LinkedIn API (complex OAuth)
    // Note: LinkedIn API requires server-side OAuth, cannot be done client-side
    const linkedinAccessToken = import.meta.env.VITE_LINKEDIN_ACCESS_TOKEN;
    const linkedinCompanyId = import.meta.env.VITE_LINKEDIN_COMPANY_ID;
    
    if (linkedinAccessToken && linkedinCompanyId) {
      try {
        const response = await fetch(
          `https://api.linkedin.com/v2/organizations/${linkedinCompanyId}?projection=(id,name,numFollowers)`,
          {
            headers: {
              'Authorization': `Bearer ${linkedinAccessToken}`
            }
          }
        );
        const data = await response.json();
        if (data.numFollowers) {
          stats.linkedin.followers = formatNumber(parseInt(data.numFollowers));
        }
      } catch (error) {
        console.error("LinkedIn API error:", error);
      }
    }

    // Spotify Stats - requires Spotify Web API
    // Note: This requires OAuth flow which is complex for client-side
    // For now, you'd need a backend service to handle this
    const spotifyClientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const spotifyClientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
    const spotifyShowId = import.meta.env.VITE_SPOTIFY_SHOW_ID;
    
    if (spotifyClientId && spotifyClientSecret && spotifyShowId) {
      try {
        // Get access token first
        const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${btoa(`${spotifyClientId}:${spotifyClientSecret}`)}`
          },
          body: 'grant_type=client_credentials'
        });
        
        const tokenData = await tokenResponse.json();
        if (tokenData.access_token) {
          const showResponse = await fetch(
            `https://api.spotify.com/v1/shows/${spotifyShowId}`,
            {
              headers: {
                'Authorization': `Bearer ${tokenData.access_token}`
              }
            }
          );
          const showData = await showResponse.json();
          if (showData.followers && showData.followers.total) {
            stats.spotify.listeners = formatNumber(parseInt(showData.followers.total));
          }
        }
      } catch (error) {
        console.error("Spotify API error:", error);
      }
    }

    // TikTok Stats - requires TikTok API (limited availability)
    // TikTok API is very restricted and requires business verification
    // For now, using placeholder

  } catch (error) {
    console.error("Error fetching social stats:", error);
  }

  // Return with fallback placeholders if API calls fail
  // Note: These are placeholders. To get real stats, configure API keys in .env file
  return {
    youtube: {
      subscribers: stats.youtube.subscribers || null, // Will show "—" if null
      views: "125K",
      videos: "48"
    },
    instagram: {
      followers: stats.instagram.followers || null,
      posts: "156"
    },
    twitter: {
      followers: stats.twitter.followers || null,
      tweets: "342"
    },
    linkedin: {
      followers: stats.linkedin.followers || null
    },
    spotify: {
      listeners: stats.spotify.listeners || null
    },
    applePodcast: {
      subscribers: stats.applePodcast.subscribers || null
    },
    tiktok: {
      followers: stats.tiktok.followers || null
    }
  };
};



