import Footer from '../../components/Footer'

export const metadata = {
  title: 'Privacy Policy – Kissaan Sampatti App',
  description: 'Privacy Policy for Kissaan Sampatti mobile application. Learn how we collect, use, store, and protect your personal information.',
}

export default function PrivacyPolicy() {
  return (
    <>
      {/* Privacy Policy Content */}
      <section className="py-16 sm:py-20 bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-10">
              <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
                Privacy Policy – Kissaan Sampatti App
              </h1>
              <p className="text-[var(--text-secondary)]">
                <strong>Last Updated:</strong> 06 January 2026
              </p>
            </div>

            {/* Introduction */}
            <div className="card p-6 sm:p-8 bg-white mb-6">
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Kissaan Sampatti ("we," "our," "us") respects your privacy. This Privacy Policy applies exclusively to the Kissaan Sampatti mobile application (Android and iOS) and explains how we collect, use, store, and protect your personal information, as well as the rights you have over your data.
              </p>
            </div>

            {/* Section 1 */}
            <div className="card p-6 sm:p-8 bg-white mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4">1. Information We Collect</h2>

              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">a. Information You Provide</h3>
              <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 mb-6 ml-4">
                <li>Name, contact details (phone number, email if provided), and address.</li>
                <li>Farming details such as land size, crop/raw material type, price expectations, and transport availability.</li>
                <li>Photographs of crops or crop residues captured using the in-app camera feature.</li>
              </ul>

              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">b. Permissions We Require</h3>
              <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 ml-4">
                <li><strong>Location:</strong> Used only to calculate the distance between your location and our biomass plant locations in kilometers, to provide accurate transportation cost estimates.</li>
                <li><strong>Camera:</strong> Required to capture images of crops or crop residues.</li>
                <li><strong>File Storage:</strong> Used to temporarily store captured images in cache before uploading. Cached files are automatically cleared after upload.</li>
              </ul>
            </div>

            {/* Section 2 - User Consent */}
            <div className="card p-6 sm:p-8 bg-white mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4">2. User Consent</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                By installing and using the Kissaan Sampatti app, you expressly consent to the collection, use, processing, and storage of your information as described in this Privacy Policy. You may withdraw your consent at any time by discontinuing use of the app or by requesting deletion of your data.
              </p>
            </div>

            {/* Section 3 */}
            <div className="card p-6 sm:p-8 bg-white mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 ml-4">
                <li>Connecting farmers directly with biomass pellet manufacturing plants.</li>
                <li>Calculating transportation distances and estimated costs.</li>
                <li>Providing fair pricing and improved market access for agricultural products.</li>
                <li>Improving app features, functionality, user experience, and security.</li>
                <li>Complying with applicable legal and regulatory requirements.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="card p-6 sm:p-8 bg-white mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4">4. Information Sharing</h2>
              <p className="text-[var(--text-secondary)] mb-4 font-semibold">We do not sell your personal information.</p>
              <p className="text-[var(--text-secondary)] mb-3">Your data may be shared only with:</p>
              <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 ml-4">
                <li>Trusted service providers who assist in operating and maintaining the app.</li>
                <li>Government authorities or regulators, if required by law.</li>
                <li>Relevant buyers or partners strictly for fulfilling the services you request.</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="card p-6 sm:p-8 bg-white mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4">5. Security Measures</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                We implement reasonable technical and organizational safeguards, including encryption, secure servers, and restricted access controls, to protect your data. However, no digital system can be guaranteed to be completely secure.
              </p>
            </div>

            {/* Section 6 */}
            <div className="card p-6 sm:p-8 bg-white mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4">6. Data Retention & User Control</h2>
              <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 ml-4">
                <li>Your personal data is retained only for as long as necessary to provide services, meet legal obligations, or resolve disputes.</li>
                <li>You have full CRUD rights — you may create, access, update, or delete your data through in-app options or by contacting us.</li>
                <li>Upon a valid deletion request, your data will be permanently removed from our active systems within a reasonable time, unless retention is required by law.</li>
              </ul>
            </div>

            {/* Section 7 */}
            <div className="card p-6 sm:p-8 bg-white mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4">7. Your Rights</h2>
              <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 ml-4">
                <li>Access and review your personal information.</li>
                <li>Correct or update inaccurate details.</li>
                <li>Withdraw consent for specific data processing activities.</li>
                <li>Request deletion of your personal data.</li>
              </ul>
            </div>

            {/* Section 8 */}
            <div className="card p-6 sm:p-8 bg-white mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4">8. Location & Tracking</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Location data is used solely for distance calculation between the user and plant locations for transportation purposes. We do not perform continuous or background tracking. You may disable location access in your device settings, though certain features may be limited.
              </p>
            </div>

            {/* Section 9 */}
            <div className="card p-6 sm:p-8 bg-white mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4">9. Analytics & Third-Party SDKs</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                The app may use analytics tools such as Google Firebase or similar services to monitor performance, detect crashes, and improve functionality. These services may collect anonymized usage and device information. No personal data is shared for advertising or marketing purposes without explicit user consent.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                The Kissaan Sampatti app does not access, collect, or store any Facebook, WhatsApp, or other social media account data.
              </p>
            </div>

            {/* Section 10 */}
            <div className="card p-6 sm:p-8 bg-white mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4">10. Policy Updates</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                We may update this Privacy Policy periodically. Any changes will be reflected within the app and on this page with an updated "Last Updated" date.
              </p>
            </div>

            {/* Section 11 */}
            <div className="card p-6 sm:p-8 bg-white mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4">11. Legal Compliance</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                This Privacy Policy is governed by the laws of India, including the Information Technology Act, 2000 and applicable data protection rules.
              </p>
            </div>

            {/* Section 12 */}
            <div className="card p-6 sm:p-8 bg-white">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4">12. Contact Information</h2>
              <p className="text-[var(--text-secondary)] mb-2"><strong>Kissaan Sampatti App</strong></p>
              <p className="text-[var(--text-secondary)] mb-4">
                For any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:
              </p>
              <div className="bg-[var(--bg-surface)] p-4 rounded-lg">
                <p className="text-[var(--text-secondary)] mb-2">
                  <strong>📧 Email:</strong>{' '}
                  <a href="mailto:support@kissaansampatti.com" className="text-[var(--brand)] hover:underline">
                    support@kissaansampatti.com
                  </a>
                </p>
                <p className="text-[var(--text-secondary)] mb-2">
                  <strong>📱 Phone:</strong>{' '}
                  <a href="tel:+919289411077" className="text-[var(--brand)] hover:underline">
                    +91-9289411077
                  </a>
                </p>
                <p className="text-[var(--text-secondary)]">
                  <strong>🌐 Website:</strong>{' '}
                  <a href="https://kissaansampatti.in" className="text-[var(--brand)] hover:underline">
                    kissaansampatti.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

