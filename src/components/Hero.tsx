import React from 'react';
import { CtaButton } from './CtaButton.tsx';
import { BrandStar } from './BrandStar.tsx';
import { ShieldCheck, BookOpen, Clock, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenSubscribe?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSubscribe }) => {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-36 transition-colors duration-200">
      {/* Background ambient lighting from the palette */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-[#B0A7E7]/25 dark:bg-[#544799]/20 blur-[130px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[480px] h-[320px] bg-[#592828]/10 dark:bg-[#592828]/25 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Brand founder illustration logo - Logo only as requested */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-white/80 dark:bg-[#1E1729]/80 border border-[#592828]/20 dark:border-[#B0A7E7]/30 shadow-md backdrop-blur-md hover:scale-105 transition-transform">
            <img
              src="/assets/aistudio/theopenmind_brand_transparent.png"
              alt="theopenmind.club brand logo"
              referrerPolicy="no-referrer"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover"
            />
          </div>
        </div>

        {/* Badge: ΕΝΑ ΑΝΟΙΧΤΟΜΥΑΛΟ MAILCAST | ΚΑΘΕ ΤΕΤΑΡΤΗ ΣΤΟ INBOX ΣΟΥ */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#544799]/25 dark:border-[#B0A7E7]/35 bg-[#B0A7E7]/25 dark:bg-[#544799]/35 backdrop-blur-md text-sm sm:text-base font-bold text-[#544799] dark:text-[#B0A7E7] mb-8 tracking-wide shadow-xs font-heading">
          <BrandStar size={16} className="text-[#592828] dark:text-[#B0A7E7]" />
          <span>ΕΝΑ ΑΝΟΙΧΤΟΜΥΑΛΟ MAILCAST</span>
          <span className="opacity-40" aria-hidden="true">|</span>
          <span className="text-[#592828] dark:text-[#EAE3D3]">ΚΑΘΕ ΤΕΤΑΡΤΗ ΣΤΟ INBOX ΣΟΥ</span>
        </div>

        {/* Headline (H1): Cleaned without the 150€ subline */}
        <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#592828] dark:text-[#EAE3D3] tracking-tight leading-[1.08] mb-6 [text-wrap:balance]">
          Σταμάτα να λειτουργείς στον αυτόματο.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#544799] via-[#8577cf] to-[#592828] dark:from-[#B0A7E7] dark:via-[#d4ceff] dark:to-[#EAE3D3]">
            Χτίσε ψηφιακή αυτονομία
          </span>{' '}
          με το κατάλληλο Mindset.
        </h1>

        {/* Sub-headline: Exact new copy as requested */}
        <p className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-[#592828]/90 dark:text-[#EAE3D3]/90 leading-relaxed font-medium mb-12 [text-wrap:balance]">
          Το Mailcast για όσους αρνούνται να μείνουν πίσω και αντίθετα θέλουν να το τερματήσουν. Διαυγής σκέψη, συγκεκριμένα βήματα και με προηγμένα εργαλεία του αύριο: Next-Gen Online Projects, High-converting Funnels, Automations, Email Marketing και Pure Motivation.
        </p>

        {/* Primary CTA Button: «ΕΓΓΡΑΦΗ & ΛΗΨΗ» -> https://www.theopenmind.club/subscribe */}
        <div className="flex flex-col items-center justify-center gap-4">
          <CtaButton
            label="ΕΓΓΡΑΦΗ & ΛΗΨΗ"
            onClick={onOpenSubscribe}
            size="large"
            className="text-base sm:text-lg py-4 px-9"
          />

          {/* Micro-copy εμπιστοσύνης κάτω από το κουμπί */}
          <p className="text-sm sm:text-base text-[#592828]/80 dark:text-[#EAE3D3]/80 flex items-center justify-center gap-2 pt-1 font-normal">
            <ShieldCheck className="w-5 h-5 text-[#544799] dark:text-[#B0A7E7] shrink-0" />
            <span>100% Δωρεάν. Κανένα spam. Διαγραφή με 1 κλικ ανά πάσα στιγμή.</span>
          </p>
        </div>

        {/* Quick Highlights Strip: Exact updated wording as requested */}
        <div className="mt-16 pt-10 border-t border-[#592828]/20 dark:border-[#B0A7E7]/20 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="flex items-start gap-3.5">
            <div className="p-3 rounded-xl bg-[#B0A7E7]/25 dark:bg-[#544799]/30 text-[#544799] dark:text-[#B0A7E7] border border-[#544799]/20 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm text-[#592828]/70 dark:text-[#EAE3D3]/60 font-medium">Συχνότητα</div>
              <div className="text-base sm:text-lg font-bold text-[#592828] dark:text-[#EAE3D3] font-heading">Κάθε Τετάρτη</div>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-3 rounded-xl bg-[#592828]/15 dark:bg-[#592828]/35 text-[#592828] dark:text-[#EAE3D3] border border-[#592828]/20 shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm text-[#592828]/70 dark:text-[#EAE3D3]/60 font-medium">Άμεσο Δώρο</div>
              <div className="text-base sm:text-lg font-bold text-[#592828] dark:text-[#EAE3D3] font-heading">2548 Internet Blueprint</div>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-3 rounded-xl bg-[#544799]/20 dark:bg-[#544799]/35 text-[#544799] dark:text-[#B0A7E7] border border-[#544799]/20 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm text-[#592828]/70 dark:text-[#EAE3D3]/60 font-medium">Περιεχόμενο</div>
              <div className="text-base sm:text-lg font-bold text-[#592828] dark:text-[#EAE3D3] font-heading leading-tight">Ποιότητας και Άμεσα Εφαρμόσιμο</div>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-3 rounded-xl bg-[#B0A7E7]/25 dark:bg-[#544799]/30 text-[#544799] dark:text-[#B0A7E7] border border-[#544799]/20 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm text-[#592828]/70 dark:text-[#EAE3D3]/60 font-medium">Πρόσβαση</div>
              <div className="text-base sm:text-lg font-bold text-[#592828] dark:text-[#EAE3D3] font-heading">Δωρεάν Mailcast</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
