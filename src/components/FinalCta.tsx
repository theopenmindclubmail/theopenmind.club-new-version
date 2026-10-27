import React from 'react';
import { CtaButton } from './CtaButton.tsx';
import { BrandStar } from './BrandStar.tsx';
import { ShieldCheck, Check } from 'lucide-react';

interface FinalCtaProps {
  onOpenSubscribe?: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenSubscribe }) => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden border-t border-[#592828]/15 dark:border-[#B0A7E7]/15 bg-[#EAE3D3] dark:bg-[#120D18] transition-colors">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-[#B0A7E7]/25 via-[#544799]/15 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Brand Star Mark */}
        <div className="inline-flex p-3 rounded-2xl bg-white/60 dark:bg-white/5 border border-[#592828]/20 dark:border-[#B0A7E7]/20 text-[#544799] dark:text-[#B0A7E7] mb-8 backdrop-blur-md shadow-xs">
          <BrandStar size={28} className="text-[#592828] dark:text-[#B0A7E7]" />
        </div>

        {/* Hook - Exact Copy */}
        <p className="text-base sm:text-xl font-bold text-[#544799] dark:text-[#B0A7E7] tracking-wide uppercase font-heading mb-4">
          «Το μέλλον ανήκει σε αυτούς που σκέφτονται ανοιχτά και κινούνται γρήγορα.»
        </p>

        {/* Main Header - Roboto Condensed */}
        <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#592828] dark:text-[#EAE3D3] tracking-tight leading-tight mb-6 [text-wrap:balance]">
          Μπες στο επόμενο κύμα ψηφιακής δημιουργίας.
        </h2>

        {/* Copy - Exact Copy */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#592828]/85 dark:text-[#EAE3D3]/85 leading-relaxed font-normal mb-10 [text-wrap:balance]">
          Κάθε εβδομάδα στέλνουμε μόνο ένα email. Χωρίς φλυαρίες, χωρίς generic συμβουλές. Μόνο καθαρά συστήματα, mindset shifts και τεχνολογικά εργαλεία για να χτίσεις τη δική σου ελευθερία. Μπες σήμερα στην κοινότητα.
        </p>

        {/* The Single CTA Button - «ΕΓΓΡΑΦΗ & ΛΗΨΗ» */}
        <div className="flex flex-col items-center justify-center gap-4">
          <CtaButton
            label="ΕΓΓΡΑΦΗ & ΛΗΨΗ"
            onClick={onOpenSubscribe}
            size="large"
          />

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#592828]/70 dark:text-[#EAE3D3]/70 pt-3">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#544799] dark:text-[#B0A7E7]" />
              <span>Άμεση λήψη του Οδηγού 2548</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#544799] dark:text-[#B0A7E7]" />
              <span>1 Email κάθε Κυριακή πρωί</span>
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#544799] dark:text-[#B0A7E7]" />
              <span>Απόλυτος σεβασμός στα προσωπικά δεδομένα</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
