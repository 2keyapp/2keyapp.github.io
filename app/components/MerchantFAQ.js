export default function MerchantFAQ() {
  const faqs = [
    {
      question: "Does Earnfluence act as the Merchant of Record?",
      answer: "No. You stay the merchant of record. Payments are processed through your Stripe or PayPal account."
    },
    {
      question: "Who appears on the customer’s statement?",
      answer: "Your business name appears on the customer’s payment statement, not Earnfluence."
    },
    {
      question: "How are affiliates tracked?",
      answer: "Affiliates are tracked using promo codes and links that automatically attribute sales at checkout."
    },
    {
      question: "Can influencers earn from subscriptions and one-time purchases?",
      answer: "Yes. You can pay commissions on any type of sale, including subscriptions and one-time payments."
    },
    {
      question: "Can I use my own Stripe or PayPal account?",
      answer: "Yes. Earnfluence works on top of your existing payment setup."
    },
    {
      question: "Does Earnfluence handle customer funds?",
      answer: "No. All payments go directly through Stripe or PayPal to your account. Earnfluence only tracks and calculates affiliate commissions."
    },
    {
      question: "How do I track which affiliate made a sale?",
      answer: "Each affiliate gets a unique promo code or link. When a customer uses it, the sale is automatically attributed to that affiliate."
    },
    {
      question: "Do I need to change my checkout or payment setup?",
      answer: "No. Earnfluence works with your existing Stripe or PayPal setup. You don’t need to rebuild your checkout."
    }
  ]

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-navy border-t border-white/10 overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-teal/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about working with Earnfluence as a merchant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white/5 border border-white/10 shadow-sm rounded-2xl p-6 hover:shadow-md hover:border-teal/30 transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-3 flex items-start gap-3">
                <svg className="w-6 h-6 text-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {faq.question}
              </h3>
              <p className="text-gray-300 text-base leading-relaxed pl-9">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
