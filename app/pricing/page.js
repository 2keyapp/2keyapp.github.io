import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function PricingPage() {
  const tiers = [
    {
      name: 'Launch',
      price: '$0',
      suffix: '/month + X%',
      trial: '14 day free trial included',
      description: 'Everything you need to start your first affiliate program.',
      features: [
        'Affiliate program listing',
        'Create affiliate links & promo codes',
        'Stripe & PayPal integration',
        'Basic merchant & affiliate tracking',
        'Manual payout support',
        'Basic performance reporting',
        'Up to $5,000/mo affiliate revenue',
        'Email support',
      ],
      buttonText: 'Start for Free',
      href: '/signup',
      highlight: false,
    },
    {
      name: 'Growth',
      price: '$50',
      suffix: '/month',
      trial: '14 day free trial included',
      description: 'Scale your operations with advanced automation and discovery.',
      features: [
        'Everything in Launch +',
        'Affiliate tiers',
        'Affiliate onboarding automation',
        'Affiliate discovery',
        'One-click PayPal payouts',
        'Migration support',
        'Custom domain support',
        'Advanced reports & analytics',
        'Affiliate approval system',
      ],
      buttonText: 'Start Growth Trial',
      href: '/signup',
      highlight: true,
    },
    {
      name: 'Scale',
      price: '$150+',
      suffix: '/month',
      description: 'Dedicated support and professional services for high-growth brands.',
      features: [
        'Everything in Launch & Growth +',
        'Automated payouts',
        'Dedicated account manager',
        'Professional growth services',
        'Customized landing pages',
        'Personalized private offers',
        'Email & Chat support',
      ],
      buttonText: 'Contact Sales',
      href: '/contact',
      highlight: false,
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-navy pt-12 pb-28 sm:pt-20 sm:pb-40 md:pt-20 md:pb-48">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Predictable Pricing for <br className="hidden sm:block" />
              <span className="text-teal">Your Growth Journey</span>
            </h1>
            <p className="text-base sm:text-xl text-white/70 max-w-3xl mx-auto">
              Choose the perfect plan to launch, scale, and automate your affiliate marketing machine. 
              All plans include core tracking and dashboard access.
            </p>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-32 md:-mt-40 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {tiers.map((tier) => (
              <div 
                key={tier.name}
                className={`flex flex-col bg-white rounded-3xl p-6 sm:p-8 shadow-xl border transition-all duration-300 ${
                  tier.highlight 
                    ? 'border-teal ring-4 ring-teal/10 relative md:scale-105 z-10' 
                    : 'border-gray-100 hover:border-gray-200'
                }`}
              >
                {tier.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal text-navy px-4 py-1 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl sm:text-5xl font-bold text-navy">{tier.price}</span>
                    <span className="text-gray-500 text-sm sm:text-base font-medium">{tier.suffix}</span>
                  </div>
                  {tier.trial && (
                    <p className="text-teal font-semibold text-xs sm:text-sm mb-4">
                      {tier.trial}
                    </p>
                  )}
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                <div className="flex-1 mb-6 sm:mb-8">
                  <p className="text-navy font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-4">Features</p>
                  <ul className="space-y-3 sm:space-y-4">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={tier.href}
                  className={`w-full py-3 sm:py-4 text-center rounded-xl font-heading font-bold transition-all duration-300 text-sm sm:text-base ${
                    tier.highlight
                      ? 'bg-teal text-navy hover:bg-teal/80 hover:shadow-lg hover:shadow-teal/20'
                      : 'bg-navy/5 text-navy hover:bg-navy/10'
                  }`}
                >
                  {tier.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section Placeholder */}
        {/* <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
          <h2 className="text-3xl font-heading font-bold text-navy mb-4">Not sure which plan is right for you?</h2>
          <p className="text-gray-600 mb-8">
            Our team is here to help you design the perfect affiliate program for your brand.
          </p>
          <Link href="/contact" className="text-teal font-bold hover:underline inline-flex items-center gap-2">
            Talk to an expert
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div> */}
      </main>
      <Footer />
    </>
  )
}
