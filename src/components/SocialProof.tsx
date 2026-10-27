import React from 'react';
import { PARTNERS, TESTIMONIALS, DACH_CREDENTIALS } from '../data/content.ts';
import { BrandStar } from './BrandStar.tsx';
import { CheckCircle2, Award, Quote, Building2, Globe2 } from 'lucide-react';

export const SocialProof: React.FC = () => {
  return (
    <section id="social-proof" className="py-24 relative border-t border-[#592828]/15 dark:border-[#B0A7E7]/15 bg-[#EAE3D3] dark:bg-[#15101B] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
        
        {/* =========================================================================
            ΕΝΟΤΗΤΑ 1: «Άνθρωποι που συνεργαστήκαμε»
           ========================================================================= */}
        <div>
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#544799] dark:text-[#B0A7E7] mb-2 flex items-center gap-2">
              <BrandStar size={14} className="text-[#592828] dark:text-[#B0A7E7]" />
              <span>Ενότητα 1</span>
              <span className="opacity-40" aria-hidden="true">/</span>
              <span>Collaborations & Ecosystem</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#592828] dark:text-[#EAE3D3] tracking-tight">
              Άνθρωποι που συνεργαστήκαμε
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#592828]/80 dark:text-[#EAE3D3]/80">
              Επιλεγμένα ψηφιακά brands, καινοτόμα στούντιο και operators που εφάρμοσαν τα συστήματα του theopenmind.club.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARTNERS.map((partner, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl border border-[#592828]/15 dark:border-[#B0A7E7]/20 bg-white dark:bg-[#1E1729]/80 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-[#544799]/40 dark:hover:border-[#B0A7E7]/40 hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#B0A7E7]/25 dark:bg-[#544799]/30 border border-[#544799]/20 flex items-center justify-center text-[#544799] dark:text-[#B0A7E7]">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-bold text-[#592828] dark:text-[#EAE3D3] group-hover:text-[#544799] dark:group-hover:text-[#B0A7E7] transition-colors">
                        {partner.name}
                      </h3>
                      <p className="text-xs text-[#592828]/70 dark:text-[#EAE3D3]/70">{partner.sector}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#544799] dark:text-[#B0A7E7] bg-[#B0A7E7]/30 dark:bg-[#544799]/40 px-2.5 py-1 rounded-md border border-[#544799]/20 shrink-0">
                    {partner.metric}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#592828]/80 dark:text-[#EAE3D3]/80 leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            ΕΝΟΤΗΤΑ 2: «Άνθρωποι που μας έχουν εμπιστευτεί»
           ========================================================================= */}
        <div>
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#544799] dark:text-[#B0A7E7] mb-2 flex items-center gap-2">
              <BrandStar size={14} className="text-[#592828] dark:text-[#B0A7E7]" />
              <span>Ενότητα 2</span>
              <span className="opacity-40" aria-hidden="true">/</span>
              <span>Real Voices & Outcomes</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#592828] dark:text-[#EAE3D3] tracking-tight">
              Άνθρωποι που μας έχουν εμπιστευτεί
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#592828]/80 dark:text-[#EAE3D3]/80">
              Πραγματικές εμπειρίες από δημιουργούς, founders και στελέχη που λαμβάνουν το Mailcast κάθε εβδομάδα.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((item, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl border border-[#592828]/15 dark:border-[#B0A7E7]/20 bg-white dark:bg-[#1E1729]/80 p-7 sm:p-8 shadow-sm backdrop-blur-md flex flex-col justify-between hover:border-[#544799]/40 dark:hover:border-[#B0A7E7]/40 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <Quote className="w-7 h-7 text-[#544799]/40 dark:text-[#B0A7E7]/40 group-hover:text-[#544799] dark:group-hover:text-[#B0A7E7] transition-colors" />
                    <span className="text-[11px] font-mono text-[#544799] dark:text-[#B0A7E7] bg-[#B0A7E7]/20 dark:bg-[#544799]/40 px-2.5 py-0.5 rounded border border-[#544799]/20 font-semibold">
                      {item.highlight}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-[#592828]/90 dark:text-[#EAE3D3]/95 leading-relaxed italic mb-6">
                    «{item.quote}»
                  </p>
                </div>

                <div className="pt-4 border-t border-[#592828]/10 dark:border-[#B0A7E7]/15 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#544799] flex items-center justify-center text-xs font-bold text-[#EAE3D3] shadow-xs">
                      {item.avatarInitials}
                    </div>
                    <div>
                      <div className="font-heading text-base font-bold text-[#592828] dark:text-[#EAE3D3] leading-tight">{item.name}</div>
                      <div className="text-xs text-[#592828]/70 dark:text-[#EAE3D3]/70">{item.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#544799] dark:text-[#B0A7E7] font-mono font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{item.verified}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            ΕΝΟΤΗΤΑ 3: «Έχουμε εκπαιδευτεί από τους καλύτερους στην γερμανόφωνη αγορά!»
           ========================================================================= */}
        <div className="rounded-3xl border border-[#592828]/20 dark:border-[#B0A7E7]/20 bg-gradient-to-b from-[#592828] to-[#3d1919] text-[#EAE3D3] p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#544799]/25 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/20 text-xs font-mono text-[#EAE3D3] mb-4">
              <Globe2 className="w-3.5 h-3.5 text-[#B0A7E7]" />
              <span>DACH MARKET EXPERTISE // DE · AT · CH</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#EAE3D3] tracking-tight [text-wrap:balance]">
              Έχουμε εκπαιδευτεί από τους καλύτερους στην γερμανόφωνη αγορά!
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#EAE3D3]/85 leading-relaxed">
              Η γερμανόφωνη αγορά (Γερμανία, Ελβετία, Αυστρία) είναι παγκοσμίως γνωστή για την απαράμιλλη μεθοδολογία της: απόλυτη ακρίβεια (Deutsche Gründlichkeit), μαθηματική προσέγγιση στα sales funnels και zero-bullshit engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DACH_CREDENTIALS.map((cred, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/15 bg-black/30 p-6 backdrop-blur-md flex flex-col justify-between hover:border-white/30 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#EAE3D3]/70 mb-3">
                    <span className="text-[#B0A7E7] flex items-center gap-1.5 font-bold">
                      <Award className="w-3.5 h-3.5" />
                      <span>{cred.year}</span>
                    </span>
                    <span>{cred.location}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2 leading-snug">
                    {cred.title}
                  </h3>
                  <div className="text-xs text-[#EAE3D3]/80 font-medium mb-3">
                    {cred.institution}
                  </div>
                  <p className="text-xs sm:text-sm text-[#EAE3D3]/85 leading-relaxed">
                    {cred.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#EAE3D3]/80">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B0A7E7] shrink-0" />
                  <span>Επαληθευμένη τεχνογνωσία DACH</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
