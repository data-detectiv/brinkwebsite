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
        // Try with channel handle first (for @username)
        let channelId = youtubeChannelId.replace('@', '');
        let url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&forUsername=${channelId}&key=${youtubeApiKey}`;
        
        let response = await fetch(url);
        let data = await response.json();
        
        // If forUsername doesn't work, try with channel ID directly
        if (!data.items || data.items.length === 0) {
          // Try as channel ID
          url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${youtubeApiKey}`;
          response = await fetch(url);
          data = await response.json();
        }
        
        if (data.items && data.items[0] && data.items[0].statistics) {
          const subscriberCount = parseInt(data.items[0].statistics.subscriberCount);
          if (!isNaN(subscriberCount)) {
            stats.youtube.subscribers = formatNumber(subscriberCount);
          }
        }
      } catch (error) {
        console.error("YouTube API error:", error);
      }
    }

    // Instagram Stats - requires Meta Graph API
    const instagramAccessToken = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;
    const instagramUserId = import.meta.env.VITE_INSTAGRAM_USER_ID;
    
    if (instagramAccessToken && instagramUserId) {
      try {
        const response = await fetch(
          `https://graph.instagram.com/${instagramUserId}?fields=followers_count,media_count&access_token=${instagramAccessToken}`
        );
        const data = await response.json();
        if (data.followers_count) {
          stats.instagram.followers = formatNumber(parseInt(data.followers_count));
        }
      } catch (error) {
        console.error("Instagram API error:", error);
      }
    }

    // Twitter/X Stats - requires Twitter API v2
    const twitterBearerToken = import.meta.env.VITE_TWITTER_BEARER_TOKEN;
    const twitterUsername = import.meta.env.VITE_TWITTER_USERNAME || "BGodbless25";
    
    if (twitterBearerToken) {
      try {
        // Get user with metrics in one call
        const userResponse = await fetch(
          `https://api.twitter.com/2/users/by/username/${twitterUsername}?user.fields=public_metrics`,
          {
            headers: {
              'Authorization': `Bearer ${twitterBearerToken}`
            }
          }
        );
        const userData = await userResponse.json();
        if (userData.data && userData.data.public_metrics) {
          const followersCount = userData.data.public_metrics.followers_count;
          if (followersCount) {
            stats.twitter.followers = formatNumber(parseInt(followersCount));
          }
        }
      } catch (error) {
        console.error("Twitter API error:", error);
      }
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



