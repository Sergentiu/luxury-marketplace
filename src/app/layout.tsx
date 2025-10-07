import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { CartProvider } from "@/contexts/cart-context";
import { SessionProvider } from "@/components/providers/session-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luxury Marketplace | Pre-owned Designer Products",
  description: "Discover authentic luxury pre-owned designer bags, accessories, jewelry, and more. Shop with confidence with our authenticity guarantee.",
  keywords: "luxury, designer, pre-owned, bags, accessories, jewelry, authentic, marketplace",
  authors: [{ name: "Luxury Marketplace" }],
  openGraph: {
    title: "Luxury Marketplace | Pre-owned Designer Products",
    description: "Discover authentic luxury pre-owned designer bags, accessories, jewelry, and more.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Marketplace | Pre-owned Designer Products",
    description: "Discover authentic luxury pre-owned designer bags, accessories, jewelry, and more.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background`}
      >
        <SessionProvider>
          <CartProvider>
            <Navigation />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </CartProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
