import { getCaseStudyBySlug, getAllCaseStudySlugs } from '@/lib/caseStudies'
import CaseStudyDetail from '@/components/CaseStudyDetail'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const caseStudy = getCaseStudyBySlug(params.slug)
  if (!caseStudy) return { title: 'Case Study Not Found | AIS' }
  return {
    title: `${caseStudy.company} Case Study | AIS`,
    description: `How ${caseStudy.company} achieved a ${caseStudy.results.leadsIncreasePercent}% increase in qualified leads using AI Sales Intelligence.`,
  }
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = getCaseStudyBySlug(params.slug)
  if (!caseStudy) notFound()
  return <CaseStudyDetail caseStudy={caseStudy!} />
}
