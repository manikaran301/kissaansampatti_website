'use client';

import { useState, useEffect } from 'react';

export default function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState('en');
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
    { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' },
  ];

  useEffect(() => {
    // Wait for Google Translate to load
    const initTranslation = () => {
      // Check if already translated (from cookie)
      const cookies = document.cookie.split(';');
      const googtransCookie = cookies.find(c => c.trim().startsWith('googtrans='));

      if (googtransCookie) {
        // Extract language from cookie
        const match = googtransCookie.match(/googtrans=\/en\/([a-z]{2})/);
        if (match && match[1]) {
          setCurrentLang(match[1]);
          return;
        }
      }

      // Auto-detect browser language on first load
      const savedLang = localStorage.getItem('selectedLanguage');
      if (savedLang) {
        setCurrentLang(savedLang);
        translatePage(savedLang);
      } else {
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('hi')) {
          setCurrentLang('hi');
          translatePage('hi');
        } else if (browserLang.startsWith('pa')) {
          setCurrentLang('pa');
          translatePage('pa');
        }
      }
    };

    // Wait for Google Translate to be ready
    const checkInterval = setInterval(() => {
      if (document.querySelector('.goog-te-combo')) {
        clearInterval(checkInterval);
        initTranslation();
      }
    }, 100);

    // Cleanup after 5 seconds
    setTimeout(() => clearInterval(checkInterval), 5000);

    return () => clearInterval(checkInterval);
  }, []);

  const translatePage = (langCode) => {
    // Set Google Translate cookie
    const domain = window.location.hostname;
    document.cookie = `googtrans=/en/${langCode}; path=/; domain=${domain}`;
    document.cookie = `googtrans=/en/${langCode}; path=/`;

    // Trigger Google Translate without reload
    const selectElement = document.querySelector('.goog-te-combo');
    if (selectElement) {
      selectElement.value = langCode;
      selectElement.dispatchEvent(new Event('change'));

      // Wait for Google Translate to process
      setTimeout(() => {
        // Force Google Translate to apply changes
        if (window.google && window.google.translate) {
          const translateElement = window.google.translate.TranslateElement;
          if (translateElement) {
            console.log('Translation applied to:', langCode);
          }
        }
      }, 100);
    } else {
      // If Google Translate not loaded yet, reload page
      console.log('Google Translate not ready, reloading...');
      window.location.reload();
    }
  };

  const handleLanguageChange = (langCode) => {
    setCurrentLang(langCode);
    localStorage.setItem('selectedLanguage', langCode);
    setIsOpen(false);
    translatePage(langCode);
  };

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === currentLang) || languages[0];
  };

  return (
    <div className="relative">
      {/* Language Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-5 py-2.5 bg-[var(--brand)] text-white rounded-full font-semibold hover:bg-[var(--brand-dark)] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
      >
        <span className="text-lg">🌐</span>
        <span className="hidden sm:inline">{getCurrentLanguage().nativeName}</span>
        <span className="sm:hidden">{getCurrentLanguage().code.toUpperCase()}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown - Responsive positioning */}
          <div className="absolute -right-12 sm:right-0 mt-2 w-56 sm:w-48 bg-white rounded-xl shadow-2xl border border-[var(--border)] overflow-hidden z-50 max-h-96 overflow-y-auto">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-colors duration-150 ${currentLang === lang.code
                  ? 'bg-[var(--brand-light)] text-[var(--brand)] font-semibold'
                  : 'text-[var(--text-primary)] hover:bg-[var(--brand-light)] hover:text-[var(--brand)]'
                  }`}
              >
                <span className="text-lg flex-shrink-0">
                  {lang.code === 'en' ? '🇬🇧' : lang.code === 'hi' ? '🇮🇳' : '🇮🇳'}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="font-medium truncate">{lang.nativeName}</div>
                  <div className="text-xs text-[var(--text-secondary)] truncate">{lang.name}</div>
                </div>
                {currentLang === lang.code && (
                  <svg className="w-5 h-5 text-[var(--brand)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

