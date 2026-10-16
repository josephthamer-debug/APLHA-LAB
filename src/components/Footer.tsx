import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AlphaLogo } from './AlphaLogo';
import { Globe, Shield, Monitor, HardDrive, Phone, Mail, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, language, toggleLanguage, isRTL } = useLanguage();

  const currentYear = 2026;

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Description (Span 5) */}
          <div className="lg:col-span-5 space-y-4">
            <AlphaLogo size="md" variant="white" showSubtext={true} />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm pt-2">
              {t.footer.brandDesc}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                type="button"
                onClick={toggleLanguage}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer text-xs"
              >
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span>{language === 'ar' ? 'English Language' : 'اللغة العربية'}</span>
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">
              {t.footer.navigationTitle}
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#product')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.product}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#features')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.features}
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#screenshots')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.screenshots}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#why-alpha')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.whyAlpha}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.faq}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: System Environment & Direct Support (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">
              {t.footer.systemTitle}
            </h4>

            <div className="space-y-2.5 text-slate-400 text-xs">
              <div className="flex items-center gap-2">
                <Monitor className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{t.footer.systemWindows}</span>
              </div>
              <div className="flex items-center gap-2">
                <HardDrive className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{t.footer.systemLan}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{t.footer.systemBackups}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 space-y-1.5 text-slate-400 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                <a
                  href="tel:+9647718122018"
                  className="hover:text-white font-mono inline-block"
                  dir="ltr"
                >
                  +964 771 812 2018
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <a href="mailto:alphacosoft@gmail.com" className="hover:text-white font-mono">
                  alphacosoft@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip: Copyright & Disclaimers */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
          <p>© {currentYear} Alpha Lab Management System. {t.footer.copyright}</p>
          <div className="flex items-center gap-4">
            <span>{t.footer.legalNotice}</span>
            <span>·</span>
            <span className="text-slate-400">{t.footer.builtWith}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
