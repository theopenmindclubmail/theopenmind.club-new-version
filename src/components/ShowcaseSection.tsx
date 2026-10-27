import React from 'react';
import { ExternalLink, Zap, Smartphone, Sparkles } from 'lucide-react';
import { BrandStar } from './BrandStar.tsx';

export const ShowcaseSection: React.FC = () => {
  return (
    <section id="showcase" className="py-24 relative border-t border-[#592828]/15 dark:border-[#B0A7E7]/15 bg-[#FAF7F0]/60 dark:bg-[#120D18]/70 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Exact Copy */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#544799] dark:text-[#B0A7E7] mb-3 flex items-center gap-2">
            <BrandStar size={14} className="text-[#592828] dark:text-[#B0A7E7]" />
            <span>Showcase & Portfolio</span>
            <span className="opacity-40" aria-hidden="true">/</span>
            <span className="text-[#592828]/70 dark:text-[#EAE3D3]/70 font-normal">Proof of Execution</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#592828] dark:text-[#EAE3D3] tracking-tight [text-wrap:balance]">
            Από τη Θεωρία στην Πράξη: Τι σημαίνει Top-Level Web Architecture
          </h2>
          <p className="mt-4 text-[#592828]/80 dark:text-[#EAE3D3]/80 text-base sm:text-lg leading-relaxed [text-wrap:balance]">
            Δεν μιλάμε απλώς για σύγχρονο design και vibe coding — το υλοποιούμε.
          </p>
        </div>

        {/* Featured Project Card - Lighthouse Athens v2 */}
        <div className="rounded-3xl border border-[#592828]/15 dark:border-[#B0A7E7]/20 bg-white dark:bg-[#1E1729] overflow-hidden shadow-lg dark:shadow-[0_20px_70px_-20px_rgba(0,0,0,0.9)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual Preview Side (7 cols) */}
            <div className="lg:col-span-7 relative group bg-black/60 overflow-hidden flex flex-col justify-center">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                <img
                  src="/src/assets/images/lighthouse_athens_preview_1793104877661.jpg"
                  alt="Lighthouse Athens v2 - Top-Level Web Architecture"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:hidden" />
              </div>

              {/* Live Preview Button Ribbon */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 p-3 rounded-xl backdrop-blur-xl bg-[#15101B]/85 border border-[#B0A7E7]/30">
                <div className="flex items-center gap-2 text-xs font-mono text-[#B0A7E7] truncate">
                  <span className="w-2 h-2 rounded-full bg-[#B0A7E7]" />
                  <span className="truncate">light-house-athens.app</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href="https://lighthouse-athens-v2.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#EAE3D3] text-[#592828] hover:bg-white transition-colors"
                  >
                    <span>Άνοιγμα Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Information & Architecture Side (5 cols) */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#592828]/15 dark:border-[#B0A7E7]/15">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#544799] dark:text-[#B0A7E7] font-bold">Featured Case Study</span>
                  <span className="text-xs text-[#592828]/60 dark:text-[#EAE3D3]/60">Production Build</span>
                </div>

                {/* Project Title - Exact Copy: Lighthouse Athens v2 */}
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#592828] dark:text-[#EAE3D3] mb-2">
                  Lighthouse Athens v2
                </h3>

                <p className="text-xs text-[#592828]/70 dark:text-[#EAE3D3]/70 font-mono mb-6">
                  Vercel Edge · Next.js · High-Performance UI/UX
                </p>

                {/* Highlights - Exact Copy */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#544799]/15 dark:bg-[#544799]/30 text-[#544799] dark:text-[#B0A7E7] border border-[#544799]/20 shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-heading text-base font-bold text-[#592828] dark:text-[#EAE3D3]">Υπερσύγχρονο UI/UX</h4>
                      <p className="text-xs text-[#592828]/80 dark:text-[#EAE3D3]/80 mt-0.5 leading-relaxed">
                        Μινιμαλιστική πολυτέλεια, crisp τυπογραφία, σκοτεινή αισθητική και αβίαστη πλοήγηση.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#592828]/10 dark:bg-[#592828]/30 text-[#592828] dark:text-[#EAE3D3] border border-[#592828]/20 shrink-0 mt-0.5">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-heading text-base font-bold text-[#592828] dark:text-[#EAE3D3]">Αστραπιαία ταχύτητα φόρτωσης</h4>
                      <p className="text-xs text-[#592828]/80 dark:text-[#EAE3D3]/80 mt-0.5 leading-relaxed">
                        Υλοποίηση σε Next.js με Vercel Edge Serverless routing και μηδενικό hydration lag.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#B0A7E7]/25 dark:bg-[#544799]/30 text-[#544799] dark:text-[#B0A7E7] border border-[#544799]/20 shrink-0 mt-0.5">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-heading text-base font-bold text-[#592828] dark:text-[#EAE3D3]">Άψογο mobile responsiveness & clean aesthetics</h4>
                      <p className="text-xs text-[#592828]/80 dark:text-[#EAE3D3]/80 mt-0.5 leading-relaxed">
                        Απόλυτη προσαρμογή σε κάθε οθόνη, χωρίς περιττό οπτικό θόρυβο ή περιττά στοιχεία.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Performance Metric Strip */}
                <div className="p-4 rounded-xl bg-[#FAF7F0] dark:bg-[#15101B]/70 border border-[#592828]/15 dark:border-[#B0A7E7]/15 mb-6 grid grid-cols-4 gap-2 text-center">
                  <div>
                    <div className="text-base sm:text-lg font-bold text-[#544799] dark:text-[#B0A7E7] font-mono">100</div>
                    <div className="text-[10px] text-[#592828]/70 dark:text-[#EAE3D3]/60 uppercase">Performance</div>
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-bold text-[#544799] dark:text-[#B0A7E7] font-mono">100</div>
                    <div className="text-[10px] text-[#592828]/70 dark:text-[#EAE3D3]/60 uppercase">Access</div>
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-bold text-[#544799] dark:text-[#B0A7E7] font-mono">100</div>
                    <div className="text-[10px] text-[#592828]/70 dark:text-[#EAE3D3]/60 uppercase">Best Pract.</div>
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-bold text-[#544799] dark:text-[#B0A7E7] font-mono">100</div>
                    <div className="text-[10px] text-[#592828]/70 dark:text-[#EAE3D3]/60 uppercase">SEO</div>
                  </div>
                </div>
              </div>

              {/* Takeaway - Exact Copy */}
              <div className="pt-6 border-t border-[#592828]/15 dark:border-[#B0A7E7]/15">
                <p className="text-xs sm:text-sm text-[#592828]/80 dark:text-[#EAE3D3]/80 italic leading-relaxed">
                  «Ένα ζωντανό παράδειγμα του πώς η τεχνολογία και το design συγχρονίζονται για να δημιουργήσουν κορυφαίες ψηφιακές εμπειρίες.»
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <a
                    href="https://lighthouse-athens-v2.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#544799] dark:text-[#B0A7E7] hover:underline font-bold inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Επισκεφθείτε το Live Project (light-house-athens.app)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
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
