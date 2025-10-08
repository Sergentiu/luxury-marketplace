import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRightIcon, CurrencyDollarIcon, ShieldCheckIcon, ClockIcon } from "@heroicons/react/24/outline";

const benefits = [
  {
    icon: CurrencyDollarIcon,
    title: "Earn Top Dollar",
    description: "Get the best prices for your luxury items with our competitive commission structure"
  },
  {
    icon: ShieldCheckIcon,
    title: "Expert Authentication",
    description: "Our specialists verify authenticity to ensure maximum value and buyer confidence"
  },
  {
    icon: ClockIcon,
    title: "Quick Turnaround",
    description: "Fast processing and listing to get your items in front of buyers quickly"
  }
];

export function ConsignmentCTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Sell Your
              <span className="block luxury-text-gradient bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Luxury Items?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Turn your luxury handbags, accessories, and jewelry into cash. 
              Our expert team handles everything from authentication to sales, 
              ensuring you get the best possible value for your items.
            </p>
            
            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/sell">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                  Start Selling
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link href="/consignment">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-center">
              <div className="bg-white rounded-xl p-6 mb-6">
                <div className="text-4xl font-bold text-gray-900 mb-2">$2,500</div>
                <div className="text-gray-600">Average consignment value</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-sm opacity-90">Authentication rate</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold">14 days</div>
                  <div className="text-sm opacity-90">Average sale time</div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
              New Seller Bonus
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
              Free Authentication
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
