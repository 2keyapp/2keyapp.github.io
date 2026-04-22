import Link from 'next/link'
import { DollarSign, Tremor, Target, ArrowUpRight, ArrowDownRight, RefreshCcw, Activity } from 'lucide-react'

export default function MerchantDashboard() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold font-heading text-navy tracking-tight">Overview</h1>
          <p className="text-gray-500 mt-2 text-xs sm:text-sm">Track your affiliate campaigns and commission payouts.</p>
        </div>
        <Link href="/dashboard/merchant/campaigns/new" className="bg-navy text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-navy/90 transition-all shadow-[0_8px_20px_rgb(10,25,47,0.2)] w-full sm:w-auto text-center">
          + New Campaign
        </Link>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
        <div className="bg-white rounded-[24px] p-5 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all">
          <div className="flex items-center justify-between mb-4">
            <p className="text-[11px] sm:text-[13px] font-semibold text-gray-500">Total Revenue</p>
            <Activity className="w-5 h-5 text-gray-300" />
          </div>
          <p className="text-3xl sm:text-4xl font-bold font-heading text-navy tracking-tight">$124.5k</p>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-teal font-semibold flex items-center bg-teal/10 px-2.5 py-1 rounded-full text-[10px] sm:text-xs">
              <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" /> 12.5%
            </span>
            <span className="text-gray-400 ml-3 text-[10px] sm:text-xs font-medium">vs last month</span>
          </div>
        </div>

        <div className="bg-white rounded-[24px] p-5 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all">
          <div className="flex items-center justify-between mb-4">
            <p className="text-[11px] sm:text-[13px] font-semibold text-gray-500">Pending Commissions</p>
            <RefreshCcw className="w-5 h-5 text-gray-300" />
          </div>
          <p className="text-3xl sm:text-4xl font-bold font-heading text-navy tracking-tight">$4,230</p>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-500 text-[10px] sm:text-xs font-medium bg-gray-50 px-2.5 py-1 rounded-full">
              Held in net-30
            </span>
          </div>
        </div>

        <div className="bg-white rounded-[24px] p-5 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all">
          <div className="flex items-center justify-between mb-4">
            <p className="text-[11px] sm:text-[13px] font-semibold text-gray-500">Active Influencers</p>
            <Target className="w-5 h-5 text-gray-300" />
          </div>
          <p className="text-3xl sm:text-4xl font-bold font-heading text-navy tracking-tight">42</p>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-teal font-semibold flex items-center bg-teal/10 px-2.5 py-1 rounded-full text-[10px] sm:text-xs">
              <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" /> 4 new
            </span>
            <span className="text-gray-400 ml-3 text-[10px] sm:text-xs font-medium">this week</span>
          </div>
        </div>

        <div className="bg-white rounded-[24px] p-5 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all">
          <div className="flex items-center justify-between mb-4">
            <p className="text-[11px] sm:text-[13px] font-semibold text-gray-500">Paid Commissions</p>
            <DollarSign className="w-5 h-5 text-gray-300" />
          </div>
          <p className="text-3xl sm:text-4xl font-bold font-heading text-navy tracking-tight">$18.4k</p>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-500 text-[10px] sm:text-xs font-medium bg-gray-50 px-2.5 py-1 rounded-full">
              Lifetime payouts
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Active Campaigns Table */}
        <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 overflow-hidden flex flex-col p-2">
          <div className="px-6 py-5">
            <h3 className="text-lg font-bold font-heading text-navy">Active Campaigns</h3>
          </div>
          <div className="p-0 flex-1 overflow-x-auto">
            <table className="w-full text-sm text-left align-middle">
              <thead className="text-gray-400">
                <tr>
                  <th className="px-6 py-3 font-medium text-[13px]">Campaign Name</th>
                  <th className="px-6 py-3 font-medium text-[13px] text-right">Commission</th>
                  <th className="px-6 py-3 font-medium text-[13px] text-right">Activity (30d)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Summer Launch 2026", rate: "15%", attr: 140 },
                  { name: "Default Storewide", rate: "10%", attr: 420 },
                  { name: "VIP Partners", rate: "25%", attr: 85 }
                ].map((c, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors rounded-xl overflow-hidden group">
                    <td className="px-6 py-4 font-semibold text-navy rounded-l-xl">{c.name}</td>
                    <td className="px-6 py-4 text-right">
                      <span className="font-bold text-teal bg-teal/5 px-2.5 py-1 rounded-full">{c.rate}</span>
                    </td>
                    <td className="px-6 py-4 text-right font-medium text-gray-500 rounded-r-xl">{c.attr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Influencers */}
        <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 overflow-hidden flex flex-col p-2">
          <div className="px-6 py-5">
            <h3 className="text-lg font-bold font-heading text-navy">Top Performers</h3>
          </div>
          <div className="p-0 flex-1 overflow-x-auto">
            <table className="w-full text-sm text-left align-middle">
              <thead className="text-gray-400">
                <tr>
                  <th className="px-6 py-3 font-medium text-[13px]">Influencer</th>
                  <th className="px-6 py-3 font-medium text-[13px] text-right">Orders</th>
                  <th className="px-6 py-3 font-medium text-[13px] text-right">Owed</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Sarah Tech Reviews", orders: 124, owed: "$2,480" },
                  { name: "DesignDaily", orders: 98, owed: "$1,640" },
                  { name: "CodeWithChris", orders: 45, owed: "$850" }
                ].map((inf, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors rounded-xl group">
                    <td className="px-6 py-4 font-semibold text-navy rounded-l-xl">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-100 to-gray-200 mr-3"></div>
                        {inf.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right font-medium text-gray-500">{inf.orders}</td>
                    <td className="px-6 py-4 text-right font-bold text-navy rounded-r-xl">{inf.owed}</td>
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
