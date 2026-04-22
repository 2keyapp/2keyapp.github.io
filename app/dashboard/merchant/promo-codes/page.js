import { Ticket, Search, Plus } from 'lucide-react'

export default function PromoCodesPage() {
  const codes = [
    {
      code: "ALEX20",
      influencer: "Alex Dev",
      campaign: "SaaS Enterprise Launch",
      discount: "20% Off",
      attributions: 42,
      status: "Active"
    },
    {
      code: "DESIGN15",
      influencer: "UI/UX Daily",
      campaign: "Design Tools Q4",
      discount: "15% Off",
      attributions: 128,
      status: "Active"
    },
    {
      code: "HOLIDAY50",
      influencer: "Unassigned (Global)",
      campaign: "Black Friday Push",
      discount: "$50 Flat",
      attributions: 0,
      status: "Inactive"
    }
  ]

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto font-body">
      <div className="mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold font-heading text-navy tracking-tight">Promo Codes</h1>
          <p className="text-gray-500 mt-2 text-xs sm:text-sm">Manage discount codes used for offline or alternative attribution.</p>
        </div>
        <button className="inline-flex items-center justify-center bg-navy hover:bg-navy/90 text-white font-bold py-2.5 px-5 rounded-full shadow-[0_8px_20px_rgb(10,25,47,0.2)] transition-all text-sm w-full sm:w-auto">
          <Plus className="w-4 h-4 mr-2" />
          Generate Code
        </button>
      </div>

      <div className="bg-white rounded-[24px] border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col p-2">
        <div className="px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-50">
          <div className="relative w-full sm:w-72">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
             <input type="text" placeholder="Search codes..." className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-200 text-sm" />
          </div>
        </div>
        
        <div className="p-0 flex-1 overflow-x-auto">
          <table className="w-full text-sm text-left align-middle">
            <thead className="text-gray-400 bg-gray-50/50">
              <tr>
                <th className="px-4 sm:px-6 py-3 sm:py-4 font-medium text-[11px] sm:text-[13px]">Code</th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 font-medium text-[11px] sm:text-[13px]">Assigned</th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 font-medium text-[11px] sm:text-[13px]">Campaign</th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 font-medium text-[11px] sm:text-[13px] text-right">Uses</th>
              </tr>
            </thead>
            <tbody>
              {codes.map((item, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors border-b border-gray-50 last:border-0 group">
                  <td className="px-4 sm:px-6 py-3 sm:py-4">
                    <span className="font-mono font-bold text-navy bg-navy/5 border border-navy/10 px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-lg text-[10px] sm:text-xs tracking-wider">
                      {item.code}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4">
                    <p className="font-bold text-navy text-xs sm:text-sm">{item.influencer}</p>
                  </td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4">
                    <p className="font-medium text-gray-600 text-[11px] sm:text-[13px] truncate max-w-[120px] sm:max-w-none">{item.campaign}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">{item.discount}</p>
                  </td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-right">
                    <span className="font-bold text-teal text-xs sm:text-sm">{item.attributions}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
