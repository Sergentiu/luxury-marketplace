"use client";

import { createContext, useContext, useReducer, ReactNode } from "react";
import { Product } from "@/types";

interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  size?: string;
  color?: string;
}

interface WishlistItem {
  id: string;
  product: Product;
  addedAt: Date;
}

interface CartState {
  items: CartItem[];
  wishlist: WishlistItem[];
}

type CartAction =
  | { type: "ADD_TO_CART"; payload: { product: Product; quantity: number; size?: string; color?: string } }
  | { type: "REMOVE_FROM_CART"; payload: { id: string } }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "ADD_TO_WISHLIST"; payload: { product: Product } }
  | { type: "REMOVE_FROM_WISHLIST"; payload: { id: string } }
  | { type: "CLEAR_WISHLIST" };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  addToCart: (product: Product, quantity?: number, size?: string, color?: string) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: string) => void;
  clearWishlist: () => void;
  isInWishlist: (productId: string) => boolean;
  getCartTotal: () => number;
  getCartItemCount: () => number;
  getWishlistCount: () => number;
} | null>(null);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { product, quantity, size, color } = action.payload;
      const existingItem = state.items.find(
        item => item.id === product.id && item.size === size && item.color === color
      );

      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === product.id && item.size === size && item.color === color
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      }

      return {
        ...state,
        items: [...state.items, {
          id: product.id,
          product,
          quantity,
          size,
          color,
        }],
      };
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
      };

    case "UPDATE_QUANTITY": {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(item => item.id !== id),
        };
      }
      return {
        ...state,
        items: state.items.map(item =>
          item.id === id ? { ...item, quantity } : item
        ),
      };
    }

    case "CLEAR_CART":
      return {
        ...state,
        items: [],
      };

    case "ADD_TO_WISHLIST": {
      const { product } = action.payload;
      const isAlreadyInWishlist = state.wishlist.some(item => item.id === product.id);
      
      if (isAlreadyInWishlist) {
        return state;
      }

      return {
        ...state,
        wishlist: [...state.wishlist, {
          id: product.id,
          product,
          addedAt: new Date(),
        }],
      };
    }

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter(item => item.id !== action.payload.id),
      };

    case "CLEAR_WISHLIST":
      return {
        ...state,
        wishlist: [],
      };

    default:
      return state;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    wishlist: [],
  });

  const addToCart = (product: Product, quantity = 1, size?: string, color?: string) => {
    dispatch({ type: "ADD_TO_CART", payload: { product, quantity, size, color } });
  };

  const removeFromCart = (id: string) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const addToWishlist = (product: Product) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: { product } });
  };

  const removeFromWishlist = (id: string) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: { id } });
  };

  const clearWishlist = () => {
    dispatch({ type: "CLEAR_WISHLIST" });
  };

  const isInWishlist = (productId: string) => {
    return state.wishlist.some(item => item.id === productId);
  };

  const getCartTotal = () => {
    return state.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };

  const getCartItemCount = () => {
    return state.items.reduce((count, item) => count + item.quantity, 0);
  };

  const getWishlistCount = () => {
    return state.wishlist.length;
  };

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
        isInWishlist,
        getCartTotal,
        getCartItemCount,
        getWishlistCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
