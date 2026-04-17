export default function What2keyDoes() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-navy overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blurple/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            What 2key Does
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            2key provides the invisible piping that connects brands, creators, and customers across the decentralized web.
          </p>
        </div>

        {/* Three Cards - Horizontal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          
          {/* Card 1: Merchants */}
          <div className="rounded-2xl p-6 sm:p-8 bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-navy mb-4">
              Merchants keep control
            </h3>
            
            <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
              You remain the owner of your payment processing. 2key handles the billing logic while you maintain the direct relationship with Stripe or PayPal.
            </p>

            {/* Ownership Status Card */}
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">OWNERSHIP STATUS</span>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  VERIFIED
                </span>
              </div>
              <div className="bg-white rounded-lg p-3 border border-gray-200 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-navy">Full MoR Control</div>
                  <div className="text-xs text-gray-600">You are the seller of record</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Influencers - Elevated Center Card */}
          <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-teal via-teal/95 to-teal/90 border-2 border-teal shadow-2xl hover:shadow-3xl transition-all relative overflow-hidden -mt-6 sm:-mt-8 lg:-mt-10">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal/70 via-lavender/50 to-teal/60 animate-pulse opacity-40"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-black/10 backdrop-blur-sm flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-black mb-4">
                Influencers drive growth
              </h3>
              
              <p className="text-base sm:text-lg text-gray-900 mb-6 leading-relaxed">
                Empower creators with powerful tracking. See every conversion across multiple merchant domains in a single dashboard.
              </p>

              {/* Growth Chart */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 border border-white/30 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1.5 bg-teal/30 text-black font-mono font-bold text-sm rounded-lg">VIP_CREATOR_25</span>
                  <span className="text-sm font-bold text-black">+18.5% Growth</span>
                </div>
                <div className="flex items-end gap-2 h-20">
                  <div className="flex-1 bg-gradient-to-t from-teal/60 to-teal/40 rounded-t shadow-md" style={{ height: '40%' }}></div>
                  <div className="flex-1 bg-gradient-to-t from-teal/70 to-teal/50 rounded-t shadow-md" style={{ height: '55%' }}></div>
                  <div className="flex-1 bg-gradient-to-t from-teal/80 to-teal/60 rounded-t shadow-md" style={{ height: '70%' }}></div>
                  <div className="flex-1 bg-gradient-to-t from-teal/90 to-teal/70 rounded-t shadow-md" style={{ height: '85%' }}></div>
                  <div className="flex-1 bg-gradient-to-t from-teal to-teal/80 rounded-t shadow-lg" style={{ height: '100%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: 2key Transparency */}
          <div className="rounded-2xl p-6 sm:p-8 bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-navy mb-4">
              Billing transparency
            </h3>
            
            <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed flex-1">
              Clear compliance built into every checkout experience to establish trust.
            </p>

            {/* Disclosure Info */}
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 mt-auto">
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">PROCESSING ENTITY</div>
                  <p className="text-sm font-semibold text-teal">
                    Billing provided by 2key.app
                  </p>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">LEGAL MERCHANT OF RECORD</div>
                  <p className="text-sm font-semibold text-navy">
                    Seller you are purchasing from
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
