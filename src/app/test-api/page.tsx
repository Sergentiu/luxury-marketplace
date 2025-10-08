"use client";

import { useEffect, useState } from "react";

export default function TestApiPage() {
  const [products, setProducts] = useState<Record<string, unknown>[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function testApi() {
      try {
        setLoading(true);
        setError(null);
        
        console.log("Testing API call...");
        const response = await fetch("/api/products");
        console.log("Response status:", response.status);
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        
        const data = await response.json();
        console.log("Products received:", data);
        setProducts(data);
      } catch (err) {
        console.error("API Error:", err);
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    testApi();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">API Test Page</h1>
        
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-600">Error: {error}</p>}
        
        {products.length > 0 && (
          <div>
            <p className="mb-4">Found {products.length} products:</p>
            <div className="space-y-4">
              {products.map((product) => (
                <div key={product.id as string} className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-bold">{product.name as string}</h3>
                  <p>ID: {product.id as string}</p>
                  <p>Brand: {product.brand as string}</p>
                  <p>Price: ${product.price as number}</p>
                  <p>Category: {product.category as string}</p>
                  <p>Status: {product.status as string}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
