export default function InfluencerFAQ() {
  const faqs = [
    {
      question: "How do I earn money as an affiliate?",
      answer: "You share your unique promo code or link. When someone uses it to make a purchase, you earn a commission automatically."
    },
    {
      question: "How do I track my earnings?",
      answer: "You can see all your sales, clicks, and earnings in your affiliate dashboard in real time."
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
            Everything you need to know about earning as an affiliate on 2key.
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
