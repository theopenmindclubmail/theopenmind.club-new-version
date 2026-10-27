import React from 'react';
import { CtaButton } from './CtaButton.tsx';
import { BrandStar } from './BrandStar.tsx';
import { ShieldCheck, BookOpen, Clock, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenSubscribe?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSubscribe }) => {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32 transition-colors duration-200">
      {/* Background ambient lighting from the palette */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#B0A7E7]/25 dark:bg-[#544799]/20 blur-[130px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[450px] h-[300px] bg-[#592828]/10 dark:bg-[#592828]/25 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge - Section 1 Exact Copy: ⚡ THE OPEN MIND MAILCAST | ΚΑΘΕ ΕΒΔΟΜΑΔΑ ΣΤΟ INBOX ΣΟΥ */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#544799]/20 dark:border-[#B0A7E7]/30 bg-[#B0A7E7]/20 dark:bg-[#544799]/30 backdrop-blur-md text-xs sm:text-sm font-medium text-[#544799] dark:text-[#B0A7E7] mb-8 tracking-wide shadow-xs">
          <BrandStar size={14} className="text-[#592828] dark:text-[#B0A7E7]" />
          <span className="font-heading font-bold tracking-wider">THE OPEN MIND MAILCAST</span>
          <span className="opacity-40" aria-hidden="true">|</span>
          <span className="text-[#592828] dark:text-[#EAE3D3]">ΚΑΘΕ ΕΒΔΟΜΑΔΑ ΣΤΟ INBOX ΣΟΥ</span>
        </div>

        {/* Headline (H1) - Roboto Condensed & Exact Copy */}
        <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#592828] dark:text-[#EAE3D3] tracking-tight leading-[1.08] mb-6 [text-wrap:balance]">
          Σταμάτα να λειτουργείς στον αυτόματο.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#544799] via-[#8577cf] to-[#592828] dark:from-[#B0A7E7] dark:via-[#d4ceff] dark:to-[#EAE3D3]">
            Χτίσε ψηφιακή αυτονομία
          </span>{' '}
          με AI, Vibe Coding και καθαρό Mindset.
        </h1>

        {/* Sub-headline - Exact Copy */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-[#592828]/85 dark:text-[#EAE3D3]/85 leading-relaxed font-normal mb-10 [text-wrap:balance]">
          Το Mailcast για όσους αρνούνται τα παραδοσιακά στεγανά. Συνδυάζουμε τη διαύγεια σκέψης με τα πιο προηγμένα εργαλεία του αύριο: High-converting Funnels, Automations και Next-Gen Online Projects.
        </p>

        {/* Primary CTA Button: «ΕΓΓΡΑΦΗ & ΛΗΨΗ» -> https://www.theopenmind.club/subscribe */}
        <div className="flex flex-col items-center justify-center gap-4">
          <CtaButton
            label="ΕΓΓΡΑΦΗ & ΛΗΨΗ"
            onClick={onOpenSubscribe}
            size="large"
          />

          {/* Micro-copy εμπιστοσύνης κάτω από το κουμπί - Exact Copy */}
          <p className="text-xs sm:text-sm text-[#592828]/75 dark:text-[#EAE3D3]/75 flex items-center justify-center gap-2 pt-1 font-normal">
            <ShieldCheck className="w-4 h-4 text-[#544799] dark:text-[#B0A7E7] shrink-0" />
            <span>100% Δωρεάν. Κανένα spam. Διαγραφή με 1 κλικ ανά πάσα στιγμή.</span>
          </p>
        </div>

        {/* Quick Highlights Strip with Palette styling */}
        <div className="mt-16 pt-10 border-t border-[#592828]/15 dark:border-[#B0A7E7]/15 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-[#B0A7E7]/25 dark:bg-[#544799]/30 text-[#544799] dark:text-[#B0A7E7] border border-[#544799]/20 shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs text-[#592828]/70 dark:text-[#EAE3D3]/60">Συχνότητα</div>
              <div className="text-sm font-semibold text-[#592828] dark:text-[#EAE3D3] font-heading">Κάθε Κυριακή</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-[#592828]/10 dark:bg-[#592828]/30 text-[#592828] dark:text-[#EAE3D3] border border-[#592828]/20 shrink-0">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs text-[#592828]/70 dark:text-[#EAE3D3]/60">Άμεσο Δώρο</div>
              <div className="text-sm font-semibold text-[#592828] dark:text-[#EAE3D3] font-heading">Οδηγός 2548</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-[#544799]/15 dark:bg-[#544799]/30 text-[#544799] dark:text-[#B0A7E7] border border-[#544799]/20 shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs text-[#592828]/70 dark:text-[#EAE3D3]/60">Περιεχόμενο</div>
              <div className="text-sm font-semibold text-[#592828] dark:text-[#EAE3D3] font-heading">Μόνο Πρακτικά Συστήματα</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-[#B0A7E7]/25 dark:bg-[#544799]/30 text-[#544799] dark:text-[#B0A7E7] border border-[#544799]/20 shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs text-[#592828]/70 dark:text-[#EAE3D3]/60">Πρόσβαση</div>
              <div className="text-sm font-semibold text-[#592828] dark:text-[#EAE3D3] font-heading">100% Δωρεάν για Πάντα</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
