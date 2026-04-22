export default function InfluencersHowItWorks() {
  const steps = [
    {
      id: 1,
      number: "1",
      title: "Sign Up & Get Your Code",
      description: "Join the network and instantly get your unique promo code and tracking links. No waiting for manual approvals.",
      features: [
        "Instant unique code generation",
        "Universal tracking link for all merchants",
      ],
      iconColor: "orange",
      visual: (
        <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6">
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Your Creator Profile</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                  <span className="text-orange-600 font-bold">TC</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">Top Creator</div>
                  <div className="text-xs text-gray-500">Member since 2026</div>
                </div>
              </div>
              <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                <div className="text-xs text-gray-500 mb-1">YOUR UNIVERSAL CODE</div>
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-gray-900 text-lg">TOPC20</span>
                  <button className="text-teal text-sm font-semibold hover:underline">Copy</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      number: "2",
      title: "Share with your audience",
      description: "Drop your links in your bio, stories, or descriptions. Buyers use your code at any 2key-supported merchant checkout.",
      promoCode: "Use code TOPC20 for 20% off!",
      iconColor: "teal",
      visual: (
        <div className="relative">
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal to-teal/70 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-semibold text-gray-900">@topcreator</span>
                  <span className="px-2 py-0.5 bg-teal/10 text-teal text-xs font-semibold rounded">LINK IN BIO</span>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  Check out all my favorite products across 15+ merchants in one place!
                </p>
                <div className="px-4 py-2 bg-gray-100 rounded-lg overflow-hidden text-ellipsis whitespace-nowrap">
                  <span className="text-teal font-medium text-sm">2key.app/t/topcreator</span>
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
      title: "Track your impact",
      description: "See exactly which merchants and products are converting. Our attribution engine runs across the whole network.",
      stats: [
        { label: "CLICKS TODAY", value: "1,204" },
        { label: "CONVERSIONS", value: "48" },
      ],
      iconColor: "purple",
      visual: (
        <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6">
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-4">Performance Dashboard</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                <span className="text-sm text-gray-600">Merchant A Sales</span>
                <span className="text-sm font-semibold text-gray-900">$1,420</span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                <span className="text-sm text-gray-600">Merchant B Sales</span>
                <span className="text-sm font-semibold text-gray-900">$890</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-sm font-bold text-gray-900">Total Attributed</span>
                <span className="text-sm font-bold text-teal">$2,310</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      number: "4",
      title: "Get paid instantly",
      description: "No more waiting 60 days for payouts or chasing invoices. 2key splits the checkout funds and routes your commission instantly.",
      features: [
        { title: "Split Settlements", subtitle: "Your cut routes directly to your account at checkout" },
        { title: "No Minimum Thresholds", subtitle: "Access your money immediately" },
      ],
      iconColor: "green",
      visual: (
        <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6">
           <div className="flex items-center gap-4 mb-6">
             <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
               <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
             </div>
             <div>
               <div className="text-sm text-gray-500">Incoming Payout</div>
               <div className="text-2xl font-bold text-green-600">+$24.50</div>
             </div>
           </div>
           <div className="p-3 bg-gray-50 rounded-lg border border-gray-100 text-sm">
             Transfer completed from <strong>Buyer #882</strong> via <strong>Merchant A</strong>.
           </div>
        </div>
      ),
    },
  ]

  const getIcon = (stepId, color) => {
    if (stepId === 1) {
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    }
    if (stepId === 2) {
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      )
    }
    if (stepId === 3) {
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
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
            HOW IT WORKS FOR INFLUENCERS
          </h3>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold text-navy mb-4 leading-tight">
            Influence to income in 4 steps
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Drop your links anywhere. When your audience buys from supported merchants, you get paid instantly.
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
