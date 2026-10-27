import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Download, FileText, Lock, Sparkles, Check, ArrowRight } from 'lucide-react';
import { BrandStar } from './BrandStar.tsx';
import { CtaButton, CTA_TARGET_URL } from './CtaButton.tsx';

interface PdfSampleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubscribeClick?: () => void;
}

export const PdfSampleModal: React.FC<PdfSampleModalProps> = ({
  isOpen,
  onClose,
  onSubscribeClick
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  if (!isOpen) return null;

  const handleDownloadSample = () => {
    const sampleText = `# Οδηγός 2548 – Η Χρυσή Βιβλιοθήκη της Ψηφιακής Αυτονομίας (Sample Excerpt)
© 2026 theopenmind.club. All rights reserved.

---
## ΕΙΣΑΓΩΓΗ: ΤΟ ΑΠΟΣΤΑΓΜΑ 25 ΕΤΩΝ & 48 ΒΙΒΛΙΩΝ
Η ψηφιακή αυτονομία δεν προκύπτει από τύχη ή από επιπόλαια trends. Είναι αποτέλεσμα μαθηματικής αρχιτεκτονικής και πειθαρχίας.
Σε αυτό το απόσπασμα θα βρεις τα θεμελιώδη νοητικά μοντέλα του Κεφαλαίου 1.

### 01. Mental Models for Sovereign Creators
1. Charlie Munger: Inversion Principle (Αντιστροφή)
   - Μην ρωτάς πώς θα πετύχεις. Ρώτα τι οδηγεί με μαθηματική βεβαιότητα στην αποτυχία και εξάλειψέ το.
   - Στα digital assets: Αποτυχία σημαίνει εξάρτηση από μία μόνο πλατφόρμα, μηδενική λίστα email και χειροκίνητη εξυπηρέτηση.

2. Nassim Nicholas Taleb: Antifragility (Αντι-ευθραυστότητα)
   - Χτίσε funnels που ωφελούνται από τον θόρυβο και τις αλλαγές των αλγορίθμων, αντί να καταρρέουν.

3. Naval Ravikant: Permissionless Leverage
   - Κώδικας & Media: Δουλεύουν για σένα ενώ κοιμάσαι, χωρίς να ζητήσεις άδεια από κανέναν.

---
[Για να ξεκλειδώσεις ολόκληρο τον οδηγό με τις αναλύσεις και των 48 βιβλίων, κάνε εγγραφή στο: https://www.theopenmind.club/subscribe]
`;
    const blob = new Blob([sampleText], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Odigos_2548_Sample_Excerpt.md');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#FAF7F0] dark:bg-[#15101B] border border-[#592828]/25 dark:border-[#B0A7E7]/25 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* PDF Reader Top Toolbar */}
        <div className="px-5 py-3.5 bg-[#EAE3D3] dark:bg-[#1C1524] border-b border-[#592828]/15 dark:border-[#B0A7E7]/15 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3 truncate">
            <div className="p-1.5 rounded-lg bg-[#544799] text-[#EAE3D3]">
              <FileText className="w-4 h-4" />
            </div>
            <div className="truncate">
              <span className="text-xs sm:text-sm font-bold text-[#592828] dark:text-[#EAE3D3] font-heading truncate block">
                Odigos_2548_Golden_Library_Sample_v2026.pdf
              </span>
              <span className="text-[10px] text-[#592828]/60 dark:text-[#EAE3D3]/60 font-mono">
                Executive Preview · 48 Βιβλία / 25 Έτη
              </span>
            </div>
          </div>

          {/* Page Navigator & Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="flex items-center rounded-lg bg-white/70 dark:bg-white/5 border border-[#592828]/15 dark:border-[#B0A7E7]/20 p-0.5 text-xs font-mono">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-1 text-[#592828] dark:text-[#EAE3D3] hover:text-[#544799] disabled:opacity-30 cursor-pointer"
                title="Προηγούμενη σελίδα"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="px-2 text-[#592828] dark:text-[#EAE3D3] font-semibold">
                {currentPage} / {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-1 text-[#592828] dark:text-[#EAE3D3] hover:text-[#544799] disabled:opacity-30 cursor-pointer"
                title="Επόμενη σελίδα"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={handleDownloadSample}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-white/10 text-[#592828] dark:text-[#EAE3D3] border border-[#592828]/20 dark:border-[#B0A7E7]/20 hover:bg-[#544799] hover:text-[#EAE3D3] transition-colors cursor-pointer"
              title="Λήψη αποσπάσματος"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Λήψη Δείγματος</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#592828] dark:text-[#EAE3D3] hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Κλείσιμο"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Document Canvas View */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#EAE3D3]/40 dark:bg-[#0E0A14] flex justify-center">
          <div className="w-full max-w-2xl bg-white dark:bg-[#1E1729] rounded-2xl shadow-xl border border-[#592828]/15 dark:border-[#B0A7E7]/20 p-6 sm:p-12 text-[#2D1B1B] dark:text-[#EAE3D3] relative min-h-[580px] flex flex-col justify-between">
            
            {/* Watermark stamp */}
            <div className="absolute top-4 right-4 text-[10px] font-mono text-[#544799]/50 dark:text-[#B0A7E7]/50 tracking-wider uppercase border border-current px-2 py-0.5 rounded">
              OFFICIAL SAMPLE EXCERPT
            </div>

            {/* PAGE 1: COVER & EXECUTIVE SUMMARY */}
            {currentPage === 1 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="text-center pt-4 pb-6 border-b border-[#592828]/10 dark:border-[#B0A7E7]/10">
                  <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-[#B0A7E7]/20 dark:bg-[#544799]/30 text-[#544799] dark:text-[#B0A7E7] mb-4">
                    <BrandStar size={36} className="text-[#592828] dark:text-[#B0A7E7]" />
                  </div>
                  <div className="text-xs font-mono font-bold tracking-widest text-[#544799] dark:text-[#B0A7E7] uppercase mb-1">
                    THE OPEN MIND CLUB // SPECIAL EDITION
                  </div>
                  <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#592828] dark:text-white tracking-tight leading-tight">
                    Οδηγός 2548 – Η Χρυσή Βιβλιοθήκη
                  </h1>
                  <p className="text-sm text-[#592828]/70 dark:text-[#EAE3D3]/70 font-medium mt-1">
                    Το Απόσταγμα 25 Ετών Εμπειρίας & 48 Κορυφαίων Βιβλίων
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-[#592828]/85 dark:text-[#EAE3D3]/85 leading-relaxed">
                  <p>
                    <strong>Σκοπός του Οδηγού:</strong> Δεν χρειάζεται να σπαταλήσεις δεκαετίες δοκιμάζοντας στα τυφλά. Αυτός ο οδηγός κωδικοποιεί τα πιο δοκιμασμένα μοντέλα σκέψης, τη μηχανική των funnels, τις αυτοματοποιήσεις και το Vibe Coding σε μια άμεση, εφαρμόσιμη αρχιτεκτονική.
                  </p>

                  <div className="p-4 rounded-xl bg-[#FAF7F0] dark:bg-[#15101B] border border-[#592828]/15 dark:border-[#B0A7E7]/20 space-y-2">
                    <div className="text-xs font-bold text-[#544799] dark:text-[#B0A7E7] font-heading uppercase">
                      Περιεχόμενα Πλήρους Έκδοσης (48 Βιβλία):
                    </div>
                    <ul className="text-xs space-y-1.5 text-[#592828]/80 dark:text-[#EAE3D3]/80">
                      <li>• <strong>Κεφάλαιο 1:</strong> Mindset & Cognitive Models (Kahneman, Munger, Aurelius, Taleb)</li>
                      <li>• <strong>Κεφάλαιο 2:</strong> Irresistible Offer & Funnel Math (Hormozi, Brunson, Schwartz)</li>
                      <li>• <strong>Κεφάλαιο 3:</strong> Systems, Automations & Leverage (Naval, Ferriss, Goldratt)</li>
                      <li>• <strong>Κεφάλαιο 4:</strong> Vibe Coding & Next-Gen Digital Assets (Agentic AI, Edge Tech)</li>
                    </ul>
                  </div>

                  <p className="text-xs italic text-[#592828]/70 dark:text-[#EAE3D3]/70">
                    Κάνε κλικ στο βέλος «Επόμενο» (Next) για να διαβάσεις το απόσπασμα του Κεφαλαίου 1.
                  </p>
                </div>
              </div>
            )}

            {/* PAGE 2: CHAPTER 1 EXCERPT */}
            {currentPage === 2 && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div className="pb-3 border-b border-[#592828]/10 dark:border-[#B0A7E7]/10">
                  <span className="text-xs font-mono font-bold text-[#544799] dark:text-[#B0A7E7] uppercase">
                    ΚΕΦΑΛΑΙΟ 01 // ΑΠΟΣΠΑΣΜΑ
                  </span>
                  <h2 className="font-heading text-2xl font-bold text-[#592828] dark:text-white mt-0.5">
                    Νοητικά Μοντέλα του Κυρίαρχου Δημιουργού
                  </h2>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-[#592828]/90 dark:text-[#EAE3D3]/90 leading-relaxed">
                  <div className="p-3.5 rounded-xl border border-[#592828]/15 dark:border-[#B0A7E7]/20 bg-[#FAF7F0] dark:bg-[#15101B]">
                    <div className="font-bold text-xs text-[#544799] dark:text-[#B0A7E7] mb-1">
                      1. Η Αρχή της Αντιστροφής (Charlie Munger)
                    </div>
                    <p className="text-xs text-[#592828]/80 dark:text-[#EAE3D3]/80">
                      «Invert, always invert.» Αντί να αναζητάς το τέλειο funnel, κατάγραψε όλα όσα εγγυώνται την επιχειρηματική σου εξάντληση (μηδενική αυτόνομη λίστα, πλήρης εξάρτηση από αλγορίθμους social media, χειροκίνητη εξυπηρέτηση). Εξάλειψε αυτά τα τρία και έχεις ήδη κερδίσει το 80% της αγοράς.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl border border-[#592828]/15 dark:border-[#B0A7E7]/20 bg-[#FAF7F0] dark:bg-[#15101B]">
                    <div className="font-bold text-xs text-[#544799] dark:text-[#B0A7E7] mb-1">
                      2. Αντι-ευθραυστότητα & Owned Channels (Nassim Taleb)
                    </div>
                    <p className="text-xs text-[#592828]/80 dark:text-[#EAE3D3]/80">
                      Τα εύθραυστα συστήματα καταστρέφονται από μία αλλαγή στους κανόνες της πλατφόρμας. Τα αντι-εύθραυστα συστήματα (όπως ένα αφοσιωμένο Mailcast με direct funnels) γίνονται πιο ισχυρά όταν ο θόρυβος των social media αυξάνεται.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl border border-[#592828]/15 dark:border-[#B0A7E7]/20 bg-[#FAF7F0] dark:bg-[#15101B]">
                    <div className="font-bold text-xs text-[#544799] dark:text-[#B0A7E7] mb-1">
                      3. Μόχλευση χωρίς Άδεια (Naval Ravikant)
                    </div>
                    <p className="text-xs text-[#592828]/80 dark:text-[#EAE3D3]/80">
                      Ο παραδοσιακός επιχειρηματίας χρειαζόταν κεφάλαιο και προσωπικό. Ο σύγχρονος digital operator μοχλεύει κώδικα (Vibe Coding) και media (Mailcasts) με οριακό κόστος αναπαραγωγής ίσο με μηδέν.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* PAGE 3: BLUEPRINT & METRICS */}
            {currentPage === 3 && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div className="pb-3 border-b border-[#592828]/10 dark:border-[#B0A7E7]/10">
                  <span className="text-xs font-mono font-bold text-[#544799] dark:text-[#B0A7E7] uppercase">
                    ΚΕΦΑΛΑΙΟ 02 & 03 // FRAMEWORK DIAGRAM
                  </span>
                  <h2 className="font-heading text-2xl font-bold text-[#592828] dark:text-white mt-0.5">
                    Η Αρχιτεκτονική των Αυτόνομων Funnels
                  </h2>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm text-[#592828]/90 dark:text-[#EAE3D3]/90 leading-relaxed">
                  <div className="p-4 rounded-xl bg-[#FAF7F0] dark:bg-[#15101B] border border-[#592828]/15 dark:border-[#B0A7E7]/20">
                    <div className="text-xs font-mono font-bold text-[#544799] dark:text-[#B0A7E7] mb-2 uppercase">
                      The 3-Phase Conversion Engine
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                      <div className="p-2.5 rounded-lg bg-white dark:bg-[#1E1729] border border-[#592828]/10 dark:border-[#B0A7E7]/15">
                        <div className="text-xs font-bold text-[#592828] dark:text-white">Φάση 1: Inbound</div>
                        <div className="text-[11px] text-[#592828]/70 dark:text-[#EAE3D3]/70 mt-1">High-value lead magnet (π.χ. Οδηγός 2548)</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white dark:bg-[#1E1729] border border-[#592828]/10 dark:border-[#B0A7E7]/15">
                        <div className="text-xs font-bold text-[#544799] dark:text-[#B0A7E7]">Φάση 2: Nurture</div>
                        <div className="text-[11px] text-[#592828]/70 dark:text-[#EAE3D3]/70 mt-1">Εβδομαδιαίο Mailcast με συστήματα κύρους</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white dark:bg-[#1E1729] border border-[#592828]/10 dark:border-[#B0A7E7]/15">
                        <div className="text-xs font-bold text-[#592828] dark:text-white">Φάση 3: Autonomy</div>
                        <div className="text-[11px] text-[#592828]/70 dark:text-[#EAE3D3]/70 mt-1">High-ticket ή SaaS projects 24/7 στο autopilot</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl border border-dashed border-[#592828]/25 dark:border-[#B0A7E7]/30 text-center">
                    <p className="text-xs text-[#592828]/80 dark:text-[#EAE3D3]/80">
                      💡 <em>«Όταν το σύστημά σου είναι σωστά ρυθμισμένο, κάθε email δεν είναι έξοδο, αλλά περιουσιακό στοιχείο με μετρήσιμο Return On Attention.»</em>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* PAGE 4: LOCKED SECTIONS & UNLOCK BANNER */}
            {currentPage === 4 && (
              <div className="space-y-6 animate-in fade-in duration-200 text-center py-4">
                <div className="w-14 h-14 rounded-2xl bg-[#544799]/15 dark:bg-[#544799]/30 border border-[#544799]/30 flex items-center justify-center mx-auto text-[#544799] dark:text-[#B0A7E7]">
                  <Lock className="w-7 h-7" />
                </div>

                <div>
                  <span className="text-xs font-mono font-bold tracking-wider text-[#544799] dark:text-[#B0A7E7] uppercase">
                    ΥΠΟΛΟΙΠΕΣ 48 ΣΕΛΙΔΕΣ // ΠΛΗΡΗΣ ΟΔΗΓΟΣ 2548
                  </span>
                  <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#592828] dark:text-white mt-1">
                    Ξεκλείδωσε ολόκληρη τη Χρυσή Βιβλιοθήκη
                  </h2>
                  <p className="text-xs sm:text-sm text-[#592828]/80 dark:text-[#EAE3D3]/80 max-w-md mx-auto mt-2 leading-relaxed">
                    Έχεις διαβάσει το πρώτο δείγμα. Ο πλήρης Οδηγός 2548 περιλαμβάνει αναλυτικά blueprints και frameworks από 48 βιβλία πάνω σε Sales Funnels, Vibe Coding, AI Agents & Automations.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF7F0] dark:bg-[#15101B] border border-[#592828]/15 dark:border-[#B0A7E7]/20 text-left max-w-md mx-auto space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#592828] dark:text-[#EAE3D3]">
                    <Check className="w-4 h-4 text-[#544799] dark:text-[#B0A7E7]" />
                    <span>Πλήρης ανάλυση 48 βιβλίων σε 4 τομείς</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#592828] dark:text-[#EAE3D3]">
                    <Check className="w-4 h-4 text-[#544799] dark:text-[#B0A7E7]" />
                    <span>Κώδικας & Prompt Blueprints για Vibe Coding</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#592828] dark:text-[#EAE3D3]">
                    <Check className="w-4 h-4 text-[#544799] dark:text-[#B0A7E7]" />
                    <span>Άμεση ψηφιακή παράδοση σε PDF στο email σου</span>
                  </div>
                </div>

                <div className="pt-2">
                  <CtaButton
                    label="ΕΓΓΡΑΦΗ & ΛΗΨΗ"
                    onClick={() => {
                      onClose();
                      if (onSubscribeClick) onSubscribeClick();
                    }}
                    size="large"
                  />
                  <p className="text-[11px] text-[#592828]/70 dark:text-[#EAE3D3]/70 mt-2">
                    100% Δωρεάν · Άμεσο Ξεκλείδωμα
                  </p>
                </div>
              </div>
            )}

            {/* Document Footer Ribbon */}
            <div className="pt-4 mt-6 border-t border-[#592828]/10 dark:border-[#B0A7E7]/10 flex items-center justify-between text-[11px] text-[#592828]/60 dark:text-[#EAE3D3]/60 font-mono">
              <span>theopenmind.club / 2548 Library</span>
              <div className="flex items-center gap-3">
                <span>Σελίδα {currentPage} από {totalPages}</span>
                {currentPage < totalPages && (
                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    className="text-[#544799] dark:text-[#B0A7E7] font-bold hover:underline cursor-pointer flex items-center gap-1"
                  >
                    <span>Επόμενη σελίδα</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Modal Bottom CTA Bar */}
        <div className="px-6 py-4 bg-[#EAE3D3] dark:bg-[#1C1524] border-t border-[#592828]/15 dark:border-[#B0A7E7]/15 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-[#592828]/80 dark:text-[#EAE3D3]/80 text-center sm:text-left">
            <span>Θέλεις ολόκληρο τον οδηγό; Κάνε εγγραφή στο Mailcast και λάβε τον άμεσα.</span>
          </div>
          <CtaButton
            label="ΕΓΓΡΑΦΗ & ΛΗΨΗ"
            onClick={() => {
              onClose();
              if (onSubscribeClick) onSubscribeClick();
            }}
          />
        </div>

      </div>
    </div>
  );
};
