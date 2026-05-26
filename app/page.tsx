import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { ShiftComparison } from '@/components/ShiftComparison'
import ROICalculator from '@/components/ROICalculator'
import { FeaturesAccordion } from '@/components/FeaturesAccordion'
import { SocialProof } from '@/components/SocialProof'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Header />
      <Hero />
      <ShiftComparison />
      <ROICalculator />
      <FeaturesAccordion />
      <SocialProof />
      <FAQ />
      <Footer />
    </main>
  )
}
