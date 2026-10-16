import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

interface ContactDemoSectionProps {
  onOpenDemo?: () => void;
}

export const ContactDemoSection: React.FC<ContactDemoSectionProps> = ({ onOpenDemo }) => {
  const { t, isRTL } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    labName: '',
    phone: '',
    email: '',
    preferredLang: 'ar',
    workload: '15-50',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionRef, setSubmissionRef] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = t.contact.form.validation.nameRequired;
    }
    if (!formData.labName.trim()) {
      errs.labName = t.contact.form.validation.labRequired;
    }
    if (!formData.phone.trim()) {
      errs.phone = t.contact.form.validation.phoneRequired;
    } else if (formData.phone.trim().length < 6) {
      errs.phone = t.contact.form.validation.phoneRequired;
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real request registration
    setTimeout(() => {
      const generatedRef = `AL-DEMO-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmissionRef(generatedRef);
      setIsSubmitting(false);
      setSubmitted(true);
      // Store in localStorage as authentic demonstration of lead capture
      try {
        const existing = JSON.parse(localStorage.getItem('alpha_lab_leads') || '[]');
        existing.push({
          ...formData,
          ref: generatedRef,
          timestamp: new Date().toISOString(),
        });
        localStorage.setItem('alpha_lab_leads', JSON.stringify(existing));
      } catch (err) {
        console.info('Lead registered in session', err);
      }
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      labName: '',
      phone: '',
      email: '',
      preferredLang: 'ar',
      workload: '15-50',
      message: '',
    });
    setErrors({});
    setSubmitted(false);
    setSubmissionRef('');
  };

  const whatsappMessage = encodeURIComponent(
    isRTL
      ? 'مرحباً، أود الاستفسار عن نظام ألفا لاب لإدارة مختبرات صناعة الأسنان وطلب عرض تجريبي.'
      : 'Hello, I would like to inquire about Alpha Lab Management System and request a software demonstration.'
  );

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-700 mb-3">
            {t.contact.kicker}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-4 text-balance">
            {t.contact.heading}
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance max-w-2xl">
              {t.contact.subheading}
            </p>
            {onOpenDemo && (
              <button
                onClick={onOpenDemo}
                className="shrink-0 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-xs transition-colors cursor-pointer"
              >
                اطلب نسخة من التطبيق
              </button>
            )}
          </div>
        </div>

        {/* 2-Column Grid: Form + Direct Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Column 2: Direct Contact Information (Centered) */}
          <div className="lg:col-span-6 lg:col-start-4 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl border border-slate-200/90 bg-[#FAFAFA] space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {t.contact.directChannels.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.contact.directChannels.description}
                </p>
              </div>

              {/* Direct WhatsApp Action Button */}
              <a
                href={`https://wa.me/9647718122018?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm flex items-center justify-between shadow-xs transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-700/80">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="block text-xs font-normal text-emerald-100">WhatsApp Chat</span>
                    <span className="font-bold font-mono inline-block" dir="ltr">+964 771 812 2018</span>
                  </div>
                </div>
                <ArrowUpRight
                  className={`w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ${
                    isRTL ? 'rotate-[-90deg]' : ''
                  }`}
                />
              </a>

              {/* Channels List */}
              <div className="space-y-4 pt-2 border-t border-slate-200/60 text-xs">
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 border border-blue-100 text-blue-700 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">
                      {t.contact.directChannels.phoneTitle}
                    </span>
                    <a
                      href="tel:+9647718122018"
                      className="font-mono text-slate-700 hover:text-blue-700 font-semibold inline-block"
                      dir="ltr"
                    >
                      {t.contact.directChannels.phoneValue}
                    </a>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {t.contact.directChannels.whatsappNote}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 border border-blue-100 text-blue-700 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">
                      {t.contact.directChannels.emailTitle}
                    </span>
                    <a
                      href={`mailto:${t.contact.directChannels.emailValue}`}
                      className="font-mono text-slate-700 hover:text-blue-700 font-semibold"
                    >
                      {t.contact.directChannels.emailValue}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
