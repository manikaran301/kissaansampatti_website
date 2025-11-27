import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import TutorialVideos from '../components/TutorialVideos'
import FeaturesGrid from '../components/FeaturesGrid'
import EnvironmentalImpact from '../components/EnvironmentalImpact'
import CropResidues from '../components/CropResidues'
import ProcessFlow from '../components/ProcessFlow'
import ContactCard from '../components/ContactCard'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Hero />

      {/* About Us Section - Modern Layout */}
      <section id="about" className="py-10 sm:py-12 lg:py-14 bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">About Us</h2>
              <div className="mt-2 w-20 h-1 bg-[var(--brand)] rounded-full"></div>
            </div>

            {/* Main Content Grid: 1/4 left, 3/4 right */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Left Side - Description (1/4) */}
              <div className="lg:col-span-1">
                <div className="card p-6 h-full bg-white">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">Who We Are</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    Kissaan Sampatti is a mobile application developed to support government initiatives aimed at enhancing energy security, reducing carbon emissions, and accelerating rural economic growth.</p>
                </div>
              </div>

              {/* Right Side - What We Do & Vision/Mission (3/4) */}
              <div className="lg:col-span-3">
                <div className="space-y-6">
                  {/* What We Do Card - Top */}
                  <div className="card p-8 bg-white">
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">What We Do</h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      Kissaan Sampatti allows farmers to easily share key details such as land size, type of raw materials or crop residue, price expectations, and transportation availability. By collecting and analysing this information, the platform directly connects farmers with biomass pellet manufacturing units, ensuring fair prices and removing middlemen. </p>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      Through streamlined transactions and improved market access, Kissaan Sampatti empowers farmers, increases their income, and promotes sustainable development—building a transparent, efficient, and eco-friendly agricultural supply chain.</p>
                  </div>

                  {/* Vision & Mission Cards - Bottom */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Vision Card */}
                    <div className="card p-8 bg-white hover:border-[var(--brand)] transition-all duration-200">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[var(--brand-light)] flex-shrink-0">
                          <svg className="w-7 h-7 text-[var(--brand)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-[var(--text-primary)]">Our Vision</h3>
                      </div>
                      <p className="text-[var(--text-secondary)] leading-relaxed">
                        To be a leader in digital innovation that empowers individuals and businesses through technology.
                      </p>
                    </div>

                    {/* Mission Card */}
                    <div className="card p-8 bg-white hover:border-[var(--brand)] transition-all duration-200">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[var(--brand-light)] flex-shrink-0">
                          <svg className="w-7 h-7 text-[var(--brand)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-[var(--text-primary)]">Our Mission</h3>
                      </div>
                      <p className="text-[var(--text-secondary)] leading-relaxed">
                        To develop high-quality solutions that enhance efficiency, productivity, and user engagement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section - Modern Layout */}
      <section id="sell" className="py-10 sm:py-12 lg:py-14 bg-white">
        <div className="container">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">Who We Serve</h2>
              <div className="mt-2 w-20 h-1 bg-[var(--brand)] rounded-full"></div>
              <p className="mt-4 text-lg text-[var(--text-secondary)]">
                Connecting farmers and traders for a smarter, profitable residue marketplace
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* For Farmers Card */}
              <div className="card p-8 bg-white hover:border-[var(--brand)] transition-all duration-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[var(--brand-light)] flex-shrink-0">
                    <svg className="w-7 h-7 text-[var(--brand)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)]">For Farmers</h3>
                </div>
                <p className="text-[var(--text-secondary)] mb-6">
                  Sell your crop residues easily and earn more.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--brand)] mt-0.5 font-bold">✓</span>
                    <span className="text-[var(--text-secondary)]">Audio-based listing in your local language</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--brand)] mt-0.5 font-bold">✓</span>
                    <span className="text-[var(--text-secondary)]">Transparent pricing with direct buyer offers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--brand)] mt-0.5 font-bold">✓</span>
                    <span className="text-[var(--text-secondary)]">Village-level pickup arranged</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--brand)] mt-0.5 font-bold">✓</span>
                    <span className="text-[var(--text-secondary)]">Fast and secure payments directly to your account</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--brand)] mt-0.5 font-bold">✓</span>
                    <span className="text-[var(--text-secondary)]">Earn instead of burning your crop residues</span>
                  </li>
                </ul>
              </div>

              {/* For Traders Card */}
              <div className="card p-8 bg-white hover:border-[var(--brand)] transition-all duration-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[var(--brand-light)] flex-shrink-0">
                    <svg className="w-7 h-7 text-[var(--brand)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)]">For Traders</h3>
                </div>
                <p className="text-[var(--text-secondary)] mb-6">
                  Sell your collected residues in bulk — directly to us.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--brand)] mt-0.5 font-bold">✓</span>
                    <span className="text-[var(--text-secondary)]">Easy bulk submission of collected crop residues</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--brand)] mt-0.5 font-bold">✓</span>
                    <span className="text-[var(--text-secondary)]">Verified demand from biomass manufacturers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--brand)] mt-0.5 font-bold">✓</span>
                    <span className="text-[var(--text-secondary)]">Crop-wise inventory management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--brand)] mt-0.5 font-bold">✓</span>
                    <span className="text-[var(--text-secondary)]">Direct, reliable communication and pricing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--brand)] mt-0.5 font-bold">✓</span>
                    <span className="text-[var(--text-secondary)]">Faster bulk payouts with assured purchase</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />
      <TutorialVideos />
      <FeaturesGrid />
      <EnvironmentalImpact />
      <CropResidues />
      <ProcessFlow />
      <ContactCard />
      <Footer />
    </>
  )
}

