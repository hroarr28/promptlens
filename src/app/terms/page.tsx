import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold">Terms of Service</h1>
      <p className="mb-4 text-sm text-muted-foreground">Last updated: February 2026</p>

      <div className="prose prose-slate max-w-none space-y-6 text-sm leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your use of ShowDontTell (&quot;the Service&quot;), operated by ShowDontTell Ltd (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By accessing or using the Service, you agree to be bound by these Terms. These Terms are governed by the laws of England and Wales.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">2. Service Description</h2>
          <p>
            ShowDontTell is a web-based tool that analyses design screenshots using artificial intelligence to extract visual styles and generate prompts for AI-powered development tools.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">3. Accounts</h2>
          <p>
            You must provide accurate information when creating an account. You are responsible for maintaining the security of your account credentials. You must notify us immediately of any unauthorised access.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">4. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Upload content that infringes intellectual property rights</li>
            <li>Use the Service for unlawful purposes</li>
            <li>Attempt to gain unauthorised access to our systems</li>
            <li>Interfere with the proper functioning of the Service</li>
            <li>Resell or redistribute the Service without permission</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">5. Subscriptions and Payments</h2>
          <p>
            Free accounts are limited to 3 prompts per month. Pro subscriptions cost £7 per month, billed monthly via Stripe. You may cancel at any time; access continues until the end of the billing period. We reserve the right to change pricing with 30 days&apos; notice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">6. Intellectual Property</h2>
          <p>
            You retain ownership of all designs you upload. We claim no ownership of your content. The generated prompts are yours to use as you see fit. Our Service, branding, and proprietary technology remain our intellectual property.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, our total liability to you shall not exceed the amount you have paid us in the 12 months preceding the claim. We are not liable for indirect, incidental, special, consequential, or punitive damages. Nothing in these Terms excludes liability for death, personal injury caused by negligence, or fraud.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">8. Disclaimer</h2>
          <p>
            The Service is provided &quot;as is&quot; without warranties of any kind. AI-generated content may not be perfectly accurate. You should review all generated prompts before use.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">9. Termination</h2>
          <p>
            We may suspend or terminate your account if you breach these Terms. You may delete your account at any time via the Settings page. Upon termination, your data will be deleted within 30 days.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">10. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. We will notify you of material changes via email. Continued use after changes constitutes acceptance.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">11. Contact</h2>
          <p>
            For questions about these Terms, contact us at hello@showdonttell.co.uk.
          </p>
        </section>
      </div>

      <div className="mt-8">
        <Link href="/" className="text-blue-600 hover:underline">← Back to home</Link>
      </div>
    </div>
  )
}
