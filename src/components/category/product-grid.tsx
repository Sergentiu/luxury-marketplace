"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import { SortOption } from "@/types";
import { 
  Squares2X2Icon,
  ListBulletIcon
} from "@heroicons/react/24/outline";

interface ProductGridProps {
  products: Record<string, unknown>[];
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
}

const sortOptions = [
  { value: SortOption.NEWEST, label: "Newest First" },
  { value: SortOption.PRICE_LOW_TO_HIGH, label: "Price: Low to High" },
  { value: SortOption.PRICE_HIGH_TO_LOW, label: "Price: High to Low" },
  { value: SortOption.ALPHABETICAL, label: "Alphabetical" },
];

export function ProductGrid({ products, sortBy, onSortChange }: ProductGridProps) {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  // Sort label function removed as it's unused

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-6xl mb-4">🔍</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
        <p className="text-gray-600 mb-6">
          Try adjusting your filters to see more results.
        </p>
        <Button variant="outline" onClick={() => window.location.reload()}>
          Clear Filters
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">
            {products.length} {products.length === 1 ? 'item' : 'items'}
          </span>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as SortOption)}
              className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">View:</span>
          <div className="flex border border-gray-300 rounded-md">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 ${viewMode === "grid" ? "bg-primary text-primary-foreground" : "text-gray-600 hover:bg-gray-100"}`}
            >
              <Squares2X2Icon className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 ${viewMode === "list" ? "bg-primary text-primary-foreground" : "text-gray-600 hover:bg-gray-100"}`}
            >
              <ListBulletIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className={
        viewMode === "grid" 
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          : "space-y-4"
      }>
        {products.map((product) => (
          <Card key={product.id as string} className="group product-card-hover cursor-pointer relative">
            {/* Wishlist button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleWishlist(product.id as string);
              }}
              className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              {wishlist.includes(product.id as string) ? (
                <HeartSolid className="h-5 w-5 text-red-500" />
              ) : (
                <HeartIcon className="h-5 w-5 text-gray-600" />
              )}
            </button>

            <Link href={`/product/${product.id as string}`}>
              <div className={viewMode === "grid" ? "aspect-square overflow-hidden rounded-t-lg" : "flex"}>
                <Image
                  src={product.image as string}
                  alt={product.name as string}
                  width={viewMode === "grid" ? 300 : 128}
                  height={viewMode === "grid" ? 300 : 128}
                  className={
                    viewMode === "grid" 
                      ? "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      : "w-32 h-32 object-cover rounded-l-lg flex-shrink-0"
                  }
                />
                
                <CardContent className={viewMode === "grid" ? "p-4" : "flex-1 p-4"}>
                  <div className="mb-2">
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      {product.brand as string}
                    </span>
                  </div>
                  
                  <h3 className={`font-semibold text-gray-900 mb-2 ${viewMode === "grid" ? "line-clamp-2 text-sm" : "text-base"}`}>
                    {product.name as string}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-gray-900">
                        {formatPrice(product.price as number)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {formatPrice(product.originalPrice as number)}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      {product.condition as string}
                    </span>
                    {product.authenticityGuaranteed && (
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                        <span className="text-xs text-green-700 font-medium">
                          Authentic
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <Button className={viewMode === "grid" ? "w-full" : "w-auto"} size="sm">
                    {viewMode === "grid" ? "Add to Cart" : "View Details"}
                  </Button>
                </CardContent>
              </div>
            </Link>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      {products.length > 0 && (
        <div className="flex justify-center items-center space-x-4 pt-8">
          <Button variant="outline" disabled>
            Previous
          </Button>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((page) => (
              <Button
                key={page}
                variant={page === 1 ? "default" : "outline"}
                size="sm"
                className="w-10 h-10"
              >
                {page}
              </Button>
            ))}
          </div>
          <Button variant="outline">
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
