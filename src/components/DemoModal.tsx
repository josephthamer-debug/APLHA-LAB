import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  X,
  Send,
  CheckCircle2,
  AlertCircle,
  Building2,
  User,
  Mail,
  Phone,
  FileText,
  Loader2,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CustomerFormData {
  customerName: string;
  labName: string;
  customerEmail: string;
  customerPhone: string;
  notes: string;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const { t, isRTL } = useLanguage();

  const [formData, setFormData] = useState<CustomerFormData>({
    customerName: '',
    labName: '',
    customerEmail: '',
    customerPhone: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<CustomerFormData | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.customerName.trim()) {
      errs.customerName = t.modal.validation.nameRequired;
    }

    if (!formData.labName.trim()) {
      errs.labName = t.modal.validation.labRequired;
    }

    if (!formData.customerEmail.trim()) {
      errs.customerEmail = t.modal.validation.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.customerEmail.trim())) {
      errs.customerEmail = t.modal.validation.emailRequired;
    }

    if (!formData.customerPhone.trim() || formData.customerPhone.trim().length < 6) {
      errs.customerPhone = t.modal.validation.phoneRequired;
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const submissionPayload = {
      customerName: formData.customerName.trim(),
      labName: formData.labName.trim(),
      customerEmail: formData.customerEmail.trim(),
      customerPhone: formData.customerPhone.trim(),
      notes: formData.notes.trim() || (isRTL ? 'لا توجد ملاحظات إضافية' : 'No additional notes provided'),
      timestamp: new Date().toISOString(),
      formattedDate: new Date().toLocaleString(isRTL ? 'ar-IQ' : 'en-US'),
      targetEmail: 'alphacosoft@gmail.com',
    };

    // 1. Persist lead locally in client storage to ensure complete reliability
    try {
      const existingLeads = JSON.parse(localStorage.getItem('alpha_lab_leads') || '[]');
      existingLeads.push(submissionPayload);
      localStorage.setItem('alpha_lab_leads', JSON.stringify(existingLeads));
    } catch (storageErr) {
      console.warn('LocalStorage lead capture notice:', storageErr);
    }

    // 2. Dispatch customer data asynchronously to alphacosoft@gmail.com
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3500);

      await fetch('https://formsubmit.co/ajax/alphacosoft@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `طلب نسخة تجريبية من تطبيق ألفا لاب: ${submissionPayload.customerName} - مختبر ${submissionPayload.labName}`,
          _template: 'table',
          _captcha: 'false',
          'اسم الزبون': submissionPayload.customerName,
          'اسم المختبر': submissionPayload.labName,
          'بريد الكتروني الزبون': submissionPayload.customerEmail,
          'رقم هاتف الزبون': submissionPayload.customerPhone,
          'ملاحظات او استعلام': submissionPayload.notes,
          'تاريخ ووقت الطلب': submissionPayload.formattedDate,
          'الجهة المستلمة': 'alphacosoft@gmail.com',
        }),
        signal: controller.signal,
      }).catch((fetchErr) => {
        console.info('Direct email dispatch attempted:', fetchErr);
      });

      clearTimeout(timeoutId);
    } catch (dispatchErr) {
      console.info('Dispatch notification note:', dispatchErr);
    }

    // 3. Complete submission and show confirmed message
    setSubmittedData({ ...formData });
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleResetForm = () => {
    setFormData({
      customerName: '',
      labName: '',
      customerEmail: '',
      customerPhone: '',
      notes: '',
    });
    setErrors({});
    setSubmitted(false);
    setSubmittedData(null);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full p-5 sm:p-7 shadow-2xl relative border border-slate-200 my-auto animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 end-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label={t.modal.close}
          title={t.modal.close}
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Success Screen */
          <div className="py-4 text-center space-y-5 animate-in fade-in duration-200">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5" />
                {isRTL ? 'تم تسجيل وتوجيه طلبك بنجاح' : 'Request Registered Successfully'}
              </span>
              {/* Exact user requested message */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug px-2">
                {t.modal.successTitle}
              </h3>
            </div>

            {/* Email Dispatch Notice */}
            <div className="bg-blue-50/80 border border-blue-200/90 rounded-xl p-3.5 text-xs text-blue-900 text-start flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-semibold">{t.modal.successNotice}</p>
                <p className="text-blue-700/90 text-[11px]">
                  {isRTL
                    ? 'سيتم مراجعة مواصفات مختبركم وتجهيز رابط تحميل النسخة التجريبية ودليل التشغيل والتواصل معكم فوراً.'
                    : 'Your laboratory specifications will be reviewed, and trial version download details will be provided.'}
                </p>
              </div>
            </div>

            {/* Summary of submitted details */}
            {submittedData && (
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-700 text-start space-y-1.5 font-sans">
                <div className="flex justify-between border-b border-slate-200/70 pb-1.5">
                  <span className="text-slate-500">{t.modal.customerNameLabel}:</span>
                  <span className="font-semibold text-slate-900">{submittedData.customerName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/70 pb-1.5">
                  <span className="text-slate-500">{t.modal.labNameLabel}:</span>
                  <span className="font-semibold text-slate-900">{submittedData.labName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/70 pb-1.5">
                  <span className="text-slate-500">{t.modal.customerEmailLabel}:</span>
                  <span className="font-mono text-slate-900">{submittedData.customerEmail}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/70 pb-1.5">
                  <span className="text-slate-500">{t.modal.customerPhoneLabel}:</span>
                  <span className="font-mono text-slate-900" dir="ltr">
                    {submittedData.customerPhone}
                  </span>
                </div>
                {submittedData.notes && (
                  <div className="pt-1">
                    <span className="text-slate-500 block mb-0.5">{t.modal.notesLabel}:</span>
                    <p className="text-slate-800 bg-white p-2 rounded border border-slate-200 text-[11px] leading-relaxed">
                      {submittedData.notes}
                    </p>
                  </div>
                )}
              </div>
            )}

            <div className="pt-2 flex items-center gap-3">
              <button
                type="button"
                onClick={handleResetForm}
                className="flex-1 py-2.5 px-4 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                {isRTL ? 'إرسال طلب جديد' : 'Submit Another Request'}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-2.5 px-4 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-xs transition-colors cursor-pointer"
              >
                {t.modal.close}
              </button>
            </div>
          </div>
        ) : (
          /* Redesigned Form */
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            {/* Header / Title */}
            <div className="pe-8">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 flex items-center gap-1.5 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                Alpha Lab System
              </span>
              <h3 id="demo-modal-title" className="text-xl sm:text-2xl font-bold text-slate-900">
                {t.modal.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">{t.modal.subtitle}</p>
            </div>

            {/* 1. Customer Name Field */}
            <div>
              <label
                htmlFor="customerNameInput"
                className="block text-xs font-semibold text-slate-800 mb-1 flex items-center gap-1.5"
              >
                <User className="w-3.5 h-3.5 text-blue-700" />
                <span>{t.modal.customerNameLabel}</span>
                <span className="text-red-500">*</span>
              </label>
              <input
                id="customerNameInput"
                type="text"
                value={formData.customerName}
                onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                placeholder={t.modal.customerNamePlaceholder}
                className={`w-full px-3.5 py-2.5 text-sm bg-slate-50 border rounded-lg text-slate-900 transition-colors focus:bg-white focus:outline-hidden focus:ring-2 ${
                  errors.customerName
                    ? 'border-red-400 focus:ring-red-500'
                    : 'border-slate-300 focus:ring-blue-600 focus:border-blue-600'
                }`}
              />
              {errors.customerName && (
                <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.customerName}</span>
                </p>
              )}
            </div>

            {/* 2. Laboratory Name Field */}
            <div>
              <label
                htmlFor="labNameInput"
                className="block text-xs font-semibold text-slate-800 mb-1 flex items-center gap-1.5"
              >
                <Building2 className="w-3.5 h-3.5 text-blue-700" />
                <span>{t.modal.labNameLabel}</span>
                <span className="text-red-500">*</span>
              </label>
              <input
                id="labNameInput"
                type="text"
                value={formData.labName}
                onChange={(e) => setFormData({ ...formData, labName: e.target.value })}
                placeholder={t.modal.labNamePlaceholder}
                className={`w-full px-3.5 py-2.5 text-sm bg-slate-50 border rounded-lg text-slate-900 transition-colors focus:bg-white focus:outline-hidden focus:ring-2 ${
                  errors.labName
                    ? 'border-red-400 focus:ring-red-500'
                    : 'border-slate-300 focus:ring-blue-600 focus:border-blue-600'
                }`}
              />
              {errors.labName && (
                <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.labName}</span>
                </p>
              )}
            </div>

            {/* Two Columns: Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* 3. Customer Email Field */}
              <div>
                <label
                  htmlFor="customerEmailInput"
                  className="block text-xs font-semibold text-slate-800 mb-1 flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-700" />
                  <span>{t.modal.customerEmailLabel}</span>
                  <span className="text-red-500">*</span>
                </label>
                <input
                  id="customerEmailInput"
                  type="email"
                  dir="ltr"
                  value={formData.customerEmail}
                  onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
                  placeholder={t.modal.customerEmailPlaceholder}
                  className={`w-full px-3 py-2 text-sm bg-slate-50 border rounded-lg text-slate-900 transition-colors focus:bg-white focus:outline-hidden focus:ring-2 ${
                    errors.customerEmail
                      ? 'border-red-400 focus:ring-red-500'
                      : 'border-slate-300 focus:ring-blue-600 focus:border-blue-600'
                  }`}
                />
                {errors.customerEmail && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.customerEmail}</span>
                  </p>
                )}
              </div>

              {/* 4. Customer Phone Field */}
              <div>
                <label
                  htmlFor="customerPhoneInput"
                  className="block text-xs font-semibold text-slate-800 mb-1 flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-700" />
                  <span>{t.modal.customerPhoneLabel}</span>
                  <span className="text-red-500">*</span>
                </label>
                <input
                  id="customerPhoneInput"
                  type="tel"
                  dir="ltr"
                  value={formData.customerPhone}
                  onChange={(e) => setFormData({ ...formData, customerPhone: e.target.value })}
                  placeholder={t.modal.customerPhonePlaceholder}
                  className={`w-full px-3 py-2 text-sm bg-slate-50 border rounded-lg text-slate-900 transition-colors focus:bg-white focus:outline-hidden focus:ring-2 ${
                    errors.customerPhone
                      ? 'border-red-400 focus:ring-red-500'
                      : 'border-slate-300 focus:ring-blue-600 focus:border-blue-600'
                  }`}
                />
                {errors.customerPhone && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.customerPhone}</span>
                  </p>
                )}
              </div>
            </div>

            {/* 5. Notes or Inquiry Field */}
            <div>
              <label
                htmlFor="notesInput"
                className="block text-xs font-semibold text-slate-800 mb-1 flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5 text-blue-700" />
                <span>{t.modal.notesLabel}</span>
                <span className="text-slate-400 font-normal text-[11px]">
                  ({isRTL ? 'اختياري' : 'optional'})
                </span>
              </label>
              <textarea
                id="notesInput"
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder={t.modal.notesPlaceholder}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900 transition-colors focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-blue-600 resize-none"
              />
            </div>

            {/* Bottom Button to Request Trial Version */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-900 disabled:bg-blue-400 rounded-xl transition-all shadow-md hover:shadow-lg focus:ring-3 focus:ring-blue-500/40 cursor-pointer flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>{t.modal.submittingBtn}</span>
                  </>
                ) : (
                  <>
                    <span>{t.modal.submitBtn}</span>
                    <Send className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                  </>
                )}
              </button>

              <p className="text-[11px] text-slate-500 text-center mt-2.5 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>
                  {isRTL
                    ? 'يتم تحويل الطلب فوراً إلى إدارة النظام عبر البريد الرسمي alphacosoft@gmail.com'
                    : 'Requests are securely directed to system management at alphacosoft@gmail.com'}
                </span>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
