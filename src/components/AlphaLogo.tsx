import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface AlphaLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtext?: boolean;
  className?: string;
  variant?: 'default' | 'white';
}

export const AlphaLogo: React.FC<AlphaLogoProps> = ({
  size = 'md',
  showSubtext = false,
  className = '',
  variant = 'default',
}) => {
  const { isRTL } = useLanguage();

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  const subtextSizes = {
    sm: 'text-[10px]',
    md: 'text-xs',
    lg: 'text-sm',
  };

  const isWhite = variant === 'white';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Alpha Lab Logo - Image aa */}
      <div className={`${iconSizes[size]} shrink-0 flex items-center justify-center`}>
        <img
          src="/images/aa.png"
          alt={isRTL ? 'شعار ألفا لاب' : 'Alpha Lab Logo'}
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
          loading="eager"
        />
      </div>

      {/* Brand Name & Typography */}
      <div className="flex flex-col leading-tight">
        <div className="flex items-baseline gap-1.5">
          <span
            className={`font-bold tracking-tight ${textSizes[size]} ${
              isWhite ? 'text-white' : 'text-slate-900'
            }`}
          >
            {isRTL ? 'ألفا لاب' : 'ALPHA LAB'}
          </span>
          <span className="text-[10px] font-semibold tracking-wider uppercase text-blue-600 px-1 py-0.2 bg-blue-50 rounded border border-blue-100">
            {isRTL ? 'نظام الإدارة' : 'SYSTEM'}
          </span>
        </div>

        {showSubtext && (
          <span
            className={`font-medium ${subtextSizes[size]} ${
              isWhite ? 'text-slate-300' : 'text-slate-500'
            } truncate`}
          >
            {isRTL
              ? 'نظام إدارة مختبرات صناعة الأسنان'
              : 'Dental Laboratory Management System'}
          </span>
        )}
      </div>
    </div>
  );
};
