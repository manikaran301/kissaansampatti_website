import '../styles/globals.css'
import Header from '../components/Header'
import WhatsAppButton from '../components/WhatsAppButton'

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
        url: 'https://kissaansampatti.in/heroImage.png',
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
    images: ['https://kissaansampatti.in/heroImage.png'],
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
    google: 'gbC1rvoSH6UhrU9GxDzvhSUKSWhjfQfGj5gDNpG_X4g',
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
    'https://www.facebook.com/profile.php?id=61584668245437',
    'https://www.instagram.com/kissaan.sampatti/',
    'https://www.youtube.com/@kissaansampattiapp',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-9289411077',
    contactType: 'Customer Service',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi', 'Punjabi'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FB0JWDJGK9" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FB0JWDJGK9');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJSONLD) }}
        />
      </head>
      <body>
        <main>
          <Header />
          {children}
          <WhatsAppButton />
        </main>
      </body>
    </html>
  )
}

