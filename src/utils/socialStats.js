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
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=statistics&forUsername=${youtubeChannelId.replace('@', '')}&key=${youtubeApiKey}`
        );
        const data = await response.json();
        if (data.items && data.items[0]) {
          stats.youtube.subscribers = formatNumber(parseInt(data.items[0].statistics.subscriberCount));
        }
      } catch (error) {
        console.log("YouTube API error:", error);
      }
    }

    // Instagram Stats - requires Meta Graph API (complex setup)
    // For now, using placeholder. To implement:
    // 1. Create a Facebook App
    // 2. Get access token
    // 3. Use Graph API: GET /{ig-user-id}?fields=followers_count
    const instagramAccessToken = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;
    if (instagramAccessToken) {
      // Implementation would go here
    }

    // Twitter/X Stats - requires Twitter API v2
    const twitterBearerToken = import.meta.env.VITE_TWITTER_BEARER_TOKEN;
    const twitterUsername = "BGodbless25";
    if (twitterBearerToken) {
      try {
        // First get user ID
        const userResponse = await fetch(
          `https://api.twitter.com/2/users/by/username/${twitterUsername}`,
          {
            headers: {
              'Authorization': `Bearer ${twitterBearerToken}`
            }
          }
        );
        const userData = await userResponse.json();
        if (userData.data) {
          const userResponse2 = await fetch(
            `https://api.twitter.com/2/users/${userData.data.id}?user.fields=public_metrics`,
            {
              headers: {
                'Authorization': `Bearer ${twitterBearerToken}`
              }
            }
          );
          const metricsData = await userResponse2.json();
          if (metricsData.data) {
            stats.twitter.followers = formatNumber(metricsData.data.public_metrics?.followers_count);
          }
        }
      } catch (error) {
        console.log("Twitter API error:", error);
      }
    }

    // LinkedIn Stats - requires LinkedIn API (complex OAuth)
    // For now, using placeholder

    // Spotify Stats - requires Spotify Web API
    const spotifyClientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const spotifyClientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
    if (spotifyClientId && spotifyClientSecret) {
      // Implementation would require OAuth flow
    }

    // TikTok Stats - requires TikTok API (limited availability)
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



