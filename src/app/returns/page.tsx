import { LegalPage } from "@/components/legal/legal-page";

const content = `
# Returns & Exchanges

Last updated: January 1, 2024

## 1. Return Policy

We offer a 30-day return policy for all items purchased through LuxuryMarket, subject to the conditions outlined below.

## 2. Return Conditions

Items must be returned in their original condition:

- All original packaging and tags must be included
- Items must be unworn and unused
- Authenticity cards and certificates must be included
- Items must not show signs of wear or damage

## 3. Return Process

### Step 1: Initiate Return
Contact our customer service team within 30 days of delivery to initiate a return. You can reach us at returns@luxurymarket.com or through our customer portal.

### Step 2: Return Authorization
We will provide you with a return authorization number and detailed instructions for packaging and shipping your item.

### Step 3: Ship Your Item
Package your item securely using the provided shipping label. We recommend using the original packaging when possible.

### Step 4: Processing
Once we receive your return, our team will inspect the item within 3-5 business days. You will be notified of the status via email.

## 4. Refund Timeline

- Refunds will be processed within 5-7 business days after we receive and approve your return
- Refunds will be issued to the original payment method
- Shipping costs are non-refundable unless the return is due to our error

## 5. Exchanges

We currently do not offer direct exchanges. To exchange an item:

1. Return the original item following our return process
2. Place a new order for the desired item
3. You will receive a full refund for the returned item

## 6. Authenticity Concerns

If you believe an item is not authentic:

1. Contact us immediately with detailed photos
2. Our authentication team will review the item
3. If found to be inauthentic, we will provide a full refund and cover return shipping
4. If found to be authentic, normal return policies apply

## 7. Damaged or Defective Items

If you receive a damaged or defective item:

1. Contact us within 48 hours of delivery
2. Provide photos of the damage or defect
3. We will arrange for immediate return and replacement or full refund

## 8. Final Sale Items

Some items may be marked as "Final Sale" and are not eligible for returns. This will be clearly indicated on the product page and at checkout.

## 9. International Returns

For international customers:

- Return shipping costs are the responsibility of the customer
- Customs duties and taxes paid are non-refundable
- Return process may take longer due to customs processing

## 10. Contact Information

For return-related questions or to initiate a return, please contact us at returns@luxurymarket.com or call our customer service team.
`;

export default function ReturnsPage() {
  return <LegalPage title="Returns & Exchanges" content={content} />;
}

export const metadata = {
  title: "Returns & Exchanges | Luxury Marketplace",
  description: "Return and exchange policy for Luxury Marketplace.",
};
