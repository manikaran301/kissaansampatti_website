import Image from 'next/image'

export default function Hero() {
  return (
    <section className="pt-12 sm:pt-16 lg:pt-20 overflow-hidden relative min-h-[80vh] lg:min-h-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
        ></div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          {/* Left Content */}
          <div className="text-center lg:text-left mb-21">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--brand-light)] text-[var(--brand)] text-sm font-medium mb-6">
              <span>Empowering Farmers Across India</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-tight">
              India's Smart <span className="text-[var(--brand)]">Crop Residue</span> Marketplace
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed">
              Stop burning. Start earning. Connect with trusted biomass buyers, sell your crop residues, and increase your income effortlessly.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-3 sm:gap-4 w-full sm:w-auto">
              {/* Google Play Store Button */}
              <a
                href="https://play.google.com/store/apps/details?id=com.manikaran301.kisanshakti"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all w-full sm:w-auto justify-center sm:justify-start"
              >
                <svg className="w-6 sm:w-8 h-6 sm:h-8 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs leading-tight">GET IT ON</div>
                  <div className="text-xs sm:text-sm font-semibold leading-tight">Google Play</div>
                </div>
              </a>

              {/* Apple App Store Button */}
              <a
                href="https://apps.apple.com/in/app/kissaan-sampatti/id6751637103"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all w-full sm:w-auto justify-center sm:justify-start"
              >
                <svg className="w-6 sm:w-8 h-6 sm:h-8 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs leading-tight">Download on the</div>
                  <div className="text-xs sm:text-sm font-semibold leading-tight">App Store</div>
                </div>
              </a>
            </div>

            {/* Stats section */}
            {/* <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-[var(--brand)]">10K+</div>
                <div className="mt-1 text-xs sm:text-sm text-[var(--text-secondary)]">Farmers</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-[var(--brand)]">500+</div>
                <div className="mt-1 text-xs sm:text-sm text-[var(--text-secondary)]">Buyers</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-[var(--brand)]">₹2Cr+</div>
                <div className="mt-1 text-xs sm:text-sm text-[var(--text-secondary)]">Transactions</div>
              </div>
            </div> */}
          </div>

          {/* Right Content - Hero Image (Hidden on mobile) */}
          <div className="relative h-full hidden lg:flex items-end justify-center">
            <div className="relative w-full max-w-lg">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--brand)] opacity-10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--brand)] opacity-5 rounded-full blur-3xl -z-10"></div>

              {/* Hero Image - aligned to bottom */}
              <div className="relative">
                <Image
                  src="/heroImage.png"
                  alt="Kissaan Sampatti - Crop Residue Marketplace"
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain"
                  style={{ display: 'block' }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

