import { Plug, Package, Percent, Link2, Rocket } from 'lucide-react'

export default function SellerOnboarding() {
  const steps = [
    {
      id: "01",
      title: "Connect PSP",
      desc: "Link your Stripe or PayPal account in seconds.",
      icon: Plug,
    },
    {
      id: "02",
      title: "Setup Products",
      desc: "Configure pricing, SKU details, and digital assets.",
      icon: Package,
    },
    {
      id: "03",
      title: "Define Rules",
      desc: "Set commission percentages for your influencers.",
      icon: Percent,
    },
    {
      id: "04",
      title: "Verify Links",
      desc: "Test your tracking links and hosted checkout pages.",
      icon: Link2,
    },
    {
      id: "05",
      title: "Go Live",
      desc: "Start recruiting influencers and accept global payments.",
      icon: Rocket,
      active: true,
    },
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-16">
          Seller Onboarding Flow
        </h2>

        {/* Steps */}
        <div className="relative flex items-start justify-between">
          {/* Connecting line - starts from first step, ends at last step */}
          <div className="absolute top-10 left-[8%] right-[8%] h-px bg-gray-200" />

          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="relative z-10 flex flex-col items-center text-center max-w-[200px]"
              >
                {/* Icon box */}
                <div className="relative">
                  <div
                    className={`w-20 h-20 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer group
                      ${
                        step.active
                          ? "bg-white border border-gray-200 text-black shadow-lg hover:bg-teal/90 hover:border-white"
                          : "bg-white border border-gray-200 text-black hover:bg-teal/90 hover:border-white"
                      }`}
                  >
                    <IconComponent className="w-8 h-8 transition-colors duration-300 text-gray-600 group-hover:text-black" />
                  </div>
                  
                  {/* Step number - positioned on top-right of icon box */}
                  <span className="absolute -top-2 -right-2 w-6 h-6 text-xs font-semibold rounded-full bg-gray-900 text-white flex items-center justify-center">
                    {step.id}
                  </span>
                </div>

                {/* Text */}
                <h3 className="mt-6 font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-24">
          <button className="px-10 py-4 rounded-full bg-navy text-white font-semibold text-lg hover:bg-navy/90 transition">
            Ready to Start? Launch Now →
          </button>
        </div>
      </div>
    </section>
  );
}
