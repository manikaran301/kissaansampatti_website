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
                <strong>Last Updated:</strong> 11 August 2025
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
                <li>Photographs of crops or crop residues (captured using the in-app camera feature).</li>
              </ul>

              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">b. Permissions We Require</h3>
              <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 ml-4">
                <li><strong>Location:</strong> Used to calculate the distance between your location and our biomass plant locations in kilometers, to provide accurate transportation cost estimates.</li>
                <li><strong>Camera:</strong> Required to capture images of crops or crop residues.</li>
                <li><strong>File Storage:</strong> Used to temporarily store captured images in cache before uploading. The cache is cleared automatically after upload.</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="card p-6 sm:p-8 bg-white mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 ml-4">
                <li>Connecting farmers directly with our biomass pellet manufacturing plants.</li>
                <li>Calculating transportation distances and costs.</li>
                <li>Offering fair pricing and improved market access for agricultural products.</li>
                <li>Improving app features, user experience, and security.</li>
                <li>Complying with applicable legal requirements.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="card p-6 sm:p-8 bg-white mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4">3. Information Sharing</h2>
              <p className="text-[var(--text-secondary)] mb-4 font-semibold">We do not sell your personal information.</p>
              <p className="text-[var(--text-secondary)] mb-3">We may share your data only with:</p>
              <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 ml-4">
                <li>Trusted service providers who help operate the app.</li>
                <li>Government bodies or regulators if legally required.</li>
                <li>Relevant buyers or partners for fulfilling the services you request.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="card p-6 sm:p-8 bg-white mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4">4. Security Measures</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                We use encryption, secure servers, and restricted access protocols to safeguard your data. However, no system is completely secure, and we cannot guarantee absolute protection.
              </p>
            </div>

            {/* Section 5 */}
            <div className="card p-6 sm:p-8 bg-white mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4">5. Data Retention & User Control</h2>
              <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 ml-4">
                <li>Your personal data will be stored only for as long as necessary to provide services, comply with legal requirements, or resolve disputes.</li>
                <li>You have full CRUD rights over your data: you can Create, Read, Update, or Delete your information at any time through in-app options or by contacting us.</li>
                <li>Once you request deletion, your data will be permanently removed from our active systems within a reasonable time unless law requires retention.</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="card p-6 sm:p-8 bg-white mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4">6. Your Rights</h2>
              <p className="text-[var(--text-secondary)] mb-3">You can:</p>
              <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 ml-4">
                <li>Access and review the information we hold about you.</li>
                <li>Update or correct your details.</li>
                <li>Withdraw consent for processing certain data.</li>
                <li>Request deletion of your personal information.</li>
              </ul>
            </div>

            {/* Section 7 */}
            <div className="card p-6 sm:p-8 bg-white mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4">7. Location & Tracking</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Location services are used only to calculate the distance between your location and plant locations for transportation purposes. You can disable location permissions at any time in your device settings, but some features may not function properly.
              </p>
            </div>

            {/* Section 8 */}
            <div className="card p-6 sm:p-8 bg-white mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4">8. Cookies & Tracking Technologies</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                We do not use cookies in this app. However, the app may use analytics tools or SDKs to understand usage and improve performance.
              </p>
            </div>

            {/* Section 9 */}
            <div className="card p-6 sm:p-8 bg-white mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4">9. Policy Updates</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                We may update this Privacy Policy from time to time. Changes will be posted within the app with an updated "Last Updated" date.
              </p>
            </div>

            {/* Section 10 */}
            <div className="card p-6 sm:p-8 bg-white">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4">10. Contact Information</h2>
              <p className="text-[var(--text-secondary)] mb-2"><strong>Kissaan Sampatti App</strong></p>
              <p className="text-[var(--text-secondary)]">
                <strong>Email:</strong>{' '}
                <a href="mailto:kisan.sampati@manikaranpowerltd.in" className="text-[var(--brand)] hover:underline">
                  kisan.sampati@manikaranpowerltd.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

