import { LegalPage } from "@/components/legal/legal-page";

const content = `
# Terms of Service

Last updated: January 1, 2024

## 1. Acceptance of Terms

By accessing and using LuxuryMarket ("the Service"), you accept and agree to be bound by the terms and provision of this agreement.

## 2. Use License

Permission is granted to temporarily download one copy of LuxuryMarket per device for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:

- modify or copy the materials
- use the materials for any commercial purpose or for any public display
- attempt to reverse engineer any software contained on LuxuryMarket
- remove any copyright or other proprietary notations from the materials

## 3. User Accounts

When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.

## 4. Prohibited Uses

You may not use our service:

- For any unlawful purpose or to solicit others to perform unlawful acts
- To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances
- To infringe upon or violate our intellectual property rights or the intellectual property rights of others
- To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate
- To submit false or misleading information
- To upload or transmit viruses or any other type of malicious code

## 5. Content

Our service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the content that you post to the service.

## 6. Authenticity Guarantee

We guarantee the authenticity of all items sold through our platform. If an item is found to be inauthentic, we will provide a full refund and cover return shipping costs.

## 7. Returns and Refunds

Items may be returned within 30 days of delivery for a full refund, provided they are in original condition with all tags and packaging intact.

## 8. Limitation of Liability

In no event shall LuxuryMarket, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.

## 9. Governing Law

These Terms shall be interpreted and governed by the laws of the State of California, United States, without regard to its conflict of law provisions.

## 10. Changes to Terms

We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.

## 11. Contact Information

If you have any questions about these Terms of Service, please contact us at legal@luxurymarket.com.
`;

export default function TermsPage() {
  return <LegalPage title="Terms of Service" content={content} />;
}

export const metadata = {
  title: "Terms of Service | Luxury Marketplace",
  description: "Terms of service for Luxury Marketplace platform.",
};
