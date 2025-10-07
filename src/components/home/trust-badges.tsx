export function TrustBadges() {
  const badges = [
    {
      icon: "🛡️",
      title: "Authenticity Guaranteed",
      description: "Every item is verified by our expert authenticators"
    },
    {
      icon: "🚚",
      title: "Free Shipping",
      description: "Complimentary shipping on orders over $500"
    },
    {
      icon: "↩️",
      title: "30-Day Returns",
      description: "Hassle-free returns within 30 days"
    },
    {
      icon: "💎",
      title: "Premium Quality",
      description: "Curated selection of luxury pre-owned items"
    },
    {
      icon: "🔒",
      title: "Secure Payment",
      description: "Your payment information is always protected"
    },
    {
      icon: "📞",
      title: "24/7 Support",
      description: "Expert customer service whenever you need it"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {badge.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-sm lg:text-base">
                {badge.title}
              </h3>
              <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
