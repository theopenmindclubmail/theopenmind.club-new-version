import React from 'react';
import { PILLARS } from '../data/content.ts';
import { BrandStar } from './BrandStar.tsx';
import { Check } from 'lucide-react';

export const Pillars: React.FC = () => {
  return (
    <section id="pillars" className="py-24 relative border-t border-[#592828]/15 dark:border-[#B0A7E7]/15 bg-[#FAF7F0]/60 dark:bg-[#120D18]/70 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#544799] dark:text-[#B0A7E7] mb-3 flex items-center gap-2">
            <BrandStar size={14} className="text-[#592828] dark:text-[#B0A7E7]" />
            <span>Οι 5 Πυλώνες του Mailcast</span>
            <span className="opacity-40" aria-hidden="true">/</span>
            <span className="text-[#592828]/70 dark:text-[#EAE3D3]/70 font-normal">Core Curriculum</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#592828] dark:text-[#EAE3D3] tracking-tight [text-wrap:balance]">
            Τα 5 συστήματα που αποδομούμε και σου παραδίδουμε κάθε εβδομάδα.
          </h2>
          <p className="mt-4 text-[#592828]/80 dark:text-[#EAE3D3]/80 text-base sm:text-lg leading-relaxed">
            Δεν ανακυκλώνουμε θεωρίες. Κάθε έκδοση του theopenmind.club εστιάζει αποκλειστικά σε αυτά τα πέντε θεμέλια της σύγχρονης ψηφιακής ανεξαρτησίας.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Card 1: Motivation & Mindset Shift (Large Bento Card - 7 cols) */}
          <div
            className="col-span-12 lg:col-span-7 group relative rounded-2xl border border-[#592828]/15 dark:border-[#B0A7E7]/20 bg-white dark:bg-[#1E1729]/80 p-7 sm:p-9 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-[#544799]/40 dark:hover:border-[#B0A7E7]/40 hover:shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-6 text-xs text-[#592828]/70 dark:text-[#EAE3D3]/70 font-mono">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">{PILLARS[0].emoji}</span>
                  <span className="font-bold text-[#592828] dark:text-[#EAE3D3] text-sm font-heading tracking-wide">{PILLARS[0].title}</span>
                </div>
                <span className="text-[#544799] dark:text-[#B0A7E7] font-semibold">Πυλώνας {PILLARS[0].number}</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#592828] dark:text-[#EAE3D3] mb-3 group-hover:text-[#544799] dark:group-hover:text-[#B0A7E7] transition-colors">
                {PILLARS[0].subtitle}
              </h3>

              <p className="text-[#592828]/85 dark:text-[#EAE3D3]/85 leading-relaxed text-sm sm:text-base">
                {PILLARS[0].description}
              </p>

              <div className="mt-6 pt-6 border-t border-[#592828]/10 dark:border-[#B0A7E7]/10 space-y-2.5">
                {PILLARS[0].bullets.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#592828]/80 dark:text-[#EAE3D3]/80">
                    <Check className="w-4 h-4 text-[#544799] dark:text-[#B0A7E7] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 flex items-center justify-between text-xs text-[#592828]/60 dark:text-[#EAE3D3]/50">
              <span>Ψυχολογία Επιχειρηματία</span>
              <span aria-hidden="true">·</span>
              <span>Focus Management</span>
              <span aria-hidden="true">·</span>
              <span>Ελευθερία Δημιουργού</span>
            </div>
          </div>

          {/* Card 2: High-Converting Funnels (5 cols) */}
          <div
            className="col-span-12 lg:col-span-5 group relative rounded-2xl border border-[#592828]/15 dark:border-[#B0A7E7]/20 bg-white dark:bg-[#1E1729]/80 p-7 sm:p-9 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-[#544799]/40 dark:hover:border-[#B0A7E7]/40 hover:shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-6 text-xs text-[#592828]/70 dark:text-[#EAE3D3]/70 font-mono">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">{PILLARS[1].emoji}</span>
                  <span className="font-bold text-[#592828] dark:text-[#EAE3D3] text-sm font-heading tracking-wide">{PILLARS[1].title}</span>
                </div>
                <span className="text-[#544799] dark:text-[#B0A7E7] font-semibold">Πυλώνας {PILLARS[1].number}</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#592828] dark:text-[#EAE3D3] mb-3 group-hover:text-[#544799] dark:group-hover:text-[#B0A7E7] transition-colors">
                {PILLARS[1].subtitle}
              </h3>

              <p className="text-[#592828]/85 dark:text-[#EAE3D3]/85 leading-relaxed text-sm sm:text-base">
                {PILLARS[1].description}
              </p>

              <div className="mt-6 pt-6 border-t border-[#592828]/10 dark:border-[#B0A7E7]/10 space-y-2.5">
                {PILLARS[1].bullets.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#592828]/80 dark:text-[#EAE3D3]/80">
                    <Check className="w-4 h-4 text-[#544799] dark:text-[#B0A7E7] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 flex items-center justify-between text-xs text-[#592828]/60 dark:text-[#EAE3D3]/50">
              <span>Funnel Engineering</span>
              <span aria-hidden="true">·</span>
              <span>Conversion Copy</span>
              <span aria-hidden="true">·</span>
              <span>24/7 Pipeline</span>
            </div>
          </div>

          {/* Card 3: Vibe Coding & Agentic AI (4 cols) */}
          <div
            className="col-span-12 md:col-span-6 lg:col-span-4 group relative rounded-2xl border border-[#592828]/15 dark:border-[#B0A7E7]/20 bg-white dark:bg-[#1E1729]/80 p-7 sm:p-8 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-[#544799]/40 dark:hover:border-[#B0A7E7]/40 hover:shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-5 text-xs text-[#592828]/70 dark:text-[#EAE3D3]/70 font-mono">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">{PILLARS[2].emoji}</span>
                  <span className="font-bold text-[#592828] dark:text-[#EAE3D3] text-sm font-heading tracking-wide">{PILLARS[2].title}</span>
                </div>
                <span className="text-[#544799] dark:text-[#B0A7E7] font-semibold">Πυλώνας {PILLARS[2].number}</span>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#592828] dark:text-[#EAE3D3] mb-2.5 group-hover:text-[#544799] dark:group-hover:text-[#B0A7E7] transition-colors">
                {PILLARS[2].subtitle}
              </h3>

              <p className="text-[#592828]/85 dark:text-[#EAE3D3]/85 leading-relaxed text-sm">
                {PILLARS[2].description}
              </p>

              <div className="mt-5 pt-5 border-t border-[#592828]/10 dark:border-[#B0A7E7]/10 space-y-2">
                {PILLARS[2].bullets.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#592828]/80 dark:text-[#EAE3D3]/80">
                    <Check className="w-3.5 h-3.5 text-[#544799] dark:text-[#B0A7E7] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 flex items-center justify-between text-xs text-[#592828]/60 dark:text-[#EAE3D3]/50">
              <span>Agentic AI</span>
              <span aria-hidden="true">·</span>
              <span>No-Lag Execution</span>
            </div>
          </div>

          {/* Card 4: Έξυπνες Αυτοματοποιήσεις (4 cols) */}
          <div
            className="col-span-12 md:col-span-6 lg:col-span-4 group relative rounded-2xl border border-[#592828]/15 dark:border-[#B0A7E7]/20 bg-white dark:bg-[#1E1729]/80 p-7 sm:p-8 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-[#544799]/40 dark:hover:border-[#B0A7E7]/40 hover:shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-5 text-xs text-[#592828]/70 dark:text-[#EAE3D3]/70 font-mono">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">{PILLARS[3].emoji}</span>
                  <span className="font-bold text-[#592828] dark:text-[#EAE3D3] text-sm font-heading tracking-wide">{PILLARS[3].title}</span>
                </div>
                <span className="text-[#544799] dark:text-[#B0A7E7] font-semibold">Πυλώνας {PILLARS[3].number}</span>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#592828] dark:text-[#EAE3D3] mb-2.5 group-hover:text-[#544799] dark:group-hover:text-[#B0A7E7] transition-colors">
                {PILLARS[3].subtitle}
              </h3>

              <p className="text-[#592828]/85 dark:text-[#EAE3D3]/85 leading-relaxed text-sm">
                {PILLARS[3].description}
              </p>

              <div className="mt-5 pt-5 border-t border-[#592828]/10 dark:border-[#B0A7E7]/10 space-y-2">
                {PILLARS[3].bullets.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#592828]/80 dark:text-[#EAE3D3]/80">
                    <Check className="w-3.5 h-3.5 text-[#544799] dark:text-[#B0A7E7] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 flex items-center justify-between text-xs text-[#592828]/60 dark:text-[#EAE3D3]/50">
              <span>Workflow AI</span>
              <span aria-hidden="true">·</span>
              <span>Zero Bottlenecks</span>
            </div>
          </div>

          {/* Card 5: Real-World Online Projects (4 cols) */}
          <div
            className="col-span-12 lg:col-span-4 group relative rounded-2xl border border-[#592828]/15 dark:border-[#B0A7E7]/20 bg-white dark:bg-[#1E1729]/80 p-7 sm:p-8 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-[#544799]/40 dark:hover:border-[#B0A7E7]/40 hover:shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-5 text-xs text-[#592828]/70 dark:text-[#EAE3D3]/70 font-mono">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">{PILLARS[4].emoji}</span>
                  <span className="font-bold text-[#592828] dark:text-[#EAE3D3] text-sm font-heading tracking-wide">{PILLARS[4].title}</span>
                </div>
                <span className="text-[#544799] dark:text-[#B0A7E7] font-semibold">Πυλώνας {PILLARS[4].number}</span>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#592828] dark:text-[#EAE3D3] mb-2.5 group-hover:text-[#544799] dark:group-hover:text-[#B0A7E7] transition-colors">
                {PILLARS[4].subtitle}
              </h3>

              <p className="text-[#592828]/85 dark:text-[#EAE3D3]/85 leading-relaxed text-sm">
                {PILLARS[4].description}
              </p>

              <div className="mt-5 pt-5 border-t border-[#592828]/10 dark:border-[#B0A7E7]/10 space-y-2">
                {PILLARS[4].bullets.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#592828]/80 dark:text-[#EAE3D3]/80">
                    <Check className="w-3.5 h-3.5 text-[#544799] dark:text-[#B0A7E7] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 flex items-center justify-between text-xs text-[#592828]/60 dark:text-[#EAE3D3]/50">
              <span>Live Case Studies</span>
              <span aria-hidden="true">·</span>
              <span>Deconstruction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
