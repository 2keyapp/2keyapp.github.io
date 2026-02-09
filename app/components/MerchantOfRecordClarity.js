export default function MerchantOfRecordClarity() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 leading-tight">
            Merchant of Record Clarity
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We operate in full alignment with global payment provider requirements to protect your merchant standing.
          </p>
        </div>

        {/* Two Column Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Left Card: ALWAYS THE MOR */}
          <div className="rounded-xl p-6 sm:p-8 bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm">
            {/* Label */}
            <div className="inline-block px-3 py-1.5 bg-teal/20 border border-teal/30 rounded-lg mb-4">
              <span className="text-xs font-heading font-semibold text-teal uppercase tracking-wider">ALWAYS THE MOR</span>
            </div>
            
            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-6">
              The Seller's Role
            </h3>
            
            {/* List */}
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Holds and manages direct PSP account relationships
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Full responsibility for product fulfillment and shipping
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Handles direct customer support and dispute resolution
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Accountable for local tax collection and remittance
                </span>
              </li>
            </ul>
          </div>

          {/* Right Card: TECHNOLOGY LAYER */}
          <div className="rounded-xl p-6 sm:p-8 bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm">
            {/* Label */}
            <div className="inline-block px-3 py-1.5 bg-white/10 border border-white/20 rounded-lg mb-4">
              <span className="text-xs font-heading font-semibold text-gray-300 uppercase tracking-wider">TECHNOLOGY LAYER</span>
            </div>
            
            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-6">
              <span className="text-teal">2key</span>'s Role
            </h3>
            
            {/* List with Icons */}
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Hosting: Secure, high-conversion checkout infrastructure
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Identity: Decentralized identity for buyers and influencers
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Routing: Intelligent link mapping and smart triggers
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Commission: Automated smart-contract based payout splits
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

