import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Scan, Cpu, Receipt, Truck } from 'lucide-react';

export const ProductIntro: React.FC = () => {
  const { t } = useLanguage();

  const icons = [
    <Scan className="w-5 h-5 text-blue-700" key="scan" />,
    <Cpu className="w-5 h-5 text-blue-700" key="cpu" />,
    <Receipt className="w-5 h-5 text-blue-700" key="receipt" />,
    <Truck className="w-5 h-5 text-blue-700" key="truck" />,
  ];

  return (
    <section
      id="product"
      className="py-16 lg:py-24 bg-white border-y border-slate-200/80"
      style={{ backgroundColor: '#e3a6ff' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-700 mb-3">
            {t.productIntro.kicker}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-4 text-balance">
            {t.productIntro.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            {t.productIntro.subheading}
          </p>
        </div>

        {/* 4 Workflow Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {t.productIntro.pillars.map((pillar, idx) => (
            <div
              key={pillar.number}
              className="p-6 rounded-xl border border-slate-200/90 bg-[#FAFAFA] hover:bg-white hover:border-blue-200 hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-sm font-bold text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                    {pillar.number}
                  </span>
                  <div className="p-2 bg-blue-50/80 rounded-lg border border-blue-100">
                    {icons[idx]}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                  {pillar.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-medium text-blue-700">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>Standard Dental Workflow</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
