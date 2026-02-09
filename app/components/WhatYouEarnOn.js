export default function WhatYouEarnOn() {
  const cards = [
    {
      title: "One-time Purchases",
      description:
        "Receive instant commission for every individual product or service sale referred by you.",
      frequencyLabel: "FREQUENCY",
      frequencyValue: "Single Payment",
      icon: (
        <svg
          className="w-6 h-6 text-teal"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5h2l1 14h12l1-10H8"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 12h4m-2-2v4M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
          />
        </svg>
      ),
    },
    {
      title: "Subscriptions",
      description:
        "Earn recurring revenue for every active month or year as long as the user remains subscribed.",
      frequencyLabel: "FREQUENCY",
      frequencyValue: "Monthly / Yearly",
      icon: (
        <svg
          className="w-6 h-6 text-teal"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Renewals",
      description:
        "Ongoing earnings on contract extensions and manual renewals, tracked through deep system integration.",
      frequencyLabel: "FREQUENCY",
      frequencyValue: "Ongoing / Extended",
      badge: "MERCHANT ENABLED",
      icon: (
        <svg
          className="w-6 h-6 text-teal"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-20 bg-navy overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blurple/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-2">
              What You Earn On
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-xl">
              Multiple revenue streams, one simple dashboard.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal/10 border border-teal/20">
            <span className="w-2 h-2 rounded-full bg-teal" />
            <span className="text-xs font-semibold text-teal uppercase tracking-wide">
              Maximized ROI
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="glass-dark rounded-2xl p-6 bg-navy border border-white/10 shadow-2xl hover:shadow-teal/20 hover:border-teal/30 transition-all flex flex-col justify-between"
            >
              <div className="flex items-start gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center">
                  {card.icon}
                </div>
                {card.badge && (
                  <span className="ml-auto px-2 py-0.5 rounded-full bg-teal/20 border border-teal/30 text-teal text-[10px] font-semibold uppercase tracking-wide">
                    {card.badge}
                  </span>
                )}
              </div>

              <div className="space-y-3 mb-6">
                <h3 className="text-lg font-heading font-semibold text-white">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs">
                <div className="text-gray-400 uppercase tracking-wide mb-1">
                  {card.frequencyLabel}
                </div>
                <div className="text-white font-semibold">
                  {card.frequencyValue}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Row */}
        {/* <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <span className="text-xs font-heading font-semibold text-gray-400 uppercase tracking-[0.2em] text-center">
            Ready to start earning?
          </span>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-teal text-navy font-heading font-bold text-sm sm:text-base hover:bg-teal/90 transition-colors">
              Create Influencer Account
            </button>
            <button className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-heading font-semibold text-sm sm:text-base hover:border-teal hover:bg-white/20 hover:shadow-lg transition-all">
              Talk to an Expert
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}


