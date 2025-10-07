import { ProductDetail } from "@/components/product/product-detail";
import { notFound } from "next/navigation";
import { ProductCategory, ProductCondition, ProductStatus } from "@/types";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Mock product data - in a real app, this would come from your database
const mockProduct = {
  id: "1",
  name: "Chanel Classic Flap Bag Black Quilted Leather",
  brand: "Chanel",
  category: ProductCategory.BAGS,
  price: 8500,
  originalPrice: 10200,
  condition: ProductCondition.EXCELLENT,
  description: "This iconic Chanel Classic Flap Bag features the signature quilted leather design with a gold chain strap. The bag is in excellent condition with minimal signs of wear, making it a perfect addition to any luxury collection.",
  images: [
    "https://picsum.photos/800/800?random=1",
    "https://picsum.photos/800/800?random=2",
    "https://picsum.photos/800/800?random=3",
    "https://picsum.photos/800/800?random=4"
  ],
  authenticityGuaranteed: true,
  measurements: {
    length: 25,
    width: 16,
    height: 7,
    unit: "cm" as const
  },
  color: "Black",
  material: "Quilted Leather",
  yearOfPurchase: 2021,
  sellerId: "seller-1",
  status: ProductStatus.ACTIVE,
  createdAt: new Date("2024-01-15"),
  updatedAt: new Date("2024-01-15"),
  tags: ["classic", "quilted", "gold hardware", "chain strap"],
  sku: "CHAN-CF-BLK-001"
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  // In a real app, fetch product by ID
  const product = mockProduct.id === id ? mockProduct : null;

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params;
  const product = mockProduct.id === id ? mockProduct : null;
  
  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | ${product.brand} | Luxury Marketplace`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images.slice(0, 1),
    },
  };
}
