import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ShieldCheckIcon, 
  TruckIcon, 
  HeartIcon,
  CurrencyDollarIcon,
  StarIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const stats = [
  { number: "50,000+", label: "Authenticated Items" },
  { number: "25,000+", label: "Happy Customers" },
  { number: "99.8%", label: "Authenticity Rate" },
  { number: "24/7", label: "Expert Support" }
];

const values = [
  {
    icon: ShieldCheckIcon,
    title: "Authenticity Guaranteed",
    description: "Every item is meticulously authenticated by our team of experts with years of experience in luxury goods."
  },
  {
    icon: HeartIcon,
    title: "Passion for Luxury",
    description: "We believe everyone should have access to authentic luxury items, regardless of budget constraints."
  },
  {
    icon: CurrencyDollarIcon,
    title: "Fair Pricing",
    description: "Our transparent pricing ensures you get the best value for your money with competitive market rates."
  },
  {
    icon: TruckIcon,
    title: "Secure Delivery",
    description: "Your precious items are handled with care and delivered securely with full insurance coverage."
  }
];

const team = [
  {
    name: "Sarah Chen",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Former luxury retail executive with 15+ years in the industry."
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Authentication",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Expert authenticator specializing in Chanel, Hermès, and Louis Vuitton."
  },
  {
    name: "Emma Thompson",
    role: "Customer Experience Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Dedicated to ensuring every customer has an exceptional experience."
  }
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About LuxuryMarket
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            We&apos;re passionate about making authentic luxury accessible to everyone. 
            Our mission is to connect discerning buyers with verified luxury items 
            while ensuring complete authenticity and exceptional service.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2020 by luxury retail veteran Sarah Chen, LuxuryMarket was born 
                  from a simple observation: the luxury resale market lacked transparency and 
                  trust. Too many customers were uncertain about authenticity and pricing.
                </p>
                <p>
                  We set out to change that. By combining expert authentication with cutting-edge 
                  technology, we've created a marketplace where buyers can shop with complete 
                  confidence, knowing every item is 100% authentic and fairly priced.
                </p>
                <p>
                  Today, we&apos;re proud to be the trusted destination for luxury enthusiasts worldwide, 
                  offering an unparalleled selection of authenticated designer items with the 
                  highest standards of service and security.
                </p>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-gray-500">Company Image Placeholder</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and ensure we deliver 
              exceptional value to our customers and partners.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our passionate team of luxury experts and customer service professionals 
              is dedicated to providing you with an exceptional experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "The authentication process gave me complete confidence in my purchase. The Chanel bag was exactly as described and arrived beautifully packaged.",
                author: "Jessica M.",
                rating: 5
              },
              {
                text: "Excellent customer service and fast shipping. My Hermès scarf was authenticated within 24 hours and shipped the same day.",
                author: "David L.",
                rating: 5
              },
              {
                text: "Finally found a trustworthy place to sell my luxury items. The commission structure is fair and the process is transparent.",
                author: "Maria S.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Luxury?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers who trust us with their luxury purchases
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/category/bags">
                Start Shopping
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Link href="/sell">
                Sell Your Items
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
