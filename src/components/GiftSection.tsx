import React, { useState } from 'react';
import { CtaButton } from './CtaButton.tsx';
import { BrandStar } from './BrandStar.tsx';
import { PdfSampleModal } from './PdfSampleModal.tsx';
import { REAL_2548_CHAPTERS } from '../data/content.ts';
import { Check, BookOpen, Layers, X, Eye, Calendar, Sparkles } from 'lucide-react';

interface GiftSectionProps {
  onOpenSubscribe?: () => void;
}

export const GiftSection: React.FC<GiftSectionProps> = ({ onOpenSubscribe }) => {
  const [showContentsModal, setShowContentsModal] = useState(false);
  const [showPdfPreviewModal, setShowPdfPreviewModal] = useState(false);

  return (
    <section id="gift" className="py-24 md:py-32 relative overflow-hidden border-t border-[#592828]/15 dark:border-[#B0A7E7]/15 transition-colors">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#B0A7E7]/20 dark:bg-[#544799]/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#592828]/10 dark:bg-[#592828]/25 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Book Asset & Digital Mockup from uploaded PDF Cover */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none group">
              {/* Outer atmospheric aura */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#592828]/20 via-[#B0A7E7]/30 to-[#544799]/30 rounded-3xl blur-2xl opacity-50 dark:opacity-60 group-hover:opacity-80 transition-opacity" />

              {/* Book Container with real PDF cover */}
              <div className="relative rounded-3xl overflow-hidden border border-[#592828]/20 dark:border-[#B0A7E7]/25 bg-white dark:bg-[#1E1729] shadow-xl dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]">
                <img
                  src="/assets/aistudio/Generated_Image_October_29__2026_-_8_09PM_fae162ee.png"
                  alt="Το 2548 Internet Blueprint - 25 Χρόνια 48 Βιβλία"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
                  onClick={() => setShowPdfPreviewModal(true)}
                  title="Κάντε κλικ για προεπισκόπηση δείγματος PDF"
                />

                {/* Sub-bar directly below the image: «48 Βιβλία» on left, buttons «Preview» & «Περιεχόμενα» on right */}
                <div className="p-4 sm:p-5 bg-[#544799] text-[#EAE3D3] border-t border-[#B0A7E7]/20 flex items-center justify-between gap-3">
                  <div className="text-base sm:text-lg font-bold font-heading text-white">
                    48 Βιβλία
                  </div>
                  <div className="flex items-center gap-2.5 shrink-0">
                    <button
                      onClick={() => setShowPdfPreviewModal(true)}
                      className="text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-[#EAE3D3] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer bg-white/20 hover:bg-white/30 px-3.5 py-1.5 rounded-xl shadow-xs"
                    >
                      <Eye className="w-4 h-4 text-[#B0A7E7]" />
                      <span>Preview</span>
                    </button>
                    <button
                      onClick={() => setShowContentsModal(true)}
                      className="text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-[#B0A7E7] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer bg-white/10 hover:bg-white/20 px-3.5 py-1.5 rounded-xl shadow-xs"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Περιεχόμενα</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copywriting & Checkpoints */}
          <div className="lg:col-span-7 space-y-6">
            {/* Kicker */}
            <div className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-[#544799] dark:text-[#B0A7E7] font-heading">
              <BrandStar size={16} className="text-[#592828] dark:text-[#B0A7E7]" />
              <span>ΔΩΡΟ ΜΕ ΤΗΝ ΕΓΓΡΑΦΗ ΣΑΣ</span>
            </div>

            {/* Title: Exact requested title */}
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#592828] dark:text-[#EAE3D3] tracking-tight leading-tight [text-wrap:balance]">
              Το 2548 Internet Blueprint – Η Χρυσή Βιβλιοθήκη της Ψηφιακής Αυτονομίας
            </h2>

            {/* Copy */}
            <p className="text-lg sm:text-xl text-[#592828]/90 dark:text-[#EAE3D3]/90 leading-relaxed font-normal">
              Δεν χρειάζεται να σπαταλήσεις δεκαετίες δοκιμάζοντας στα τυφλά. Με την εγγραφή σου ξεκλειδώνεις άμεσα το απόσταγμα <strong className="font-bold text-[#544799] dark:text-[#B0A7E7]">25 ετών εμπειρίας</strong> και τη συμπυκνωμένη γνώση από <strong className="font-bold text-[#544799] dark:text-[#B0A7E7]">48 κορυφαία βιβλία</strong> πάνω στην Online Επιχειρηματικότητα, το Σύγχρονο Marketing και τις Αυτοματοποιήσεις.
            </p>

            {/* Checkpoints */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 text-[#592828] dark:text-[#EAE3D3]">
                <div className="w-6 h-6 rounded-full bg-[#544799]/15 dark:bg-[#544799]/30 border border-[#544799]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-[#544799] dark:text-[#B0A7E7]" />
                </div>
                <span className="text-base sm:text-lg font-medium">Τα κρίσιμα μοντέλα σκέψης που ξεχωρίζουν τους κορυφαίους</span>
              </div>

              <div className="flex items-start gap-3.5 text-[#592828] dark:text-[#EAE3D3]">
                <div className="w-6 h-6 rounded-full bg-[#544799]/15 dark:bg-[#544799]/30 border border-[#544799]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-[#544799] dark:text-[#B0A7E7]" />
                </div>
                <span className="text-base sm:text-lg font-medium">Blueprint δομής ψηφιακών assets χωρίς περιττό burnout</span>
              </div>

              <div className="flex items-start gap-3.5 text-[#592828] dark:text-[#EAE3D3]">
                <div className="w-6 h-6 rounded-full bg-[#544799]/15 dark:bg-[#544799]/30 border border-[#544799]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-[#544799] dark:text-[#B0A7E7]" />
                </div>
                <span className="text-base sm:text-lg font-medium">Άμεση πρόσβαση στο 1ο καλωσόρισμα μετά την εγγραφή σου</span>
              </div>
            </div>

            {/* Special Feature: 25 εβδομάδες εκπαίδευσης με 1 βιβλίο ανά εβδομάδα */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#B0A7E7]/25 via-white/60 to-[#544799]/15 dark:from-[#544799]/30 dark:via-[#1E1729] dark:to-[#592828]/25 border border-[#544799]/25 dark:border-[#B0A7E7]/30 shadow-xs">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#544799] text-[#EAE3D3] shrink-0 mt-0.5 shadow-xs">
                  <Calendar className="w-5 h-5 text-[#B0A7E7]" />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-bold font-heading text-[#592828] dark:text-[#EAE3D3]">
                    Επιλογή 25 Εβδομάδων Προσωπικής Εκπαίδευσης & Κατάρτισης
                  </div>
                  <p className="text-sm sm:text-base text-[#592828]/85 dark:text-[#EAE3D3]/85 mt-1 leading-relaxed">
                    Μετά την εγγραφή σου, μπορείς να επιλέξεις να λαμβάνεις <strong>κάθε εβδομάδα ένα βιβλίο σε email για 25 εβδομάδες</strong> — όλα τα 48 βιβλία γνώση μοιρασμένα, μια εξαιρετική συλλογή προσωπικής εκπαίδευσης και κατάρτισης που σε μεταμορφώνει σε κυρίαρχο online operator.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button Row */}
            <div className="pt-4 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <CtaButton
                label="ΕΓΓΡΑΦΗ & ΛΗΨΗ"
                onClick={onOpenSubscribe}
                size="large"
                className="text-base sm:text-lg py-4 px-8"
              />

              <button
                type="button"
                onClick={() => setShowPdfPreviewModal(true)}
                className="text-sm sm:text-base font-heading font-bold uppercase tracking-wider text-[#544799] dark:text-[#B0A7E7] hover:text-white hover:bg-[#544799] py-4 px-6 rounded-xl border border-[#544799]/30 dark:border-[#B0A7E7]/30 transition-all flex items-center gap-2 cursor-pointer bg-white/70 dark:bg-white/5 shadow-xs hover:shadow-md active:scale-[0.98]"
              >
                <Eye className="w-5 h-5 text-[#544799] dark:text-[#B0A7E7]" />
                <span>Preview Δείγματος PDF</span>
              </button>

              <button
                type="button"
                onClick={() => setShowContentsModal(true)}
                className="text-sm sm:text-base font-heading font-bold uppercase tracking-wider text-[#592828] dark:text-[#EAE3D3] hover:text-[#544799] dark:hover:text-[#B0A7E7] py-4 px-5 rounded-xl border border-[#592828]/25 dark:border-[#B0A7E7]/25 hover:border-[#544799] dark:hover:border-[#B0A7E7] transition-all flex items-center gap-2 cursor-pointer bg-white/40 dark:bg-transparent"
              >
                <Layers className="w-5 h-5 text-[#544799] dark:text-[#B0A7E7]" />
                <span>Περιεχόμενα (10 Κεφάλαια)</span>
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

      {/* Official 10-Chapter Contents Modal directly extracted from the PDF */}
      {showContentsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-[#EAE3D3] dark:bg-[#15101B] border border-[#592828]/20 dark:border-[#B0A7E7]/20 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#592828]/15 dark:border-[#B0A7E7]/15 mb-6">
              <div>
                <span className="text-xs sm:text-sm font-mono text-[#544799] dark:text-[#B0A7E7] uppercase tracking-wider font-bold">
                  ΕΠΙΣΗΜΟ ΕΓΓΡΑΦΟ PDF // theopenmind.club
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#592828] dark:text-[#EAE3D3] mt-1">
                  2548 Internet Blueprint – Πίνακας Περιεχομένων
                </h3>
                <p className="text-xs sm:text-sm text-[#592828]/70 dark:text-[#EAE3D3]/70 font-medium">
                  Συγγραφέας: Μάνος Μιχαλίτσης · 25 Χρόνια Εμπειρίας & 48 Βιβλία σε 10 Κεφάλαια
                </p>
              </div>
              <button
                onClick={() => setShowContentsModal(false)}
                className="p-2 text-[#592828] dark:text-[#EAE3D3] rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Chapters list from real PDF */}
            <div className="space-y-4">
              {REAL_2548_CHAPTERS.map((ch) => (
                <div key={ch.num} className="p-4 sm:p-5 rounded-2xl border border-[#592828]/15 dark:border-[#B0A7E7]/15 bg-white/80 dark:bg-[#1E1729]/90 shadow-xs">
                  <div className="flex items-center justify-between text-xs sm:text-sm text-[#544799] dark:text-[#B0A7E7] font-mono mb-1 font-bold">
                    <span>ΚΕΦΑΛΑΙΟ {ch.num}</span>
                    <span className="text-[#592828]/70 dark:text-[#EAE3D3]/70">{ch.booksCount}</span>
                  </div>
                  <h4 className="font-heading text-lg sm:text-xl font-bold text-[#592828] dark:text-[#EAE3D3] mb-1.5">{ch.title}</h4>
                  <p className="text-sm text-[#592828]/85 dark:text-[#EAE3D3]/85 leading-relaxed mb-3">{ch.summary}</p>
                  
                  {/* Book list */}
                  <div className="pt-2 border-t border-[#592828]/10 dark:border-[#B0A7E7]/10">
                    <div className="text-xs font-mono font-bold text-[#544799] dark:text-[#B0A7E7] uppercase mb-1">Βιβλία που αναλύονται:</div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#592828]/80 dark:text-[#EAE3D3]/80">
                      {ch.books.map((b, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#544799] dark:bg-[#B0A7E7] shrink-0" />
                          <span className="truncate">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-6 border-t border-[#592828]/15 dark:border-[#B0A7E7]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs sm:text-sm text-[#592828]/80 dark:text-[#EAE3D3]/80 text-center sm:text-left">
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
