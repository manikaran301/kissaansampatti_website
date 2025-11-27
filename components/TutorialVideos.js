'use client'

import { useState } from 'react'

export default function TutorialVideos() {
  const [activeLanguage, setActiveLanguage] = useState('english')

  const videos = {
    english: {
      title: 'Tutorial in English',
      embedUrl: 'https://www.youtube.com/embed/JJJDxFh4qyc?si=pTm_6uM19RCkhI1T'
    },
    hindi: {
      title: 'Tutorial in Hindi',
      embedUrl: 'https://www.youtube.com/embed/b9mDl60nZgA?si=riwbFpSqbemwdazd'
    },
    punjabi: {
      title: 'Tutorial in Punjabi',
      embedUrl: 'https://www.youtube.com/embed/Oi0fHKdAd8Q?si=EYtB2ZAKdaBRbEDp'
    }
  }

  const languages = [
    { id: 'english', label: 'English' },
    { id: 'hindi', label: 'हिंदी' },
    { id: 'punjabi', label: 'ਪੰਜਾਬੀ' }
  ]

  return (
    <section id="tutorials" className="py-10 sm:py-12 lg:py-14 bg-white">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-primary)]">Video Tutorials</h2>
            <div className="mt-2 w-20 h-1 bg-[var(--brand)] rounded-full"></div>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[var(--text-secondary)]">
              Learn how to use Kissaan Sampatti in your preferred language
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 sm:gap-5 lg:gap-6">
              {/* Language Tabs - Left Side */}
              <div className="md:w-48 flex md:flex-col gap-2 sm:gap-2.5 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
                {languages.map((lang) => (
                  <button
                    key={lang.id}
                    onClick={() => setActiveLanguage(lang.id)}
                    className={`
                    px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-left font-medium transition-all duration-200 whitespace-nowrap md:whitespace-normal flex-shrink-0 md:flex-shrink
                    ${activeLanguage === lang.id
                        ? 'bg-[var(--brand)] text-white'
                        : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:bg-[var(--brand-light)] hover:text-[var(--brand)]'
                      }
                  `}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>

              {/* Video Player - Right Side */}
              <div className="flex-1 min-w-0">
                <div className="card overflow-hidden">
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={videos[activeLanguage].embedUrl}
                      title={videos[activeLanguage].title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

