const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('🧹 Clearing existing products...');

  try {
    // Clear existing products
    await prisma.product.deleteMany({});
    console.log('✅ Cleared existing products');

    // Import and run the seeding script
    const { execSync } = require('child_process');
    execSync('node scripts/seed-database.js', { stdio: 'inherit' });
    
    console.log('🎉 Database reseeded successfully!');
  } catch (error) {
    console.error('❌ Error reseeding database:', error);
  }
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
