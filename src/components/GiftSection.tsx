import React, { useState } from 'react';
import { CtaButton } from './CtaButton.tsx';
import { BrandStar } from './BrandStar.tsx';
import { PdfSampleModal } from './PdfSampleModal.tsx';
import { GUIDE_CHAPTERS } from '../data/content.ts';
import { Check, Sparkles, BookOpen, Layers, X, Eye } from 'lucide-react';

interface GiftSectionProps {
  onOpenSubscribe?: () => void;
}

export const GiftSection: React.FC<GiftSectionProps> = ({ onOpenSubscribe }) => {
  const [showContentsModal, setShowContentsModal] = useState(false);
  const [showPdfPreviewModal, setShowPdfPreviewModal] = useState(false);

  return (
    <section id="gift" className="py-24 relative overflow-hidden border-t border-[#592828]/15 dark:border-[#B0A7E7]/15 transition-colors">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#B0A7E7]/20 dark:bg-[#544799]/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#592828]/10 dark:bg-[#592828]/25 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Book Asset & Digital Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none group">
              {/* Outer atmospheric aura */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#592828]/20 via-[#B0A7E7]/30 to-[#544799]/30 rounded-3xl blur-2xl opacity-50 dark:opacity-60 group-hover:opacity-80 transition-opacity" />

              {/* Book Container with fallbacks */}
              <div className="relative rounded-2xl overflow-hidden border border-[#592828]/20 dark:border-[#B0A7E7]/25 bg-white dark:bg-[#1E1729] shadow-lg dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]">
                <img
                  src="/src/assets/images/golden_library_2548_1793104877152.jpg"
                  alt="Οδηγός 2548 - Η Χρυσή Βιβλιοθήκη της Ψηφιακής Αυτονομίας"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
                  onClick={() => setShowPdfPreviewModal(true)}
                  title="Κάντε κλικ για προεπισκόπηση δείγματος PDF"
                />

                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 backdrop-blur-md bg-[#15101B]/80 border border-[#B0A7E7]/30 px-3 py-1.5 rounded-lg text-xs font-mono text-[#EAE3D3] flex items-center gap-2">
                  <BrandStar size={13} className="text-[#B0A7E7]" />
                  <span>ΕΚΔΟΣΗ 2026 // ΑΠΟΚΛΕΙΣΤΙΚΟ</span>
                </div>

                {/* Floating Preview Click Trigger Badge on image */}
                <button
                  type="button"
                  onClick={() => setShowPdfPreviewModal(true)}
                  className="absolute bottom-16 right-4 backdrop-blur-md bg-[#544799]/90 hover:bg-[#544799] border border-[#B0A7E7]/40 px-3 py-1.5 rounded-xl text-xs font-heading font-bold uppercase tracking-wider text-[#EAE3D3] flex items-center gap-1.5 shadow-md cursor-pointer transition-transform hover:scale-105"
                >
                  <Eye className="w-3.5 h-3.5 text-[#B0A7E7]" />
                  <span>Preview PDF</span>
                </button>

                {/* Interactive explore sheet trigger */}
                <div className="p-4 bg-[#544799] text-[#EAE3D3] border-t border-[#B0A7E7]/20 flex items-center justify-between gap-2">
                  <div className="text-xs text-[#EAE3D3] truncate">
                    <span className="font-semibold text-white">48 Βιβλία</span> σε 1 Συμπυκνωμένο Οδηγό
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => setShowPdfPreviewModal(true)}
                      className="text-xs text-[#EAE3D3] hover:text-white flex items-center gap-1 font-bold transition-colors cursor-pointer bg-white/15 hover:bg-white/25 px-2.5 py-1 rounded-md"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#B0A7E7]" />
                      <span>Preview</span>
                    </button>
                    <button
                      onClick={() => setShowContentsModal(true)}
                      className="text-xs text-[#B0A7E7] hover:text-white flex items-center gap-1 font-medium transition-colors cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Περιεχόμενα</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copywriting & Checkpoints */}
          <div className="lg:col-span-7 space-y-6">
            {/* Kicker - Exact Copy: ΔΩΡΟ ΜΕ ΤΗΝ ΕΓΓΡΑΦΗ ΣΑΣ */}
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#544799] dark:text-[#B0A7E7]">
              <BrandStar size={14} className="text-[#592828] dark:text-[#B0A7E7]" />
              <span>ΔΩΡΟ ΜΕ ΤΗΝ ΕΓΓΡΑΦΗ ΣΑΣ</span>
            </div>

            {/* Title - Roboto Condensed & Exact Copy */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#592828] dark:text-[#EAE3D3] tracking-tight leading-tight [text-wrap:balance]">
              Οδηγός 2548 – Η Χρυσή Βιβλιοθήκη της Ψηφιακής Αυτονομίας
            </h2>

            {/* Copy - Exact Copy */}
            <p className="text-base sm:text-lg text-[#592828]/85 dark:text-[#EAE3D3]/85 leading-relaxed font-normal">
              Δεν χρειάζεται να σπαταλήσεις δεκαετίες δοκιμάζοντας στα τυφλά. Με την εγγραφή σου ξεκλειδώνεις άμεσα το απόσταγμα <strong className="font-bold text-[#544799] dark:text-[#B0A7E7]">25 ετών εμπειρίας</strong> και τη συμπυκνωμένη γνώση από <strong className="font-bold text-[#544799] dark:text-[#B0A7E7]">48 κορυφαία βιβλία</strong> πάνω στην Online Επιχειρηματικότητα, το Σύγχρονο Marketing και τις Αυτοματοποιήσεις.
            </p>

            {/* Checkpoints - Exact Copy */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3 text-[#592828] dark:text-[#EAE3D3]">
                <div className="w-5 h-5 rounded-full bg-[#544799]/15 dark:bg-[#544799]/30 border border-[#544799]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#544799] dark:text-[#B0A7E7]" />
                </div>
                <span className="text-sm sm:text-base font-medium">Τα κρίσιμα μοντέλα σκέψης που ξεχωρίζουν τους κορυφαίους</span>
              </div>

              <div className="flex items-start gap-3 text-[#592828] dark:text-[#EAE3D3]">
                <div className="w-5 h-5 rounded-full bg-[#544799]/15 dark:bg-[#544799]/30 border border-[#544799]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#544799] dark:text-[#B0A7E7]" />
                </div>
                <span className="text-sm sm:text-base font-medium">Blueprint δομής ψηφιακών assets χωρίς περιττό burnout</span>
              </div>

              <div className="flex items-start gap-3 text-[#592828] dark:text-[#EAE3D3]">
                <div className="w-5 h-5 rounded-full bg-[#544799]/15 dark:bg-[#544799]/30 border border-[#544799]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#544799] dark:text-[#B0A7E7]" />
                </div>
                <span className="text-sm sm:text-base font-medium">Άμεση πρόσβαση στο 1ο καλωσόρισμα μετά την εγγραφή σου</span>
              </div>
            </div>

            {/* CTA Button Row + Preview Trigger Button */}
            <div className="pt-6 flex flex-wrap items-center gap-3 sm:gap-4">
              <CtaButton
                label="ΕΓΓΡΑΦΗ & ΛΗΨΗ"
                onClick={onOpenSubscribe}
              />

              {/* Dedicated Preview Button for 2548 Golden Library Sample PDF */}
              <button
                type="button"
                onClick={() => setShowPdfPreviewModal(true)}
                className="text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-[#544799] dark:text-[#B0A7E7] hover:text-white hover:bg-[#544799] py-3.5 px-5 rounded-xl border border-[#544799]/30 dark:border-[#B0A7E7]/30 transition-all flex items-center gap-2 cursor-pointer bg-white/70 dark:bg-white/5 shadow-xs hover:shadow-md active:scale-[0.98]"
              >
                <Eye className="w-4 h-4 text-[#544799] dark:text-[#B0A7E7]" />
                <span>Preview Δείγματος PDF</span>
              </button>

              <button
                type="button"
                onClick={() => setShowContentsModal(true)}
                className="text-xs sm:text-sm text-[#592828] dark:text-[#EAE3D3] hover:text-[#544799] dark:hover:text-[#B0A7E7] py-2.5 px-3 rounded-lg border border-[#592828]/25 dark:border-[#B0A7E7]/25 hover:border-[#544799] dark:hover:border-[#B0A7E7] transition-all flex items-center gap-2 cursor-pointer bg-white/40 dark:bg-transparent"
              >
                <Layers className="w-4 h-4 text-[#544799] dark:text-[#B0A7E7]" />
                <span>Περιεχόμενα (4 Ενότητες)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Sample Preview Modal */}
      <PdfSampleModal
        isOpen={showPdfPreviewModal}
        onClose={() => setShowPdfPreviewModal(false)}
        onSubscribeClick={onOpenSubscribe}
      />

      {/* Contents Modal */}
      {showContentsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#EAE3D3] dark:bg-[#15101B] border border-[#592828]/20 dark:border-[#B0A7E7]/20 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#592828]/15 dark:border-[#B0A7E7]/15 mb-6">
              <div>
                <span className="text-xs font-mono text-[#544799] dark:text-[#B0A7E7] uppercase tracking-wider font-bold">Περιεχόμενα Οδηγού</span>
                <h3 className="font-heading text-2xl font-bold text-[#592828] dark:text-[#EAE3D3] mt-1">48 Βιβλία Συμπυκνωμένα σε 4 Ενότητες</h3>
              </div>
              <button
                onClick={() => setShowContentsModal(false)}
                className="p-2 text-[#592828] dark:text-[#EAE3D3] rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              {GUIDE_CHAPTERS.map((ch) => (
                <div key={ch.num} className="p-4 rounded-xl border border-[#592828]/15 dark:border-[#B0A7E7]/15 bg-white/70 dark:bg-[#1E1729]/80">
                  <div className="flex items-center justify-between text-xs text-[#544799] dark:text-[#B0A7E7] font-mono mb-1 font-bold">
                    <span>ΚΕΦΑΛΑΙΟ {ch.num}</span>
                    <span className="text-[#592828]/70 dark:text-[#EAE3D3]/70">{ch.books}</span>
                  </div>
                  <h4 className="font-heading text-lg font-bold text-[#592828] dark:text-[#EAE3D3] mb-1.5">{ch.title}</h4>
                  <p className="text-xs sm:text-sm text-[#592828]/80 dark:text-[#EAE3D3]/80 leading-relaxed">{ch.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#592828]/15 dark:border-[#B0A7E7]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#592828]/75 dark:text-[#EAE3D3]/75">
                Παραδίδεται σε PDF μορφή στο email σου άμεσα μετά την εγγραφή.
              </span>
              <CtaButton
                label="ΕΓΓΡΑΦΗ & ΛΗΨΗ"
                onClick={() => {
                  setShowContentsModal(false);
                  if (onOpenSubscribe) onOpenSubscribe();
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
