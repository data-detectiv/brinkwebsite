# Twitter/X API Troubleshooting Guide

## Common Issues and Solutions

### Issue: Stats Not Showing Despite Having API Keys

#### 1. Check Environment Variables
Make sure your `.env` file has:
```
VITE_TWITTER_BEARER_TOKEN=your_bearer_token_here
VITE_TWITTER_USERNAME=BGodbless25
```

**Important:** 
- The username should NOT include the `@` symbol (e.g., use `BGodbless25` not `@BGodbless25`)
- After adding/updating `.env` file, **restart your development server**

#### 2. Verify Bearer Token Format
Your bearer token should look like:
```
AAAAAAAAAAAAAAAAAAAAA...
```
It should be a long string starting with letters/numbers.

#### 3. Check Browser Console
Open your browser's Developer Tools (F12) and check the Console tab for:
- Any error messages
- "Twitter API response:" logs
- "Twitter followers fetched:" logs

#### 4. Verify API Permissions
In your Twitter Developer Portal:
1. Go to your App settings
2. Check **App permissions**
3. Ensure you have **Read** permissions enabled
4. For follower counts, you need at least **Read** access

#### 5. Check API Rate Limits
Twitter API v2 has rate limits:
- **Free tier**: 15 requests per 15 minutes per user
- If you've exceeded limits, wait 15 minutes and try again

#### 6. Verify Username is Correct
- Make sure the username exists on Twitter/X
- Try accessing the profile directly: `https://twitter.com/BGodbless25`
- The username is case-sensitive

#### 7. CORS Issues
If you see CORS errors in the console:
- Twitter API v2 should work from browsers with bearer tokens
- If CORS is blocking, you may need a backend proxy (see below)

## Testing Your API Keys

### Test 1: Check if Bearer Token is Loaded
Open browser console and run:
```javascript
console.log("Bearer Token:", import.meta.env.VITE_TWITTER_BEARER_TOKEN ? "Present" : "Missing");
console.log("Username:", import.meta.env.VITE_TWITTER_USERNAME);
```

### Test 2: Manual API Call
You can test the API directly using curl or Postman:
```bash
curl "https://api.twitter.com/2/users/by/username/BGodbless25?user.fields=public_metrics" \
  -H "Authorization: Bearer YOUR_BEARER_TOKEN"
```

Expected response:
```json
{
  "data": {
    "id": "...",
    "name": "...",
    "username": "BGodbless25",
    "public_metrics": {
      "followers_count": 1234,
      "following_count": 567,
      "tweet_count": 890
    }
  }
}
```

## If Still Not Working

### Option 1: Use Backend Proxy (Recommended for Production)
Twitter API can have CORS issues. Create a simple backend endpoint that:
1. Receives the request from your frontend
2. Makes the Twitter API call server-side
3. Returns the data to your frontend

### Option 2: Check Twitter Developer Portal
1. Go to https://developer.twitter.com/en/portal/dashboard
2. Check your app's status
3. Verify your bearer token is active
4. Check if your app has been suspended

### Option 3: Regenerate Bearer Token
1. Go to Twitter Developer Portal
2. Navigate to your app
3. Go to **Keys and tokens**
4. Regenerate your Bearer Token
5. Update your `.env` file
6. Restart your dev server

## Debugging Steps

1. **Check Console Logs**: Look for "Twitter API response:" in browser console
2. **Verify Environment Variables**: Make sure they're loaded correctly
3. **Test API Directly**: Use curl/Postman to verify your token works
4. **Check Network Tab**: In browser DevTools, check if the API request is being made
5. **Verify Response**: Check if the API returns data but it's not being parsed correctly

## Expected Console Output

When working correctly, you should see:
```
Twitter API response: {data: {...}, ...}
Twitter followers fetched: 1.2K
Social stats fetched: {twitter: {followers: "1.2K"}, ...}
```

If you see errors, they will help identify the issue.

