import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  FolderKanban,
  FileSpreadsheet,
  SearchCheck,
  ReceiptText,
  Printer,
  TrendingUp,
} from 'lucide-react';

export const WhyAlphaLab: React.FC = () => {
  const { t } = useLanguage();

  const benefitIcons = [
    <FolderKanban className="w-5 h-5 text-blue-700" key="folder" />,
    <FileSpreadsheet className="w-5 h-5 text-blue-700" key="sheet" />,
    <SearchCheck className="w-5 h-5 text-blue-700" key="search" />,
    <ReceiptText className="w-5 h-5 text-blue-700" key="receipt" />,
    <Printer className="w-5 h-5 text-blue-700" key="printer" />,
    <TrendingUp className="w-5 h-5 text-blue-700" key="trending" />,
  ];

  return (
    <section
      id="why-alpha"
      className="py-16 lg:py-24"
      style={{ backgroundColor: '#bca6ff' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-700 mb-3">
            {t.whyAlpha.kicker}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-4 text-balance">
            {t.whyAlpha.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            {t.whyAlpha.subheading}
          </p>
        </div>

        {/* 6 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.whyAlpha.benefits.map((benefit, index) => (
            <div
              key={benefit.number}
              className="p-6 sm:p-7 rounded-xl border border-slate-200/90 bg-white shadow-2xs hover:border-blue-200 hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-100">
                    {benefitIcons[index]}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                    {benefit.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                  {benefit.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-blue-700 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>Verified Practical Benefit</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
