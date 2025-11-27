import Image from 'next/image'

export default function Footer() {
  const regions = [
    { name: 'Haryana', icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' },
    { name: 'Punjab', icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' },
    { name: 'Himachal Pradesh', icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' },
    { name: 'Rajasthan', icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' },
  ]

  return (
    <footer className="bg-[var(--bg-surface)] border-t border-[var(--border)] py-6 sm:py-8 lg:py-10">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-7 lg:gap-8 mb-6 sm:mb-8">
            {/* Brand Section */}
            <div className="sm:col-span-2">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Image
                  src="/kisanshaktilogo.png"
                  alt="Kissaan Sampatti"
                  width={40}
                  height={40}
                  className="object-contain w-8 sm:w-10 h-8 sm:h-10"
                />
                <Image
                  src="/Kisan-Sampati-text.png"
                  alt="Kissaan Sampatti"
                  width={140}
                  height={35}
                  className="object-contain w-28 sm:w-32 lg:w-36 h-auto"
                />
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-md mb-4 sm:mb-6">
                Empowering Farmers. Transforming Biomass. Building a sustainable future through innovative crop residue management.
              </p>

              {/* Social Links */}
              <div className="flex gap-2 sm:gap-2.5">
                {/* Facebook */}
                <a href="#" className="flex items-center justify-center w-8 sm:w-9 lg:w-10 h-8 sm:h-9 lg:h-10 rounded-lg bg-white border border-[var(--border)] hover:border-[var(--brand)] hover:bg-[var(--brand-light)] transition-all duration-200 group">
                  <svg className="w-4 sm:w-4.5 lg:w-5 h-4 sm:h-4.5 lg:h-5 text-[var(--text-secondary)] group-hover:text-[var(--brand)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a href="#" className="flex items-center justify-center w-8 sm:w-9 lg:w-10 h-8 sm:h-9 lg:h-10 rounded-lg bg-white border border-[var(--border)] hover:border-[var(--brand)] hover:bg-[var(--brand-light)] transition-all duration-200 group">
                  <svg className="w-4 sm:w-4.5 lg:w-5 h-4 sm:h-4.5 lg:h-5 text-[var(--text-secondary)] group-hover:text-[var(--brand)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                {/* YouTube */}
                <a href="#" className="flex items-center justify-center w-8 sm:w-9 lg:w-10 h-8 sm:h-9 lg:h-10 rounded-lg bg-white border border-[var(--border)] hover:border-[var(--brand)] hover:bg-[var(--brand-light)] transition-all duration-200 group">
                  <svg className="w-4 sm:w-4.5 lg:w-5 h-4 sm:h-4.5 lg:h-5 text-[var(--text-secondary)] group-hover:text-[var(--brand)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-[var(--text-primary)] mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <a href="#about" className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--brand)] transition-colors group">
                  <svg className="w-4 h-4 text-[var(--brand)] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>About Us</span>
                </a>
                <a href="#sell" className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--brand)] transition-colors group">
                  <svg className="w-4 h-4 text-[var(--brand)] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Who We Serve</span>
                </a>
                <a href="#how" className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--brand)] transition-colors group">
                  <svg className="w-4 h-4 text-[var(--brand)] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>How It Works</span>
                </a>
                <a href="#features" className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--brand)] transition-colors group">
                  <svg className="w-4 h-4 text-[var(--brand)] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Features</span>
                </a>
                <a href="#tutorials" className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--brand)] transition-colors group">
                  <svg className="w-4 h-4 text-[var(--brand)] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Tutorials</span>
                </a>
                <a href="#contact" className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--brand)] transition-colors group">
                  <svg className="w-4 h-4 text-[var(--brand)] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Contact</span>
                </a>
              </div>
            </div>

            {/* Supported Regions */}
            <div>
              <h4 className="font-bold text-[var(--text-primary)] mb-4 text-base">Supported Regions</h4>
              <div className="space-y-3 text-sm">
                {regions.map((region, i) => (
                  <div key={i} className="flex items-center gap-2 text-[var(--text-secondary)]">
                    <svg className="w-4 h-4 text-[var(--brand)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={region.icon} />
                    </svg>
                    <span>{region.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--text-secondary)]">
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
              <span>© 2025 Kissaan Sampatti. All rights reserved.</span>
              <span className="hidden sm:inline">|</span>
              <span>Powered by <a href="https://www.manikaranpowerltd.in" target="_blank" rel="noopener noreferrer" className="text-[var(--brand)] hover:underline">Manikaran Power Ltd</a></span>
            </div>
            <div className="flex gap-6">
              <a href="/privacy-policy" className="hover:text-[var(--brand)] transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-[var(--brand)] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

