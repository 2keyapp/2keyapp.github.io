import Header from '../components/Header'
import Footer from '../components/Footer'
import MerchantsHero from '../components/MerchantsHero'
import WhatMerchantsGet from '../components/WhatMerchantsGet'
import MerchantOfRecordClarity from '../components/MerchantOfRecordClarity'
import SellerOnboardingFlow from '../components/SellerOnboardingFlow'
import Link from 'next/link'

export default function MerchantsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <MerchantsHero />
        <WhatMerchantsGet />
        <MerchantOfRecordClarity />
        <SellerOnboardingFlow />
      </main>
      <Footer />
    </>
  )
}
