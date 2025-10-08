"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useProducts } from "@/hooks/use-products";

export function NewArrivalsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 4;
  const { products: newArrivals, loading, error } = useProducts({ limit: 8 });
  
  const maxIndex = Math.max(0, newArrivals.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const visibleItems = newArrivals.slice(currentIndex, currentIndex + itemsPerView);

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Just In
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Loading our latest arrivals...
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-300 rounded-lg h-64 mb-4"></div>
                <div className="bg-gray-300 rounded h-4 mb-2"></div>
                <div className="bg-gray-300 rounded h-4 w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Just In
            </h2>
            <p className="text-red-600">Error loading new arrivals: {error}</p>
          </div>
        </div>
      </section>
    );
  }

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
                <Image
                  src={item.images[0] || "https://picsum.photos/400/400"}
                  alt={item.name}
                  width={300}
                  height={300}
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
                <Link href={`/product/${item.id}`}>
                  <Button className="w-full">
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/category/bags">
            <Button variant="outline" size="lg">
              View All New Arrivals
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
