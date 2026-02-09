"use client"
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center bg-navy text-white overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blurple/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pt-16 sm:pb-20 lg:py-28 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: Text Content */}
          <div className="space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight">
              One checkout. Many merchants.{' '}
              <span className="text-teal">Built for influencers.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
              The billing layer that keeps you the Merchant of Record while influencers get paid automatically.
            </p>
            
            {/* CTA Buttons (Segment style like screenshot) */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/merchants"
                className="group inline-flex items-center justify-center gap-3 px-6 py-4 sm:px-8 sm:py-4 rounded-2xl bg-teal text-navy font-heading font-bold text-base sm:text-lg shadow-xl shadow-teal/20 hover:bg-teal/90 hover:shadow-teal/30 transition-all min-w-[180px] sm:min-w-[200px]"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span>For Merchants</span>
              </Link>
              
              <Link
                href="/influencers"
                className="group inline-flex items-center justify-center gap-3 px-6 py-4 sm:px-8 sm:py-4 rounded-2xl bg-white text-navy font-heading font-bold text-base sm:text-lg border-2 border-gray-200 hover:border-teal hover:shadow-lg transition-all min-w-[180px] sm:min-w-[200px]"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>For Influencers</span>
              </Link>
            </div>

                </div>

          {/* RIGHT SIDE: Interactive Checkout Card */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Floating 3D Checkout Card */}
              <div className="glass-dark rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                {/* Merchant Logo */}
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
                  <div className="w-10 h-10 bg-teal/20 rounded-lg flex items-center justify-center">
                    <span className="text-teal font-bold text-lg">S</span>
              </div>
                  <div>
                    <div className="font-heading font-semibold">Scomm.ai</div>
                    <div className="text-xs text-gray-400">Premium Plan</div>
            </div>
          </div>

                {/* Line Items */}
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Monthly Subscription</span>
                    <span className="font-semibold">$99.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Setup Fee</span>
                    <span className="font-semibold">$0.00</span>
              </div>
            </div>

                {/* Promo Code Input - Pulsating */}
                <div className="mb-4 p-3 bg-teal/10 rounded-lg border border-teal/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-teal/20 animate-pulse"></div>
                  <div className="relative flex items-center gap-2">
                    <span className="text-xs text-teal font-mono">Promo code: ALEX20 applied</span>
                    <span className="px-2 py-0.5 bg-teal/20 text-teal text-xs rounded font-semibold">Attribution Active</span>
              </div>
            </div>

                {/* Total */}
                <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                  <span className="font-heading font-bold text-lg">Total</span>
                  <span className="font-heading font-bold text-2xl text-teal">$79.20</span>
              </div>

                {/* Checkout Button */}
                <button className="w-full mt-4 py-3 bg-teal text-navy rounded-lg font-heading font-bold hover:bg-teal/90 transition-colors">
                  Complete Checkout
                </button>
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
