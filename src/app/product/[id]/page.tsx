import { ProductDetail } from "@/components/product/product-detail";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  
  try {
    const response = await fetch(`${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/products/${id}`, {
      cache: 'no-store' // Ensure we get fresh data
    });

    if (!response.ok) {
      notFound();
    }

    const product = await response.json();

    return <ProductDetail product={product} />;
  } catch (error) {
    console.error('Error fetching product:', error);
    notFound();
  }
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params;
  
  try {
    const response = await fetch(`${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/products/${id}`, {
      cache: 'no-store'
    });

    if (!response.ok) {
      return {
        title: "Product Not Found",
      };
    }

    const product = await response.json();

    return {
      title: `${product.name} | ${product.brand} | Luxury Marketplace`,
      description: product.description,
      openGraph: {
        title: product.name,
        description: product.description,
        images: product.images.slice(0, 1),
      },
    };
  } catch (error) {
    return {
      title: "Product Not Found",
    };
  }
}
