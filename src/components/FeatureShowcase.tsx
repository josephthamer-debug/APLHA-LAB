import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  FileText,
  Users,
  Wallet,
  Receipt,
  FileSpreadsheet,
  Percent,
  Wrench,
  BarChart3,
  Truck,
  Network,
  Layers,
  ShieldCheck,
} from 'lucide-react';

export const FeatureShowcase: React.FC = () => {
  const { t } = useLanguage();

  const getFeatureIcon = (id: string) => {
    switch (id) {
      case 'cases':
        return <FileText className="w-5 h-5 text-blue-700" />;
      case 'clients':
        return <Users className="w-5 h-5 text-blue-700" />;
      case 'financial':
        return <Wallet className="w-5 h-5 text-blue-700" />;
      case 'payments':
        return <Receipt className="w-5 h-5 text-blue-700" />;
      case 'statements':
        return <FileSpreadsheet className="w-5 h-5 text-blue-700" />;
      case 'discounts':
        return <Percent className="w-5 h-5 text-blue-700" />;
      case 'technicians':
        return <Wrench className="w-5 h-5 text-blue-700" />;
      case 'reports':
        return <BarChart3 className="w-5 h-5 text-blue-700" />;
      case 'representatives':
        return <Truck className="w-5 h-5 text-blue-700" />;
      case 'network':
        return <Network className="w-5 h-5 text-blue-700" />;
      default:
        return <Layers className="w-5 h-5 text-blue-700" />;
    }
  };

  const [, , feature2, feature3, feature4, feature5, feature6, feature7, feature8] =
    t.features.items;

  return (
    <section
      id="features"
      className="py-16 lg:py-24"
      style={{ backgroundColor: '#a6ffc9' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-700 mb-3">
            {t.features.kicker}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-4 text-balance">
            {t.features.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            {t.features.subheading}
          </p>
        </div>

        {/* Bento Grid of Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 3: Financial Accounts */}
          <div className="rounded-xl border border-slate-200/90 bg-white p-6 shadow-xs flex flex-col justify-between hover:border-blue-200 transition-all">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-100">
                  {getFeatureIcon(feature2.id)}
                </div>
                <span className="text-[11px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                  03 / 10
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{feature2.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{feature2.desc}</p>
            </div>

            {/* Visual snippet: balance preview */}
            <div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200/70 text-xs mb-3">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-slate-500">Receivables Ledger</span>
                  <span className="font-bold text-slate-900 tabular-nums">$38,240.00</span>
                </div>
                <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-600 h-full w-[78%]" />
                </div>
              </div>
              <div className="pt-2 border-t border-slate-100 text-xs text-blue-700 font-medium">
                {feature2.highlight}
              </div>
            </div>
          </div>

          {/* Feature 4: Payments and Collections */}
          <div className="rounded-xl border border-slate-200/90 bg-white p-6 shadow-xs flex flex-col justify-between hover:border-blue-200 transition-all">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-100">
                  {getFeatureIcon(feature3.id)}
                </div>
                <span className="text-[11px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                  04 / 10
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{feature3.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{feature3.desc}</p>
            </div>

            {/* Visual snippet: receipt voucher */}
            <div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200/70 text-xs mb-3 font-mono">
                <div className="flex items-center justify-between text-[11px] text-slate-600 mb-1">
                  <span>RCT-2026-1082</span>
                  <span className="text-emerald-700 font-bold">$1,200.00</span>
                </div>
                <p className="text-[10px] text-slate-500 truncate">Bank Transfer · Elite Smile Clinic</p>
              </div>
              <div className="pt-2 border-t border-slate-100 text-xs text-blue-700 font-medium">
                {feature3.highlight}
              </div>
            </div>
          </div>

          {/* Feature 5: Invoices and Account Statements */}
          <div className="rounded-xl border border-slate-200/90 bg-white p-6 shadow-xs flex flex-col justify-between hover:border-blue-200 transition-all">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-100">
                  {getFeatureIcon(feature4.id)}
                </div>
                <span className="text-[11px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                  05 / 10
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{feature4.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{feature4.desc}</p>
            </div>

            {/* Visual snippet: statement breakdown */}
            <div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200/70 text-xs mb-3">
                <div className="flex items-center justify-between text-[11px] text-slate-700 mb-1">
                  <span>Monthly Statement PDF</span>
                  <span className="text-blue-700 font-semibold">Print / Export</span>
                </div>
                <p className="text-[10px] text-slate-500">Itemized tooth restoration breakdown</p>
              </div>
              <div className="pt-2 border-t border-slate-100 text-xs text-blue-700 font-medium">
                {feature4.highlight}
              </div>
            </div>
          </div>

          {/* Feature 6: Discounts and Deductions */}
          <div className="rounded-xl border border-slate-200/90 bg-white p-6 shadow-xs flex flex-col justify-between hover:border-blue-200 transition-all">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-100">
                  {getFeatureIcon(feature5.id)}
                </div>
                <span className="text-[11px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                  06 / 10
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{feature5.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{feature5.desc}</p>
            </div>

            <div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200/70 text-xs mb-3">
                <div className="flex items-center justify-between text-[11px] text-slate-700">
                  <span>Remake Adjustment Auth</span>
                  <span className="font-semibold text-slate-900">Admin Approved</span>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-100 text-xs text-blue-700 font-medium">
                {feature5.highlight}
              </div>
            </div>
          </div>

          {/* Feature 7: Technician Management */}
          <div className="rounded-xl border border-slate-200/90 bg-white p-6 shadow-xs flex flex-col justify-between hover:border-blue-200 transition-all">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-100">
                  {getFeatureIcon(feature6.id)}
                </div>
                <span className="text-[11px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                  07 / 10
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{feature6.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{feature6.desc}</p>
            </div>

            <div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200/70 text-xs mb-3">
                <div className="flex items-center justify-between text-[11px] mb-1">
                  <span className="text-slate-600">Ceramicist Commission</span>
                  <span className="font-bold text-emerald-700 tabular-nums">$1,480 / mo</span>
                </div>
                <p className="text-[10px] text-slate-500">124 units completed · 98% on-time</p>
              </div>
              <div className="pt-2 border-t border-slate-100 text-xs text-blue-700 font-medium">
                {feature6.highlight}
              </div>
            </div>
          </div>

          {/* Feature 8: Reports and Analytics */}
          <div className="rounded-xl border border-slate-200/90 bg-white p-6 shadow-xs flex flex-col justify-between hover:border-blue-200 transition-all">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-100">
                  {getFeatureIcon(feature7.id)}
                </div>
                <span className="text-[11px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                  08 / 10
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{feature7.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{feature7.desc}</p>
            </div>

            <div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200/70 text-xs mb-3">
                <div className="flex items-center justify-between text-[11px] text-slate-600 mb-1">
                  <span>Top Restoration Material</span>
                  <span className="font-semibold text-slate-900">Zirconia (64%)</span>
                </div>
                <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-blue-600 h-full w-[64%]" />
                </div>
              </div>
              <div className="pt-2 border-t border-slate-100 text-xs text-blue-700 font-medium">
                {feature7.highlight}
              </div>
            </div>
          </div>

          {/* Feature 9: Sales Representatives & Couriers */}
          <div className="rounded-xl border border-slate-200/90 bg-white p-6 shadow-xs flex flex-col justify-between hover:border-blue-200 transition-all">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-100">
                  {getFeatureIcon(feature8.id)}
                </div>
                <span className="text-[11px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                  09 / 10
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{feature8.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{feature8.desc}</p>
            </div>

            <div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200/70 text-xs mb-3">
                <div className="flex items-center justify-between text-[11px] text-slate-600">
                  <span>Courier Route Status</span>
                  <span className="text-emerald-700 font-medium">12 Drops Active</span>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-100 text-xs text-blue-700 font-medium">
                {feature8.highlight}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
