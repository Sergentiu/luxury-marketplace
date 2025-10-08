import { FeaturedProductsDebug } from "@/components/home/featured-products-debug";

export default function DebugHomepagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-8">Debug Homepage Products</h1>
          <FeaturedProductsDebug />
        </div>
      </div>
    </div>
  );
}
