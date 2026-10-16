import React, { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

interface ScreenshotGalleryProps {
  onOpenDemo: () => void;
}

export const ScreenshotGallery: React.FC<ScreenshotGalleryProps> = ({ onOpenDemo }) => {
  const { t, isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const galleryItems = t.gallery.items;

  const filteredItems = galleryItems.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const activeItem = lightboxIndex !== null ? galleryItems[lightboxIndex] : null;

  const handleNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryItems.length);
      setIsZoomed(false);
    }
  }, [lightboxIndex, galleryItems.length]);

  const handlePrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryItems.length) % galleryItems.length);
      setIsZoomed(false);
    }
  }, [lightboxIndex, galleryItems.length]);

  const handleClose = useCallback(() => {
    setLightboxIndex(null);
    setIsZoomed(false);
  }, []);

  // Keyboard navigation (Escape to close, Left/Right arrows)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'ArrowRight') {
        if (isRTL) handlePrev();
        else handleNext();
      } else if (e.key === 'ArrowLeft') {
        if (isRTL) handleNext();
        else handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handleNext, handlePrev, handleClose, isRTL]);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  return (
    <section
      id="screenshots"
      className="py-16 lg:py-24 border-b border-slate-200/80"
      style={{ backgroundColor: '#ffb653' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 lg:mb-14" style={{ color: '#ffffff' }}>
          <p
            className="text-xs font-semibold uppercase tracking-wider mb-3"
            style={{ color: '#ffffff' }}
          >
            {t.gallery.kicker}
          </p>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-balance"
            style={{ color: '#ffffff' }}
          >
            {t.gallery.heading}
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed text-balance"
            style={{ color: '#ffffff' }}
          >
            {t.gallery.subheading}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto mb-8 border border-slate-200/80 max-w-fit">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === 'all'
                ? 'bg-white text-blue-700 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.gallery.filterAll}
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('cases')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === 'cases'
                ? 'bg-white text-blue-700 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.gallery.filterCases}
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('finance')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === 'finance'
                ? 'bg-white text-blue-700 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.gallery.filterFinance}
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('technicians')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === 'technicians'
                ? 'bg-white text-blue-700 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.gallery.filterTech}
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('analytics')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === 'analytics'
                ? 'bg-white text-blue-700 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.gallery.filterAnalytics}
          </button>
        </div>

        {/* Gallery Grid: 6 Interfaces in exact specified order */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item) => {
            const originalIndex = galleryItems.findIndex((g) => g.id === item.id);
            return (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(originalIndex)}
                className="group rounded-xl border border-slate-200/90 bg-[#FAFAFA] overflow-hidden shadow-2xs hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col cursor-pointer"
              >
                {/* Frame Container for original screenshot */}
                <div className="relative aspect-16/10 bg-[#0B0F17] overflow-hidden border-b border-slate-200 flex items-center justify-center p-1">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain select-none transition-transform duration-300 group-hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />

                  {/* Hover Overlay with Enlarge Button */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-slate-900 text-xs font-semibold shadow-md">
                      <Maximize2 className="w-3.5 h-3.5 text-blue-700" />
                      <span>{t.gallery.openLightbox}</span>
                    </span>
                  </div>

                  {/* Top category tag */}
                  <div className="absolute top-2.5 start-2.5">
                    <span className="text-[10px] font-semibold text-white bg-slate-900/80 backdrop-blur-xs px-2 py-0.5 rounded border border-white/20">
                      {item.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Content description */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base mb-1.5 group-hover:text-blue-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span className="truncate max-w-[220px]">{item.details[0]}</span>
                    <span className="text-blue-700 shrink-0 font-semibold flex items-center gap-1">
                      <span>{isRTL ? 'معاينة' : 'View'}</span>
                      <Maximize2 className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* System Notice */}
        <div className="mt-8 p-3 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
            <span>{t.gallery.notice}</span>
          </div>
          <span className="font-mono text-[11px] text-slate-500 hidden sm:inline">
            6 Specialized Workstations
          </span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-4 right-4 z-60 p-2 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors cursor-pointer"
            aria-label={t.gallery.closeLightbox}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev button */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-60 p-2.5 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 transition-colors cursor-pointer hidden sm:flex items-center justify-center"
            aria-label={t.gallery.prevView}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-60 p-2.5 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 transition-colors cursor-pointer hidden sm:flex items-center justify-center"
            aria-label={t.gallery.nextView}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div className="max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
            {/* Top Bar */}
            <div className="px-5 py-3.5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-600 text-white">
                  {activeItem.categoryLabel}
                </span>
                <h3 className="font-bold text-sm sm:text-base text-white">{activeItem.title}</h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1 cursor-pointer transition-colors"
                >
                  {isZoomed ? <ZoomOut className="w-3.5 h-3.5" /> : <ZoomIn className="w-3.5 h-3.5" />}
                  <span>{isZoomed ? t.gallery.zoomOut : t.gallery.zoomIn}</span>
                </button>
              </div>
            </div>

            {/* Main Interactive Screen Showcase: Original Uncropped Image */}
            <div className="flex-1 bg-slate-950 p-3 sm:p-5 overflow-auto flex items-center justify-center min-h-[320px]">
              <div
                className={`w-full max-w-4xl rounded-xl border border-slate-800 shadow-xl overflow-hidden transition-all duration-200 bg-[#0B0F17] flex items-center justify-center ${
                  isZoomed ? 'scale-110 sm:scale-125 my-8' : 'scale-100'
                }`}
              >
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-auto max-h-[68vh] object-contain select-none"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Bottom Details Drawer */}
            <div className="p-5 bg-white border-t border-slate-200">
              <p className="text-sm text-slate-700 mb-3">{activeItem.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-3 border-t border-slate-100 text-xs text-slate-600 mb-4">
                {activeItem.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                <span className="text-slate-400 font-mono text-[11px]">
                  {isRTL ? `واجهة ${lightboxIndex + 1} من ${galleryItems.length}` : `View ${lightboxIndex + 1} of ${galleryItems.length}`}
                </span>

                <button
                  type="button"
                  onClick={() => {
                    handleClose();
                    onOpenDemo();
                  }}
                  className="px-4 py-1.5 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors cursor-pointer"
                >
                  {isRTL ? 'طلب عرض تجريبي' : 'Request Demo'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

