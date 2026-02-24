import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold">Privacy Policy</h1>
      <p className="mb-4 text-sm text-muted-foreground">Last updated: February 2026</p>

      <div className="prose prose-slate max-w-none space-y-6 text-sm leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p>
            ShowDontTell Ltd (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal data in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018, as overseen by the Information Commissioner&apos;s Office (ICO).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">2. Data Controller</h2>
          <p>
            ShowDontTell Ltd is the data controller for the personal data processed through this Service. Contact: hello@showdonttell.co.uk.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">3. Data We Collect</h2>
          <p>We collect minimal data necessary to provide the Service:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Account data:</strong> Email address, name (provided at sign-up)</li>
            <li><strong>Uploaded content:</strong> Design images you upload for analysis</li>
            <li><strong>Generated content:</strong> Prompts and extracted styles</li>
            <li><strong>Payment data:</strong> Processed by Stripe; we do not store card details</li>
            <li><strong>Usage data:</strong> Prompt counts, feature usage (for billing purposes)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">4. Legal Basis for Processing</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Contract:</strong> To provide the Service you signed up for</li>
            <li><strong>Legitimate interest:</strong> To improve the Service and prevent abuse</li>
            <li><strong>Consent:</strong> For optional marketing communications (you can opt out anytime)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">5. How We Use Your Data</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To provide and maintain the Service</li>
            <li>To process payments</li>
            <li>To communicate with you about your account</li>
            <li>To improve the Service</li>
          </ul>
          <p className="mt-2">
            We do <strong>not</strong> sell your personal data. We do <strong>not</strong> use your uploaded designs for AI training. We do <strong>not</strong> share your data with third parties for marketing.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">6. Third-Party Processors</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Supabase:</strong> Database and authentication (EU servers)</li>
            <li><strong>Stripe:</strong> Payment processing</li>
            <li><strong>Anthropic:</strong> AI image analysis (images processed transiently, not stored)</li>
            <li><strong>Vercel:</strong> Hosting</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">7. Data Retention</h2>
          <p>
            Account data is retained while your account is active. Uploaded images and prompts are retained until you delete them or your account. Upon account deletion, all data is removed within 30 days. Payment records are retained for 7 years as required by UK tax law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">8. Your Rights</h2>
          <p>Under UK GDPR, you have the right to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Access:</strong> Request a copy of your personal data</li>
            <li><strong>Rectification:</strong> Correct inaccurate data</li>
            <li><strong>Erasure:</strong> Request deletion of your data (&quot;right to be forgotten&quot;)</li>
            <li><strong>Portability:</strong> Receive your data in a portable format</li>
            <li><strong>Objection:</strong> Object to processing based on legitimate interest</li>
            <li><strong>Restriction:</strong> Request restricted processing</li>
          </ul>
          <p className="mt-2">To exercise these rights, contact hello@showdonttell.co.uk. We will respond within 30 days.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">9. Cookies</h2>
          <p>
            We use essential cookies only for authentication and session management. We do not use tracking cookies or third-party analytics cookies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">10. Security</h2>
          <p>
            We implement appropriate technical and organisational measures to protect your data, including encryption in transit (TLS), encrypted storage, and access controls. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">11. Complaints</h2>
          <p>
            If you have concerns about our data practices, please contact us first at hello@showdonttell.co.uk. You also have the right to lodge a complaint with the ICO at <a href="https://ico.org.uk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">12. Changes</h2>
          <p>
            We may update this policy from time to time. Material changes will be communicated via email. The latest version is always available on this page.
          </p>
        </section>
      </div>

      <div className="mt-8">
        <Link href="/" className="text-blue-600 hover:underline">← Back to home</Link>
      </div>
    </div>
  )
}
