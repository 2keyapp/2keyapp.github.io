import { DollarSign, Link as LinkIcon, Gift, ArrowUpRight, ShieldCheck, Wallet } from 'lucide-react'

export default function InfluencerDashboard() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 font-body max-w-7xl mx-auto">
      <div className="mb-8 sm:mb-10 flex items-center justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold font-heading text-navy tracking-tight">Earnings</h1>
          <p className="text-gray-500 mt-2 text-xs sm:text-sm">Track your commissions, generate links, and manage payouts.</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
        <div className="bg-white rounded-[24px] border border-gray-100/50 p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          <div className="relative z-10 flex flex-col h-full justify-between">
            <p className="text-[11px] sm:text-[13px] font-semibold text-gray-500 mb-6 sm:mb-8">Available for Payout</p>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-teal tracking-tight">$1,240.00</p>
          </div>
          <div className="absolute -bottom-4 -right-4 opacity-[0.02] transform -rotate-12">
            <Wallet className="w-32 sm:w-48 h-32 sm:h-48 text-navy" />
          </div>
        </div>

        <div className="bg-white rounded-[24px] border border-gray-100/50 p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:shadow-[0_8px_30_rgb(0,0,0,0.08)] flex flex-col justify-between">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <p className="text-[11px] sm:text-[13px] font-semibold text-gray-500">Pending (Net-30)</p>
            <ShieldCheck className="w-5 h-5 text-gray-300" />
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold font-heading text-navy tracking-tight">$845.50</p>
            <div className="mt-3 sm:mt-4">
              <span className="text-gray-500 text-[10px] sm:text-xs font-medium bg-gray-50 px-2.5 py-1 rounded-full">
                Unlocks rolling daily
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[24px] border border-gray-100/50 p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:shadow-[0_8px_30_rgb(0,0,0,0.08)] flex flex-col justify-between">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <p className="text-[11px] sm:text-[13px] font-semibold text-gray-500">Lifetime Earnings</p>
            <DollarSign className="w-5 h-5 text-gray-300" />
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold font-heading text-navy tracking-tight">$12.4k</p>
            <div className="mt-3 sm:mt-4">
              <span className="text-teal font-semibold flex items-center bg-teal/10 px-2.5 py-1 rounded-full text-[10px] sm:text-xs w-max">
                <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" /> 18% vs last month
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Active Partnerships / Links */}
        <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 overflow-hidden flex flex-col p-2">
          <div className="px-6 py-5 flex justify-between items-center">
            <h3 className="text-lg font-bold font-heading text-navy">Active Links & Codes</h3>
          </div>
          <div className="p-0 flex-1 overflow-x-auto">
            <table className="w-full text-sm text-left align-middle">
              <thead className="text-gray-400">
                <tr>
                  <th className="px-6 py-3 font-medium text-[13px]">Partner</th>
                  <th className="px-6 py-3 font-medium text-[13px]">Tracking Link</th>
                  <th className="px-6 py-3 font-medium text-[13px] text-right">Commission</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { merchant: "TechNova Pro", id: "TECH15", link: "earnfluence.link/sarah/technova", rate: "15%" },
                  { merchant: "HealthBlend", id: "SUMMER", link: "earnfluence.link/sarah/hb", rate: "20%" },
                  { merchant: "SaaS Analytics", id: "DEFAULT", link: "earnfluence.link/sarah/saas", rate: "10%" }
                ].map((p, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors rounded-xl group">
                    <td className="px-6 py-4 rounded-l-xl">
                      <p className="font-semibold text-navy">{p.merchant}</p>
                      <p className="text-[11px] text-gray-400 font-medium tracking-wide mt-0.5">CODE: <span className="text-navy">{p.id}</span></p>
                    </td>
                    <td className="px-6 py-4 font-mono text-[13px] text-teal cursor-pointer hover:underline">
                      <div className="flex items-center">
                        <LinkIcon className="w-3.5 h-3.5 mr-2 opacity-50" />
                        {p.link}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right rounded-r-xl">
                      <span className="font-bold text-teal bg-teal/5 px-2.5 py-1 rounded-full">{p.rate}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Payouts */}
        <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 overflow-hidden flex flex-col p-2">
          <div className="px-6 py-5">
            <h3 className="text-lg font-bold font-heading text-navy">Recent Payouts</h3>
          </div>
          <div className="p-0 flex-1 overflow-x-auto">
            <table className="w-full text-sm text-left align-middle">
               <thead className="text-gray-400">
                <tr>
                  <th className="px-6 py-3 font-medium text-[13px]">Date</th>
                  <th className="px-6 py-3 font-medium text-[13px]">Method</th>
                  <th className="px-6 py-3 font-medium text-[13px] text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { date: "Oct 1, 2026", method: "PayPal", amount: "$450.00" },
                  { date: "Sep 1, 2026", method: "PayPal", amount: "$320.00" },
                  { date: "Aug 1, 2026", method: "Stripe Connect", amount: "$640.50" }
                ].map((payout, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors rounded-xl group">
                    <td className="px-6 py-4 text-gray-500 font-medium rounded-l-xl">
                      <span className="flex items-center">
                         <div className="w-2 h-2 rounded-full bg-teal mr-2"></div>
                         {payout.date}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500 font-medium">{payout.method}</td>
                    <td className="px-6 py-4 text-right font-bold text-navy rounded-r-xl">{payout.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
