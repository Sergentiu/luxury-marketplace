import Link from "next/link";
import { Button } from "@/components/ui/button";

const featuredBrands = [
  {
    name: "Chanel",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Chanel-Logo.png",
    description: "Timeless elegance and sophistication",
    href: "/brand/chanel",
    color: "bg-black"
  },
  {
    name: "Hermès",
    logo: "https://logos-world.net/wp-content/uploads/2020/09/Hermes-Logo.png",
    description: "Artisan craftsmanship at its finest",
    href: "/brand/hermes",
    color: "bg-orange-500"
  },
  {
    name: "Louis Vuitton",
    logo: "https://logos-world.net/wp-content/uploads/2020/09/Louis-Vuitton-Logo.png",
    description: "Luxury travel and lifestyle",
    href: "/brand/louis-vuitton",
    color: "bg-amber-500"
  },
  {
    name: "Gucci",
    logo: "https://logos-world.net/wp-content/uploads/2020/09/Gucci-Logo.png",
    description: "Bold Italian luxury and style",
    href: "/brand/gucci",
    color: "bg-green-600"
  },
  {
    name: "Prada",
    logo: "https://logos-world.net/wp-content/uploads/2020/09/Prada-Logo.png",
    description: "Minimalist luxury and innovation",
    href: "/brand/prada",
    color: "bg-blue-900"
  },
  {
    name: "Dior",
    logo: "https://logos-world.net/wp-content/uploads/2020/09/Dior-Logo.png",
    description: "French elegance and femininity",
    href: "/brand/dior",
    color: "bg-pink-500"
  }
];

export function BrandSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Curated Brands
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover authentic pieces from the world's most prestigious luxury brands. 
            Each item is carefully authenticated and comes with our guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBrands.map((brand) => (
            <div key={brand.name} className="group">
              <Link href={brand.href}>
                <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group-hover:scale-105">
                  {/* Brand header */}
                  <div className={`${brand.color} p-6 text-center`}>
                    <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                      <img
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white">{brand.name}</h3>
                  </div>
                  
                  {/* Brand description */}
                  <div className="p-6">
                    <p className="text-gray-600 text-center mb-4">
                      {brand.description}
                    </p>
                    
                    {/* Mock stats */}
                    <div className="flex justify-between text-sm text-gray-500 mb-4">
                      <span>Items in stock</span>
                      <span className="font-semibold">24</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 mb-6">
                      <span>Starting from</span>
                      <span className="font-semibold">$850</span>
                    </div>
                    
                    <Button className="w-full" variant="outline">
                      Shop {brand.name}
                    </Button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/brands">
              View All Brands
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
