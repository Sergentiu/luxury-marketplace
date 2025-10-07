"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeartIcon, HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/contexts/cart-context";

export function WishlistPage() {
  const { state, removeFromWishlist, addToCart, clearWishlist } = useCart();
  const { wishlist } = state;

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="text-gray-400 text-6xl mb-4">💖</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your wishlist is empty</h1>
            <p className="text-gray-600 mb-8">
              Start adding items you love to your wishlist.
            </p>
            <Button asChild size="lg">
              <Link href="/category/bags">
                Start Shopping
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Wishlist</h1>
          <Button 
            variant="outline" 
            onClick={clearWishlist}
            className="text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            Clear All
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <Card key={item.id} className="group product-card-hover cursor-pointer relative">
              {/* Remove from wishlist button */}
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
              >
                <HeartSolid className="h-5 w-5 text-red-500" />
              </button>

              <Link href={`/product/${item.product.id}`}>
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardContent className="p-4">
                  <div className="mb-2">
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      {item.product.brand}
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm">
                    {item.product.name}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-gray-900">
                        {formatPrice(item.product.price)}
                      </span>
                      {item.product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {formatPrice(item.product.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      {item.product.condition}
                    </span>
                    {item.product.authenticityGuaranteed && (
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                        <span className="text-xs text-green-700 font-medium">
                          Authentic
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <Button 
                    className="w-full" 
                    size="sm"
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(item.product);
                    }}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} in your wishlist
              </h3>
              <p className="text-gray-600">
                Save items you love for later
              </p>
            </div>
            <div className="flex space-x-4">
              <Button asChild variant="outline">
                <Link href="/category/bags">
                  Continue Shopping
                </Link>
              </Button>
              <Button asChild>
                <Link href="/cart">
                  View Cart
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
