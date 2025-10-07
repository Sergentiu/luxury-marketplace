"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StripePaymentProps {
  amount: number;
  onSuccess: (paymentIntent: Record<string, unknown>) => void;
  onError: (error: string) => void;
}

export function StripePayment({ amount, onSuccess, onError }: StripePaymentProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      // Mock payment for build purposes
      await new Promise(resolve => setTimeout(resolve, 2000));
      onSuccess({ id: "pi_mock_payment_intent" });
    } catch {
      onError("Payment failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Payment Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 border border-gray-300 rounded-md bg-gray-50">
            <p className="text-sm text-gray-600">
              Mock payment form for demonstration. In production, this would be a real Stripe payment form.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Total Amount:</span>
              <span className="text-xl font-bold text-primary">${amount.toFixed(2)}</span>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full"
            size="lg"
          >
            {isLoading ? "Processing..." : `Pay $${amount.toFixed(2)}`}
          </Button>
        </CardContent>
      </Card>
    </form>
  );
}