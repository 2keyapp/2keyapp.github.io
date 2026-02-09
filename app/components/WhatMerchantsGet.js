export default function WhatMerchantsGet() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-left mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-navy mb-4 leading-tight">
            What merchants get
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl leading-relaxed">
            The complete infrastructure to scale your global sales network while maintaining 100% control over your revenue, customer relationships, and brand identity.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1: Direct Integration */}
          <div className="rounded-xl p-6 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
            <h3 className="text-xl font-heading font-bold text-navy mb-3">
              Direct Integration
            </h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed flex-grow">
              Funds flow directly into your own merchant accounts from the world's leading payment providers.
            </p>
            
            {/* Visuals */}
            <div className="space-y-4 mt-auto min-h-[180px] flex flex-col justify-end">
              {/* Two square icons */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="w-12 h-12 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
              </div>
              
              {/* NO CUSTOM CODE badge */}
              <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold w-fit">
                NO CUSTOM CODE
              </div>
              
              {/* Status box at bottom */}
              <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-gray-700">Live API Connection: Success</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Customer Ownership */}
          <div className="rounded-xl p-6 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
            <h3 className="text-xl font-heading font-bold text-navy mb-3">
              Customer Ownership
            </h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed flex-grow">
              Build your business on your own terms. We never sit between you and your precious customer data.
            </p>
            
            {/* Visuals */}
            <div className="mt-auto min-h-[180px] flex flex-col justify-end">
              <div className="bg-navy rounded-xl p-4 border border-white/10">
                {/* Top section with icon and text */}
                <div className="flex items-center justify-between mb-3 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                    <span className="text-white font-semibold text-xs uppercase tracking-wide">YOUR DATA, YOUR CUSTOMERS</span>
                  </div>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                {/* Data lines */}
                <div className="space-y-2 pt-2">
                  <div className="h-1.5 bg-teal/40 rounded"></div>
                  <div className="h-1.5 bg-teal/40 rounded"></div>
                  <div className="h-1.5 bg-teal/40 rounded w-4/5"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Enterprise Isolation */}
          <div className="rounded-xl p-6 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
            <h3 className="text-xl font-heading font-bold text-navy mb-3">
              Enterprise Isolation
            </h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed flex-grow">
              Each merchant enjoys a dedicated, isolated host environment for maximum security and brand integrity.
            </p>
            
            {/* Visuals */}
            <div className="space-y-3 mt-auto min-h-[180px] flex flex-col justify-end">
              {/* Top box with globe and domain */}
              <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-mono text-teal font-semibold">seller.2key.app</span>
                </div>
              </div>
              
              {/* Arrow */}
              <div className="flex justify-center py-1">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </div>
              
              {/* Bottom box with shield */}
              <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-sm font-semibold text-gray-700">Host-based isolation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Smart Attribution */}
          <div className="rounded-xl p-6 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
            <h3 className="text-xl font-heading font-bold text-navy mb-3">
              Smart Attribution
            </h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed flex-grow">
              No more revenue leakage. Our attribution tech tracks every sale from link to conversion automatically.
            </p>
            
            {/* Visuals */}
            <div className="mt-auto min-h-[180px] flex flex-col justify-end">
              <div className="flex items-center gap-2 flex-wrap">
                {/* REFER50 box */}
                <div className="px-3 py-2 bg-teal/10 border-2 border-dashed border-teal rounded-lg">
                  <span className="text-sm font-mono font-bold text-teal">REFER50</span>
                </div>
                
                {/* Arrow */}
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                
                {/* Checkmark circle */}
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                {/* Arrow */}
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                
                {/* SALE box */}
                <div className="px-3 py-2 bg-green-100 border border-green-300 rounded-lg">
                  <span className="text-sm font-bold text-green-700">SALE $199.00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Billing Lifecycle */}
          <div className="rounded-xl p-6 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
            <h3 className="text-xl font-heading font-bold text-navy mb-3">
              Billing Lifecycle
            </h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed flex-grow">
              Comprehensive management of subscriptions, recurring renewals, and complex coupon logic in one dashboard.
            </p>
            
            {/* Visuals */}
            <div className="mt-auto min-h-[180px] flex flex-col justify-end">
              <div className="grid grid-cols-3 gap-2">
                {/* RENEWALS button */}
                <button className="px-3 py-3 bg-gray-50 border border-gray-200 rounded-lg hover:border-teal hover:bg-teal/5 transition-all">
                  <div className="flex flex-col items-center gap-2">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span className="text-xs font-semibold text-gray-700">RENEWALS</span>
                  </div>
                </button>
                
                {/* SUBSCR. button */}
                <button className="px-3 py-3 bg-gray-50 border border-gray-200 rounded-lg hover:border-teal hover:bg-teal/5 transition-all">
                  <div className="flex flex-col items-center gap-2">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xs font-semibold text-gray-700">SUBSCR.</span>
                  </div>
                </button>
                
                {/* COUPONS button */}
                <button className="px-3 py-3 bg-gray-50 border border-gray-200 rounded-lg hover:border-teal hover:bg-teal/5 transition-all">
                  <div className="flex flex-col items-center gap-2">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4v-3a2 2 0 00-2-2H5z" />
                    </svg>
                    <span className="text-xs font-semibold text-gray-700">COUPONS</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Card 6: Tax Autonomy */}
          <div className="rounded-xl p-6 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
            <h3 className="text-xl font-heading font-bold text-navy mb-3">
              Tax Autonomy
            </h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed flex-grow">
              Integrated tax engine support gives you total control over global compliance and reporting obligations.
            </p>
            
            {/* Visuals */}
            <div className="mt-auto space-y-3 min-h-[180px] flex flex-col justify-end">
              <div className="bg-navy rounded-lg p-3 border border-white/10">
                <div className="flex items-center gap-3">
                  {/* Icon */}
                  <div className="w-9 h-9 rounded-lg bg-teal/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  {/* Text */}
                  <div className="flex-1">
                    <div className="text-xs text-white/90 uppercase tracking-wide font-semibold mb-0.5">TAX INTEGRATION</div>
                    <div className="text-xs text-white/70">Provider: Active</div>
                  </div>
                </div>
              </div>
              
              {/* Compliant badge below */}
              <div className="bg-green-500 rounded-lg px-3 py-2 text-center">
                <span className="text-sm font-bold text-white">Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
