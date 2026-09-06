import React, { useState, useEffect } from 'react';
import type { PageTab } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MainPage } from './pages/MainPage';
import { CprPage } from './pages/CprPage';
import { GrxabcdePage } from './pages/GrxabcdePage';
import { AedPage } from './pages/AedPage';
import { ContactsPage } from './pages/ContactsPage';
import { AboutPage } from './pages/AboutPage';
import { PhoneCall } from 'lucide-react';

export const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<PageTab>('main');

  // Sync state with URL hash for clean direct linking and browser history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageTab;
      const validTabs: PageTab[] = ['main', 'cpr', 'grxabcde', 'aed', 'contacts', 'about'];
      if (validTabs.includes(hash)) {
        setCurrentTab(hash);
      }
    };

    // On initial mount
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectTab = (tab: PageTab) => {
    setCurrentTab(tab);
    window.location.hash = tab === 'main' ? '' : `#${tab}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-brand-orange-500 selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar currentTab={currentTab} onSelectTab={handleSelectTab} />

      {/* Main Content Area */}
      <main className="flex-1 mx-auto w-full max-w-7xl px-3 sm:px-6 lg:px-8 transition-opacity duration-200 pb-20 sm:pb-12">
        {currentTab === 'main' && <MainPage onSelectTab={handleSelectTab} />}
        {currentTab === 'cpr' && <CprPage onSelectTab={handleSelectTab} />}
        {currentTab === 'grxabcde' && <GrxabcdePage onSelectTab={handleSelectTab} />}
        {currentTab === 'aed' && <AedPage onSelectTab={handleSelectTab} />}
        {currentTab === 'contacts' && <ContactsPage onSelectTab={handleSelectTab} />}
        {currentTab === 'about' && <AboutPage onSelectTab={handleSelectTab} />}
      </main>

      {/* Footer */}
      <Footer onSelectTab={handleSelectTab} />

      {/* Floating Emergency 1669 Action Pill for Mobile & Quick Access */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40">
        <a
          href="tel:1669"
          className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-brand-orange-600 px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-xl shadow-brand-orange-600/40 hover:bg-brand-orange-500 active:scale-95 transition-all ring-4 ring-white/90"
          title="โทรออกฉุกเฉิน 1669 ทันที"
        >
          <PhoneCall className="h-4 w-4 fill-white animate-bounce" />
          <span className="hidden xs:inline sm:inline">โทรฉุกเฉิน</span>
          <span className="font-black text-amber-200">1669</span>
        </a>
      </div>
    </div>
  );
};

export default App;
