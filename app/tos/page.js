import Header from '../components/Header'
import Footer from '../components/Footer'

export default function TokenOfServicePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-16 sm:pt-20 md:pt-24 pb-20 font-body">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
              Terms of Service
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
              <span className="bg-teal/10 text-teal px-3 py-1 rounded-full border border-teal/20">
                Effective Date: April 21, 2026
              </span>
            </div>
          </div>

          {/* Policy Content */}
          <div className="bg-white rounded-[32px] p-8 sm:p-12 lg:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50">
            <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-navy prose-p:text-gray-600 prose-p:leading-relaxed">
              <section className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-navy text-white text-sm">1</span>
                  Acceptance of Terms
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    By accessing or using the Earnfluence platform, website, or any associated services (collectively, the "Service"), you agree to be bound by these Terms of Service ("Terms"). They govern your access to and use of our website at <a href="https://earnfluence.io" className="text-teal font-bold hover:underline">Earnfluence.io</a> and the affiliate/influencer marketing platform, tools, dashboards, tracking features, and related services we offer (collectively, the “Platform” or “Services”).
                  </p>
                  <p>
                    If you are acting on behalf of a company or other legal entity, you represent that you have full authority to bind that entity to these Terms. If you do not agree to these Terms, you must not access or use the Service.
                  </p>
                  <p>
                    These Terms constitute a legally binding agreement between you and Earnfluence Inc. ("Earnfluence", "we", "us", or "our"), a company incorporated under the laws of Canada.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-navy text-white text-sm">2</span>
                  Description of Service
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <div className="space-y-4">
                    <h3 className="font-bold text-navy">2.1 Overview and Acceptance</h3>
                    <p>
                      Earnfluence is an online SaaS-based affiliate tracking platform that enables businesses ("Merchants") to create and manage affiliate tracking programs. Our role is limited to providing the technology for tracking, reporting, and managing referrals and commissions. 
                    </p>
                    <p className="font-semibold text-navy mb-2">Core features of the Service include:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Unique tracking link and promo code generation</li>
                      <li>Attribution tracking</li>
                      <li>Cookie-based conversion tracking</li>
                      <li>Affiliate portal with individual accounts</li>
                      <li>Commission and referral management and analytics</li>
                      <li>Integration with third-party platforms including Shopify, WooCommerce, and others</li>
                      <li>Payment processing via Stripe for affiliate payouts</li>
                    </ul>
                    <p>
                      Earnfluence serves both e-commerce brands and SaaS companies. We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time with reasonable notice.
                    </p>
                  </div>

                  <div className="space-y-4 pt-4">
                    <h3 className="font-bold text-navy">2.2 Key Definitions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <p><strong>Merchant:</strong> A business that creates and manages affiliate or influencer programs on the Platform and pays commissions for qualifying referrals.</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <p><strong>Affiliate:</strong> An individual or entity that joins Merchant programs, promotes offers, and may earn commissions for tracked actions (such as sales or leads).</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <p><strong>User:</strong> Anyone using the Platform, including Merchants, Affiliates, or visitors.</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <p><strong>Content:</strong> Any materials, links, images, text, or data you upload or transmit through the Services.</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <p><strong>Qualifying Action:</strong> A sale, lead, click, or other event that a Merchant designates as commissionable and that our tracking attributes to an Affiliate.</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <p><strong>Fees:</strong> Any subscription, percentage-based, or other charges payable by Merchants as shown in your account or on our pricing page.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-navy text-white text-sm">3</span>
                  How It Works
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    Merchants set their own commission rates, cookie periods, approval processes, and program rules. We provide tracking technology but do not guarantee perfect attribution, prevent all fraud, or enforce payments between Merchants and Affiliates. Merchants must review and approve (or decline) Qualifying Actions within any timeframe they specify in their program settings.
                  </p>
                  <p>
                    We act only as a facilitator. Any disputes over commissions, payouts, or program performance are solely between the Merchant and Affiliate. We may offer payment facilitation tools (through third-party processors), but we have no liability for delays, chargebacks, or processor failures.
                  </p>
                  
                  <div className="space-y-4 pt-4">
                    <h3 className="font-bold text-navy">3.1 Merchant Accounts</h3>
                    <p>To access the Service as a Merchant, you must register for an account by providing accurate, complete, and current information. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.</p>
                  </div>
                  
                  <div className="space-y-4 pt-4">
                    <h3 className="font-bold text-navy">3.2 Affiliate Accounts</h3>
                    <p>Merchants may invite affiliates or influencers to register on the platform. By registering as an affiliate or influencer, you agree to these Terms and any additional program terms set by the Merchant whose program you join. Earnfluence is not responsible for Merchant-specific affiliate program terms.</p>
                  </div>
                  
                  <div className="space-y-4 pt-4">
                    <h3 className="font-bold text-navy">3.3 Account Security</h3>
                    <p>You must notify Earnfluence immediately at <a href="mailto:support@earnfluence.io" className="text-teal font-bold hover:underline">support@earnfluence.io</a> of any unauthorized use of your account. Earnfluence will not be liable for any loss resulting from unauthorized account access that is not attributable to our negligence.</p>
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-navy text-white text-sm">4</span>
                  Acceptable Use
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    To use the Service, you must be at least 18 years old (or the legal age of majority where you reside) and have the legal capacity to form contracts. You agree to comply with all applicable laws, including advertising, endorsement disclosure (e.g., FTC or equivalent guidelines), data protection, and anti-spam rules. All registration information you provide must be accurate and kept up to date. You are fully responsible for your account security and all activity under it. 
                  </p>

                  <div className="space-y-4 pt-4">
                    <h3 className="font-bold text-navy">Prohibited Activities</h3>
                    <p>You agree not to use the Service to:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Violate any applicable federal, provincial, or local laws or regulations in Canada or any other jurisdiction</li>
                      <li>Engage in fraudulent activity, including self-referrals, cookie stuffing, generating fake clicks, conversions, or referrals</li>
                      <li>Transmit spam, unsolicited messages, or deceptive communications</li>
                      <li>Infringe upon the intellectual property rights of Earnfluence or any third party</li>
                      <li>Reverse engineer, decompile, or attempt to extract source code from the Service</li>
                      <li>Interfere with or disrupt the integrity or performance of the Service</li>
                      <li>Circumvent tracking mechanisms or attribution logic to manipulate commission payouts</li>
                      <li>Use the Service to facilitate illegal gambling, adult content, or prohibited goods as defined by applicable Canadian law</li>
                      <li>Violate third-party rights (intellectual property, privacy, etc.).</li>
                      <li>Use automated tools (beyond our official integrations) to access or scrape the Platform without permission.</li>
                      <li>Promote illegal products or services.</li>
                    </ul>
                  </div>

                  <p>
                    Earnfluence reserves the right to suspend or terminate accounts that violate this section without prior notice. You remain fully responsible for your own Content and activities.
                  </p>
                  
                  <div className="space-y-4 pt-4">
                    <h3 className="font-bold text-navy">4.1 License to Use the Platform</h3>
                    <p>We grant you a limited, non-exclusive, non-transferable, revocable right to access and use the Services solely for their intended purpose (running or participating in affiliate/influencer programs) while your account remains active and in good standing. This right ends automatically upon termination. You may not sublicense, sell, or use the Services for any other purpose.</p>
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-navy text-white text-sm">5</span>
                  Billing
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <div className="space-y-4">
                    <h3 className="font-bold text-navy">5.1 Subscription Fees</h3>
                    <p>Access to the Service is subject to subscription fees as described on our pricing page. Fees are charged automatically and are non-refundable except where required by law. All fees are in US dollars (USD) unless otherwise stated. Earnfluence reserves the right to change pricing with thirty (30) days' written notice.</p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-bold text-navy">5.2 Billing</h3>
                    <p>Subscription fees are billed in advance on a monthly or annual basis. By providing payment information, you authorize Earnfluence to store and charge your payment method on a recurring basis. Payment is processed via Stripe. Earnfluence does not store your full payment card details.</p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-bold text-navy">5.3 Affiliate Payouts</h3>
                    <p>Merchants are solely responsible for setting commission structures and fulfilling payout obligations to their affiliates according to the plan selected in their account. Earnfluence facilitates payout processing via Stripe but does not guarantee or assume liability for payout disputes between Merchants and affiliates.</p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-bold text-navy">5.4 Taxes</h3>
                    <p>You are responsible for all applicable taxes, including GST/HST, arising from your use of the Service. Earnfluence will charge applicable taxes where required by Canadian law.</p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-bold text-navy">5.5 Refunds</h3>
                    <p>Subscription fees are generally non-refundable. At our discretion, we may issue refunds in cases of billing errors. Requests must be submitted within thirty (30) days of the charge.</p>
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-navy text-white text-sm">6</span>
                  Third-Party Integrations
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>The Service integrates with third-party platforms including, but not limited to, Shopify, WooCommerce, and Stripe. Your use of third-party integrations is subject to those providers' terms of service and privacy policies. Earnfluence is not responsible for the availability, accuracy, or conduct of third-party services.</p>
                  <p>By enabling an integration, you grant Earnfluence permission to access and exchange data with that third-party platform on your behalf, as required to provide the Service.</p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-navy text-white text-sm">7</span>
                  Tracking Technologies
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>Earnfluence uses cookies and unique affiliate links to attribute conversions and referrals. By using the Service, Merchants agree to properly disclose the use of such tracking technologies to their end users in compliance with applicable laws, including Canada's Anti-Spam Legislation (CASL) and applicable provincial privacy laws.</p>
                  <p>Affiliates and influencers acknowledge that their activity on the platform (clicks, conversions, commissions) is tracked and reported to their associated Merchant(s).</p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-navy text-white text-sm">8</span>
                  Intellectual Property
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>All technology, content, and features of the Service — including but not limited to software, design, text, graphics, logos, and data — are the exclusive property of Earnfluence and are protected by Canadian and international intellectual property laws.</p>
                  <p>You are granted a limited, non-exclusive, non-transferable, revocable license to access and use the Service solely for its intended purposes under these Terms. You may not reproduce, distribute, or create derivative works from the Service without our express written consent.</p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-navy text-white text-sm">9</span>
                  User Content
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>You retain ownership of any content, data, or materials you submit to the Service ("User Content"). By submitting User Content, you grant Earnfluence a limited, worldwide, royalty-free license to use, store, and process that content solely to provide and improve the Service.</p>
                  <p>You represent that your User Content does not violate any third-party rights or applicable laws. Earnfluence may remove User Content that violates these Terms.</p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-navy text-white text-sm">10</span>
                  Confidentiality
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>Our Privacy Policy explains how we collect and use information. By using the Services, you confirm that your activities comply with all data protection laws and that you have obtained any required consents from individuals whose data you provide to us. We may create and use fully anonymized, aggregated data for our own business purposes.</p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-navy text-white text-sm">11</span>
                  Disclaimer of Warranties
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>You represent that you have authority to enter these Terms, that your use will comply with all laws, and that your Content does not infringe any rights.</p>
                  <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl text-xs sm:text-sm font-mono uppercase text-gray-600 leading-relaxed">
                    THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. EARNFLUENCE DOES NOT GUARANTEE THAT THE SERVICE WILL HAVE UNINTERRUPTED OPERATIONS, SPECIFIC RESULTS, OR ERROR-FREE TRACKING. WE ARE NOT RESPONSIBLE FOR DISPUTES BETWEEN MERCHANTS AND AFFILIATES OR FOR ANY THIRD-PARTY SERVICES (PAYMENT PROCESSORS, E-COMMERCE PLATFORMS, ETC.).
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-navy text-white text-sm">12</span>
                  Limitation of Liability
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl text-xs sm:text-sm font-mono uppercase text-gray-600 leading-relaxed">
                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE CANADIAN LAW, EARNFLUENCE AND ITS DIRECTORS, EMPLOYEES, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM YOUR USE OF OR INABILITY TO USE THE SERVICE.
                    OUR TOTAL LIABILITY TO YOU FOR ANY CLAIM ARISING FROM THESE TERMS SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNTS PAID BY YOU TO EARNFLUENCE IN THE THREE (3) MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED CANADIAN DOLLARS (CAD $100).
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-navy text-white text-sm">13</span>
                  Indemnification
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>You agree to indemnify, defend, and hold harmless Earnfluence and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising from: (a) your use of the Service; (b) your violation of these Terms; (c) your violation of any third-party rights; or (d) any dispute between you and your affiliates or Merchants.</p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-navy text-white text-sm">14</span>
                  Term and Termination
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>These Terms are effective until terminated. Either party may terminate at any time. Earnfluence may suspend or terminate your access immediately if you breach these Terms. Upon termination, your right to use the Service ceases immediately and outstanding Fees remain due (and are non-refundable). Provisions that by their nature should survive termination (including intellectual property, disclaimers, and limitation of liability) shall survive. Earnfluence may delete your data after providing reasonable notice where required by law. Sections on intellectual property, disclaimers, indemnification, liability limits, and governing law survive termination.</p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-navy text-white text-sm">15</span>
                  Governing Law and Dispute Resolution
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>These Terms are governed by and construed in accordance with the laws of the Province of British Columbia and the federal laws of Canada applicable therein, without regard to conflict of law principles.</p>
                  <p>Any dispute arising from these Terms shall first be subject to good-faith negotiation. If unresolved, disputes shall be submitted to binding arbitration in Vancouver, British Columbia, in accordance with the Arbitration Act (British Columbia). You agree to submit to the personal jurisdiction of those courts.Nothing in this section prevents either party from seeking injunctive relief in a court of competent jurisdiction.</p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-navy text-white text-sm">16</span>
                  Changes to Terms
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>Earnfluence reserves the right to add, modify, or remove these Terms at any time. We will notify you of material changes by email or in-app notification. Continued use of the Service after the effective date constitutes acceptance of the revised Terms.</p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-navy text-white text-sm">17</span>
                  Contact
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed p-8 bg-gray-50 rounded-3xl border border-gray-100">
                  <p>For questions regarding these Terms, please contact us at:</p>
                  <div className="space-y-2">
                    <p className="flex items-center gap-3 font-semibold text-navy">
                      <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email: <a href="mailto:support@earnfluence.io" className="text-teal hover:underline ml-1">support@earnfluence.io</a>
                    </p>
                    <p className="flex items-center gap-3 font-semibold text-navy">
                      <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      Website: <a href="https://www.earnfluence.io" className="text-teal hover:underline ml-1">www.earnfluence.io</a>
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
