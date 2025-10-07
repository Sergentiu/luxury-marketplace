@echo off
echo 🚀 Setting up production database...

REM Check if DATABASE_URL is set
if "%DATABASE_URL%"=="" (
    echo ❌ Error: DATABASE_URL environment variable is not set
    echo Please set your PostgreSQL connection string:
    echo set DATABASE_URL=postgresql://username:password@host:port/database?sslmode=require
    pause
    exit /b 1
)

REM Update Prisma schema for PostgreSQL
echo 📝 Updating Prisma schema for PostgreSQL...
copy prisma\schema-postgres.prisma prisma\schema.prisma

REM Generate Prisma client
echo 🔧 Generating Prisma client...
npx prisma generate

REM Push schema to database
echo 🗄️  Pushing schema to production database...
npx prisma db push

echo ✅ Production database setup complete!
echo 🌐 Your app is ready for deployment!
pause
