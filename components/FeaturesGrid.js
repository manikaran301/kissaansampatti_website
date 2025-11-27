export default function FeaturesGrid() {
  const features = [
    {
      title: "Audio Form Submission",
      text: "Voice-based submissions in local languages (Hindi/Punjabi).",
      iconPath: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
    },
    {
      title: "Real-time Price Updates",
      text: "See offers and prices from verified buyers instantly.",
      iconPath: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
    },
    {
      title: "Farm Location Pickup",
      text: "Partner buyers arrange pickup from your farm location.",
      iconPath: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
    },

    {
      title: "Location-Based Matching",
      text: "Automatically connects farmers & traders to the nearest buyers to reduce transport cost.",
      iconPath: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    },
    {
      title: "End-to-End Transaction Tracking",
      text: "Track status from listing → pickup → weighing → payment in real time.",
      iconPath: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
    },
    {
      title: "Bulk Trade Support for Traders",
      text: "Traders can upload multi-lot listings and sell directly to us with assured offtake.",
      iconPath: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
    },
    {
      title: "Dedicated Support Helpline",
      text: "Assistance for farmers and traders in Hindi and Punjabi.",
      iconPath: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    },
    {
      title: "Digital Receipts & Records",
      text: "Every transaction comes with a digital slip for transparency and future reference.",
      iconPath: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    },
    {
      title: "Sustainability Score",
      text: "Shows how much pollution you prevented by selling instead of burning.",
      iconPath: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      title: "Verified Farmer & Trader Profiles",
      text: "Build trust with verified identities and accurate historical data.",
      iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    },
    {
      title: "Smart Search & Filters",
      text: "Find availability by crop type, district, volume, and expected pickup date.",
      iconPath: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    }
  ]

  return (
    <section id="features" className="py-10 sm:py-12 lg:py-14 bg-[var(--bg-surface)]">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-8 sm:mb-9 lg:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-primary)]">Key Features</h2>
            <div className="mt-2 w-20 h-1 bg-[var(--brand)] rounded-full"></div>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[var(--text-secondary)]">
              Everything you need to sell crop residue efficiently
            </p>
          </div>

          {/* Compact Features Grid - 3 columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
            {features.map((feature, i) => (
              <div key={i} className="card p-4 sm:p-5 lg:p-6 bg-white hover:border-[var(--brand)] transition-all duration-200 group">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="flex items-center justify-center w-10 sm:w-11 lg:w-12 h-10 sm:h-11 lg:h-12 rounded-xl bg-[var(--brand-light)] group-hover:bg-[var(--brand)] transition-colors duration-200">
                    <svg className="w-5 sm:w-5.5 lg:w-6 h-5 sm:h-5.5 lg:h-6 text-[var(--brand)] group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.iconPath} />
                    </svg>
                  </div>
                  <h3 className="text-xs sm:text-sm lg:text-base font-semibold text-[var(--text-primary)] leading-tight">{feature.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

