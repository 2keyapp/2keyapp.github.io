export default function WhoItsForSection() {
  const categories = [
    {
      id: 1,
      title: "Merchants",
      description: "Direct sellers looking to simplify their billing stack while maintaining full control over their funds and customer data.",
      items: [
        "SaaS products",
        "Subscriptions",
        "Digital services",
        "Marketplaces",
      ],
      color: "teal",
      icon: (
        <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V18.75m-16.5 0V21m0 0h3.64m-1.39 0h1.39m-1.39 0V18.75m0 0V15.75m0 0h3.64m-1.39 0h1.39m-1.39 0V12.75m0 0V9.75m0 0h3.64m-1.39 0h1.39m-1.39 0V6.75m0 0V3.75m0 0h3.64m-1.39 0h1.39" />
        </svg>
      ),
      cta: "Launch your store",
    },
    {
      id: 2,
      title: "Influencers",
      description: "Creators who want to monetize their audience through multiple partnerships without the overhead of tracking separate payouts.",
      items: [
        "Content creators",
        "Affiliates",
        "Educators",
        "Community leaders",
      ],
      color: "lavender",
      icon: (
        <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
      cta: "Start promoting",
    },
    {
      id: 3,
      title: "Platforms",
      description: "Enterprise networks managing thousands of sellers who need a white-label, robust billing solution at scale.",
      items: [
        "Multi-tenant products",
        "White-label SaaS",
        "Global seller networks",
      ],
      color: "blurple",
      icon: (
        <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-3.75v3.75m-3 .75h.008v.008H12v-.008z" />
        </svg>
      ),
      cta: "Scale your platform",
    },
  ]

  const getColorClasses = (color) => {
    switch (color) {
      case "teal":
        return {
          icon: "text-teal",
          iconBg: "bg-teal/10",
          checkmark: "text-teal",
          checkmarkBg: "bg-teal/10",
          cta: "text-teal hover:text-teal/80",
          accent: "bg-teal/10",
          border: "border-teal/20",
        }
      case "lavender":
        return {
          icon: "text-lavender",
          iconBg: "bg-lavender/10",
          checkmark: "text-lavender",
          checkmarkBg: "bg-lavender/10",
          cta: "text-lavender hover:text-lavender/80",
          accent: "bg-lavender/10",
          border: "border-lavender/20",
        }
      case "blurple":
        return {
          icon: "text-blurple",
          iconBg: "bg-blurple/10",
          checkmark: "text-blurple",
          checkmarkBg: "bg-blurple/10",
          cta: "text-blurple hover:text-blurple/80",
          accent: "bg-blurple/10",
          border: "border-blurple/20",
        }
      default:
        return {
          icon: "text-teal",
          iconBg: "bg-teal/10",
          checkmark: "text-teal",
          checkmarkBg: "bg-teal/10",
          cta: "text-teal",
          accent: "bg-teal/10",
          border: "border-teal/20",
        }
    }
  }

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-navy overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-lavender/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blurple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-6 leading-tight  tracking-tight">
            Who is 2key for?
          </h2>
          <p className="text-xl sm:text-2xl md:text-2xl lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Whether you are building a product, growing an audience, or scaling a network, we provide the billing infrastructure you need.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {categories.map((category) => {
            const colors = getColorClasses(category.color)
            return (
              <div
                key={category.id}
                className="group relative glass-dark rounded-3xl p-8 sm:p-10 lg:p-12 bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-teal/40 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full"
              >
                {/* Icon with background */}
                <div className={`flex justify-center mb-8 ${colors.icon}`}>
                  <div className={`relative ${colors.iconBg} rounded-2xl p-4 border ${colors.border} group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                    <div className={`absolute inset-0 ${colors.accent} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10`}></div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-3xl sm:text-3xl lg:text-3xl font-heading font-bold text-white mb-5 text-center">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed text-center min-h-[72px]">
                  {category.description}
                </p>

                {/* Items List */}
                <ul className="space-y-4 mb-10 flex-grow">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 group/item">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-lg ${colors.checkmarkBg} border ${colors.border} flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}>
                        <svg
                          className={`w-4 h-4 ${colors.checkmark}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-base sm:text-lg text-gray-300 leading-relaxed group-hover/item:text-white transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Link - Always at bottom */}
                <div className="text-center pt-4 border-t border-white/10 mt-auto">
                  <a
                    href="#"
                    className={`inline-flex items-center gap-2 font-semibold text-lg sm:text-xl transition-all duration-300 group/cta ${colors.cta}`}
                  >
                    <span>{category.cta}</span>
                    <svg 
                      className="w-5 h-5 transition-transform duration-300 group-hover/cta:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>

                {/* Decorative accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl ${colors.accent}`}></div>
                <div className={`absolute bottom-0 left-0 w-24 h-24 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10 blur-xl ${colors.accent}`}></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
