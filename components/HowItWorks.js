export default function HowItWorks() {
  const steps = [
    {
      title: 'Register on the App',
      text: 'Farmers and traders can quickly join using mobile OTP verification.',
      iconPath: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
    },
    {
      title: 'Submit Crop Residue Details',
      text: 'Upload via simple form or audio recording in your local language (Hindi/Punjabi).',
      iconPath: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z'
    },
    {
      title: 'Get Best Price Offers',
      text: 'Buyers will directly offer for your paddy straw, wheat straw, or other residues.',
      iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      title: 'Pickup & Payment',
      text: 'Your material will be collected from your farm location, and payment will be released quickly.',
      iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    }
  ]
  return (
    <section id="how" className="py-10 sm:py-12 lg:py-14 bg-[var(--bg-surface)]">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-primary)]">How It Works</h2>
            <div className="mt-2 w-20 h-1 bg-[var(--brand)] rounded-full"></div>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[var(--text-secondary)]">
              Simple steps to start selling your crop residue
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {steps.map((s, i) => (
              <div key={i} className="card p-4 sm:p-5 lg:p-6 bg-white hover:border-[var(--brand)] transition-all duration-200">
                <div className="flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-[var(--brand-light)] mb-3 sm:mb-4">
                  <svg className="w-6 sm:w-7 h-6 sm:h-7 text-[var(--brand)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.iconPath} />
                  </svg>
                </div>
                <div className="text-xs sm:text-sm font-bold text-[var(--brand)] mb-1.5 sm:mb-2">STEP {i + 1}</div>
                <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)] mb-1.5 sm:mb-2">{s.title}</h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

