'use client'

import { useState, useEffect, useRef } from 'react'

function useCountUp(end, duration = 2000, startCounting = false) {
  const [count, setCount] = useState(0)
  const frameRef = useRef(null)

  useEffect(() => {
    if (!startCounting) {
      setCount(0)
      return
    }

    let startTime = null

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Smooth easeOutExpo for natural deceleration
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)

      const currentValue = Math.round(easeOutExpo * end)
      setCount(currentValue)

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [end, duration, startCounting])

  return count
}

function formatNumber(num) {
  return num.toLocaleString('en-IN')
}

export default function EnvironmentalImpact() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const currentRef = sectionRef.current

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
      observer.disconnect()
    }
  }, [])

  const totalCO2 = useCountUp(292000, 2500, isVisible)
  const residueSold = useCountUp(50000, 2000, isVisible)
  const co2Avoided = useCountUp(73000, 2200, isVisible)
  const pipelineResidue = useCountUp(150, 1500, isVisible) // displays as 1.50
  const pipelineCO2 = useCountUp(219, 1800, isVisible) // displays as 2.19

  return (
    <section ref={sectionRef} className="py-10 sm:py-12 lg:py-14 relative overflow-hidden bg-gradient-to-br from-[#E6F5F2] via-white to-[#F0F9F7]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23008A70" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-primary)]">Environmental Impact</h2>
            <div className="mt-2 w-20 h-1 bg-[var(--brand)] rounded-full"></div>
            <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)]">
              By selling residues instead of burning, farmers help reduce air pollution and support renewable energy.
            </p>
          </div>

          {/* Total Impact Hero Card */}
          <div className="card p-6 sm:p-8 lg:p-10 bg-gradient-to-r from-[var(--brand)] to-[#00A080] text-white mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                <span className="text-lg sm:text-xl font-medium opacity-90">Total Carbon Footprint Reduction</span>
              </div>
              <div className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-2">{formatNumber(totalCO2)}</div>
              <div className="text-xl sm:text-2xl font-medium opacity-90">tonnes of CO₂ emissions avoided</div>
            </div>
          </div>

          {/* Two Column Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Already Diverted Card */}
            <div className="card p-6 sm:p-8 bg-white/90 backdrop-blur-sm border-l-4 border-[var(--brand)]">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[var(--brand-light)] flex-shrink-0">
                  <svg className="w-7 h-7 text-[var(--brand)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-[var(--brand)] uppercase tracking-wide mb-1">Already Diverted (Sold)</div>
                  <div className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-3">{formatNumber(residueSold)} <span className="text-lg font-medium text-[var(--text-secondary)]">tonnes</span></div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-[var(--brand-light)]">
                    <svg className="w-5 h-5 text-[var(--brand)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span className="text-sm text-[var(--text-primary)]">
                      <span className="font-bold text-[var(--brand)]">{formatNumber(co2Avoided)}</span> tonnes CO₂e avoided
                    </span>
                  </div>
                  <div className="mt-2 text-xs text-[var(--text-secondary)]">Based on 1.46 CO₂e factor per tonne</div>
                </div>
              </div>
            </div>

            {/* In Pipeline Card */}
            <div className="card p-6 sm:p-8 bg-white/90 backdrop-blur-sm border-l-4 border-amber-500">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-100 flex-shrink-0">
                  <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-amber-600 uppercase tracking-wide mb-1">In Pipeline</div>
                  <div className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-3">{(pipelineResidue / 100).toFixed(2)} <span className="text-lg font-medium text-[var(--text-secondary)]">lakhs tonnes</span></div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-amber-50">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span className="text-sm text-[var(--text-primary)]">
                      <span className="font-bold text-amber-600">{(pipelineCO2 / 100).toFixed(2)}</span> lakhs tonnes CO₂e to be avoided
                    </span>
                  </div>
                  <div className="mt-2 text-xs text-[var(--text-secondary)]">1.50 lakhs × 1.46 = 2.19 lakhs tonnes CO₂e</div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}

