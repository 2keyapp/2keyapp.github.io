export default function HowItWorksSection() {
  const steps = [
    {
      id: 1,
      number: "1",
      title: "Connect your domain in seconds",
      description: "Merchants map their subdomains or custom domains directly to 2key. We handle the SSL, DNS, and routing so your brand remains front and center.",
      features: [
        "One-click CNAME setup",
        "Automatic SSL certificate provisioning",
      ],
      iconColor: "blue",
      visual: (
        <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6">
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Domain Mapping</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <input 
                  type="text" 
                  value="shop.brand.com" 
                  readOnly
                  className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-mono text-gray-700"
                />
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <svg className="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>2key live routing</span>
              </div>
              <button className="w-full px-4 py-2 bg-teal text-white rounded-lg text-sm font-semibold hover:bg-teal/90 transition-colors">
                Verify DNS Records
              </button>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      number: "2",
      title: "Influencers promote with style",
      description: "Influencers get unique checkout links and visual promo codes. When they share, 2key tracks the attribution across every merchant in the session.",
      promoCode: "Use code CREATOR20 for 20% off!",
      iconColor: "orange",
      visual: (
        <div className="relative">
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-semibold text-gray-900">@topcreator</span>
                  <span className="px-2 py-0.5 bg-orange-100 text-orange-600 text-xs font-semibold rounded">PROMO</span>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  Click the link in my bio to shop the collection from 10+ brands with one checkout! :)
                </p>
                <div className="px-4 py-2 bg-gray-100 rounded-lg text-center">
                  <span className="font-mono font-bold text-gray-900">CREATOR20</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      number: "3",
      title: "Authenticated once, shop everywhere",
      description: "2key's SSO modal handles customer identity. Once a buyer logs in, they are recognized across every 2key-powered merchant store.",
      features: [
        { title: "Unified Customer Profile", subtitle: "shared shipping and billing info across merchants" },
        { title: "Secure Password-less Login", subtitle: "email magic links or biometric login for frictionless checkout" },
      ],
      iconColor: "purple",
      visual: (
        <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6">
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Welcome to 2key SSO</h4>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
              />
              <button className="w-full px-4 py-3 bg-teal text-white rounded-lg text-sm font-semibold hover:bg-teal/90 transition-colors">
                Continue with Email
              </button>
              <div className="flex items-center gap-3">
                <button className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                  Google
                </button>
                <button className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                  Apple
                </button>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      number: "4",
      title: "Automated, instant settlements",
      description: "Every transaction is automatically split at the source. Merchants, influencers, and platforms get paid their share instantly without manual reconciliation.",
      stats: [
        { label: "SETTLEMENT TIME", value: "Instant" },
        { label: "ACCURACY", value: "100.0%" },
      ],
      iconColor: "green",
      visual: (
        <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6">
          <div className="mb-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-500">Order</div>
                <div className="text-lg font-bold text-gray-900">$100.00</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded bg-green-500 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-gray-600">MERCHANT</span>
                </div>
                <div className="text-lg font-bold text-green-600">$95.00</div>
              </div>
              <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded bg-red-500 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-gray-600">INFLUENCER</span>
                </div>
                <div className="text-lg font-bold text-red-600">$10.00</div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded bg-blue-500 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5z" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-gray-600">2KEY</span>
                </div>
                <div className="text-lg font-bold text-blue-600">$5.00</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded bg-gray-400 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5z" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-gray-600">PLATFORM</span>
                </div>
                <div className="text-lg font-bold text-gray-600">—</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  const getIcon = (stepId, color) => {
    if (stepId === 1) {
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      )
    }
    if (stepId === 2) {
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    }
    if (stepId === 3) {
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    }
    if (stepId === 4) {
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  }

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-sm sm:text-base font-heading font-semibold text-teal uppercase tracking-wider mb-4">
            THE WORKFLOW
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-navy mb-4 leading-tight">
            How 2key powers commerce
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Four simple steps to unify your checkout experience across domains, influencers, and payments.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
            >
              {/* Left: Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    step.iconColor === 'blue' ? 'bg-blue-100 text-blue-600' :
                    step.iconColor === 'orange' ? 'bg-orange-100 text-orange-600' :
                    step.iconColor === 'purple' ? 'bg-purple-100 text-purple-600' :
                    'bg-green-100 text-green-600'
                  }`}>
                    {getIcon(step.id, step.iconColor)}
                  </div>
                  <div className="text-3xl sm:text-4xl font-heading font-bold text-navy">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy leading-tight">
                  {step.title}
                </h3>

                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {step.features && (
                  <ul className="space-y-3">
                    {step.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          step.iconColor === 'blue' ? 'text-blue-600' :
                          step.iconColor === 'orange' ? 'text-orange-600' :
                          step.iconColor === 'purple' ? 'text-purple-600' :
                          'text-green-600'
                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {typeof feature === 'string' ? (
                          <span className="text-base sm:text-lg text-gray-700">{feature}</span>
                        ) : (
                          <div>
                            <span className="text-base sm:text-lg font-semibold text-gray-900">{feature.title}</span>
                            <p className="text-sm text-gray-600">{feature.subtitle}</p>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                )}

                {step.promoCode && (
                  <div className={`inline-block px-4 py-2 rounded-lg ${
                    step.iconColor === 'orange' ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-700'
                  } font-semibold text-sm`}>
                    {step.promoCode}
                  </div>
                )}

                {step.stats && (
                  <div className="grid grid-cols-2 gap-4">
                    {step.stats.map((stat, idx) => (
                      <div key={idx} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="text-xs font-semibold text-gray-500 uppercase mb-1">{stat.label}</div>
                        <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right: Visual */}
              <div className="flex-1 w-full max-w-lg">
                {step.visual}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
