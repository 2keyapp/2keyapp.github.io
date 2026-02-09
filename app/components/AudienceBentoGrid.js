"use client"
import Link from 'next/link'

export default function AudienceBentoGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Tile 1: Merchants */}
          <div className="glass-dark rounded-2xl p-8 lg:p-10 bg-navy text-white group hover:bg-navy/90 hover-merchant transition-all duration-300">
            <h3 className="text-3xl font-heading font-bold mb-4">Keep your customers.</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Stripe/PayPal Integration</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Host-based isolation</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Merchant of Record</span>
              </li>
            </ul>
            <Link
              href="/merchants"
              className="inline-flex items-center gap-2 text-teal font-heading font-semibold hover:gap-3 transition-all"
            >
              Learn more
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Tile 2: Influencers */}
          <div className="glass rounded-2xl p-8 lg:p-10 bg-gradient-to-br from-lavender/30 to-teal/10 text-navy group hover:from-lavender/40 hover:to-teal/20 hover-influencer transition-all duration-300">
            <h3 className="text-3xl font-heading font-bold mb-4">Get paid for real influence.</h3>
            
            {/* Revenue Graph Visual */}
            <div className="mb-6 p-4 bg-white/50 rounded-lg">
              <div className="text-xs text-gray-600 mb-2">Recurring Revenue from Renewals</div>
              <div className="flex items-end gap-2 h-24">
                <div className="flex-1 bg-teal/30 rounded-t" style={{ height: '40%' }}></div>
                <div className="flex-1 bg-teal/50 rounded-t" style={{ height: '60%' }}></div>
                <div className="flex-1 bg-teal/70 rounded-t" style={{ height: '80%' }}></div>
                <div className="flex-1 bg-teal rounded-t" style={{ height: '100%' }}></div>
              </div>
              <div className="text-xs text-gray-500 mt-2">MRR Growth</div>
            </div>

            <Link
              href="/influencers"
              className="inline-flex items-center gap-2 text-navy font-heading font-semibold hover:gap-3 transition-all"
            >
              Join network
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Tile 3: Buyers */}
          <div className="glass rounded-2xl p-8 lg:p-10 bg-white text-navy group hover:shadow-xl transition-all duration-300">
            <h3 className="text-3xl font-heading font-bold mb-4">One identity.</h3>
            
            {/* Billing History Mockup */}
            <div className="mb-6 space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                <div className="text-sm font-semibold">Scomm.ai</div>
                <div className="text-xs text-gray-500">$99.00 • Jan 15, 2024</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                <div className="text-sm font-semibold">DevTools Pro</div>
                <div className="text-xs text-gray-500">$49.00 • Jan 10, 2024</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                <div className="text-sm font-semibold">API Gateway</div>
                <div className="text-xs text-gray-500">$199.00 • Jan 5, 2024</div>
              </div>
            </div>

            <p className="text-sm text-gray-600">Unified billing across all merchants</p>
          </div>
        </div>
      </div>
    </section>
  )
}

