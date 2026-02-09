export default function TrustBadges() {
  const badges = [
    {
      id: 1,
      icon: (
        <svg className="w-7 h-7 text-teal" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 2.506.905 4.415 2.57 5.588 1.344 1.095 3.58 1.895 6.464 2.715 2.149.789 3.634 1.384 3.634 2.851 0 .98-.84 1.545-2.354 1.545-1.873 0-4.575-.921-6.648-1.796l-.9 5.555C8.219 23.065 10.177 24 13.1 24c2.66 0 4.811-.624 6.358-1.883 1.664-1.331 2.525-3.314 2.525-5.837 0-2.256-.884-4.05-2.524-5.281-1.56-1.18-3.955-1.931-6.583-2.833z"/>
        </svg>
      ),
      text: "Stripe verified",
      description: "PCI-DSS Level 1",
      iconBg: "bg-teal/10",
      iconBorder: "border-teal/20",
      iconHover: "group-hover:bg-teal/20 group-hover:border-teal/40",
      glow: "bg-teal/5",
      shadow: "hover:shadow-teal/20",
    },
    {
      id: 2,
      icon: (
        <svg className="w-7 h-7 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.174 1.351 1.05 3.3-.15 4.4-.996.9-2.415 1.138-3.93 1.138h-2.97l-.614 3.784h2.304c1.617 0 3.027.537 4.047 1.547 1.561 1.54 1.838 3.859.93 5.535-1.248 2.357-4.06 3.535-7.007 3.535H7.077z"/>
        </svg>
      ),
      text: "PayPal Commerce Platform",
      description: "Enterprise ready",
      iconBg: "bg-blue-400/10",
      iconBorder: "border-blue-400/20",
      iconHover: "group-hover:bg-blue-400/20 group-hover:border-blue-400/40",
      glow: "bg-blue-400/5",
      shadow: "hover:shadow-blue-400/20",
    },
    {
      id: 3,
      icon: (
        <svg className="w-7 h-7 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      text: "Seller-as-MoR compliant",
      description: "Full compliance",
      iconBg: "bg-teal/10",
      iconBorder: "border-teal/20",
      iconHover: "group-hover:bg-teal/20 group-hover:border-teal/40",
      glow: "bg-teal/5",
      shadow: "hover:shadow-teal/20",
    },
    {
      id: 4,
      icon: (
        <svg className="w-7 h-7 text-lavender" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      text: "Influencer-first attribution",
      description: "Real-time tracking",
      iconBg: "bg-lavender/10",
      iconBorder: "border-lavender/20",
      iconHover: "group-hover:bg-lavender/20 group-hover:border-lavender/40",
      glow: "bg-lavender/5",
      shadow: "hover:shadow-lavender/20",
    },
  ]

  return (
    <section className="relative py-20 bg-white border-b border-gray-200 overflow-hidden">
      {/* Subtle background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-lavender/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Simple heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-4">
            Built on Enterprise Infrastructure
          </h2>
        </div>

        {/* Simple Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-10">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className="flex items-center gap-3"
            >
              <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${badge.iconBg} border ${badge.iconBorder} transition-all duration-300`}>
                {badge.icon}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-heading font-bold text-navy">
                  {badge.text}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
