import Header from '../components/Header'
import Footer from '../components/Footer'

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-16 sm:pt-20 md:pt-24 pb-20 font-body">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="mb-10 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy mb-4 sm:mb-6 leading-tight">
              Privacy Policy
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-500 font-medium">
              <span className="bg-teal/10 text-teal px-3 py-1 rounded-full border border-teal/20">
                Effective Date: April 21, 2026
              </span>
            </div>
          </div>

          {/* Policy Content */}
          <div className="bg-white rounded-2xl sm:rounded-[32px] p-6 sm:p-12 lg:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50">
            <div className="prose prose-base sm:prose-lg max-w-none prose-headings:font-heading prose-headings:text-navy prose-p:text-gray-600 prose-p:leading-relaxed">
              <section className="mb-12">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-navy text-white text-sm flex-shrink-0">1</span>
                  Introduction
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Earnfluence Inc. ("Earnfluence", "we", "us", or "our") is committed to protecting the privacy of our users. This Privacy Policy explains how we collect, use, disclose, retain, and safeguard personal information when you use the Earnfluence platform, visit our website, or otherwise interact with us. By using the Platform or providing personal information to us, you consent to the practices described in this Privacy Policy. If you do not agree, please do not use the Services.
                  </p>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of material changes by posting the revised version on our website with an updated “Last Updated” date and, where appropriate, by email or in-app notice. Your continued use after changes constitutes acceptance.
                  </p>
                  <p>
                    We operate the affiliate marketing platform available at <a href="https://earnfluence.io" className="text-teal font-bold hover:underline">Earnfluence.io</a> (the “Platform” or “Services”). We are a corporation based in Vancouver, British Columbia, Canada. We respect your privacy and are committed to protecting your personal information in accordance with applicable Canadian privacy laws, including the Personal Information Protection and Electronic Documents Act (PIPEDA) and British Columbia’s Personal Information Protection Act (PIPA). This policy complies with Canada's Personal Information Protection and Electronic Documents Act (PIPEDA), applicable provincial privacy legislation, and where applicable, international privacy standards including the General Data Protection Regulation (GDPR) for users in the European Economic Area.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-navy text-white text-sm flex-shrink-0">2</span>
                  Who We Are and Scope
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    Earnfluence Inc. is the data controller for personal information collected through the Service. Our platform serves two primary user types:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Merchants:</strong> E-commerce brands and SaaS businesses that use Earnfluence to run affiliate and influencer programs</li>
                    <li><strong>Affiliates/Influencers:</strong> Individuals or entities who participate in Merchant affiliate programs via Earnfluence</li>
                  </ul>
                  <p>
                    This Privacy Policy applies to both user types. Merchants are also considered data controllers for the personal data of their affiliates that flows through Earnfluence, and are responsible for their own compliance obligations.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-navy text-white text-sm flex-shrink-0">3</span>
                  Information We Collect
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>“Personal information” means any information about an identifiable individual. We collect the following categories of personal information:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                      <h4 className="font-bold text-navy mb-2">Account and Contact Information</h4>
                      <p className="text-sm">Name, email address, username, password, phone number, company name, billing address, and payment information (processed via third-party providers).</p>
                    </div>
                    <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                      <h4 className="font-bold text-navy mb-2">Usage and Technical Data</h4>
                      <p className="text-sm">IP address, browser type, device information, operating system, location data (approximate), cookies, web beacons, and logs of interactions with the Platform.</p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4">
                    <h3 className="font-bold text-navy text-lg">Platform-Specific Data</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-5 bg-navy text-white rounded-xl">
                        <h4 className="font-bold mb-2">For Merchants</h4>
                        <p className="text-sm opacity-90">Program details, commission structures, referral tracking data, analytics on campaign performance, and information about Affiliates who join your programs.</p>
                      </div>
                      <div className="p-5 bg-teal text-white rounded-xl">
                        <h4 className="font-bold mb-2">For Affiliates</h4>
                        <p className="text-sm opacity-90">Tracking links generated, referred traffic data (e.g., clicks, conversions), performance metrics, and payout details.</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4">
                    <ul className="list-disc pl-5 space-y-3">
                      <li><strong>Referral and Conversion Data:</strong> Information about qualifying actions (sales, leads, clicks) attributed through our tracking technology.</li>
                      <li><strong>Support and Communication Data:</strong> Inquiries, feedback, chat logs, or emails sent to us.</li>
                      <li><strong>Other:</strong> Any information you voluntarily provide, such as profile details, uploaded content, or survey responses.</li>
                    </ul>
                  </div>

                  <p className="italic text-gray-500">We aim to collect only what is necessary for the identified purposes.</p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-navy text-white text-sm flex-shrink-0">3.1</span>
                  Information You Provide Directly
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Account registration data:</strong> name, email address, company name, website URL, and password</li>
                    <li><strong>Billing information:</strong> payment details processed securely via Stripe</li>
                    <li><strong>Affiliate profile data:</strong> payout preferences, tax information, and promotional channel information</li>
                    <li><strong>Communications:</strong> messages you send to our support team</li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-navy text-white text-sm flex-shrink-0">3.2</span>
                  Information Collected Automatically
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Usage data:</strong> pages visited, features used, time spent on the platform</li>
                    <li><strong>Device and browser information:</strong> IP address, browser type, operating system</li>
                    <li><strong>Tracking data:</strong> affiliate link clicks, promo code usage, conversion events attributed via cookies and tracking pixels</li>
                    <li><strong>Log data:</strong> server logs, error reports, and performance data</li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-navy text-white text-sm flex-shrink-0">3.3</span>
                  Information from Third Parties
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Integration data:</strong> when you connect Shopify, WooCommerce, or other platforms, we receive order data and store information necessary for attribution</li>
                    <li><strong>Payment data from Stripe:</strong> transaction confirmations, payout status, and refund events</li>
                  </ul>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-navy text-white text-sm flex-shrink-0">4</span>
                  Cookies and Tracking Technologies
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>Earnfluence uses the following tracking technologies to deliver and improve the Service:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Session cookies:</strong> to maintain your login session</li>
                    <li><strong>Affiliate tracking cookies:</strong> to attribute conversions to the correct affiliate link or promo code</li>
                    <li><strong>Analytics cookies:</strong> to understand platform usage and improve features</li>
                    <li><strong>Tracking pixels:</strong> deployed on Merchant websites to capture conversion events</li>
                  </ul>
                  <p>
                    We use these and other similar technologies to operate the Platform, analyze usage, personalize experiences, and support affiliate tracking. You can manage cookie preferences through your browser settings or our cookie consent tools where available. Essential cookies are necessary for core functionality; others (analytics, marketing) may require consent.
                  </p>
                  <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl">
                    <p className="text-sm font-semibold text-navy leading-relaxed">
                      Merchants are responsible for obtaining appropriate consent from their end users for the deployment of Earnfluence tracking technologies on their websites, in compliance with CASL and other applicable laws.
                    </p>
                  </div>
                </div>
              </section>
              <section className="mb-12">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-navy text-white text-sm flex-shrink-0">5</span>
                  Purposes for Collecting and Using Personal Information
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>We use personal information for the following purposes:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>To comply with legal obligations, respond to lawful requests, or protect our rights and the safety of users.</li>
                    <li>To provide, operate, maintain, and improve the Platform (e.g., account management, tracking referrals, calculating commissions, generating reports and analytics).</li>
                    <li>To process payments and manage billing for Merchants.</li>
                    <li>To attribute affiliate referrals accurately using tracking links, promo codes, cookies, and pixels</li>
                    <li>To facilitate communication with Merchants and Affiliates regarding their accounts, updates, and support requests</li>
                    <li>To verify identities, prevent fraud, ensure compliance with our Terms of Service, and enforce platform rules (e.g., detecting invalid traffic or prohibited practices).</li>
                    <li>To respond to inquiries, provide customer support, and send administrative or service-related communications.</li>
                    <li>To send product updates and marketing communications (with your consent, and subject to your right to opt out)</li>
                    <li>To generate analytics, reports, and performance insights for Merchants and affiliates</li>
                  </ul>
                  <p>We will not use your information for new purposes without obtaining additional consent where required by law.</p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-navy text-white text-sm flex-shrink-0">6</span>
                  Legal Basis for Processing (GDPR)
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>For users in the European Economic Area, we rely on the following legal bases:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Contract performance:</strong> processing necessary to provide the Service</li>
                    <li><strong>Legitimate interests:</strong> fraud prevention, security, and platform improvement</li>
                    <li><strong>Consent:</strong> for marketing communications and non-essential cookies</li>
                    <li><strong>Legal obligation:</strong> where required by applicable law</li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-navy text-white text-sm flex-shrink-0">7</span>
                  How We Share Your Information
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>Earnfluence does not sell your personal information. We may share information in the following circumstances:</p>
                  
                  <div className="space-y-4">
                    <h3 className="font-bold text-navy text-lg">7.1 With Merchants and Affiliates</h3>
                    <p>Limited referral and performance data is shared as necessary for program operation (e.g., a Merchant sees which Affiliates drove conversions; an Affiliate sees their performance metrics). Affiliate performance data (clicks, conversions, commissions) is shared with the relevant Merchant. Merchants can view the performance of their affiliates within the platform. Affiliates can view their own performance data.</p>
                  </div>

                  <div className="space-y-4 pt-4">
                    <h3 className="font-bold text-navy text-lg">7.2 With Service Providers</h3>
                    <p>We share information with trusted third-party service providers who assist us in operating the Service with, including:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Stripe — payment processing and payout management</li>
                      <li>Cloud hosting and infrastructure providers</li>
                      <li>Analytics and monitoring providers</li>
                      <li>Customer support tooling providers</li>
                    </ul>
                    <p className="text-sm italic">These providers are contractually obligated to protect your information and may only use it to perform services on our behalf.</p>
                  </div>

                  <div className="space-y-4 pt-4">
                    <h3 className="font-bold text-navy text-lg">7.3 Legal Requirements</h3>
                    <p>We may disclose information if required to do so by law, court order, or governmental authority, or where we believe disclosure is necessary to protect the rights, property, or safety of Earnfluence, our users, or the public.</p>
                  </div>

                  <div className="space-y-4 pt-4">
                    <h3 className="font-bold text-navy text-lg">7.4 Business Transfers</h3>
                    <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred to the successor entity. We will provide notice before your information is subject to a different privacy policy.</p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-navy text-white text-sm flex-shrink-0">8</span>
                  Data Retention
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>We retain personal information for as long as necessary to provide the Service and fulfill the purposes outlined in this Policy, comply with legal obligations, resolve disputes, or enforce agreements. Specifically:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Account data is retained for the duration of your account and for up to two (2) years after account closure</li>
                    <li>Transaction and commission records are retained for seven (7) years for tax and accounting purposes</li>
                    <li>Tracking and attribution data is retained for up to three (3) years</li>
                  </ul>
                  <p>Once no longer needed, we securely delete or anonymize the information. You may request deletion of your personal information at any time, subject to our legal retention obligations.</p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-navy text-white text-sm flex-shrink-0">9</span>
                  Your Rights
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Access:</strong> request a copy of the personal information we hold about you</li>
                    <li><strong>Correction:</strong> request correction of inaccurate or incomplete information</li>
                    <li><strong>Deletion:</strong> request deletion of your personal information, subject to legal exceptions</li>
                    <li><strong>Portability:</strong> receive your information in a structured, machine-readable format</li>
                    <li><strong>Objection or restriction:</strong> object to or request restriction of certain processing activities</li>
                    <li><strong>Withdraw consent:</strong> withdraw consent for marketing communications at any time</li>
                  </ul>
                  <p>To exercise any of these rights, please contact us at <a href="mailto:support@earnfluence.io" className="text-teal font-bold hover:underline">support@earnfluence.io</a>. We will respond within thirty (30) days.</p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-navy text-white text-sm flex-shrink-0">10</span>
                  Data Security
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>We implement industry-standard physical, technical, and organizational security measures to protect your personal information against loss, theft, unauthorized access, disclosure, copying, use, or modification including:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>TLS/SSL encryption for data in transit</li>
                    <li>Encryption of sensitive data at rest</li>
                    <li>Access controls and authentication requirements</li>
                    <li>Regular security audits and vulnerability assessments</li>
                  </ul>
                  <p>While we take reasonable precautions, no method of transmission or storage is 100% secure. You use the Service at your own risk and are responsible for keeping your account credentials confidential.</p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-navy text-white text-sm flex-shrink-0">11</span>
                  International Data Transfers and Storage
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>Earnfluence is based in Canada. If you access the Service from outside Canada, your personal information may be transferred to, processed, and stored in Canada or other countries where our service providers operate. We take reasonable measures to ensure adequate protections, consistent with PIPEDA principles (e.g., through contractual safeguards), are in place for international transfers in accordance with applicable law.</p>
                </div>
              </section>

              <section className="mb-4">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-navy text-white text-sm flex-shrink-0">12</span>
                  Children's Privacy
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>The Service is not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected such information, we will take steps to delete it. If you believe we have collected information from a child, please contact us at <a href="mailto:support@earnfluence.io" className="text-teal font-bold hover:underline">support@earnfluence.io</a>.</p>
                </div>
              </section>
              <section className="mb-12">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-navy text-white text-sm flex-shrink-0">13</span>
                  Third-Party Links
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>The Service may contain links to third-party websites or integrations (e.g., Shopify, WooCommerce). We are not responsible for the privacy practices of those third parties. We encourage you to review the privacy policies of any third-party services you access through the Service.</p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-navy text-white text-sm flex-shrink-0">14</span>
                  Changes to This Policy
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of material changes by email or in-app notice at least thirty (30) days before they take effect. The updated policy will be posted on our website with a revised effective date. Continued use of the Service constitutes your acceptance of the updated policy.</p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-navy text-white text-sm flex-shrink-0">15</span>
                  Consent
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>We obtain your consent for the collection, use, and disclosure of personal information, except where permitted or required by law (e.g., for legal compliance). Consent may be expressed (e.g., clicking “I Agree”) or implied, depending on the sensitivity of the information and your reasonable expectations.</p>
                  <p>You can withdraw consent at any time, subject to legal or contractual restrictions, by contacting us. Withdrawing consent may limit your ability to use certain features of the Platform.</p>
                </div>
              </section>

              <section className="mb-4">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-navy text-white text-sm flex-shrink-0">16</span>
                  Contact Us
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>Under applicable privacy laws, you may have rights to access, correct, or delete your information, withdraw consent, or file a complaint.</p>
                  <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our Privacy Team:</p>
                  <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl space-y-2">
                    <p className="font-bold text-navy">Earnfluence Inc.</p>
                    <p>Email: <a href="mailto:support@earnfluence.io" className="text-teal font-bold hover:underline">support@earnfluence.io</a></p>
                    <p>Website: <a href="https://www.earnfluence.io" className="text-teal font-bold hover:underline">www.earnfluence.io</a></p>
                  </div>
                  <div className="pt-4 space-y-4">
                    <p className="text-sm text-gray-500 italic">For unresolved privacy complaints, you may also contact the Office of the Privacy Commissioner of Canada or the BC Office of the Information and Privacy Commissioner if you are not satisfied with our response.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <a href="https://www.priv.gc.ca/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white border border-gray-100 rounded-xl text-sm font-medium text-navy hover:border-teal transition-colors shadow-sm">
                        Office of the Privacy Commissioner of Canada
                      </a>
                      <a href="https://www.oipc.bc.ca/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white border border-gray-100 rounded-xl text-sm font-medium text-navy hover:border-teal transition-colors shadow-sm">
                        BC Office of the Information and Privacy Commissioner
                      </a>
                    </div>
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
