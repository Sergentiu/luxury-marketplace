"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

// Mock data for new arrivals
const newArrivals = [
  {
    id: "1",
    name: "Chanel Classic Flap Bag",
    brand: "Chanel",
    price: 8500,
    originalPrice: 10200,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    condition: "Excellent",
    category: "Bags"
  },
  {
    id: "2",
    name: "Hermès Birkin 35",
    brand: "Hermès",
    price: 45000,
    originalPrice: 55000,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    condition: "Like New",
    category: "Bags"
  },
  {
    id: "3",
    name: "Louis Vuitton Neverfull MM",
    brand: "Louis Vuitton",
    price: 1800,
    originalPrice: 2200,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    condition: "Very Good",
    category: "Bags"
  },
  {
    id: "4",
    name: "Gucci GG Marmont Shoulder Bag",
    brand: "Gucci",
    price: 1200,
    originalPrice: 1500,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    condition: "Excellent",
    category: "Bags"
  },
  {
    id: "5",
    name: "Prada Saffiano Leather Tote",
    brand: "Prada",
    price: 2200,
    originalPrice: 2800,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    condition: "Like New",
    category: "Bags"
  },
  {
    id: "6",
    name: "Dior Lady Dior Bag",
    brand: "Dior",
    price: 4800,
    originalPrice: 5800,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    condition: "Excellent",
    category: "Bags"
  }
];

export function NewArrivalsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 4;
  const maxIndex = Math.max(0, newArrivals.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const visibleItems = newArrivals.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Just In
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Discover our latest arrivals of authenticated luxury items, 
              handpicked and verified by our expert team.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={prevSlide} className="p-2">
              <ChevronLeftIcon className="h-5 w-5" />
            </Button>
            <Button variant="outline" onClick={nextSlide} className="p-2">
              <ChevronRightIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleItems.map((item) => (
            <Card key={item.id} className="group product-card-hover cursor-pointer">
              <div className="aspect-square overflow-hidden rounded-t-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <div className="mb-2">
                  <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    {item.brand}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {item.name}
                </h3>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">
                      {formatPrice(item.price)}
                    </span>
                    {item.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {formatPrice(item.originalPrice)}
                      </span>
                    )}
                  </div>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    {item.condition}
                  </span>
                </div>
                <Button asChild className="w-full">
                  <Link href={`/product/${item.id}`}>
                    View Details
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/category/bags">
              View All New Arrivals
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
