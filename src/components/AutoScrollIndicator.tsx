import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const AutoScrollIndicator: React.FC = () => {
  const { isRTL } = useLanguage();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const progress = (window.scrollY / scrollHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }

      setIsScrolling(true);
      document.documentElement.classList.add('is-scrolling');

      clearTimeout(hideTimer);
      hideTimer = setTimeout(() => {
        setIsScrolling(false);
        document.documentElement.classList.remove('is-scrolling');
      }, 900);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(hideTimer);
      document.documentElement.classList.remove('is-scrolling');
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`fixed top-1 bottom-1 ${
        isRTL ? 'left-1' : 'right-1'
      } w-1.5 z-50 pointer-events-none transition-opacity duration-300 ease-out ${
        isScrolling ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="relative w-full h-full">
        <div
          className="absolute w-full bg-slate-500/80 rounded-full shadow-sm transition-all duration-75"
          style={{
            height: '44px',
            top: `calc(${scrollProgress}% - ${(scrollProgress / 100) * 44}px)`,
          }}
        />
      </div>
    </div>
  );
};
