import { Check, X, Search, Filter } from 'lucide-react'

export default function ApprovalsPage() {
  const pendingApplications = [
    {
      id: 1,
      name: "Alex Dev",
      handle: "@alex_developer",
      platform: "YouTube",
      followers: "125K",
      campaign: "SaaS Enterprise Launch",
      appliedAt: "2 hours ago"
    },
    {
      id: 2,
      name: "UI/UX Daily",
      handle: "@uiday",
      platform: "Twitter",
      followers: "42K",
      campaign: "Design Tools Q4",
      appliedAt: "5 hours ago"
    },
    {
      id: 3,
      name: "Marcus Tech",
      handle: "@marcus_tech",
      platform: "Instagram",
      followers: "8K",
      campaign: "SaaS Enterprise Launch",
      appliedAt: "1 day ago"
    }
  ]

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto font-body">
      <div className="mb-8 sm:mb-10 flex items-center justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold font-heading text-navy tracking-tight">Influencer Approvals</h1>
          <p className="text-gray-500 mt-2 text-xs sm:text-sm">Review influencers requesting access to your gated campaigns.</p>
        </div>
      </div>

      <div className="bg-white rounded-[24px] border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col p-2">
        <div className="px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between border-b border-gray-50">
          <h3 className="text-base sm:text-lg font-bold font-heading text-navy flex items-center">
            Pending Requests 
            <span className="ml-2 sm:ml-3 bg-teal/10 text-teal text-[10px] sm:text-xs font-bold px-2 py-0.5 sm:px-2.5 rounded-full">3</span>
          </h3>
          <div className="flex gap-2">
            <button className="p-1.5 sm:p-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-500 transition-colors">
              <Filter className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>
        
        <div className="p-0 flex-1 overflow-x-auto">
          <table className="w-full text-sm text-left align-middle">
            <thead className="text-gray-400 bg-gray-50/50">
              <tr>
                <th className="px-4 sm:px-6 py-3 sm:py-4 font-medium text-[11px] sm:text-[13px]">Influencer</th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 font-medium text-[11px] sm:text-[13px]">Audience</th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 font-medium text-[11px] sm:text-[13px]">Target</th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 font-medium text-[11px] sm:text-[13px] text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pendingApplications.map((app) => (
                <tr key={app.id} className="hover:bg-gray-50/50 transition-colors border-b border-gray-50 last:border-0 group">
                  <td className="px-4 sm:px-6 py-3 sm:py-4 flex items-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-gray-100 to-gray-200 mr-3 sm:mr-4"></div>
                    <div>
                      <p className="font-bold text-navy text-xs sm:text-sm">{app.name}</p>
                      <p className="text-[10px] sm:text-xs text-gray-400 font-medium">{app.handle}</p>
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4">
                    <p className="font-bold text-gray-700 text-xs sm:text-sm">{app.followers}</p>
                    <p className="text-[10px] sm:text-xs text-gray-400 font-medium">{app.platform}</p>
                  </td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4">
                    <span className="font-semibold text-navy bg-navy/5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[11px] sm:text-[13px]">{app.campaign}</span>
                  </td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-right">
                    <div className="flex items-center justify-end gap-1.5 sm:gap-2">
                       <button className="flex items-center font-bold text-[10px] sm:text-xs bg-red-50 text-red-500 hover:bg-red-100 px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg transition-colors">
                          <X className="w-3 sm:w-3.5 h-3 sm:h-3.5 mr-1 sm:mr-1.5" /> Reject
                       </button>
                       <button className="flex items-center font-bold text-[10px] sm:text-xs bg-teal text-navy hover:bg-teal/90 px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg transition-colors">
                          <Check className="w-3 sm:w-3.5 h-3 sm:h-3.5 mr-1 sm:mr-1.5" /> Approve
                       </button>
                    </div>
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
