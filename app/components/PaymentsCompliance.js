export default function PaymentsCompliance() {
  return (
    <section className="relative py-20  bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-left mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-navy leading-tight">
            Payments & Compliance
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="space-y-8">
          {/* Top Row: 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Stripe Connect Integration */}
            <div className="rounded-lg p-5 bg-white border border-gray-200 hover:border-teal/30 transition-all relative">
              {/* CERTIFIED Badge */}
              <div className="absolute top-3 right-3">
                <span className="px-2 py-0.5 bg-green-100 border border-green-300 text-green-700 rounded-full text-[10px] font-semibold uppercase">
                  CERTIFIED
                </span>
              </div>
              
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-teal/20 border border-teal/40 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-heading font-bold text-navy mb-2">
                Stripe Connect Integration
              </h3>
              
              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Secure payment processing through Stripe's enterprise-grade infrastructure. Managed platform accounts with full liability protection.
              </p>
              
              {/* Progress Bar */}
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-teal rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>

            {/* PayPal Commerce Platform */}
            <div className="rounded-lg p-5 bg-white border border-gray-200 hover:border-teal/30 transition-all relative">
              {/* ACTIVE Badge */}
              <div className="absolute top-3 right-3">
                <span className="px-2 py-0.5 bg-green-100 border border-green-300 text-green-700 rounded-full text-[10px] font-semibold uppercase">
                  ACTIVE
                </span>
              </div>
              
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-teal/20 border border-teal/40 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-heading font-bold text-navy mb-2">
                PayPal Commerce Platform
              </h3>
              
              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Global commerce reach with PayPal's trusted financial stack. Optimized checkout flows and multi-currency support.
              </p>
              
              {/* Progress Bar */}
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-teal rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>

          {/* Bottom Row: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Seller-as-MoR */}
            <div className="rounded-lg p-5 bg-white border border-gray-200 hover:border-teal/30 transition-all">
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-teal/20 border border-teal/40 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-heading font-bold text-navy mb-2">
                Seller-as-MoR
              </h3>
              
              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Architecture diagram showing direct-to-seller payment flows with delegated tax compliance.
              </p>
              
              {/* Flow Diagram */}
              <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                <div className="flex items-center justify-between gap-2">
                  {/* User Box */}
                  <div className="flex-1 bg-white rounded px-2 py-1.5 border border-gray-200 text-center">
                    <div className="text-[10px] font-semibold text-navy uppercase">User</div>
                  </div>
                  
                  {/* Arrow */}
                  <div className="flex-shrink-0">
                    <svg className="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  
                  {/* 2key Gateway Box */}
                  <div className="flex-1 bg-teal/10 rounded px-2 py-1.5 border border-teal/30 text-center">
                    <div className="text-[10px] font-bold text-teal-600 uppercase">2key Gateway</div>
                  </div>
                  
                  {/* Arrow */}
                  <div className="flex-shrink-0">
                    <svg className="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  
                  {/* Seller Account Box */}
                  <div className="flex-1 bg-white rounded px-2 py-1.5 border border-gray-200 text-center">
                    <div className="text-[10px] font-semibold text-navy uppercase">Seller Account</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tenant Isolation */}
            <div className="rounded-lg p-5 bg-white border border-gray-200 hover:border-teal/30 transition-all">
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-teal/20 border border-teal/40 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                </svg>
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-heading font-bold text-navy mb-2">
                Tenant Isolation
              </h3>
              
              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Strict host-header infrastructure isolation ensuring zero cross-tenant data leakage.
              </p>
              
              {/* Dashed Lines Visual */}
              <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-teal rounded-full border-2 border-dashed border-teal"></div>
                  <div className="flex-1 h-2 bg-teal rounded-full border-2 border-dashed border-teal"></div>
                  <div className="flex-1 h-2 bg-teal rounded-full border-2 border-dashed border-teal"></div>
                </div>
              </div>
            </div>

            {/* No Commingling */}
            <div className="rounded-lg p-5 bg-white border border-gray-200 hover:border-teal/30 transition-all relative">
              {/* VERIFIED PROTOCOL Badge */}
              <div className="absolute top-3 right-3 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[10px] font-semibold text-green-700 uppercase">
                  VERIFIED
                </span>
              </div>
              
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-teal/20 border border-teal/40 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-heading font-bold text-navy mb-2">
                No Commingling
              </h3>
              
              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Secure vault architecture ensuring platform and seller funds are never mixed or aggregated.
              </p>
              
              {/* Visual Container */}
              <div className="relative bg-gray-50 rounded-lg p-3 border border-gray-200 min-h-[60px] flex items-center justify-center">
                {/* Background Padlock Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-5">
                  <svg className="w-20 h-20 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                {/* Security Badge */}
                <div className="relative z-10 flex items-center gap-1.5 px-3 py-1.5 bg-white rounded border border-teal/20">
                  <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-[10px] font-bold text-teal-600 uppercase">Separated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

