import React, { useState } from 'react';
import { LegalModals } from './LegalModals.tsx';
import { BrandStar } from './BrandStar.tsx';

export const Footer: React.FC = () => {
  const [legalModalType, setLegalModalType] = useState<'disclaimer' | 'terms' | null>(null);

  return (
    <>
      <footer className="border-t border-[#592828]/15 dark:border-[#B0A7E7]/15 bg-[#E2DAC8] dark:bg-[#0E0A14] py-12 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center space-y-4">
          
          {/* Subtle brand mark */}
          <div className="flex items-center gap-2 text-sm font-semibold tracking-tight text-[#592828] dark:text-[#EAE3D3]">
            <BrandStar size={16} className="text-[#544799] dark:text-[#B0A7E7]" />
            <span className="font-heading font-bold">theopenmind.club</span>
          </div>

          {/* EXACT LEGAL & COPYRIGHT REQUIRED BY SECTION 7 */}
          <p className="text-xs sm:text-sm text-[#592828]/80 dark:text-[#EAE3D3]/75 tracking-wide font-normal">
            © Copyright 2026 theopenmind.club |{' '}
            <button
              onClick={() => setLegalModalType('disclaimer')}
              className="hover:text-[#544799] dark:hover:text-[#B0A7E7] underline underline-offset-4 transition-colors cursor-pointer"
            >
              Disclaimer
            </button>
            {' '}|{' '}
            <button
              onClick={() => setLegalModalType('terms')}
              className="hover:text-[#544799] dark:hover:text-[#B0A7E7] underline underline-offset-4 transition-colors cursor-pointer"
            >
              Όροι χρήσης & πολιτική απορρήτου
            </button>
          </p>
        </div>
      </footer>

      {/* Interactive Modal */}
      <LegalModals
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </>
  );
};
