'use client'

export default function ProcessFlow() {
  const steps = [
    {
      number: '1',
      title: 'Farmers Share Residue',
      description: 'Farmers submit land and residue details through the app.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: '2',
      title: 'Data Verified & Matched',
      description: 'We analyse the information and link them with nearby pellet manufacturers.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: '3',
      title: 'Pickup from Farm',
      description: 'Manufacturers collect the residue directly from the farmer\'s location.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      number: '4',
      title: 'Converted to Pellets',
      description: 'The residue is cleaned, processed, and compressed into pellets.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      number: '5',
      title: 'Used for Clean Energy',
      description: 'Pellets fuel boilers, furnaces, and thermal plants—replacing coal.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ]

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-[var(--bg-surface)]">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-primary)]">From Crop Residue to Clean Energy</h2>
            <div className="mt-2 w-20 h-1 bg-[var(--brand)] rounded-full"></div>
            <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)]">
              See how agricultural waste transforms into sustainable energy
            </p>
          </div>

          {/* Desktop Horizontal Process */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connection Line - from first to last icon center */}
              <div className="absolute top-8 left-[10%] right-[10%] h-1 bg-gradient-to-r from-[var(--brand)] via-[var(--brand)] to-green-600 rounded-full"></div>

              {/* Steps */}
              <div className="grid grid-cols-5 gap-4">
                {steps.map((step, i) => (
                  <div key={i} className="relative flex flex-col items-center text-center group cursor-pointer">
                    {/* Icon Circle */}
                    <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-[var(--brand)] to-green-600 flex items-center justify-center text-white shadow-lg mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                      <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--brand-light)]">
                        <div className="text-[var(--brand)] transition-transform duration-300 group-hover:scale-110">
                          {step.icon}
                        </div>
                      </div>
                    </div>

                    {/* Step Number */}
                    <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1 w-6 h-6 rounded-full bg-[var(--brand)] text-white text-xs font-bold flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-green-600">
                      {step.number}
                    </div>

                    {/* Content */}
                    <h3 className="text-base font-bold text-[var(--text-primary)] mb-2 transition-colors duration-300 group-hover:text-[var(--brand)]">{step.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed px-2">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Vertical Process */}
          <div className="lg:hidden">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-6 top-6 bottom-6 w-1 bg-gradient-to-b from-[var(--brand)] to-green-600 rounded-full"></div>

              {/* Steps */}
              <div className="space-y-6">
                {steps.map((step, i) => (
                  <div key={i} className="relative flex gap-5 items-start group cursor-pointer">
                    {/* Icon */}
                    <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-[var(--brand)] flex items-center justify-center text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-green-600 group-hover:shadow-xl">
                      <span className="text-lg font-bold">{step.number}</span>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 card p-4 bg-white transition-all duration-300 group-hover:shadow-lg group-hover:border-[var(--brand)]">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-[var(--brand)] transition-transform duration-300 group-hover:scale-110">{step.icon}</div>
                        <h3 className="text-base font-bold text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--brand)]">{step.title}</h3>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

