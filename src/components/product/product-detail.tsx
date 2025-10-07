"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import { ShareIcon, ShieldCheckIcon, TruckIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import { formatPrice } from "@/lib/utils";
import { Product } from "@/types";
import { useCart } from "@/contexts/cart-context";
import Image from "next/image";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart();

  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    // You could add a toast notification here
    console.log("Added to cart:", { productId: product.id, quantity });
  };

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      // Fallback to copying URL to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-white shadow-sm">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-md border-2 transition-colors ${
                    selectedImage === index ? "border-primary" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  {product.brand}
                </span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleWishlistToggle}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    {isWishlisted ? (
                      <HeartSolid className="h-6 w-6 text-red-500" />
                    ) : (
                      <HeartIcon className="h-6 w-6 text-gray-600" />
                    )}
                  </button>
                  <button
                    onClick={handleShare}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <ShareIcon className="h-6 w-6 text-gray-600" />
                  </button>
                </div>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    Save {formatPrice(product.originalPrice - product.price)}
                  </span>
                )}
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                  {product.condition}
                </span>
                {product.authenticityGuaranteed && (
                  <div className="flex items-center text-green-700">
                    <ShieldCheckIcon className="h-5 w-5 mr-1" />
                    <span className="text-sm font-medium">Authenticity Guaranteed</span>
                  </div>
                )}
              </div>
            </div>

            {/* Product Details */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Product Details</h3>
                <div className="space-y-3">
                  {product.color && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Color</span>
                      <span className="font-medium">{product.color}</span>
                    </div>
                  )}
                  {product.material && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Material</span>
                      <span className="font-medium">{product.material}</span>
                    </div>
                  )}
                  {product.yearOfPurchase && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Year of Purchase</span>
                      <span className="font-medium">{product.yearOfPurchase}</span>
                    </div>
                  )}
                  {product.measurements && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Dimensions</span>
                      <span className="font-medium">
                        {product.measurements.length} × {product.measurements.width} × {product.measurements.height} {product.measurements.unit}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-600">SKU</span>
                    <span className="font-medium">{product.sku}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Description</h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </CardContent>
            </Card>

            {/* Add to Cart */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <label className="text-sm font-medium text-gray-700">Quantity:</label>
                    <select
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value))}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>

                  <Button 
                    onClick={handleAddToCart}
                    className="w-full py-4 text-lg"
                    size="lg"
                  >
                    Add to Cart - {formatPrice(product.price * quantity)}
                  </Button>

                  <div className="flex space-x-4">
                    <Button variant="outline" className="flex-1">
                      Buy Now
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={handleWishlistToggle}
                      className="flex-1"
                    >
                      {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <TruckIcon className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">Free Shipping</p>
                <p className="text-xs text-gray-600">Orders over $500</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <ArrowUturnLeftIcon className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">30-Day Returns</p>
                <p className="text-xs text-gray-600">Hassle-free</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <ShieldCheckIcon className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">Authenticity</p>
                <p className="text-xs text-gray-600">100% Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
