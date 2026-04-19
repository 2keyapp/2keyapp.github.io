import { ShieldCheck, ArrowRight, DollarSign, Wallet } from 'lucide-react'

export default function InfluencerSettingsPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto font-body">
      <div className="mb-10">
        <h1 className="text-3xl font-bold font-heading text-navy tracking-tight">Payout Settings</h1>
        <p className="text-gray-500 mt-2 text-sm">Connect your preferred payment destination to receive automated net-30 payouts.</p>
      </div>

      <div className="bg-white rounded-[24px] border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
        <div className="p-8 sm:p-10 border-b border-gray-100">
          <h3 className="text-xl font-bold font-heading text-navy mb-3 flex items-center">
            <Wallet className="w-5 h-5 mr-3 text-teal" />
            Payout Methods
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
            2Key supports fully automated routing to your bank via Stripe Connect, or direct balance transfers via PayPal. Select your preferred method below to start receiving your earned commissions.
          </p>
        </div>

        <div className="p-8 sm:p-10 space-y-6">
          {/* Stripe Connect Option */}
          <div className="border border-gray-200 rounded-2xl p-6 hover:border-navy transition-colors group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:scale-110 transition-transform">
              <DollarSign className="w-24 h-24 text-navy" />
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h4 className="text-lg font-bold text-navy mr-3">Stripe Express</h4>
                  <span className="bg-teal/10 text-teal text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full">Recommended</span>
                </div>
                <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-lg">
                  Receive payouts directly to your bank account. The fastest and most secure way to withdraw your 2Key earnings globally.
                </p>
                <div className="flex items-center gap-4 mt-4 text-xs font-semibold text-gray-400">
                  <span className="flex items-center"><ShieldCheck className="w-4 h-4 mr-1 text-teal" /> Protected processing</span>
                  <span>0% withdrawal fee</span>
                </div>
              </div>
              <button className="flex-shrink-0 bg-navy hover:bg-navy/90 text-white font-bold py-3 px-8 rounded-xl shadow-[0_8px_20px_rgb(10,25,47,0.2)] transition-all flex items-center justify-center">
                Connect Stripe <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>

          {/* PayPal Option */}
          <div className="border border-gray-200 rounded-2xl p-6 hover:border-navy transition-colors group">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex-1">
                <h4 className="text-lg font-bold text-navy mb-2">PayPal</h4>
                <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-lg">
                  Link your email to receive direct deposits to your personal or business PayPal balance. Subject to standard PayPal receiving limits.
                </p>
              </div>
              <button className="flex-shrink-0 bg-navy hover:bg-navy/90 text-white font-bold py-3 px-8 rounded-xl shadow-[0_8px_20px_rgb(10,25,47,0.2)] transition-all flex items-center justify-center">
                Link PayPal <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
