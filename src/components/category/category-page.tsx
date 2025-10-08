"use client";

import { useState } from "react";
import { ProductCategory, ProductCondition, ProductFilters, SortOption } from "@/types";
import { CategoryFilters } from "./category-filters";
import { ProductGrid } from "./product-grid";
import { CategoryHeader } from "./category-header";
import { useProducts } from "@/hooks/use-products";

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
    searchParams.sort as SortOption || SortOption.NEWEST
  );

  const { products: fetchedProducts, loading } = useProducts({ category });

  // Apply filters and sorting to fetched products
  const filteredProducts = fetchedProducts.filter(product => {
    if (filters.brand && filters.brand.length > 0 && !filters.brand.includes(product.brand)) {
      return false;
    }
    if (filters.condition && filters.condition.length > 0 && !filters.condition.includes(product.condition as ProductCondition)) {
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
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case SortOption.PRICE_LOW_TO_HIGH:
        return a.price - b.price;
      case SortOption.PRICE_HIGH_TO_LOW:
        return b.price - a.price;
      case SortOption.NEWEST:
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      case SortOption.OLDEST:
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      case SortOption.ALPHABETICAL:
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const handleFiltersChange = (newFilters: ProductFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <CategoryHeader category={category} productCount={sortedProducts.length} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <CategoryFilters
              filters={filters}
              onFilterChange={handleFiltersChange}
              category={category}
            />
          </div>
          
          {/* Products Grid */}
          <div className="lg:w-3/4">
            <ProductGrid 
              products={sortedProducts} 
              loading={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}