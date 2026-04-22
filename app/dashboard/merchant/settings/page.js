import { CheckCircle2, AlertCircle, Link as LinkIcon, Box, CreditCard, ShieldCheck } from 'lucide-react'

export default function MerchantSettingsPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto font-body">
      <div className="mb-8 sm:mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold font-heading text-navy tracking-tight">Settings & Billing</h1>
        <p className="text-gray-500 mt-2 text-xs sm:text-sm">Manage your Stripe integration and core account details.</p>
      </div>

      <div className="space-y-8">
        
        {/* Stripe Integration Card */}
        <section className="bg-white rounded-[24px] border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
          <div className="p-6 sm:p-10">
            <h3 className="text-lg sm:text-xl font-bold font-heading text-navy mb-6 flex items-center">
              <LinkIcon className="w-5 h-5 mr-3 text-teal" />
              Stripe Integration
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                  2Key connects directly to your Stripe account to automatically track successful orders, listen for refunds, and securely verify affiliate attributions without any manual data entry.
                </p>
                <div className="bg-gray-50 rounded-xl p-4 sm:p-5 border border-gray-100 inline-block w-full">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-navy">Connection Status</p>
                      <p className="text-[10px] sm:text-xs text-gray-400 font-medium tracking-wide mt-1">Not Connected</p>
                    </div>
                    <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-center justify-center p-6 sm:p-8 bg-gray-50/50 rounded-2xl border border-dashed border-gray-300">
                <Box className="w-10 h-10 sm:w-12 sm:h-12 text-navy/20 mb-4" />
                <button className="bg-navy hover:bg-navy/90 text-white font-bold py-3 sm:py-3 px-6 sm:px-8 rounded-xl shadow-[0_8px_20px_rgb(10,25,47,0.2)] transition-all text-sm w-full sm:w-auto">
                  Connect with Stripe
                </button>
                <p className="text-[10px] sm:text-[11px] text-gray-400 mt-4 text-center px-4 font-medium leading-relaxed">
                  You will be redirected securely to Stripe. We only request read-access to your Orders and Subscriptions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Billing & Payments */}
        <section className="bg-white rounded-[24px] border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
          <div className="p-6 sm:p-10">
            <h3 className="text-lg sm:text-xl font-bold font-heading text-navy mb-6 flex items-center">
              <CreditCard className="w-5 h-5 mr-3 text-teal" />
              Commission Funding Source
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 max-w-3xl">
              Specify the payment method used to fund your automated influencer payouts. Influencers are paid strictly after their commissions clear the Net-30 holding period.
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 blur-[1px] opacity-60 cursor-not-allowed">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mr-4 border border-gray-100">
                  <CreditCard className="w-6 h-6 text-gray-400" />
                </div>
                <div>
                  <p className="font-bold text-navy text-sm">Add Payment Method</p>
                  <p className="text-xs text-gray-500 font-medium">Credit Card or ACH Bank Transfer</p>
                </div>
              </div>
              <button disabled className="bg-gray-200 text-gray-400 font-bold py-2.5 px-6 rounded-xl cursor-not-allowed text-sm">
                Add Method
              </button>
            </div>
            <p className="text-xs font-bold text-amber-500 mt-3 flex items-center">
              <ShieldCheck className="w-4 h-4 mr-1.5" /> Please connect your Stripe account first.
            </p>
          </div>
        </section>

      </div>
    </div>
  )
}
