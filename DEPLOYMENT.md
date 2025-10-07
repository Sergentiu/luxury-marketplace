# Deployment Guide - Luxury Marketplace

## 🚀 Quick Deployment Options

### Option 1: Vercel + Neon (Recommended)

#### 1. Database Setup (Neon)
1. Go to [Neon Console](https://console.neon.tech/)
2. Sign up with GitHub
3. Create a new project
4. Copy the connection string (it looks like: `postgresql://username:password@host/database?sslmode=require`)
5. Save it as `DATABASE_URL` in your environment variables

#### 2. Deploy to Vercel
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/) and import your GitHub repo
3. Add environment variables in Vercel dashboard:
   ```
   NEXTAUTH_URL=https://your-domain.vercel.app
   NEXTAUTH_SECRET=your-random-secret-key
   DATABASE_URL=postgresql://username:password@host/database?sslmode=require
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_stripe_key
   STRIPE_SECRET_KEY=sk_live_your_stripe_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   FACEBOOK_CLIENT_ID=your_facebook_app_id
   FACEBOOK_CLIENT_SECRET=your_facebook_app_secret
   ```
4. Deploy!

### Option 2: Railway (All-in-One)

#### 1. Deploy with Railway
1. Go to [Railway](https://railway.app/)
2. Connect your GitHub repo
3. Railway will automatically:
   - Create a PostgreSQL database
   - Deploy your Next.js app
   - Set up environment variables

#### 2. Configure Environment Variables
Add these in Railway dashboard:
```
NEXTAUTH_URL=https://your-app.railway.app
NEXTAUTH_SECRET=your-random-secret-key
DATABASE_URL=postgresql://username:password@host/database
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_stripe_key
STRIPE_SECRET_KEY=sk_live_your_stripe_secret
```

### Option 3: Netlify + Supabase

#### 1. Database Setup (Supabase)
1. Go to [Supabase](https://supabase.com/)
2. Create a new project
3. Go to Settings → Database
4. Copy the connection string
5. Replace `[YOUR-PASSWORD]` with your database password

#### 2. Deploy to Netlify
1. Connect your GitHub repo to Netlify
2. Set environment variables in Netlify dashboard
3. Deploy!

## 🔧 Database Migration Steps

### For Production Database:

1. **Update Prisma Schema**:
   ```bash
   # Copy the PostgreSQL schema
   cp prisma/schema-postgres.prisma prisma/schema.prisma
   ```

2. **Generate Prisma Client**:
   ```bash
   npx prisma generate
   ```

3. **Run Database Migration**:
   ```bash
   npx prisma db push
   ```

4. **Seed Database** (Optional):
   ```bash
   npx prisma db seed
   ```

## 🌍 Environment Variables for Production

### Required Variables:
```env
# Authentication
NEXTAUTH_URL=https://your-domain.com
NEXTAUTH_SECRET=your-super-secret-key-at-least-32-characters

# Database
DATABASE_URL=postgresql://username:password@host:port/database?sslmode=require

# Stripe (Production Keys)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_live_publishable_key
STRIPE_SECRET_KEY=sk_live_your_live_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# OAuth (Optional)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
FACEBOOK_CLIENT_ID=your_facebook_app_id
FACEBOOK_CLIENT_SECRET=your_facebook_app_secret
```

## 📊 Database Hosting Comparison

| Provider | Free Tier | Ease of Setup | Performance | Best For |
|----------|-----------|---------------|-------------|----------|
| **Neon** | 3GB storage, 10GB transfer | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Next.js apps |
| **Supabase** | 500MB database, 2GB bandwidth | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Full-stack apps |
| **Railway** | $5/month after trial | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | All-in-one |
| **PlanetScale** | 1GB storage, 1B reads | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | High-traffic |
| **AWS RDS** | 750 hours/month | ⭐⭐ | ⭐⭐⭐⭐⭐ | Enterprise |

## 🎯 My Recommendation: Neon + Vercel

**Why this combination:**
- ✅ **Free tier** covers most small-medium projects
- ✅ **Serverless PostgreSQL** scales automatically
- ✅ **Built for Next.js** with excellent performance
- ✅ **Easy setup** - just copy the connection string
- ✅ **Great developer experience**
- ✅ **Reliable and fast**

## 🚀 Step-by-Step Deployment (Neon + Vercel)

### Step 1: Set up Neon Database
1. Go to [Neon Console](https://console.neon.tech/)
2. Click "Create Project"
3. Choose a name: "luxury-marketplace"
4. Copy the connection string

### Step 2: Update Your Code
1. Replace `prisma/schema.prisma` with the PostgreSQL version:
   ```bash
   cp prisma/schema-postgres.prisma prisma/schema.prisma
   ```

2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Prepare for production deployment"
   git push
   ```

### Step 3: Deploy to Vercel
1. Go to [Vercel](https://vercel.com/)
2. Click "Import Project"
3. Select your GitHub repository
4. Add environment variables:
   - `DATABASE_URL`: Your Neon connection string
   - `NEXTAUTH_URL`: Will be auto-filled
   - `NEXTAUTH_SECRET`: Generate a random string
   - Stripe keys (use live keys for production)
   - OAuth keys (if using social login)

### Step 4: Deploy and Test
1. Click "Deploy"
2. Wait for deployment to complete
3. Run database migration:
   ```bash
   npx prisma db push --schema=./prisma/schema.prisma
   ```
4. Test your live application!

## 🔒 Security Checklist

- [ ] Use HTTPS in production
- [ ] Set strong NEXTAUTH_SECRET (32+ characters)
- [ ] Use Stripe live keys for production
- [ ] Enable SSL for database connections
- [ ] Set up proper CORS policies
- [ ] Use environment variables for all secrets
- [ ] Enable database backups

## 📈 Monitoring & Maintenance

### Recommended Tools:
- **Vercel Analytics**: Built-in performance monitoring
- **Sentry**: Error tracking and performance monitoring
- **Stripe Dashboard**: Payment monitoring
- **Neon Dashboard**: Database performance

### Regular Tasks:
- Monitor database performance
- Check error logs
- Update dependencies monthly
- Backup database weekly
- Monitor Stripe transactions

## 💰 Cost Estimation

### Small Project (< 1000 users/month):
- **Neon**: Free
- **Vercel**: Free (Pro plan $20/month for better performance)
- **Stripe**: 2.9% + 30¢ per transaction
- **Total**: $0-20/month

### Medium Project (1000-10000 users/month):
- **Neon**: $19/month (Pro plan)
- **Vercel**: $20/month (Pro plan)
- **Stripe**: 2.9% + 30¢ per transaction
- **Total**: $39/month + transaction fees

This setup will give you a production-ready, scalable luxury marketplace!
