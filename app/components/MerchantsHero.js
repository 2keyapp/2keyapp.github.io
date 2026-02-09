import Link from 'next/link'

export default function MerchantsHero() {
  return (
    <section className="relative h-screen bg-navy py-6 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal/10 border border-teal/20 rounded-lg">
              <svg className="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-sm font-heading font-semibold text-teal uppercase tracking-wider">FULL AUTONOMY</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
              <span className="text-white">Sell globally.</span>{' '}
              <span className="text-teal">Stay Merchant of Record.</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
              2key never becomes your reseller. You stay the Merchant of Record — we just power the checkout, tracking, and attribution layer.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center px-8 py-4 bg-teal text-navy rounded-xl font-heading font-bold text-lg hover:bg-teal/90 transition-colors text-center"
              >
                Create Merchant Account
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-xl font-heading font-semibold text-lg hover:border-teal hover:bg-white/20 hover:shadow-lg transition-all text-center"
              >
                View API Docs
              </Link>
            </div>
          </div>

          {/* Right Side: Dashboard Graphic */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Dashboard Frame */}
              <div className="glass-dark rounded-2xl p-6 bg-navy border border-white/10 shadow-2xl">
                {/* Dashboard Content */}
                <div className="bg-white/5 rounded-xl p-6 space-y-6">
                  {/* Circular Charts */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">2000</div>
                      <div className="relative w-24 h-24 mx-auto">
                        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8"/>
                          <circle cx="50" cy="50" r="40" fill="none" stroke="#00F0B5" strokeWidth="8" strokeDasharray={`${80 * 3.14159 * 0.2} ${80 * 3.14159 * 0.8}`} strokeDashoffset="0"/>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-teal font-bold text-lg">20%</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">3000</div>
                      <div className="relative w-24 h-24 mx-auto">
                        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8"/>
                          <circle cx="50" cy="50" r="40" fill="none" stroke="#00F0B5" strokeWidth="8" strokeDasharray={`${80 * 3.14159 * 0.8} ${80 * 3.14159 * 0.2}`} strokeDashoffset="0"/>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-teal font-bold text-lg">80%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bar Charts */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-4 bg-teal/30 rounded"></div>
                      <div className="flex-1 h-4 bg-teal/20 rounded"></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-20 h-4 bg-teal/40 rounded"></div>
                      <div className="flex-1 h-4 bg-teal/20 rounded"></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-4 bg-teal/50 rounded"></div>
                      <div className="flex-1 h-4 bg-teal/20 rounded"></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-28 h-4 bg-teal rounded"></div>
                      <div className="flex-1 h-4 bg-teal/20 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal/20 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blurple/20 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}






