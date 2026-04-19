import Link from 'next/link'
import { LayoutDashboard, Store, Users, Megaphone, Wallet, ArrowLeftRight, Settings } from 'lucide-react'

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100 text-navy font-body">
      {/* Sidebar */}
      <aside className="w-64 bg-navy text-white shadow-xl shadow-navy/10 z-10 flex-shrink-0">
        <div className="h-full flex flex-col">
          <div className="h-16 flex items-center px-6">
            <span className="text-xl font-bold font-heading text-white">
              2Key <span className="text-teal">Network</span>
            </span>
          </div>
          
          <nav className="flex-1 px-4 py-8 space-y-8 overflow-y-auto">
            {/* Merchant Section */}
            <div>
              <p className="px-2 text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Merchant</p>
              <ul className="space-y-1">
                <li>
                  <Link href="/dashboard/merchant" className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-300 rounded-lg hover:bg-white/10 hover:text-white transition-all group">
                    <Store className="w-5 h-5 mr-3 text-gray-400 group-hover:text-teal transition-colors" />
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/merchant/settings" className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-300 rounded-lg hover:bg-white/10 hover:text-white transition-all group">
                    <Settings className="w-5 h-5 mr-3 text-gray-400 group-hover:text-teal transition-colors" />
                    Settings & Billing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Influencer Section */}
            <div>
              <p className="px-2 text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Influencer</p>
              <ul className="space-y-1">
                <li>
                  <Link href="/dashboard/influencer" className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-300 rounded-lg hover:bg-white/10 hover:text-white transition-all group">
                    <Users className="w-5 h-5 mr-3 text-gray-400 group-hover:text-teal transition-colors" />
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/influencer/settings" className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-300 rounded-lg hover:bg-white/10 hover:text-white transition-all group">
                    <Settings className="w-5 h-5 mr-3 text-gray-400 group-hover:text-teal transition-colors" />
                    Payout Settings
                  </Link>
                </li>
              </ul>
            </div>

            {/* Global/Network */}
            <div>
              <p className="px-2 text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Network</p>
              <ul className="space-y-1">
                <li>
                  <Link href="/marketplace" className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-300 rounded-lg hover:bg-white/10 hover:text-white transition-all group">
                    <Store className="w-5 h-5 mr-3 text-gray-400 group-hover:text-teal transition-colors" />
                    Marketplace
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}
