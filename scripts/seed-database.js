const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Create sample products
  const products = [
    {
      id: 'prod-1',
      name: 'Chanel Classic Flap Bag Black Quilted Leather',
      brand: 'Chanel',
      category: 'BAGS',
      price: 8500,
      originalPrice: 10200,
      condition: 'EXCELLENT',
      description: 'This iconic Chanel Classic Flap Bag features the signature quilted leather design with a gold chain strap. The bag is in excellent condition with minimal signs of wear.',
      images: JSON.stringify([
        'https://picsum.photos/800/800?random=1',
        'https://picsum.photos/800/800?random=2',
        'https://picsum.photos/800/800?random=3',
        'https://picsum.photos/800/800?random=4'
      ]),
      authenticityGuaranteed: true,
      measurements: JSON.stringify({
        length: 25,
        width: 16,
        height: 7,
        unit: 'cm'
      }),
      color: 'Black',
      material: 'Quilted Leather',
      yearOfPurchase: 2021,
      sellerId: 'seller-1',
      status: 'ACTIVE',
      tags: JSON.stringify(['classic', 'quilted', 'gold hardware', 'chain strap']),
      sku: 'CHAN-CF-BLK-001'
    },
    {
      id: 'prod-2',
      name: 'Hermès Birkin 35 Togo Leather',
      brand: 'Hermès',
      category: 'BAGS',
      price: 45000,
      originalPrice: 55000,
      condition: 'LIKE_NEW',
      description: 'The legendary Hermès Birkin 35 in Togo leather. This timeless piece is in like-new condition and comes with authenticity guarantee.',
      images: JSON.stringify([
        'https://picsum.photos/800/800?random=5',
        'https://picsum.photos/800/800?random=6',
        'https://picsum.photos/800/800?random=7',
        'https://picsum.photos/800/800?random=8'
      ]),
      authenticityGuaranteed: true,
      measurements: JSON.stringify({
        length: 35,
        width: 25,
        height: 12,
        unit: 'cm'
      }),
      color: 'Gold',
      material: 'Togo Leather',
      yearOfPurchase: 2022,
      sellerId: 'seller-2',
      status: 'ACTIVE',
      tags: JSON.stringify(['birkin', 'togo', 'gold hardware', 'luxury']),
      sku: 'HERM-BIR-35-GLD'
    },
    {
      id: 'prod-3',
      name: 'Louis Vuitton Neverfull MM Monogram',
      brand: 'Louis Vuitton',
      category: 'BAGS',
      price: 1800,
      originalPrice: 2200,
      condition: 'VERY_GOOD',
      description: 'Classic Louis Vuitton Neverfull MM in monogram canvas. Perfect for everyday use with minimal signs of wear.',
      images: JSON.stringify([
        'https://picsum.photos/800/800?random=9',
        'https://picsum.photos/800/800?random=10',
        'https://picsum.photos/800/800?random=11',
        'https://picsum.photos/800/800?random=12'
      ]),
      authenticityGuaranteed: true,
      measurements: JSON.stringify({
        length: 32,
        width: 29,
        height: 17,
        unit: 'cm'
      }),
      color: 'Monogram',
      material: 'Canvas',
      yearOfPurchase: 2020,
      sellerId: 'seller-3',
      status: 'ACTIVE',
      tags: JSON.stringify(['neverfull', 'monogram', 'canvas', 'tote']),
      sku: 'LV-NEV-MM-MON'
    },
    {
      id: 'prod-4',
      name: 'Gucci GG Marmont Shoulder Bag',
      brand: 'Gucci',
      category: 'BAGS',
      price: 1200,
      originalPrice: 1500,
      condition: 'EXCELLENT',
      description: 'Elegant Gucci GG Marmont shoulder bag in black leather with signature GG hardware.',
      images: JSON.stringify([
        'https://picsum.photos/800/800?random=13',
        'https://picsum.photos/800/800?random=14',
        'https://picsum.photos/800/800?random=15',
        'https://picsum.photos/800/800?random=16'
      ]),
      authenticityGuaranteed: true,
      measurements: JSON.stringify({
        length: 26,
        width: 15,
        height: 7,
        unit: 'cm'
      }),
      color: 'Black',
      material: 'Leather',
      yearOfPurchase: 2023,
      sellerId: 'seller-4',
      status: 'ACTIVE',
      tags: JSON.stringify(['marmont', 'gg', 'shoulder', 'leather']),
      sku: 'GUCC-GG-MAR-BLK'
    }
  ];

  // Insert products
  for (const product of products) {
    await prisma.product.create({
      data: product
    });
    console.log(`✅ Created product: ${product.name}`);
  }

  console.log('🎉 Database seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
