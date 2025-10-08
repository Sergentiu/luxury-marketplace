import { ProductDetail } from "@/components/product/product-detail";
import { notFound } from "next/navigation";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: id
      }
    });

    if (!product) {
      notFound();
    }

    // Parse JSON fields
    const parsedProduct = {
      ...product,
      images: JSON.parse(product.images),
      measurements: product.measurements ? JSON.parse(product.measurements) : null,
      tags: product.tags ? JSON.parse(product.tags) : []
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return <ProductDetail product={parsedProduct as any} />;
  } catch (error) {
    console.error('Error fetching product:', error);
    notFound();
  }
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params;
  
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: id
      }
    });

    if (!product) {
      return {
        title: "Product Not Found",
      };
    }

    // Parse JSON fields for metadata
    const parsedImages = JSON.parse(product.images);

    return {
      title: `${product.name} | ${product.brand} | Luxury Marketplace`,
      description: product.description,
      openGraph: {
        title: product.name,
        description: product.description,
        images: parsedImages.slice(0, 1),
      },
    };
  } catch {
    return {
      title: "Product Not Found",
    };
  }
}
