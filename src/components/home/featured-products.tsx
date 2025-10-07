"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/24/solid";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/contexts/cart-context";

// Mock data for featured products
const featuredProducts = [
  {
    id: "1",
    name: "Chanel Classic Flap Bag Black Quilted Leather",
    brand: "Chanel",
    price: 8500,
    originalPrice: 10200,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    condition: "Excellent",
    category: "Bags",
    authenticityGuaranteed: true,
    yearOfPurchase: 2021
  },
  {
    id: "2",
    name: "Hermès Birkin 35 Togo Leather",
    brand: "Hermès",
    price: 45000,
    originalPrice: 55000,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    condition: "Like New",
    category: "Bags",
    authenticityGuaranteed: true,
    yearOfPurchase: 2022
  },
  {
    id: "3",
    name: "Louis Vuitton Neverfull MM Monogram Canvas",
    brand: "Louis Vuitton",
    price: 1800,
    originalPrice: 2200,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    condition: "Very Good",
    category: "Bags",
    authenticityGuaranteed: true,
    yearOfPurchase: 2020
  },
  {
    id: "4",
    name: "Gucci GG Marmont Shoulder Bag Black",
    brand: "Gucci",
    price: 1200,
    originalPrice: 1500,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    condition: "Excellent",
    category: "Bags",
    authenticityGuaranteed: true,
    yearOfPurchase: 2023
  },
  {
    id: "5",
    name: "Prada Saffiano Leather Tote Bag",
    brand: "Prada",
    price: 2200,
    originalPrice: 2800,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    condition: "Like New",
    category: "Bags",
    authenticityGuaranteed: true,
    yearOfPurchase: 2021
  },
  {
    id: "6",
    name: "Dior Lady Dior Bag Black Cannage",
    brand: "Dior",
    price: 4800,
    originalPrice: 5800,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    condition: "Excellent",
    category: "Bags",
    authenticityGuaranteed: true,
    yearOfPurchase: 2022
  },
  {
    id: "7",
    name: "Saint Laurent Sac de Jour Tote",
    brand: "Saint Laurent",
    price: 3200,
    originalPrice: 3800,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    condition: "Very Good",
    category: "Bags",
    authenticityGuaranteed: true,
    yearOfPurchase: 2020
  },
  {
    id: "8",
    name: "Balenciaga City Bag Black Leather",
    brand: "Balenciaga",
    price: 1800,
    originalPrice: 2200,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    condition: "Excellent",
    category: "Bags",
    authenticityGuaranteed: true,
    yearOfPurchase: 2023
  }
];

export function FeaturedProducts() {
  const { addToWishlist, removeFromWishlist, isInWishlist, addToCart } = useCart();

  const toggleWishlist = (product: Record<string, unknown>) => {
    if (isInWishlist(product.id as string)) {
      removeFromWishlist(product.id as string);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (product: Record<string, unknown>) => {
    addToCart(product);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Handpicked luxury items that represent the best of our collection. 
            Each piece is authenticated and comes with our comprehensive guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group product-card-hover cursor-pointer relative">
              {/* Wishlist button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleWishlist(product);
              }}
              className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              {isInWishlist(product.id) ? (
                <HeartSolidIcon className="h-5 w-5 text-red-500" />
              ) : (
                <HeartIcon className="h-5 w-5 text-gray-600" />
              )}
            </button>

              <Link href={`/product/${product.id}`}>
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <Image
                    src={product.image as string}
                    alt={product.name as string}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardContent className="p-4">
                  <div className="mb-2">
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      {product.brand}
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-gray-900">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      {product.condition}
                    </span>
                    <span className="text-xs text-gray-500">
                      {product.yearOfPurchase}
                    </span>
                  </div>
                  
                  {product.authenticityGuaranteed && (
                    <div className="flex items-center mb-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-xs text-green-700 font-medium">
                        Authenticity Guaranteed
                      </span>
                    </div>
                  )}
                  
                  <Button 
                    className="w-full" 
                    size="sm"
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddToCart(product);
                    }}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/products">
              View All Products
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
