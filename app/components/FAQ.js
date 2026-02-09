export default function FAQ() {
  const faqs = [
    {
      question: "Does 2key become the Merchant of Record?",
      answer: "No. The seller is always the Merchant of Record.",
    },
    {
      question: "Who appears on the customer's statement?",
      answer: "The seller's legal name (Stripe/PayPal standard behavior).",
    },
    {
      question: "Can influencers earn from subscriptions?",
      answer: "Yes — including renewals, if the seller enables it.",
    },
    {
      question: "Can sellers bring their own Stripe account?",
      answer: "Yes. Required.",
    },
    {
      question: "Does 2key touch customer funds?",
      answer: "Only as a platform commission, routed via Stripe/PayPal.",
    },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-3">
            <div className="w-1 h-6 bg-teal rounded-full" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-navy leading-tight">
              FAQ
            </h2>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group border-b border-gray-200 last:border-b-0 cursor-pointer h-24 flex flex-col justify-center items-center text-center"
            >
              <h3 className="text-sm sm:text-base font-heading font-semibold text-navy flex items-center justify-center gap-2">
                <span>{faq.question}</span>
                <span className="text-xs text-gray-400 group-hover:text-teal transition-colors select-none">
                  +
                </span>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-200 ease-out overflow-hidden">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}