'use client'

export default function CropResidues() {
  const crops = [
    'Paddy Straw',
    'Wheat Straw',
    'Sugarcane Trash',
    'Maize Residue',
    'Mustard Stalk',
    'Cotton Stalk',
    'Rice Husk',
    'Wheat Husk',
    'Other Residues'
  ]

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-white">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-primary)]">Crop Residues We Support</h2>
            <div className="mt-2 w-20 h-1 bg-[var(--brand)] rounded-full"></div>
            <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)]">
              We accept a wide variety of agricultural residues for biomass conversion
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {/* Left Side - Crop List */}
            <div className="card p-6 sm:p-8 bg-[var(--bg-surface)] flex flex-col">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 flex-1">
                {crops.map((crop, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 sm:p-5 rounded-xl bg-white border border-[var(--border)] hover:border-[var(--brand)] hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--brand-light)] group-hover:bg-[var(--brand)] transition-colors duration-200">
                      <svg className="w-5 h-5 text-[var(--brand)] group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base font-medium text-[var(--text-primary)]">{crop}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="card p-0 overflow-hidden bg-[var(--bg-surface)]">
              <img
                src="/residues1.png"
                alt="Crop Residues - Paddy Straw, Wheat Straw, and more"
                className="w-full h-full object-cover object-bottom min-h-[300px] sm:min-h-[400px]"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden items-center justify-center min-h-[300px] sm:min-h-[400px] bg-[var(--brand-light)] text-[var(--text-secondary)]">
                <div className="text-center p-8">
                  <svg className="w-16 h-16 mx-auto mb-4 text-[var(--brand)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm">Add residues1.png to /public folder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

