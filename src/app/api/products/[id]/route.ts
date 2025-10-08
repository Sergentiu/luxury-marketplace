import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const product = await prisma.product.findUnique({
      where: {
        id: id
      }
    });

    if (!product) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    // Parse JSON fields
    const parsedProduct = {
      ...product,
      images: JSON.parse(product.images),
      measurements: product.measurements ? JSON.parse(product.measurements) : null,
      tags: product.tags ? JSON.parse(product.tags) : []
    };

    return NextResponse.json(parsedProduct);
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json(
      { error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}
