export default function MerchantsHowItWorks() {
  const steps = [
    {
      id: 1,
      number: "1",
      title: "Connect your domain",
      description: "Map your subdomain or custom domain to 2key's routing engine. We handle the hard stuff like SSL and DNS.",
      features: [
        "One-click domain mapping",
        "Maintain your full brand identity",
      ],
      iconColor: "blue",
      visual: (
        <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6">
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Domain Setup</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <input 
                  type="text" 
                  value="checkout.yourbrand.com" 
                  readOnly
                  className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-mono text-gray-700"
                />
              </div>
              <div className="flex items-center gap-2 text-xs text-green-600 font-semibold mt-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>SSL Active & Verified</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      number: "2",
      title: "Set commission rates",
      description: "Define global flat rates or assign specific percentages for top tier influencers. Total dynamic control.",
      stats: [
        { label: "DEFAULT RATE", value: "10%" },
        { label: "VIP RATE", value: "25%" },
      ],
      iconColor: "teal",
      visual: (
        <div className="relative">
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6">
             <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
               <div>
                 <div className="font-semibold text-gray-900 text-sm">Base Commission</div>
                 <div className="text-xs text-gray-500">Applies to generic tracked sales</div>
               </div>
               <div className="font-bold text-teal">10%</div>
             </div>
             <div className="flex items-center justify-between">
               <div>
                 <div className="font-semibold text-gray-900 text-sm">VIP Creators</div>
                 <div className="text-xs text-gray-500">Includes codes PRO, ELITE</div>
               </div>
               <div className="font-bold text-teal">20%</div>
             </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      number: "3",
      title: "Buyers checkout cleanly",
      description: "Buyers see your brand interface and process their transaction. 2key stays completely invisible to the customer.",
      features: [
        { title: "White-labeled Checkout", subtitle: "Your brand colors, your domain" },
        { title: "One-click buying", subtitle: "Returning users checkout in seconds" },
      ],
      iconColor: "purple",
      visual: (
        <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
          <div className="bg-navy p-4 flex items-center justify-between">
            <span className="text-white font-bold font-heading tracking-wide">YOUR BRAND</span>
            <span className="text-white/80 text-xs">Checkout securely</span>
          </div>
          <div className="p-6">
            <div className="space-y-3 mb-5">
              <div className="h-10 bg-gray-100 rounded border border-gray-200"></div>
              <div className="h-10 bg-gray-100 rounded border border-gray-200"></div>
            </div>
            <button className="w-full py-3 bg-navy text-white font-bold rounded">Pay $49.00</button>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      number: "4",
      title: "Automatic Splits",
      description: "When the buyer pays, Stripe automatically splits the funds to your account and the influencer's account. No invoicing necessary.",
      features: [
        "100% automated payouts",
        "You keep Merchant of Record status",
      ],
      iconColor: "green",
      visual: (
        <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6">
          <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl font-bold text-gray-900">$100</div>
              <div className="text-xs text-gray-500 uppercase">Customer Payment</div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center bg-gray-50 p-2 rounded border border-gray-100">
               <span className="text-sm font-semibold text-green-700">Your cut (90%)</span>
               <span className="text-sm font-bold text-green-700">+$90.00</span>
            </div>
            <div className="flex justify-between items-center bg-gray-50 p-2 rounded border border-gray-100">
               <span className="text-sm font-semibold text-gray-600">Creator cut (10%)</span>
               <span className="text-sm font-bold text-gray-600">-$10.00</span>
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    }
    if (stepId === 2) {
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
    }
    if (stepId === 3) {
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
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
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gray-50 overflow-hidden border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-sm sm:text-base font-heading font-semibold text-teal uppercase tracking-wider mb-4">
            HOW IT WORKS FOR MERCHANTS
          </h3>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold text-navy mb-4 leading-tight">
            Checkout on autopilot
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Take back control of your billing while effortlessly supporting thousands of affiliates.
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
                    step.iconColor === 'teal' ? 'bg-teal/10 text-teal' :
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
                          step.iconColor === 'teal' ? 'text-teal' :
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
                    step.iconColor === 'orange' ? 'bg-orange-100 text-orange-700' : 
                    step.iconColor === 'teal' ? 'bg-teal/10 text-teal' :
                    'bg-gray-100 text-gray-700'
                  } font-semibold text-sm`}>
                    {step.promoCode}
                  </div>
                )}

                {step.stats && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {step.stats.map((stat, idx) => (
                      <div key={idx} className="p-4 bg-white shadow-sm rounded-lg border border-gray-200">
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
