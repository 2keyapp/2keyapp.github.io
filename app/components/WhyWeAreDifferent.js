export default function WhyWeAreDifferent() {
  const comparisons = [
    {
      feature: "Attribution Style",
      legacy: "Last-click only (Opaque)",
      key2key: "Billing-level (Transparent)",
    },
    {
      feature: "Reporting Speed",
      legacy: "Delayed / 24-48h Manual",
      key2key: "Real-time Instant",
    },
    {
      feature: "Earnings Model",
      legacy: "One-time limited payouts",
      key2key: "Recurring Lifecycle",
    },
    {
      feature: "Cookie Dependency",
      legacy: "High (easily blocked)",
      key2key: "Zero-Cookie Accuracy",
    },
  ]

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-navy mb-6">
            Why We Are Different
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Standard affiliate networks rely on cookies and last-clicks. 2key connects directly to billing systems for 100% accuracy.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <div className="min-w-full inline-block align-middle">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-heading font-semibold text-navy uppercase tracking-wider bg-gray-50">
                    Features
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-heading font-semibold text-gray-600 uppercase tracking-wider bg-gray-50">
                    Legacy Affiliate Networks
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-heading font-semibold text-blurple uppercase tracking-wider bg-blurple/5">
                    2keyApp
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {comparisons.map((comparison, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-6 text-sm font-semibold text-navy">
                      {comparison.feature}
                    </td>
                    <td className="px-6 py-6 text-sm text-gray-600">
                      {comparison.legacy}
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal/10 border border-teal/20 flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-teal"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={3}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-sm font-semibold text-blurple">
                          {comparison.key2key}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}




