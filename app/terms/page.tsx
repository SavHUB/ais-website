import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service | AIS Machine',
  description: 'Terms and conditions governing your use of AIS Machine\'s website and AI-powered lead generation services.',
  robots: { index: true, follow: true },
}

const LAST_UPDATED = '30 May 2025'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Page header */}
        <div className="mb-14">
          <p className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-4">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Terms of Service</h1>
          <p className="text-gray-500 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>

        {/* Intro */}
        <div
          className="rounded-2xl p-6 mb-10"
          style={{ background: 'rgba(0,102,255,0.07)', border: '1px solid rgba(0,102,255,0.15)' }}
        >
          <p className="text-gray-300 text-sm leading-relaxed">
            Please read these Terms of Service carefully before using the AIS Machine website or services. By accessing our website or
            signing up for our service, you agree to be bound by these terms. If you do not agree, please do not use our services.
          </p>
        </div>

        <div>

          {/* 1 */}
          <Section title="1. About Us">
            <p>
              AIS Machine ("we", "us", "our") provides an AI-powered lead engagement platform designed to help businesses capture,
              qualify, and convert website visitors. Our registered contact is{' '}
              <a href="mailto:hello@ais-machine.com" className="text-cyan-400 hover:underline">
                hello@ais-machine.com
              </a>.
            </p>
          </Section>

          {/* 2 */}
          <Section title="2. Use of This Website">
            <p>You agree to use this website only for lawful purposes. You must not:</p>
            <ul>
              <li>Use the site in any way that violates applicable local, national, or international law.</li>
              <li>Transmit any unsolicited or unauthorised advertising or promotional material.</li>
              <li>Attempt to gain unauthorised access to any part of the website or its related systems.</li>
              <li>Introduce viruses, trojans, or other harmful material.</li>
              <li>Scrape, data-mine, or harvest content from the website without our written consent.</li>
            </ul>
          </Section>

          {/* 3 */}
          <Section title="3. Our Services">
            <p>
              AIS Machine provides AI-powered conversation and lead qualification tools installed on client websites. The specific
              features, usage limits, and support levels available to you depend on the subscription plan you select.
            </p>
            <p>
              We reserve the right to modify, suspend, or discontinue any aspect of the service at any time. Where possible, we will
              provide reasonable notice before doing so.
            </p>
          </Section>

          {/* 4 */}
          <Section title="4. Subscriptions and Payment">
            <p>
              Subscriptions are billed monthly or as otherwise agreed. Prices are shown on our{' '}
              <Link href="/#pricing" className="text-cyan-400 hover:underline">
                Pricing page
              </Link>{' '}
              and are in British Pounds Sterling (GBP) unless otherwise stated.
            </p>
            <ul>
              <li>
                <strong>Free trial</strong> — All plans include a 14-day free trial. No payment is taken until the trial ends.
              </li>
              <li>
                <strong>Cancellation</strong> — You may cancel at any time. Cancellation takes effect at the end of your current billing
                period. No partial refunds are issued for unused months.
              </li>
              <li>
                <strong>Price changes</strong> — We will give at least 30 days' notice of any price increase.
              </li>
              <li>
                <strong>Late payment</strong> — We reserve the right to suspend access to the service for accounts with unpaid invoices
                more than 14 days overdue.
              </li>
            </ul>
          </Section>

          {/* 5 */}
          <Section title="5. Intellectual Property">
            <p>
              All content on this website — including text, graphics, logos, and software — is the property of AIS Machine or its
              licensors and is protected by applicable intellectual property law.
            </p>
            <p>
              You may not reproduce, distribute, or create derivative works from our content without our prior written permission.
            </p>
          </Section>

          {/* 6 */}
          <Section title="6. Client Data and Privacy">
            <p>
              When you use our service, visitor conversation data from your website is processed on your behalf. You are the data
              controller for that data; we act as the data processor. Our data handling obligations are set out in our{' '}
              <Link href="/privacy-policy" className="text-cyan-400 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
            <p>
              You are responsible for ensuring that the use of AIS Machine on your website complies with your own privacy obligations,
              including obtaining visitor consent where required.
            </p>
          </Section>

          {/* 7 */}
          <Section title="7. Disclaimer of Warranties">
            <p>
              Our services are provided "as is" and "as available". We do not warrant that the service will be uninterrupted, error-free,
              or that any specific results will be achieved. Any projections shown in our ROI calculator or marketing materials are
              illustrative estimates only, not guarantees.
            </p>
          </Section>

          {/* 8 */}
          <Section title="8. Limitation of Liability">
            <p>
              To the fullest extent permitted by law, AIS Machine shall not be liable for any indirect, incidental, special, or
              consequential loss arising out of your use of the service, even if we have been advised of the possibility of such loss.
            </p>
            <p>
              Our total liability to you in connection with the service shall not exceed the total fees paid by you in the three months
              preceding the event giving rise to the claim.
            </p>
          </Section>

          {/* 9 */}
          <Section title="9. Indemnification">
            <p>
              You agree to indemnify and hold harmless AIS Machine and its officers, employees, and agents from any claims, damages,
              or expenses (including reasonable legal fees) arising from your use of the service, your violation of these terms, or your
              infringement of any third-party rights.
            </p>
          </Section>

          {/* 10 */}
          <Section title="10. Third-Party Links">
            <p>
              Our website may contain links to third-party websites. These are provided for convenience only. We are not responsible
              for the content or privacy practices of any third-party site.
            </p>
          </Section>

          {/* 11 */}
          <Section title="11. Termination">
            <p>
              We may terminate or suspend your access to the service immediately, without prior notice, if you breach these terms or if
              we are required to do so by law. Upon termination, your right to use the service ceases immediately.
            </p>
          </Section>

          {/* 12 */}
          <Section title="12. Governing Law">
            <p>
              These terms are governed by the laws of England and Wales. Any disputes arising from these terms or your use of the
              service shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </Section>

          {/* 13 */}
          <Section title="13. Changes to These Terms">
            <p>
              We may update these terms from time to time. The "Last updated" date will always reflect the current version. Continued use
              of the service after changes are published constitutes acceptance of the updated terms.
            </p>
          </Section>

          {/* 14 */}
          <Section title="14. Contact">
            <p>
              For any questions about these terms, please contact us at{' '}
              <a href="mailto:hello@ais-machine.com" className="text-cyan-400 hover:underline">
                hello@ais-machine.com
              </a>
              .
            </p>
          </Section>

        </div>

        {/* Back link */}
        <div className="mt-16 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <Link href="/" className="text-cyan-400 hover:underline text-sm">
            ← Back to home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}

// ─── Shared sub-component ─────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-bold text-white mb-4 tracking-tight">{title}</h2>
      <div className="space-y-3 text-gray-400 text-sm leading-relaxed [&_strong]:text-gray-200 [&_a]:text-cyan-400 [&_ul]:space-y-2 [&_ul]:list-none [&_ul]:pl-0 [&_li]:flex [&_li]:gap-2 [&_li]:before:content-['–'] [&_li]:before:text-cyan-400 [&_li]:before:shrink-0">
        {children}
      </div>
    </section>
  )
}
