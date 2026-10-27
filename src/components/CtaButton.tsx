import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CtaButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
  targetUrl?: string;
  size?: 'default' | 'large';
  external?: boolean;
}

export const CTA_TARGET_URL = 'https://www.theopenmind.club/subscribe';

export const CtaButton: React.FC<CtaButtonProps> = ({
  label = 'ΕΓΓΡΑΦΗ & ΛΗΨΗ',
  onClick,
  className = '',
  targetUrl = CTA_TARGET_URL,
  size = 'default',
  external = true
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If a custom onClick is provided and user didn't want standard navigation, execute it
    if (onClick) {
      onClick();
    }
  };

  const baseStyles =
    'group relative inline-flex items-center justify-center font-heading font-bold uppercase tracking-wider rounded-xl overflow-hidden transition-all duration-300 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B0A7E7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EAE3D3] dark:focus-visible:ring-offset-[#15101B] whitespace-nowrap shrink-0 active:scale-[0.98] cursor-pointer';

  const sizeStyles =
    size === 'large'
      ? 'px-7 py-3.5 text-sm md:text-base shadow-[0_4px_20px_rgba(84,71,153,0.35)] hover:shadow-[0_6px_28px_rgba(84,71,153,0.5)]'
      : 'px-5 py-2.5 text-xs md:text-sm shadow-[0_2px_12px_rgba(84,71,153,0.25)] hover:shadow-[0_4px_18px_rgba(84,71,153,0.4)]';

  return (
    <a
      href={targetUrl}
      onClick={handleClick}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`${baseStyles} ${sizeStyles} bg-[#544799] hover:bg-[#473b85] text-[#EAE3D3] border border-[#B0A7E7]/30 ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        <span>{label}</span>
        <ArrowRight className="w-4 h-4 text-[#B0A7E7] transition-transform duration-300 group-hover:translate-x-1" />
      </span>
      {/* Subtle shine highlight */}
      <span
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-[#B0A7E7]/25 to-transparent"
        aria-hidden="true"
      />
    </a>
  );
};
