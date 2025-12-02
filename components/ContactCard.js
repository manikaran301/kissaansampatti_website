export default function ContactCard() {
  return (
    <section id="contact" className="py-10 sm:py-12 lg:py-14 bg-white">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-primary)]">Get In Touch</h2>
            <div className="mt-2 w-20 h-1 bg-[var(--brand)] rounded-full"></div>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[var(--text-secondary)]">
              Have questions? We're here to help
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {/* Phone Card */}
            <div className="card p-4 sm:p-5 lg:p-6 bg-white hover:border-[var(--brand)] transition-all duration-200 group">
              <div className="flex items-start gap-3 sm:gap-3.5 lg:gap-4">
                <div className="flex items-center justify-center w-10 sm:w-11 lg:w-12 h-10 sm:h-11 lg:h-12 rounded-xl bg-[var(--brand-light)] group-hover:bg-[var(--brand)] transition-colors duration-200 flex-shrink-0">
                  <svg className="w-5 sm:w-5.5 lg:w-6 h-5 sm:h-5.5 lg:h-6 text-[var(--brand)] group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] mb-0.5 sm:mb-1">Phone</h3>
                  <p className="text-sm sm:text-base text-[var(--text-secondary)]">+91-73039 85353</p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="card p-4 sm:p-5 lg:p-6 bg-white hover:border-[var(--brand)] transition-all duration-200 group">
              <div className="flex items-start gap-3 sm:gap-3.5 lg:gap-4">
                <div className="flex items-center justify-center w-10 sm:w-11 lg:w-12 h-10 sm:h-11 lg:h-12 rounded-xl bg-[var(--brand-light)] group-hover:bg-[var(--brand)] transition-colors duration-200 flex-shrink-0">
                  <svg className="w-5 sm:w-5.5 lg:w-6 h-5 sm:h-5.5 lg:h-6 text-[var(--brand)] group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] mb-0.5 sm:mb-1">Email</h3>
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] break-words">support@kissaansampatti.com</p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="card p-4 sm:p-5 lg:p-6 bg-white hover:border-[var(--brand)] transition-all duration-200 group">
              <div className="flex items-start gap-3 sm:gap-3.5 lg:gap-4">
                <div className="flex items-center justify-center w-10 sm:w-11 lg:w-12 h-10 sm:h-11 lg:h-12 rounded-xl bg-[var(--brand-light)] group-hover:bg-[var(--brand)] transition-colors duration-200 flex-shrink-0">
                  <svg className="w-5 sm:w-5.5 lg:w-6 h-5 sm:h-5.5 lg:h-6 text-[var(--brand)] group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] mb-0.5 sm:mb-1">Location</h3>
                  <p className="text-sm sm:text-base text-[var(--text-secondary)]">Sirsa, Haryana, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

