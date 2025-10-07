import { ProductCategory } from "@/types";
import { formatPrice } from "@/lib/utils";

interface CategoryHeaderProps {
  category: ProductCategory;
  productCount: number;
}

const categoryDescriptions: Record<ProductCategory, string> = {
  [ProductCategory.BAGS]: "Discover authentic luxury handbags from the world's most prestigious designers. From classic flaps to statement pieces, find your perfect bag.",
  [ProductCategory.ACCESSORIES]: "Elevate your style with luxury accessories including belts, scarves, sunglasses, and more from top designer brands.",
  [ProductCategory.JEWELRY]: "Adorn yourself with exquisite pre-owned jewelry pieces. From statement necklaces to elegant watches, find luxury that lasts.",
  [ProductCategory.SHOES]: "Step out in style with authentic luxury footwear. From iconic heels to designer sneakers, perfect your every look.",
  [ProductCategory.CLOTHING]: "Curate your wardrobe with designer clothing pieces. From timeless classics to contemporary styles, dress to impress.",
  [ProductCategory.WATCHES]: "Keep time in luxury with authentic designer watches. From classic timepieces to modern marvels, precision meets style."
};

const categoryStats: Record<ProductCategory, { avgPrice: number; popularBrands: string[] }> = {
  [ProductCategory.BAGS]: { avgPrice: 3500, popularBrands: ["Chanel", "Hermès", "Louis Vuitton", "Gucci"] },
  [ProductCategory.ACCESSORIES]: { avgPrice: 850, popularBrands: ["Hermès", "Gucci", "Louis Vuitton", "Dior"] },
  [ProductCategory.JEWELRY]: { avgPrice: 2200, popularBrands: ["Cartier", "Tiffany & Co.", "Van Cleef & Arpels", "Bulgari"] },
  [ProductCategory.SHOES]: { avgPrice: 650, popularBrands: ["Louboutin", "Gucci", "Chanel", "Saint Laurent"] },
  [ProductCategory.CLOTHING]: { avgPrice: 1200, popularBrands: ["Chanel", "Dior", "Saint Laurent", "Gucci"] },
  [ProductCategory.WATCHES]: { avgPrice: 8500, popularBrands: ["Rolex", "Patek Philippe", "Audemars Piguet", "Cartier"] }
};

export function CategoryHeader({ category, productCount }: CategoryHeaderProps) {
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
  const description = categoryDescriptions[category];
  const stats = categoryStats[category];

  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {categoryName}
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          {description}
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{productCount}</div>
            <div className="text-sm text-gray-600">Items Available</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">
              {formatPrice(stats.avgPrice)}
            </div>
            <div className="text-sm text-gray-600">Average Price</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">100%</div>
            <div className="text-sm text-gray-600">Authentic</div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {stats.popularBrands.map((brand) => (
            <span
              key={brand}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
