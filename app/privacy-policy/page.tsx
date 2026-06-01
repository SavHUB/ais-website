import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | AIS Machine',
  description: 'How AIS Machine collects, uses, and protects your personal data. GDPR-compliant privacy policy.',
  robots: { index: true, follow: true },
}

const LAST_UPDATED = '30 May 2025'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Page header */}
        <div className="mb-14">
          <p className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-4">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Privacy Policy</h1>
          <p className="text-gray-500 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>

        {/* Intro */}
        <div
          className="rounded-2xl p-6 mb-10"
          style={{ background: 'rgba(0,102,255,0.07)', border: '1px solid rgba(0,102,255,0.15)' }}
        >
          <p className="text-gray-300 text-sm leading-relaxed">
            AIS Machine ("<strong className="text-white">we</strong>", "<strong className="text-white">us</strong>", "<strong className="text-white">our</strong>") is
            committed to protecting your personal data. This policy explains what information we collect, how we use it, and your rights
            under the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>
        </div>

        <div className="prose-legal">

          {/* 1 */}
          <Section title="1. Who We Are">
            <p>
              AIS Machine is the data controller for the personal data collected through this website and our services.
            </p>
            <p>
              <strong>Contact:</strong>{' '}
              <a href="mailto:hello@ais-machine.com" className="text-cyan-400 hover:underline">
                hello@ais-machine.com
              </a>
              <br />
              <strong>Website:</strong>{' '}
              <a href="https://ais-machine.com" className="text-cyan-400 hover:underline">
                ais-machine.com
              </a>
            </p>
          </Section>

          {/* 2 */}
          <Section title="2. What Data We Collect">
            <p>We collect personal data in the following situations:</p>
            <ul>
              <li>
                <strong>Lead capture form</strong> — When you request a free estimate or get in touch, we collect your name, work email address,
                and company name or website.
              </li>
              <li>
                <strong>Enquiries by email</strong> — Any information you include in emails sent to us.
              </li>
              <li>
                <strong>Website analytics</strong> — We use Vercel Analytics to collect anonymised usage data (pages visited, referrer, general
                location, device type). No cookies are set for analytics; no personal identifiers are stored.
              </li>
              <li>
                <strong>AI conversation agent</strong> — If an AIS conversation widget is deployed on a client's website, conversation transcripts
                may be stored to improve lead qualification. Data collected is governed by the relevant client's privacy policy.
              </li>
            </ul>
          </Section>

          {/* 3 */}
          <Section title="3. How We Use Your Data">
            <Table
              headers={['Purpose', 'Lawful Basis']}
              rows={[
                ['Responding to enquiries and providing our service', 'Legitimate interests / Contract'],
                ['Sending your requested estimate or report', 'Contract'],
                ['Following up on your enquiry', 'Legitimate interests'],
                ['Improving our website and services', 'Legitimate interests'],
                ['Legal obligations (e.g. fraud prevention)', 'Legal obligation'],
              ]}
            />
          </Section>

          {/* 4 */}
          <Section title="4. How Long We Keep Your Data">
            <p>
              We retain personal data from lead capture forms for up to <strong>24 months</strong> from the date of collection, unless you ask
              us to delete it sooner or we enter into a client relationship that requires a different retention period.
            </p>
            <p>
              Email correspondence is kept for as long as reasonably necessary for the purpose it was collected, typically no longer than
              3 years.
            </p>
          </Section>

          {/* 5 */}
          <Section title="5. Who We Share Your Data With">
            <p>We do not sell your personal data. We may share it with:</p>
            <ul>
              <li>
                <strong>Service providers</strong> — Email delivery, CRM, and hosting providers who process data on our behalf under data
                processing agreements.
              </li>
              <li>
                <strong>Professional advisers</strong> — Lawyers or accountants where necessary.
              </li>
              <li>
                <strong>Regulatory authorities</strong> — Where required by law.
              </li>
            </ul>
            <p>
              All third-party processors are required to maintain appropriate security measures and may only process your data on our
              documented instructions.
            </p>
          </Section>

          {/* 6 */}
          <Section title="6. International Transfers">
            <p>
              We are based in the United Kingdom. Where data is transferred outside the UK or European Economic Area, we ensure appropriate
              safeguards are in place — such as Standard Contractual Clauses approved by the ICO — before any transfer takes place.
            </p>
          </Section>

          {/* 7 */}
          <Section title="7. Cookies">
            <p>
              This website does not use advertising or tracking cookies. We may use strictly necessary cookies for session management
              if you access a client portal. Vercel Analytics operates without cookies.
            </p>
          </Section>

          {/* 8 */}
          <Section title="8. Your Rights">
            <p>Under UK GDPR you have the right to:</p>
            <ul>
              <li><strong>Access</strong> — Request a copy of the personal data we hold about you.</li>
              <li><strong>Rectification</strong> — Ask us to correct inaccurate data.</li>
              <li><strong>Erasure</strong> — Ask us to delete your data (the "right to be forgotten").</li>
              <li><strong>Restriction</strong> — Ask us to stop processing your data in certain circumstances.</li>
              <li><strong>Portability</strong> — Receive your data in a structured, machine-readable format.</li>
              <li><strong>Object</strong> — Object to processing based on legitimate interests.</li>
              <li><strong>Withdraw consent</strong> — Where processing is based on consent, withdraw it at any time.</li>
            </ul>
            <p>
              To exercise any of these rights, email us at{' '}
              <a href="mailto:hello@ais-machine.com" className="text-cyan-400 hover:underline">
                hello@ais-machine.com
              </a>
              . We will respond within one month.
            </p>
          </Section>

          {/* 9 */}
          <Section title="9. Security">
            <p>
              We implement technical and organisational measures to protect your personal data against unauthorised access, loss, or
              disclosure. Data in transit is encrypted using TLS. We review our security practices regularly.
            </p>
          </Section>

          {/* 10 */}
          <Section title="10. Complaints">
            <p>
              If you believe we have not handled your personal data appropriately, you have the right to lodge a complaint with the
              Information Commissioner's Office (ICO) — the UK's data protection regulator:
            </p>
            <p>
              <a
                href="https://ico.org.uk/make-a-complaint/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                ico.org.uk/make-a-complaint
              </a>
              {' '}· 0303 123 1113
            </p>
            <p>We would, however, appreciate the chance to address your concerns directly before you contact the ICO.</p>
          </Section>

          {/* 11 */}
          <Section title="11. Changes to This Policy">
            <p>
              We may update this policy from time to time. The "Last updated" date at the top of this page will reflect any changes.
              Where changes are material, we will notify you by email if we hold your contact details.
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

// ─── Shared sub-components ────────────────────────────────────────────────────

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

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-xl mt-3" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
      <table className="w-full text-sm">
        <thead>
          <tr style={{ background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            {headers.map((h) => (
              <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-400 tracking-widest uppercase">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              style={{
                borderBottom: i < rows.length - 1 ? '1px solid rgba(255,255,255,0.05)' : undefined,
                background: i % 2 === 1 ? 'rgba(255,255,255,0.015)' : 'transparent',
              }}
            >
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-gray-400">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
