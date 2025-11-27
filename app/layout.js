import '../styles/globals.css'
import Image from 'next/image'
import LanguageSwitcher from '../components/LanguageSwitcher'

export const metadata = {
  title: 'Kissaan Sampatti - Sell Crop Residue & Earn | Farmers & Traders',
  description: 'Sell crop residues easily with Kissaan Sampatti. Farmers earn more, traders sell in bulk, and buyers get verified biomass supply. Audio forms, real-time prices & fast payments.',
  keywords: [
    'sell crop residue online',
    'crop residue marketplace India',
    'biomass residue selling app',
    'farmers sell paddy straw',
    'traders bulk biomass supply',
    'stubble selling platform',
    'Kissaan Sampatti app',
    'biomass buyers India',
    'stubble management solution',
    'how to sell stubble online',
    'earn money from crop residue',
    'paddy straw buyers India',
    'wheat straw buyers India',
    'sell agricultural waste',
    'bulk biomass suppliers',
    'biomass pellet raw material sourcing',
    'stubble to biomass supply chain',
    'crop residue procurement',
    'stop stubble burning solution',
    'sustainable farming India',
    'biomass raw material marketplace',
  ],
  authors: [{ name: 'Kissaan Sampatti' }],
  creator: 'Kissaan Sampatti',
  publisher: 'Kissaan Sampatti',
  icons: {
    icon: '/kisanshaktilogo.png',
    shortcut: '/kisanshaktilogo.png',
    apple: '/kisanshaktilogo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://kissaansampatti.in',
    siteName: 'Kissaan Sampatti',
    title: "Kissaan Sampatti - India's Smart Crop Residue Marketplace",
    description: 'A smarter way for farmers and traders to sell crop residues. Real-time prices, verified buyers, village pickup and fast payments.',
    images: [
      {
        url: 'https://kissaansampatti.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kissaan Sampatti - Crop Residue Marketplace',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kissaan Sampatti - Sell Crop Residue & Earn',
    description: 'Farmers and traders can sell crop residues easily. Audio forms, transparent pricing, bulk selling and quick payments.',
    images: ['https://kissaansampatti.in/twitter-image.jpg'],
    creator: '@kissaansampatti',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

const schemaOrgJSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kissaan Sampatti',
  url: 'https://kissaansampatti.in',
  logo: 'https://kissaansampatti.in/kisanshaktilogo.png',
  description: 'Kissaan Sampatti is a digital marketplace where farmers and traders sell crop residues like paddy straw, wheat straw, and husk to verified biomass buyers.',
  sameAs: [
    'https://facebook.com/kissaansampatti',
    'https://instagram.com/kissaansampatti',
    'https://youtube.com/@kissaansampatti',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-XXXXXXXXXX',
    contactType: 'Customer Service',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi', 'Punjabi'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJSONLD) }}
        />
        {/* Google Translate Script */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement(
                  {
                    pageLanguage: 'en',
                    includedLanguages: 'en,hi,pa',
                    layout: google.translate.TranslateElement.InlineLayout.DROPDOWN,
                    autoDisplay: false,
                    multilanguagePage: true
                  },
                  'google_translate_element'
                );

                // Auto-detect browser language and translate
                setTimeout(function() {
                  var userLang = navigator.language || navigator.userLanguage;
                  console.log('Browser language detected:', userLang);

                  // Check if user has already selected a language
                  var hasSelectedLanguage = document.cookie.indexOf('googtrans') !== -1;

                  if (!hasSelectedLanguage) {
                    var targetLang = 'en'; // default

                    // Map browser language codes to our supported languages
                    if (userLang.startsWith('hi')) {
                      targetLang = 'hi'; // Hindi
                      console.log('Auto-translating to Hindi');
                    } else if (userLang.startsWith('pa')) {
                      targetLang = 'pa'; // Punjabi
                      console.log('Auto-translating to Punjabi');
                    }

                    // Auto-translate if not English
                    if (targetLang !== 'en') {
                      var selectElement = document.querySelector('.goog-te-combo');
                      if (selectElement) {
                        selectElement.value = targetLang;
                        selectElement.dispatchEvent(new Event('change'));
                        console.log('Language changed to:', targetLang);
                      }
                    }
                  }
                }, 1000);
              }
            `,
          }}
        />
        <script
          type="text/javascript"
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        />
      </head>
      <body>
        <main>
          {/* Modern Clean Header with increased logo size */}
          <header className="bg-white/95 backdrop-blur-sm border-b border-[var(--border)] sticky top-0 z-50 shadow-sm">
            <div className="container">
              <div className="flex items-center justify-between py-4">
                {/* Logo Section - Increased Size */}
                <a href="/" className="flex items-center gap-3 hover:opacity-90 transition-all duration-200">
                  <Image
                    src="/kisanshaktilogo.png"
                    alt="Kissaan Sampatti Logo"
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                  <Image
                    src="/Kisan-Sampati-text.png"
                    alt="Kissaan Sampatti"
                    width={160}
                    height={40}
                    className="object-contain hidden sm:block"
                  />
                </a>

                {/* Navigation - Desktop */}
                <nav className="hidden md:flex items-center gap-8">
                  <a
                    href="/#about"
                    className="text-[var(--text-secondary)] hover:text-[var(--brand)] transition-colors duration-200 font-medium relative group"
                  >
                    About
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--brand)] transition-all duration-200 group-hover:w-full"></span>
                  </a>
                  <a
                    href="/#how"
                    className="text-[var(--text-secondary)] hover:text-[var(--brand)] transition-colors duration-200 font-medium relative group"
                  >
                    How It Works
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--brand)] transition-all duration-200 group-hover:w-full"></span>
                  </a>
                  <a
                    href="/#tutorials"
                    className="text-[var(--text-secondary)] hover:text-[var(--brand)] transition-colors duration-200 font-medium relative group"
                  >
                    Tutorials
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--brand)] transition-all duration-200 group-hover:w-full"></span>
                  </a>
                  <a
                    href="/#features"
                    className="text-[var(--text-secondary)] hover:text-[var(--brand)] transition-colors duration-200 font-medium relative group"
                  >
                    Features
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--brand)] transition-all duration-200 group-hover:w-full"></span>
                  </a>
                  <a
                    href="/#contact"
                    className="text-[var(--text-secondary)] hover:text-[var(--brand)] transition-colors duration-200 font-medium relative group"
                  >
                    Contact
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--brand)] transition-all duration-200 group-hover:w-full"></span>
                  </a>

                  {/* Language Switcher */}
                  <LanguageSwitcher />

                  {/* Hidden Google Translate Widget (for functionality) */}
                  <div id="google_translate_element" className="hidden"></div>
                </nav>

                {/* Mobile Menu Button */}
                <button
                  className="md:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--brand)] transition-colors"
                  aria-label="Menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </header>
          {children}
        </main>
      </body>
    </html>
  )
}

