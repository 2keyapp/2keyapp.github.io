export default function WhyBuyersTrust() {
  const features = [
    {
      title: "SSO across merchants",
      description: "One secure login for all your favorite services. No more managing fifty different billing portals.",
      icon: (
        <svg
          className="w-6 h-6 text-teal"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
          />
        </svg>
      ),
    },
    {
      title: "No duplicated profiles",
      description: "Maintain a single, clean identity. Changing your address or email updates it everywhere instantly.",
      icon: (
        <svg
          className="w-6 h-6 text-teal"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "PCI-compliant",
      description: "Certified secure payment infrastructure with the highest level of industry standard compliance.",
      icon: (
        <svg
          className="w-6 h-6 text-teal"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
  ];

  const connectedServices = [
    {
      name: "CreativeCloud",
      connectedSince: "Jan 2024",
      icon: (
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold">
          A
        </div>
      ),
    },
    {
      name: "SaaSFlow Pro",
      connectedSince: "Mar 2024",
      icon: (
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold">
          S
        </div>
      ),
    },
  ];

  return (
    <section className="relative py-20 bg-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Section: Why Buyers Trust It */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-8 leading-tight">
              Why Buyers Trust It
            </h2>
            
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Logos */}
            <div className="flex items-center gap-6 opacity-60">
              <div className="text-gray-400 font-semibold text-sm">VISA</div>
              <div className="w-8 h-8 rounded border border-gray-500 flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div className="text-gray-400 font-semibold text-sm">PCI</div>
            </div>
          </div>

          {/* Right Section: Identity Verification Card */}
          <div className="glass-dark rounded-xl border border-white/10 shadow-lg p-6 lg:p-8 bg-navy">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-heading font-bold text-white">
                Identity Verification
              </h3>
              <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 text-green-400 rounded-full text-xs font-semibold uppercase">
                ACTIVE
              </span>
            </div>

            <div className="space-y-4 mb-6">
              {connectedServices.map((service, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                  {service.icon}
                  <div className="flex-1">
                    <div className="font-semibold text-white mb-1">{service.name}</div>
                    <div className="text-xs text-gray-400">Connected since {service.connectedSince}</div>
                  </div>
                  <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              ))}
            </div>

            <button className="w-full px-6 py-3 bg-teal text-navy rounded-xl font-heading font-semibold hover:bg-teal/90 transition-colors">
              Manage Linked Accounts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

