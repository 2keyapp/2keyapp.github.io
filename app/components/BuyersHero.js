import Link from 'next/link'

export default function BuyersHero() {
  return (
    <section className="relative min-h-screen bg-navy py-12  overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blurple/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal/10 border border-teal/20 rounded-lg">
              <span className="text-sm font-heading font-semibold text-teal uppercase tracking-wider">INFLUENCER NETWORK</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
              <span className="text-white">Unlock the full potential of{' '}</span>
              <span className="text-teal">your influence.</span>
            </h1>
            
            {/* Description */}
            {/* <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
              Join an ecosystem built on transparency, recurring revenue, and decentralization. We provide the tools you need to grow your personal brand into a sustainable business.
            </p> */}
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center px-8 py-4 bg-teal text-navy rounded-xl font-heading font-bold text-lg hover:bg-teal/90 transition-colors text-center"
              >
                Join Network
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-xl font-heading font-semibold text-lg hover:border-teal hover:bg-white/20 hover:shadow-lg transition-all text-center"
              >
                Learn More
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-3 pt-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal to-teal/80 border-2 border-navy"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blurple to-blurple/80 border-2 border-navy"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lavender to-lavender/80 border-2 border-navy"></div>
              </div>
              <p className="text-sm text-gray-300 font-medium">
                Trusted by <span className="font-bold text-white">thousands of buyers</span> worldwide
              </p>
            </div>
          </div>

          {/* Right Side: Features Preview Card */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Features Card */}
              <div className="glass-dark rounded-2xl p-8 bg-navy border border-white/10 shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-heading font-bold text-white">Key Features</h3>
                  <div className="flex items-center gap-2 px-3 py-1 bg-teal/10 rounded-full border border-teal/20">
                    <span className="text-sm font-semibold text-teal">Live</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white mb-1">Transparent Earnings</p>
                      <p className="text-xs text-gray-400">Real-time tracking of every conversion</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white mb-1">Recurring Revenue</p>
                      <p className="text-xs text-gray-400">Lifetime commissions from referrals</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white mb-1">Secure Payouts</p>
                      <p className="text-xs text-gray-400">Smart contract-protected payments</p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">ACTIVE USERS</p>
                    <p className="text-2xl font-bold text-white">10K+</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">TOTAL EARNED</p>
                    <p className="text-2xl font-bold text-white">$2.5M+</p>
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

