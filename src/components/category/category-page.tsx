"use client";

import { useState, useEffect } from "react";
import { ProductCategory, ProductCondition, ProductFilters, SortOption } from "@/types";
import { CategoryFilters } from "./category-filters";
import { ProductGrid } from "./product-grid";
import { CategoryHeader } from "./category-header";

interface CategoryPageProps {
  category: ProductCategory;
  searchParams: {
    brand?: string;
    condition?: string;
    price_min?: string;
    price_max?: string;
    sort?: string;
    page?: string;
  };
}

export function CategoryPage({ category, searchParams }: CategoryPageProps) {
  const [filters, setFilters] = useState<ProductFilters>({
    brand: searchParams.brand ? [searchParams.brand] : [],
    condition: searchParams.condition ? [searchParams.condition as ProductCondition] : [],
    priceRange: searchParams.price_min && searchParams.price_max ? {
      min: parseInt(searchParams.price_min),
      max: parseInt(searchParams.price_max)
    } : undefined,
  });

  const [sortBy, setSortBy] = useState<SortOption>(
    (searchParams.sort as SortOption) || SortOption.NEWEST
  );

  const [products, setProducts] = useState<Record<string, unknown>[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock data for demonstration
  useEffect(() => {
    const mockProducts = [
      {
        id: "1",
        name: "Chanel Classic Flap Bag",
        brand: "Chanel",
        category: category,
        price: 8500,
        originalPrice: 10200,
        condition: ProductCondition.EXCELLENT,
        image: "https://picsum.photos/800/800?random=1",
        authenticityGuaranteed: true,
        createdAt: new Date("2024-01-15")
      },
      {
        id: "2",
        name: "Hermès Birkin 35",
        brand: "Hermès",
        category: category,
        price: 45000,
        originalPrice: 55000,
        condition: ProductCondition.LIKE_NEW,
        image: "https://picsum.photos/800/800?random=2",
        authenticityGuaranteed: true,
        createdAt: new Date("2024-01-10")
      },
      {
        id: "3",
        name: "Louis Vuitton Neverfull MM",
        brand: "Louis Vuitton",
        category: category,
        price: 1800,
        originalPrice: 2200,
        condition: ProductCondition.VERY_GOOD,
        image: "https://picsum.photos/800/800?random=1",
        authenticityGuaranteed: true,
        createdAt: new Date("2024-01-08")
      },
      {
        id: "4",
        name: "Gucci GG Marmont Shoulder Bag",
        brand: "Gucci",
        category: category,
        price: 1200,
        originalPrice: 1500,
        condition: ProductCondition.EXCELLENT,
        image: "https://picsum.photos/800/800?random=2",
        authenticityGuaranteed: true,
        createdAt: new Date("2024-01-05")
      },
      {
        id: "5",
        name: "Prada Saffiano Leather Tote",
        brand: "Prada",
        category: category,
        price: 2200,
        originalPrice: 2800,
        condition: ProductCondition.LIKE_NEW,
        image: "https://picsum.photos/800/800?random=1",
        authenticityGuaranteed: true,
        createdAt: new Date("2024-01-03")
      },
      {
        id: "6",
        name: "Dior Lady Dior Bag",
        brand: "Dior",
        category: category,
        price: 4800,
        originalPrice: 5800,
        condition: ProductCondition.EXCELLENT,
        image: "https://picsum.photos/800/800?random=2",
        authenticityGuaranteed: true,
        createdAt: new Date("2024-01-01")
      }
    ];

    // Filter products based on current filters
    const filteredProducts = mockProducts.filter(product => {
      if (filters.brand && filters.brand.length > 0 && !filters.brand.includes(product.brand)) {
        return false;
      }
      if (filters.condition && filters.condition.length > 0 && !filters.condition.includes(product.condition)) {
        return false;
      }
      if (filters.priceRange) {
        if (product.price < filters.priceRange.min || product.price > filters.priceRange.max) {
          return false;
        }
      }
      return true;
    });

    // Sort products
    filteredProducts.sort((a, b) => {
      switch (sortBy) {
        case SortOption.PRICE_LOW_TO_HIGH:
          return a.price - b.price;
        case SortOption.PRICE_HIGH_TO_LOW:
          return b.price - a.price;
        case SortOption.NEWEST:
          return b.createdAt.getTime() - a.createdAt.getTime();
        case SortOption.OLDEST:
          return a.createdAt.getTime() - b.createdAt.getTime();
        case SortOption.ALPHABETICAL:
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    setProducts(filteredProducts);
    setLoading(false);
  }, [category, filters, sortBy]);

  const handleFilterChange = (newFilters: ProductFilters) => {
    setFilters(newFilters);
  };

  const handleSortChange = (newSort: SortOption) => {
    setSortBy(newSort);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <div className="h-96 bg-gray-300 rounded"></div>
              </div>
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-80 bg-gray-300 rounded"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CategoryHeader category={category} productCount={products.length} />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          <div className="lg:col-span-1">
            <CategoryFilters
              filters={filters}
              onFilterChange={handleFilterChange}
              category={category}
            />
          </div>
          
          <div className="lg:col-span-3">
            <ProductGrid
              products={products}
              sortBy={sortBy}
              onSortChange={handleSortChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
