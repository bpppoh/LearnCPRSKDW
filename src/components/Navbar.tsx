import React, { useState } from 'react';
import { HeartPulse, PhoneCall, Menu, X, ShieldAlert, Sparkles, Activity, Users } from 'lucide-react';
import type { PageTab } from '../types';

interface NavbarProps {
  currentTab: PageTab;
  onSelectTab: (tab: PageTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onSelectTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageTab; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'main', label: 'หน้าแรก', icon: Sparkles },
    { id: 'cpr', label: 'การทำ CPR', icon: HeartPulse },
    { id: 'grxabcde', label: 'การประเมิน GRXABCDE', icon: Activity },
    { id: 'aed', label: 'เครื่อง AED', icon: ShieldAlert },
    { id: 'contacts', label: 'เบอร์โทรฉุกเฉิน', icon: PhoneCall },
    { id: 'about', label: 'เกี่ยวกับผู้จัดทำ', icon: Users },
  ];

  const handleTabClick = (tab: PageTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md transition-all shadow-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8 min-h-[4rem] sm:min-h-[4.75rem] py-2 sm:py-3">
        {/* Brand Logo & School Header */}
        <div
          onClick={() => handleTabClick('main')}
          className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group min-w-0"
        >
          <div className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-tr from-brand-orange-600 to-brand-orange-500 text-white shadow-md shadow-brand-orange-500/20 group-hover:scale-105 transition-transform">
            <HeartPulse className="h-5 w-5 sm:h-6 sm:w-6 animate-pulse" />
          </div>
          <div className="min-w-0 truncate">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-sm sm:text-lg font-black text-slate-900 tracking-tight truncate">
                LearnCPRSKDW
              </span>
            </div>
            <p className="hidden xs:block text-[10px] sm:text-[11px] text-slate-500 font-medium truncate">
              โรงเรียนสุคนธีรวิทย์
            </p>
          </div>
        </div>

        {/* Desktop Navigation Tabs (Pill Switcher) */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-slate-200 bg-slate-100/70 p-1 text-xs font-semibold">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`flex items-center gap-1.5 rounded-full px-3.5 py-2 transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-brand-orange-600 shadow-sm font-bold ring-1 ring-slate-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? 'text-brand-orange-600' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Quick 1669 Dial Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:1669"
            className="inline-flex items-center gap-2 rounded-2xl bg-brand-orange-600 px-4 py-2 text-xs font-bold text-white shadow-md shadow-brand-orange-500/20 transition-all hover:bg-brand-orange-500 active:scale-95 ring-2 ring-brand-orange-300/50"
          >
            <PhoneCall className="h-3.5 w-3.5 fill-white" />
            <span>โทรด่วน 1669</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href="tel:1669"
            className="flex items-center gap-1 rounded-xl bg-brand-orange-600 px-3 py-1.5 text-xs font-bold text-white"
          >
            <PhoneCall className="h-3.5 w-3.5" />
            <span>1669</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-xl border border-slate-200 bg-white p-2 text-slate-700 hover:bg-slate-50"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-5 space-y-1 shadow-xl">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-brand-orange-50 text-brand-orange-700 font-bold border border-brand-orange-200'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Icon className={`h-5 w-5 ${isActive ? 'text-brand-orange-600' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
