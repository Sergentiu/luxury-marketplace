import Stripe from "stripe"

// Mock Stripe for build purposes
export const stripe = process.env.STRIPE_SECRET_KEY 
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2024-12-18.acacia",
    })
  : null as unknown as Stripe

export const formatAmountForStripe = (amount: number): number => {
  return Math.round(amount * 100)
}

export const formatAmountFromStripe = (amount: number): number => {
  return amount / 100
}