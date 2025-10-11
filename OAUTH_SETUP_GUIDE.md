# OAuth Setup Guide

This guide will help you set up Google and Facebook OAuth authentication for your luxury marketplace.

## Prerequisites

1. Make sure you have copied `env.example` to `.env.local`:
   ```bash
   cp env.example .env.local
   ```

2. Generate a secure secret for NextAuth:
   ```bash
   openssl rand -base64 32
   ```
   Copy the output and use it as your `NEXTAUTH_SECRET` in `.env.local`.

## Google OAuth Setup

### Step 1: Create Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" → "New Project"
3. Enter project name: "Luxury Marketplace" (or your preferred name)
4. Click "Create"

### Step 2: Enable Google+ API
1. In the Google Cloud Console, go to "APIs & Services" → "Library"
2. Search for "Google+ API"
3. Click on it and press "Enable"

### Step 3: Create OAuth 2.0 Credentials
1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "OAuth 2.0 Client IDs"
3. If prompted, configure the OAuth consent screen:
   - Choose "External" user type
   - Fill in required fields (App name, User support email, Developer contact)
   - Add your email to test users
4. For the OAuth client:
   - Application type: "Web application"
   - Name: "Luxury Marketplace Web Client"
   - Authorized redirect URIs:
     - `http://localhost:3000/api/auth/callback/google` (for development)
     - `https://yourdomain.com/api/auth/callback/google` (for production)
5. Click "Create"
6. Copy the Client ID and Client Secret to your `.env.local` file

## Facebook OAuth Setup

### Step 1: Create Facebook App
1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click "My Apps" → "Create App"
3. Choose "Consumer" or "Other" as app type
4. Fill in app details:
   - App name: "Luxury Marketplace"
   - App contact email: your email
   - App purpose: Select appropriate category

### Step 2: Add Facebook Login
1. In your app dashboard, go to "Products"
2. Find "Facebook Login" and click "Set Up"
3. Choose "Web" platform
4. Enter your site URL: `http://localhost:3000`

### Step 3: Configure OAuth Settings
1. Go to "Facebook Login" → "Settings"
2. Add valid OAuth redirect URIs:
   - `http://localhost:3000/api/auth/callback/facebook` (for development)
   - `https://yourdomain.com/api/auth/callback/facebook` (for production)
3. Save changes

### Step 4: Get App Credentials
1. Go to "Settings" → "Basic"
2. Copy your "App ID" and "App Secret"
3. Add them to your `.env.local` file as `FACEBOOK_CLIENT_ID` and `FACEBOOK_CLIENT_SECRET`

## Environment Variables

Update your `.env.local` file with the credentials you obtained:

```env
# NextAuth.js Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-generated-secret-here

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Facebook OAuth
FACEBOOK_CLIENT_ID=your-facebook-app-id
FACEBOOK_CLIENT_SECRET=your-facebook-app-secret
```

## Testing the Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000/authentication`

3. Try logging in with Google or Facebook

4. Check the browser console and terminal for any error messages

## Troubleshooting

### Common Issues:

1. **"Invalid client" error**: Check that your client ID and secret are correct
2. **"Redirect URI mismatch"**: Ensure the redirect URIs in your OAuth apps match exactly
3. **"App not verified"**: For development, add your email as a test user in Google/Facebook console
4. **CORS errors**: Make sure your `NEXTAUTH_URL` matches your development URL

### For Production:

1. Update `NEXTAUTH_URL` to your production domain
2. Add production redirect URIs to both Google and Facebook apps
3. Use environment variables in your hosting platform (Vercel, Netlify, etc.)
4. Consider using a stronger `NEXTAUTH_SECRET` in production

## Security Notes

- Never commit your `.env.local` file to version control
- Use different OAuth apps for development and production
- Regularly rotate your OAuth secrets
- Monitor your OAuth usage in both Google Cloud Console and Facebook Developers

## Next Steps

Once OAuth is working, you may want to:
1. Add user profile data to your database
2. Implement role-based access control
3. Add more OAuth providers (GitHub, LinkedIn, etc.)
4. Customize the authentication UI
