import Header from '../components/Header'
import Footer from '../components/Footer'
import TrustHero from '../components/TrustHero'
import PaymentsCompliance from '../components/PaymentsCompliance'
import IdentitySecurity from '../components/IdentitySecurity'
import FAQ from '../components/FAQ'

export default function TrustPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <TrustHero />
        <PaymentsCompliance />
        <IdentitySecurity />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}








