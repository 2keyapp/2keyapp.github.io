import Header from './components/Header'
import Hero from './components/Hero'
import TrustBadges from './components/TrustBadges'
import WhatEarnfluenceDoes from './components/WhatEarnfluenceDoes'
import HowItWorksSection from './components/HowItWorksSection'
import WhoItsForSection from './components/WhoItsForSection'
import AudienceBentoGrid from './components/AudienceBentoGrid'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <Hero />
        <TrustBadges />
        <WhatEarnfluenceDoes />
        <HowItWorksSection />
        <WhoItsForSection />
        <AudienceBentoGrid />
    </main>
      <Footer />
    </>
  )
}
