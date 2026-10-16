import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  const { t, isRTL } = useLanguage();

  return (
    <section
      id="home"
      className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden"
      style={{ backgroundColor: '#a6bdff' }}
    >
      {/* Background Subtle Geometric Grid Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#1E40AF_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top Text Content */}
        <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-14">
          {/* Subtle Category Kicker */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 mb-4 bg-blue-50/80 px-3 py-1 rounded-full border border-blue-100/60">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>{t.hero.badge}</span>
          </div>

          {/* Main Headline */}
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.18] mb-5 text-balance"
          >
            {t.hero.headline}
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8 text-balance">
            {t.hero.subheadline}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={onOpenDemo}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 active:scale-[0.99]"
            >
              <span>{t.hero.primaryCta}</span>
              <ArrowUpRight
                className={`w-4 h-4 transition-transform ${isRTL ? 'rotate-[-90deg]' : ''}`}
              />
            </button>

            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg shadow-2xs hover:border-slate-400 transition-all cursor-pointer"
            >
              <span>{t.hero.secondaryCta}</span>
            </a>
          </div>
        </div>

        {/* Product Showcase Window: Original Supplied Image a1 */}
        <div className="relative mx-auto max-w-6xl rounded-2xl border border-slate-800/80 bg-slate-950 shadow-2xl overflow-hidden transition-all">
          {/* Window Chrome / Title Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 text-slate-200 border-b border-slate-800 text-xs">
            {/* Window control buttons */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#EF4444]/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#10B981]/80 inline-block" />
              <span className="ml-2 font-mono text-[11px] text-slate-400 hidden sm:inline">
                Alpha Lab Management System · Main Console
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] text-blue-300 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/60 font-medium">
              <span>{isRTL ? 'الواجهة الرئيسية للنظام' : 'Main System Interface'}</span>
            </div>
          </div>

          {/* Original Uncropped Image a1 */}
          <div className="w-full bg-[#0B0F17] flex items-center justify-center p-0">
            <img
              src="/images/a1.png"
              alt={
                isRTL
                  ? 'واجهة نظام ألفا لاب الرئيسية لإدارة مختبر صناعة الأسنان'
                  : 'Alpha Lab Management System Main Interface'
              }
              className="w-full h-auto object-contain block select-none"
              referrerPolicy="no-referrer"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

