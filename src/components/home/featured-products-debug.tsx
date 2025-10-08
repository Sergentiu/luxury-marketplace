"use client";

// Debug component - no additional React hooks needed
import { useProducts } from "@/hooks/use-products";

export function FeaturedProductsDebug() {
  const { products, loading, error } = useProducts({ limit: 4 });

  console.log("FeaturedProductsDebug - State:", { products, loading, error });

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Products (Debug)
          </h2>
          <div className="bg-gray-100 p-4 rounded-lg text-left">
            <p><strong>Loading:</strong> {loading ? "true" : "false"}</p>
            <p><strong>Error:</strong> {error || "none"}</p>
            <p><strong>Products Count:</strong> {products.length}</p>
            <p><strong>Products:</strong></p>
            <pre className="text-xs bg-white p-2 rounded mt-2 overflow-auto">
              {JSON.stringify(products, null, 2)}
            </pre>
          </div>
        </div>
        
        {loading && <p>Loading products...</p>}
        {error && <p className="text-red-600">Error: {error}</p>}
        
        {products.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-bold">{product.name}</h3>
                <p>ID: {product.id}</p>
                <p>Brand: {product.brand}</p>
                <p>Price: ${product.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
