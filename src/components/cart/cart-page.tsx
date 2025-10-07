"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrashIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/contexts/cart-context";

export function CartPage() {
  const { state, updateQuantity, removeFromCart, getCartTotal } = useCart();
  const { items: cartItems } = state;

  const cartTotal = getCartTotal();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="text-gray-400 text-6xl mb-4">🛒</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">
              Discover our collection of authentic luxury items.
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
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-24 h-24 flex-shrink-0">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            <Link 
                              href={`/product/${item.product.id}`}
                              className="hover:text-primary"
                            >
                              {item.product.name}
                            </Link>
                          </h3>
                          <p className="text-sm text-gray-500 mb-2">
                            {item.product.brand}
                          </p>
                          {item.product.authenticityGuaranteed && (
                            <div className="flex items-center mb-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                              <span className="text-xs text-green-700 font-medium">
                                Authenticity Guaranteed
                              </span>
                            </div>
                          )}
                        </div>
                        
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <TrashIcon className="h-5 w-5" />
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                          >
                            <MinusIcon className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                          >
                            <PlusIcon className="h-4 w-4" />
                          </button>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-lg font-bold text-gray-900">
                            {formatPrice(item.product.price * item.quantity)}
                          </div>
                          {item.product.originalPrice && (
                            <div className="text-sm text-gray-500 line-through">
                              {formatPrice(item.product.originalPrice * item.quantity)}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
                
                <div className="flex justify-between text-sm">
                  <span>Subtotal ({cartItems.length} items)</span>
                  <span>{formatPrice(cartTotal.subtotal)}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>
                    {cartTotal.shipping === 0 ? (
                      <span className="text-green-600 font-medium">Free</span>
                    ) : (
                      formatPrice(cartTotal.shipping)
                    )}
                  </span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span>Tax</span>
                  <span>{formatPrice(cartTotal.tax)}</span>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>{formatPrice(cartTotal.total)}</span>
                  </div>
                </div>
                
                {cartTotal.subtotal < 500 && (
                  <div className="text-sm text-blue-600 bg-blue-50 p-3 rounded-lg">
                    Add {formatPrice(500 - cartTotal.subtotal)} more for free shipping!
                  </div>
                )}
                
                <Button asChild className="w-full" size="lg">
                  <Link href="/checkout">
                    Proceed to Checkout
                  </Link>
                </Button>
                
                <Button asChild variant="outline" className="w-full">
                  <Link href="/category/bags">
                    Continue Shopping
                  </Link>
                </Button>
                
                <div className="pt-4 border-t">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Secure checkout with SSL encryption</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}