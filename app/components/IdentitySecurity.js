export default function IdentitySecurity() {
  return (
    <section className="relative py-16 sm:py-20 bg-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-left mb-8">
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 bg-teal rounded-full"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white leading-tight">
              Identity & Security
            </h2>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-6">
          
          {/* Centralized SSO */}
          <div className="rounded-lg p-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:border-teal/30 transition-all">
            {/* Icon */}
            <div className="w-8 h-8 rounded-lg bg-teal/20 border border-teal/40 flex items-center justify-center mb-2">
              <svg className="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>
            
            {/* Title */}
            <h3 className="text-base font-heading font-bold text-white mb-1.5">
              Centralized SSO
            </h3>
            
            {/* Description */}
            <p className="text-xs text-gray-300 leading-relaxed mb-3">
              Unified identity provider supporting SAML 2.0 and OIDC for enterprise clients.
            </p>
            
            {/* Auth Flow Visual */}
            <div className="bg-gray-900 rounded p-2 border border-white/10">
              <div className="flex items-center gap-1.5 mb-1.5">
                <div className="w-5 h-5 rounded bg-teal/20 border border-teal/40 flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <svg className="w-3 h-3 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="w-5 h-5 rounded bg-teal/20 border border-teal/40 flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <div className="text-[9px] font-mono text-green-400">auth_flow: validated</div>
            </div>
          </div>

          {/* Scoped Auth */}
          <div className="rounded-lg p-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:border-teal/30 transition-all">
            {/* Icon */}
            <div className="w-8 h-8 rounded-lg bg-teal/20 border border-teal/40 flex items-center justify-center mb-2">
              <svg className="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            
            {/* Title */}
            <h3 className="text-base font-heading font-bold text-white mb-1.5">
              Scoped Auth
            </h3>
            
            {/* Description */}
            <p className="text-xs text-gray-300 leading-relaxed mb-3">
              Granular permission shields restricting access to seller-specific data buckets.
            </p>
            
            {/* Permission Controls */}
            <div className="bg-white/5 rounded p-2 border border-white/10 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold text-white">Read: Orders</span>
                <span className="px-1.5 py-0.5 bg-green-500/20 border border-green-500/30 text-green-400 rounded text-[9px] font-semibold">Allow</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold text-white">Admin: Settings</span>
                <span className="px-1.5 py-0.5 bg-red-500/20 border border-red-500/30 text-red-400 rounded text-[9px] font-semibold">Deny</span>
              </div>
            </div>
          </div>

          {/* Zero-PII Leakage */}
          <div className="rounded-lg p-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:border-teal/30 transition-all">
            {/* Icon */}
            <div className="w-8 h-8 rounded-lg bg-teal/20 border border-teal/40 flex items-center justify-center mb-2">
              <svg className="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              </svg>
            </div>
            
            {/* Title */}
            <h3 className="text-base font-heading font-bold text-white mb-1.5">
              Zero-PII Leakage
            </h3>
            
            {/* Description */}
            <p className="text-xs text-gray-300 leading-relaxed mb-3">
              Influencer attribution powered by cryptographic hashes to prevent PII exposure.
            </p>
            
            {/* Hash Display */}
            <div className="bg-teal/20 rounded p-2 border border-teal/30">
              <div className="text-[10px] font-mono text-teal break-all">SHA-256: 8e4a9...</div>
            </div>
          </div>

          {/* Audit Trails */}
          <div className="rounded-lg p-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:border-teal/30 transition-all">
            {/* Icon */}
            <div className="w-8 h-8 rounded-lg bg-teal/20 border border-teal/40 flex items-center justify-center mb-2">
              <svg className="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            
            {/* Title */}
            <h3 className="text-base font-heading font-bold text-white mb-1.5">
              Audit Trails
            </h3>
            
            {/* Description */}
            <p className="text-xs text-gray-300 leading-relaxed mb-3">
              Immutable event logging for all administrative actions and fund movements.
            </p>
            
            {/* Log Entries */}
            <div className="bg-gray-900 rounded p-2 border border-white/10">
              <div className="space-y-1">
                <div className="text-[9px] font-mono text-green-400">[2023-10-27 14:22] SYSLOG: OK</div>
                <div className="text-[9px] font-mono text-gray-300">[EVT] API_KEY_ROTATED_S01</div>
                <div className="text-[9px] font-mono text-gray-300">[EVT] FUNDS_SETTLED_9882</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

