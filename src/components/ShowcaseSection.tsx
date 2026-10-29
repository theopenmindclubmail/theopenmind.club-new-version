import React from 'react';
import { ExternalLink, Zap, Smartphone, Sparkles } from 'lucide-react';
import { BrandStar } from './BrandStar.tsx';

export const ShowcaseSection: React.FC = () => {
  return (
    <section 
      id="showcase" 
      className="py-24 relative border-t border-[#7F5539]/25 transition-colors bg-[#EDE0D4]/40 dark:bg-[#1A110D]/90"
      style={{
        backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(127, 85, 57, 0.05) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(237, 224, 212, 0.08) 0%, transparent 40%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Without '/ Proof of Execution' */}
        <div className="max-w-3xl mb-16">
          <div className="text-sm font-semibold tracking-wider uppercase text-[#7F5539] dark:text-[#EDE0D4] mb-3 flex items-center gap-2">
            <BrandStar size={16} className="text-[#7F5539] dark:text-[#EDE0D4]" />
            <span className="font-mono">Showcase & Portfolio</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#7F5539] dark:text-[#EDE0D4] tracking-tight [text-wrap:balance]">
            Θεωρία και Πράξη: Top-Level Web Architecture
          </h2>
          <p className="mt-4 text-[#7F5539]/90 dark:text-[#EDE0D4]/90 text-lg sm:text-xl leading-relaxed [text-wrap:balance]">
            Υλοποίηση σύγχρονου design και ψηφιακής αρχιτεκτονικής δομής.
          </p>
        </div>

        {/* Featured Project Card - HOUSE OF LIGHT! · ATHENS */}
        <div className="rounded-3xl border border-[#7F5539]/30 dark:border-[#7F5539]/40 bg-[#EDE0D4]/80 dark:bg-[#251812] overflow-hidden shadow-xl dark:shadow-[0_20px_70px_-20px_rgba(0,0,0,0.85)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual Preview Side (7 cols) */}
            <div className="lg:col-span-7 relative group bg-[#1F140F] overflow-hidden flex flex-col justify-center">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                <img
                  src="/assets/aistudio/Bildschirmfoto_2026-10-29_um_20.23.39_61c050bb.png"
                  alt="HOUSE OF LIGHT! · ATHENS - Top-Level Web Architecture"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:hidden" />
              </div>

              {/* Live Preview Button Ribbon */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 p-3.5 rounded-xl backdrop-blur-xl bg-[#251812]/90 border border-[#7F5539]/40 shadow-lg">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-[#EDE0D4] truncate">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7F5539] shadow-[0_0_8px_#7F5539]" />
                  <span className="truncate font-semibold tracking-wide">house-of-light-athens</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href="https://light-house-athens-nits.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold bg-[#EDE0D4] text-[#7F5539] hover:bg-white transition-all shadow-sm active:scale-95"
                  >
                    <span>Άνοιγμα Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Information & Architecture Side (5 cols) */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#7F5539]/25 dark:border-[#7F5539]/35 bg-[#EDE0D4]/60 dark:bg-[#20140F]">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#7F5539] dark:text-[#EDE0D4] font-bold">
                    Featured Case Study
                  </span>
                  <span className="text-xs font-mono text-[#7F5539]/80 dark:text-[#EDE0D4]/70 px-2 py-0.5 rounded bg-[#7F5539]/10 dark:bg-[#7F5539]/25">
                    Production Build
                  </span>
                </div>

                {/* Project Title - House of Light! */}
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#7F5539] dark:text-[#EDE0D4] mb-2 tracking-tight">
                  HOUSE OF LIGHT! · ATHENS
                </h3>

                <p className="text-xs sm:text-sm text-[#7F5539]/80 dark:text-[#EDE0D4]/75 font-mono mb-6">
                  Vercel Edge · Next.js · High-Performance UI/UX
                </p>

                {/* Highlights */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-[#7F5539] text-[#EDE0D4] shrink-0 mt-0.5 shadow-sm">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-heading text-base sm:text-lg font-bold text-[#7F5539] dark:text-[#EDE0D4]">
                        Υπερσύγχρονο UI/UX
                      </h4>
                      <p className="text-xs sm:text-sm text-[#7F5539]/85 dark:text-[#EDE0D4]/80 mt-1 leading-relaxed">
                        Μινιμαλιστική πολυτέλεια, crisp τυπογραφία, ζεστή αισθητική και αβίαστη πλοήγηση.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-[#7F5539]/20 dark:bg-[#7F5539]/40 text-[#7F5539] dark:text-[#EDE0D4] border border-[#7F5539]/30 shrink-0 mt-0.5">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-heading text-base sm:text-lg font-bold text-[#7F5539] dark:text-[#EDE0D4]">
                        Αστραπιαία ταχύτητα φόρτωσης
                      </h4>
                      <p className="text-xs sm:text-sm text-[#7F5539]/85 dark:text-[#EDE0D4]/80 mt-1 leading-relaxed">
                        Υλοποίηση σε Next.js με Vercel Edge Serverless routing και μηδενικό hydration lag.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-[#7F5539]/20 dark:bg-[#7F5539]/40 text-[#7F5539] dark:text-[#EDE0D4] border border-[#7F5539]/30 shrink-0 mt-0.5">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-heading text-base sm:text-lg font-bold text-[#7F5539] dark:text-[#EDE0D4]">
                        Άψογο mobile responsiveness & clean aesthetics
                      </h4>
                      <p className="text-xs sm:text-sm text-[#7F5539]/85 dark:text-[#EDE0D4]/80 mt-1 leading-relaxed">
                        Απόλυτη προσαρμογή σε κάθε οθόνη, χωρίς περιττό οπτικό θόρυβο ή περιττά στοιχεία.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Performance Metric Strip - Fixed Layout to Prevent Text Overlap */}
                <div className="p-3.5 rounded-2xl bg-[#EDE0D4] dark:bg-[#1A110D] border border-[#7F5539]/30 shadow-inner mb-6">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    <div className="p-2.5 rounded-xl bg-white/70 dark:bg-[#251812] border border-[#7F5539]/20 text-center flex flex-col justify-center">
                      <div className="text-xl sm:text-2xl font-black text-[#7F5539] dark:text-[#EDE0D4] font-mono leading-none">
                        100
                      </div>
                      <div className="text-[10px] font-bold text-[#7F5539]/80 dark:text-[#EDE0D4]/80 uppercase tracking-wider mt-1.5">
                        Performance
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/70 dark:bg-[#251812] border border-[#7F5539]/20 text-center flex flex-col justify-center">
                      <div className="text-xl sm:text-2xl font-black text-[#7F5539] dark:text-[#EDE0D4] font-mono leading-none">
                        100
                      </div>
                      <div className="text-[10px] font-bold text-[#7F5539]/80 dark:text-[#EDE0D4]/80 uppercase tracking-wider mt-1.5">
                        Access
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/70 dark:bg-[#251812] border border-[#7F5539]/20 text-center flex flex-col justify-center">
                      <div className="text-xl sm:text-2xl font-black text-[#7F5539] dark:text-[#EDE0D4] font-mono leading-none">
                        100
                      </div>
                      <div className="text-[10px] font-bold text-[#7F5539]/80 dark:text-[#EDE0D4]/80 uppercase tracking-wider mt-1.5">
                        Best Pract.
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/70 dark:bg-[#251812] border border-[#7F5539]/20 text-center flex flex-col justify-center">
                      <div className="text-xl sm:text-2xl font-black text-[#7F5539] dark:text-[#EDE0D4] font-mono leading-none">
                        100
                      </div>
                      <div className="text-[10px] font-bold text-[#7F5539]/80 dark:text-[#EDE0D4]/80 uppercase tracking-wider mt-1.5">
                        SEO
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Takeaway & Updated Quote */}
              <div className="pt-6 border-t border-[#7F5539]/25 dark:border-[#7F5539]/35">
                <p className="text-sm sm:text-base text-[#7F5539] dark:text-[#EDE0D4] italic font-medium leading-relaxed">
                  «Πως δημιουργείται μια κορυφαία ψηφιακή εμπειρία; Ένα ζωντανό παράδειγμα συγχρονισμού τεχνολογίας και design.»
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <a
                    href="https://light-house-athens-nits.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#7F5539] dark:text-[#EDE0D4] hover:underline font-extrabold inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Επισκεφθείτε το Live Project (HOUSE OF LIGHT! · ATHENS)</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
