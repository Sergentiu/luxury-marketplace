#!/bin/bash

# Production Database Setup Script
echo "🚀 Setting up production database..."

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
    echo "❌ Error: DATABASE_URL environment variable is not set"
    echo "Please set your PostgreSQL connection string:"
    echo "export DATABASE_URL='postgresql://username:password@host:port/database?sslmode=require'"
    exit 1
fi

# Update Prisma schema for PostgreSQL
echo "📝 Updating Prisma schema for PostgreSQL..."
cp prisma/schema-postgres.prisma prisma/schema.prisma

# Generate Prisma client
echo "🔧 Generating Prisma client..."
npx prisma generate

# Push schema to database
echo "🗄️  Pushing schema to production database..."
npx prisma db push

echo "✅ Production database setup complete!"
echo "🌐 Your app is ready for deployment!"
