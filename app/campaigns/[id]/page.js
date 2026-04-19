import Link from 'next/link'
import { ArrowLeft, CheckCircle2, ShieldAlert, Award, Copy } from 'lucide-react'

// Required for Next.js static export (output: 'export')
export function generateStaticParams() {
  return [
    { id: 'm_1' },
    { id: 'm_2' },
    { id: 'm_3' },
    { id: 'm_4' },
    { id: 'm_5' },
    { id: 'm_6' },
  ]
}

export default function CampaignDetailsPage({ params }) {
  const campaign = {
    id: "m_1",
    name: "TechNova Pro - Q4 Core Affiliate",
    merchantName: "TechNova Pro",
    commission: "15%",
    cookieDuration: "30 Days",
    payoutTerms: "Net-30",
    status: "Active",
    description: "Join the TechNova Pro affiliate program and earn commissions on our premium lineup of mechanical keyboards, ergonomic mice, and professional office accessories. Our average order value is $185 with a high conversion rate.",
    requirements: [
      "Must have an active tech or setup-focused audience",
      "No bidding on branded terms (e.g., 'TechNova Coupon')",
      "Content must be family-friendly"
    ],
    tier: "Instant Join"
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-body">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/marketplace" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-navy transition-colors">
            <ArrowLeft className="w-5 h-5 sm:w-4 sm:h-4 sm:mr-2" />
            <span className="hidden sm:inline">Back to Marketplace</span>
          </Link>
          <span className="text-lg sm:text-xl font-bold font-heading text-navy flex-shrink-0">
            2Key <span className="text-teal">Network</span>
          </span>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="bg-white rounded-[24px] border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
          <div className="p-6 sm:p-8 md:p-12 border-b border-gray-100">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 sm:gap-8">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-teal/10 text-teal">
                    {campaign.status}
                  </span>
                  <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-gray-400">{campaign.merchantName}</span>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-navy leading-tight break-words">{campaign.name}</h1>
                <p className="mt-4 sm:mt-5 text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl">
                  {campaign.description}
                </p>
              </div>
              
              <div className="flex-shrink-0 w-full lg:w-auto bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100 flex flex-col items-center justify-center">
                <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-gray-400 mb-1 sm:mb-2 text-center">Commission Rate</span>
                <span className="text-4xl sm:text-5xl font-extrabold font-heading text-teal">{campaign.commission}</span>
                <span className="text-xs sm:text-sm text-gray-400 mt-2 sm:mt-3 font-medium text-center">Per successful sale</span>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-heading text-navy mb-4 sm:mb-6 flex items-center">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-teal flex-shrink-0" />
                Program Details
              </h3>
              <ul className="space-y-4 sm:space-y-5">
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center pb-4 sm:pb-5 border-b border-gray-50 gap-1 sm:gap-0">
                  <span className="text-sm sm:text-base text-gray-500 font-semibold">Cookie Duration</span>
                  <span className="text-sm sm:text-base font-bold text-navy">{campaign.cookieDuration}</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 sm:py-5 border-b border-gray-50 gap-1 sm:gap-0">
                  <span className="text-sm sm:text-base text-gray-500 font-semibold">Payout Terms</span>
                  <span className="text-sm sm:text-base font-bold text-navy">{campaign.payoutTerms}</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-4 sm:pt-5 gap-1 sm:gap-0">
                  <span className="text-sm sm:text-base text-gray-500 font-semibold">Approval Type</span>
                  <span className="text-sm sm:text-base font-bold text-navy">{campaign.tier}</span>
                </li>
              </ul>

              <h3 className="text-lg sm:text-xl font-bold font-heading text-navy mt-10 sm:mt-12 mb-4 sm:mb-6 flex items-center">
                <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-amber-500 flex-shrink-0" />
                 Requirements & Rules
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {campaign.requirements.map((req, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 mr-3 sm:mr-4 text-teal flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-600 font-medium">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100 h-fit">
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-navy mb-2 sm:mb-3">Ready to earn?</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 font-medium">You're approved to join this campaign instantly. Generate your link below to get started.</p>
              
              <div className="space-y-4 sm:space-y-5">
                <button className="w-full bg-navy hover:bg-navy/90 text-white font-bold py-3.5 sm:py-4 px-4 sm:px-6 rounded-xl shadow-[0_8px_20px_rgb(10,25,47,0.2)] transition-all text-sm sm:text-base">
                  Generate Affiliate Link
                </button>
                
                <div className="relative mt-4">
                  <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                    <span className="text-gray-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest">URL:</span>
                  </div>
                  <input
                    type="text"
                    readOnly
                    className="flex-1 w-full pl-12 sm:pl-16 pr-12 sm:pr-14 py-3 sm:py-4 border border-gray-200 rounded-xl bg-white text-navy font-mono text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 font-medium"
                    value="2key.link/sarah/technova"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <button className="p-2 sm:p-2.5 bg-gray-50 text-navy rounded-lg hover:bg-gray-100 border border-gray-200 transition-colors">
                      <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>
                <p className="text-[10px] sm:text-xs text-center text-gray-500 mt-3 sm:mt-4 font-semibold uppercase tracking-wider break-words">
                  Or share referral code: <strong className="text-navy bg-white px-1.5 sm:px-2 py-1 rounded border border-gray-200 ml-1 inline-block mt-1 sm:mt-0">TECH15</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
