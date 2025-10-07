export interface Product {
  id: string
  name: string
  brand: string
  category: ProductCategory
  subcategory?: string
  price: number
  originalPrice?: number
  condition: ProductCondition
  description: string
  images: string[]
  authenticityGuaranteed: boolean
  measurements?: {
    length?: number
    width?: number
    height?: number
    unit: 'cm' | 'in'
  }
  color: string
  material?: string
  yearOfPurchase?: number
  sellerId: string
  status: ProductStatus
  createdAt: Date
  updatedAt: Date
  tags?: string[]
  sku?: string
}

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  avatar?: string
  phone?: string
  address?: Address
  isSeller: boolean
  isVerified: boolean
  createdAt: Date
  updatedAt: Date
  preferences?: UserPreferences
}

export interface Address {
  street: string
  city: string
  state: string
  zipCode: string
  country: string
}

export interface UserPreferences {
  newsletter: boolean
  marketing: boolean
  currency: 'USD' | 'EUR' | 'GBP'
}

export interface CartItem {
  productId: string
  quantity: number
  size?: string
  color?: string
}

export interface Cart {
  items: CartItem[]
  subtotal: number
  shipping: number
  tax: number
  total: number
}

export interface Order {
  id: string
  userId: string
  items: OrderItem[]
  shippingAddress: Address
  billingAddress: Address
  paymentMethod: PaymentMethod
  status: OrderStatus
  subtotal: number
  shipping: number
  tax: number
  total: number
  createdAt: Date
  updatedAt: Date
  trackingNumber?: string
}

export interface OrderItem {
  productId: string
  product: Product
  quantity: number
  price: number
  size?: string
  color?: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featuredImage?: string
  author: string
  publishedAt: Date
  updatedAt: Date
  tags: string[]
  category: BlogCategory
}

export interface WishlistItem {
  productId: string
  addedAt: Date
}

export interface SellerApplication {
  id: string
  userId: string
  businessName?: string
  description: string
  experience: string
  status: ApplicationStatus
  submittedAt: Date
  reviewedAt?: Date
  reviewedBy?: string
  notes?: string
}

export interface ConsignmentSubmission {
  id: string
  sellerId: string
  products: ConsignmentProduct[]
  status: ConsignmentStatus
  submittedAt: Date
  reviewedAt?: Date
  estimatedValue: number
  termsAccepted: boolean
}

export interface ConsignmentProduct {
  name: string
  brand: string
  category: ProductCategory
  condition: ProductCondition
  description: string
  images: string[]
  estimatedValue: number
  purchasePrice?: number
  yearOfPurchase?: number
  authenticityProof?: string[]
}

// Enums
export enum ProductCategory {
  BAGS = 'bags',
  ACCESSORIES = 'accessories',
  JEWELRY = 'jewelry',
  SHOES = 'shoes',
  CLOTHING = 'clothing',
  WATCHES = 'watches'
}

export enum ProductCondition {
  NEW = 'new',
  LIKE_NEW = 'like_new',
  EXCELLENT = 'excellent',
  VERY_GOOD = 'very_good',
  GOOD = 'good',
  FAIR = 'fair'
}

export enum ProductStatus {
  ACTIVE = 'active',
  SOLD = 'sold',
  PENDING = 'pending',
  DRAFT = 'draft',
  INACTIVE = 'inactive'
}

export enum OrderStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  PROCESSING = 'processing',
  SHIPPED = 'shipped',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled',
  REFUNDED = 'refunded'
}

export enum PaymentMethod {
  CREDIT_CARD = 'credit_card',
  DEBIT_CARD = 'debit_card',
  PAYPAL = 'paypal',
  APPLE_PAY = 'apple_pay',
  GOOGLE_PAY = 'google_pay',
  BANK_TRANSFER = 'bank_transfer'
}

export enum BlogCategory {
  AUTHENTICATION = 'authentication',
  FASHION_TRENDS = 'fashion_trends',
  MARKETPLACE_NEWS = 'marketplace_news',
  CARE_GUIDES = 'care_guides',
  BRAND_SPOTLIGHT = 'brand_spotlight'
}

export enum ApplicationStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  UNDER_REVIEW = 'under_review'
}

export enum ConsignmentStatus {
  SUBMITTED = 'submitted',
  UNDER_REVIEW = 'under_review',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  PROCESSING = 'processing',
  COMPLETED = 'completed'
}

// Filter and Sort types
export interface ProductFilters {
  brand?: string[]
  category?: ProductCategory[]
  condition?: ProductCondition[]
  priceRange?: {
    min: number
    max: number
  }
  color?: string[]
  material?: string[]
  authenticityGuaranteed?: boolean
}

export enum SortOption {
  PRICE_LOW_TO_HIGH = 'price_low_to_high',
  PRICE_HIGH_TO_LOW = 'price_high_to_low',
  NEWEST = 'newest',
  OLDEST = 'oldest',
  POPULAR = 'popular',
  ALPHABETICAL = 'alphabetical'
}
