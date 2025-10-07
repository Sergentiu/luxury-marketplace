import { LegalPage } from "@/components/legal/legal-page";

const content = `
# Privacy Policy

Last updated: January 1, 2024

## 1. Information We Collect

We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.

### Personal Information
- Name and contact information
- Payment information (processed securely through third-party providers)
- Shipping and billing addresses
- Communication preferences

### Usage Information
- Device information and identifiers
- Browser type and version
- Pages visited and time spent on our site
- Referring website information

## 2. How We Use Your Information

We use the information we collect to:

- Provide, maintain, and improve our services
- Process transactions and send related information
- Send technical notices, updates, security alerts, and support messages
- Respond to your comments, questions, and requests
- Communicate about products, services, offers, and events
- Monitor and analyze trends, usage, and activities
- Personalize and improve user experience

## 3. Information Sharing

We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:

- With service providers who assist us in operating our website and conducting business
- When required by law or to protect our rights
- In connection with a merger, acquisition, or sale of assets

## 4. Data Security

We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.

## 5. Cookies and Tracking

We use cookies and similar tracking technologies to enhance your experience on our site. You can control cookie settings through your browser preferences.

## 6. Your Rights

You have the right to:

- Access your personal information
- Correct inaccurate information
- Delete your account and associated data
- Opt out of marketing communications
- Data portability

## 7. Children's Privacy

Our service is not intended for children under 13. We do not knowingly collect personal information from children under 13.

## 8. International Transfers

Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place.

## 9. Changes to This Policy

We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.

## 10. Contact Us

If you have questions about this privacy policy, please contact us at privacy@luxurymarket.com.
`;

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" content={content} />;
}

export const metadata = {
  title: "Privacy Policy | Luxury Marketplace",
  description: "Privacy policy for Luxury Marketplace platform.",
};
