import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const limit = searchParams.get("limit");

    let whereClause = {};
    if (category && category !== "all") {
      whereClause = { category: category.toUpperCase() };
    }

    const products = await prisma.product.findMany({
      where: {
        ...whereClause,
        status: "ACTIVE"
      },
      take: limit ? parseInt(limit) : undefined,
      orderBy: {
        createdAt: "desc"
      }
    });

    // Parse JSON fields
    const parsedProducts = products.map(product => ({
      ...product,
      images: JSON.parse(product.images),
      measurements: product.measurements ? JSON.parse(product.measurements) : null,
      tags: product.tags ? JSON.parse(product.tags) : []
    }));

    return NextResponse.json(parsedProducts);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
