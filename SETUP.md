# Luxury Marketplace Setup Guide

## Environment Variables Setup

Create a `.env.local` file in the root directory with the following variables:

```env
# NextAuth.js
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here-change-in-production

# Google OAuth (Optional - for Google login)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Facebook OAuth (Optional - for Facebook login)
FACEBOOK_CLIENT_ID=your-facebook-app-id
FACEBOOK_CLIENT_SECRET=your-facebook-app-secret

# Stripe (Required for payments)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your-stripe-publishable-key
STRIPE_SECRET_KEY=sk_test_your-stripe-secret-key
STRIPE_WEBHOOK_SECRET=whsec_your-webhook-secret

# Database
DATABASE_URL="file:./dev.db"
```

## Getting API Keys

### 1. Google OAuth Setup (Optional)
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client IDs"
5. Set authorized redirect URIs: `http://localhost:3000/api/auth/callback/google`
6. Copy Client ID and Client Secret to your `.env.local`

### 2. Facebook OAuth Setup (Optional)
1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new app
3. Add Facebook Login product
4. Set Valid OAuth Redirect URIs: `http://localhost:3000/api/auth/callback/facebook`
5. Copy App ID and App Secret to your `.env.local`

### 3. Stripe Setup (Required for Payments)
1. Go to [Stripe Dashboard](https://dashboard.stripe.com/)
2. Get your publishable key from "Developers" → "API keys"
3. Get your secret key from the same page
4. For webhooks, create a webhook endpoint pointing to your app
5. Copy the keys to your `.env.local`

## Database Setup

The database is already set up with SQLite. If you need to reset it:

```bash
npx prisma db push
```

## Running the Application

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Features Implemented

### ✅ Authentication System
- **Email/Password Registration & Login**: Full user registration and authentication
- **Google OAuth**: Sign in with Google (requires Google OAuth setup)
- **Facebook OAuth**: Sign in with Facebook (requires Facebook OAuth setup)
- **Session Management**: Persistent sessions with NextAuth.js
- **Protected Routes**: Automatic redirect to login for protected pages

### ✅ User Profile & Account Management
- **User Dashboard**: Complete profile management
- **Order History**: View past orders and order status
- **Account Settings**: Update personal information, addresses, notifications
- **Security Settings**: Change password functionality

### ✅ Shopping Cart & Wishlist
- **Add to Cart**: Functional cart with quantity management
- **Wishlist**: Save items for later with heart icon toggle
- **Cart Management**: Update quantities, remove items, clear cart
- **Persistent State**: Cart and wishlist persist across sessions

### ✅ Payment Integration
- **Stripe Integration**: Secure payment processing
- **Payment Methods**: Credit card processing
- **Checkout Flow**: Multi-step checkout with shipping and payment
- **Order Confirmation**: Success page after payment

### ✅ Navigation & User Experience
- **User Menu**: Dropdown with profile, orders, wishlist, logout
- **Cart Counter**: Live cart item count in navigation
- **Wishlist Counter**: Live wishlist count in navigation
- **Responsive Design**: Works on desktop, tablet, and mobile

## Testing the Application

### 1. User Registration/Login
- Go to `/authentication`
- Create a new account or sign in
- Test both email/password and social login (if configured)

### 2. Shopping Experience
- Browse products on homepage
- Add items to cart and wishlist
- View cart at `/cart`
- View wishlist at `/wishlist`

### 3. Checkout Process
- Add items to cart
- Go to `/checkout`
- Fill in shipping information
- Complete payment with Stripe test cards

### 4. Account Management
- Go to `/account` after logging in
- View profile, orders, payment methods
- Update account settings

## Stripe Test Cards

Use these test card numbers for testing payments:

- **Success**: 4242 4242 4242 4242
- **Decline**: 4000 0000 0000 0002
- **Requires Authentication**: 4000 0025 0000 3155

Use any future expiry date and any 3-digit CVC.

## Troubleshooting

### Common Issues

1. **"NEXTAUTH_SECRET not set"**: Add a random string to NEXTAUTH_SECRET in `.env.local`
2. **OAuth errors**: Check that redirect URIs match exactly in OAuth provider settings
3. **Stripe errors**: Verify your Stripe keys are correct and you're using test keys
4. **Database errors**: Run `npx prisma db push` to sync the database schema

### Getting Help

If you encounter issues:
1. Check the browser console for errors
2. Check the terminal for server errors
3. Verify all environment variables are set correctly
4. Ensure all dependencies are installed with `npm install`
