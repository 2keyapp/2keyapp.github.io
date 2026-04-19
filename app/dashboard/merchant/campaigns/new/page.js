"use client"
import Link from 'next/link'
import { ArrowLeft, Percent, DollarSign, Clock, Users, ShieldAlert, Zap, Lock } from 'lucide-react'
import { useState } from 'react'

export default function NewCampaignPage() {
  const [commissionType, setCommissionType] = useState('percentage')
  const [approvalType, setApprovalType] = useState('instant')

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 font-body">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-heading text-navy tracking-tight">Create New Campaign</h1>
        <p className="text-gray-500 mt-2 text-sm">Define your commission rules and publish your program to the marketplace.</p>
      </div>

      {/* Form layout */}
      <div className="bg-white rounded-[24px] border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
        <form className="p-6 sm:p-10 space-y-10" onSubmit={(e) => e.preventDefault()}>
          
          {/* Section 1: General Details */}
          <section>
            <h3 className="text-lg font-bold font-heading text-navy mb-5 flex items-center">
              <span className="w-6 h-6 rounded-full bg-navy/5 text-navy flex items-center justify-center text-xs mr-3">1</span>
              General Details
            </h3>
            <div className="space-y-5 pl-0 sm:pl-9">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Campaign Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Q4 TechNova Core Partners" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal/50 focus:border-teal outline-none transition-all text-sm text-navy"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Marketplace Description</label>
                <textarea 
                  rows="4"
                  placeholder="Describe your program, target audience, and why influencers should promote your products..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal/50 focus:border-teal outline-none transition-all text-sm text-navy resize-none"
                ></textarea>
                <p className="text-xs text-gray-400 mt-2 font-medium">This will be publicly visible to influencers on the marketplace.</p>
              </div>
            </div>
          </section>

          <hr className="border-gray-100" />

          {/* Section 2: Commission Engine */}
          <section>
            <h3 className="text-lg font-bold font-heading text-navy mb-5 flex items-center">
              <span className="w-6 h-6 rounded-full bg-teal/10 text-teal flex items-center justify-center text-xs mr-3">2</span>
              Commission Economics
            </h3>
            
            <div className="space-y-8 pl-0 sm:pl-9">
              {/* Type Selection */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Payout Structure</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div 
                    onClick={() => setCommissionType('percentage')}
                    className={`cursor-pointer rounded-xl border p-4 transition-all ${commissionType === 'percentage' ? 'border-teal bg-teal/5' : 'border-gray-200 hover:border-gray-300'}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                       <span className={`font-bold text-sm ${commissionType === 'percentage' ? 'text-teal' : 'text-gray-700'}`}>Percentage of Sale</span>
                       <Percent className={`w-4 h-4 ${commissionType === 'percentage' ? 'text-teal' : 'text-gray-400'}`} />
                    </div>
                    <p className="text-xs text-gray-500 font-medium">Standard revenue sharing model. Scales with order value.</p>
                  </div>
                  
                  <div 
                    onClick={() => setCommissionType('flat')}
                    className={`cursor-pointer rounded-xl border p-4 transition-all ${commissionType === 'flat' ? 'border-teal bg-teal/5' : 'border-gray-200 hover:border-gray-300'}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                       <span className={`font-bold text-sm ${commissionType === 'flat' ? 'text-teal' : 'text-gray-700'}`}>Flat Bounty</span>
                       <DollarSign className={`w-4 h-4 ${commissionType === 'flat' ? 'text-teal' : 'text-gray-400'}`} />
                    </div>
                    <p className="text-xs text-gray-500 font-medium">Fixed payout amount per successful order/conversion.</p>
                  </div>
                </div>
              </div>

              {/* Rate & Window */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    {commissionType === 'percentage' ? 'Commission Percentage' : 'Bounty Amount'}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      {commissionType === 'percentage' ? (
                        <Percent className="w-4 h-4 text-gray-400" />
                      ) : (
                        <span className="font-bold text-gray-400">$</span>
                      )}
                    </div>
                    <input 
                      type="number" 
                      placeholder={commissionType === 'percentage' ? '15' : '50.00'} 
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal/50 focus:border-teal outline-none transition-all text-sm text-navy font-bold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Cookie Duration</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Clock className="w-4 h-4 text-gray-400" />
                    </div>
                    <select className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal/50 focus:border-teal outline-none transition-all text-sm text-navy font-bold appearance-none bg-white">
                      <option value="7">7 Days</option>
                      <option value="30">30 Days</option>
                      <option value="60">60 Days</option>
                      <option value="90">90 Days</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-gray-100" />

          {/* Section 3: Distribution */}
          <section>
            <h3 className="text-lg font-bold font-heading text-navy mb-5 flex items-center">
              <span className="w-6 h-6 rounded-full bg-navy/5 text-navy flex items-center justify-center text-xs mr-3">3</span>
              Network Access
            </h3>
            
            <div className="space-y-6 pl-0 sm:pl-9">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div 
                    onClick={() => setApprovalType('instant')}
                    className={`cursor-pointer rounded-xl border p-4 transition-all ${approvalType === 'instant' ? 'border-navy shadow-[0_4px_15px_rgb(10,25,47,0.1)]' : 'border-gray-200 hover:border-gray-300'}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                       <span className={`font-bold text-sm ${approvalType === 'instant' ? 'text-navy' : 'text-gray-700'}`}>Instant Join</span>
                       <Zap className={`w-4 h-4 ${approvalType === 'instant' ? 'text-navy' : 'text-gray-400'}`} />
                    </div>
                    <p className="text-xs text-gray-500 font-medium">Any registered influencer can automatically generate tracking links.</p>
                  </div>
                  
                  <div 
                    onClick={() => setApprovalType('apply')}
                    className={`cursor-pointer rounded-xl border p-4 transition-all ${approvalType === 'apply' ? 'border-navy shadow-[0_4px_15px_rgb(10,25,47,0.1)]' : 'border-gray-200 hover:border-gray-300'}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                       <span className={`font-bold text-sm ${approvalType === 'apply' ? 'text-navy' : 'text-gray-700'}`}>Approval Required</span>
                       <Lock className={`w-4 h-4 ${approvalType === 'apply' ? 'text-navy' : 'text-gray-400'}`} />
                    </div>
                    <p className="text-xs text-gray-500 font-medium">You must manually approve influencers before they can promote you.</p>
                  </div>
              </div>

              {approvalType === 'apply' && (
                <div className="animate-in fade-in slide-in-from-top-2 duration-300 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center">
                    <ShieldAlert className="w-4 h-4 mr-2 text-amber-500" />
                    Approval Criteria / Rules
                  </label>
                  <textarea 
                    rows="3"
                    placeholder="List rules influencers must follow or requirements to be accepted (e.g. Minimum follower count, target niche...)"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-200 outline-none transition-all text-sm text-navy resize-none"
                  ></textarea>
                </div>
              )}
            </div>
          </section>

          {/* Action Footer */}
          <div className="pt-8 mt-8 border-t border-gray-100 flex flex-col-reverse sm:flex-row justify-end items-center gap-4">
             <Link href="/dashboard/merchant" className="w-full sm:w-auto px-6 py-3 text-center text-sm font-bold text-gray-500 hover:text-navy transition-colors">
               Cancel
             </Link>
             <button type="submit" className="w-full sm:w-auto bg-navy hover:bg-navy/90 text-white font-bold py-3 px-8 rounded-xl shadow-[0_8px_20px_rgb(10,25,47,0.2)] transition-all text-sm">
               Launch Campaign
             </button>
          </div>
        </form>
      </div>
    </div>
  )
}
