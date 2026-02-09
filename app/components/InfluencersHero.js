import Link from 'next/link'

export default function InfluencersHero() {
  return (
    <section className="relative min-h-screen bg-navy py-12 lg:py-20 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal/10 border border-teal/20 rounded-lg">
              <span className="text-sm font-heading font-semibold text-teal uppercase tracking-wider">INFLUENCER FIRST ATTRIBUTION</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              <span className="text-white">Get paid for real influence — not{' '}</span>
              <span className="text-teal">guesswork.</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
              The only attribution engine built for modern creators. Real-time transparency, billing-level accuracy, and built for recurring revenue.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center px-8 py-4 bg-teal text-navy rounded-xl font-heading font-bold text-lg hover:bg-teal/90 transition-colors text-center"
              >
                Start Earning Now
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-xl font-heading font-semibold text-lg hover:border-teal hover:bg-white/20 hover:shadow-lg transition-all text-center"
              >
                Watch Demo
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-3 pt-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal to-teal/80 border-2 border-navy"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal to-teal/70 border-2 border-navy/80"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lavender to-lavender/80 border-2 border-navy"></div>
              </div>
              <p className="text-sm text-gray-300 font-medium">
                Joined by <span className="font-bold text-white">2,000+ top creators</span> this month
              </p>
            </div>
          </div>

          {/* Right Side: Real-time Earnings Card */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Earnings Card */}
              <div className="glass-dark rounded-2xl p-8 bg-navy border border-white/10 shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-heading font-bold text-white">Real-time Earnings</h3>
                  <div className="flex items-center gap-2 px-3 py-1 bg-teal/10 rounded-full border border-teal/20">
                    <span className="text-sm font-semibold text-teal">+24% Today</span>
                  </div>
                </div>

                {/* Bar Chart */}
                <div className="mb-8">
                  <div className="flex items-end justify-between gap-2 h-32">
                    <div className="flex-1 bg-white/10 rounded-t" style={{ height: '30%' }}></div>
                    <div className="flex-1 bg-teal/30 rounded-t" style={{ height: '50%' }}></div>
                    <div className="flex-1 bg-teal/50 rounded-t" style={{ height: '70%' }}></div>
                    <div className="flex-1 bg-teal rounded-t" style={{ height: '100%' }}></div>
                    <div className="flex-1 bg-white/10 rounded-t" style={{ height: '40%' }}></div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">PENDING PAYOUT</p>
                    <p className="text-3xl font-bold text-white">$4,280.50</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">ACTIVE SUBS</p>
                    <p className="text-3xl font-bold text-white">142</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal/20 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal/10 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

