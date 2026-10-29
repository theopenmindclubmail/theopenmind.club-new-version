import React, { useState } from 'react';
import { X, FileText, Sparkles, Check, ArrowRight, BookOpen, Layers, Lightbulb, Zap, ShieldCheck } from 'lucide-react';
import { BrandStar } from './BrandStar.tsx';
import { CtaButton } from './CtaButton.tsx';
import { REAL_2548_CHAPTERS } from '../data/content.ts';

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
  const [activeTab, setActiveTab] = useState<'overview' | 'excerpts' | 'chapters'>('overview');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#FAF7F0] dark:bg-[#15101B] border border-[#592828]/25 dark:border-[#B0A7E7]/25 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Header Toolbar */}
        <div className="px-6 py-4 bg-[#EAE3D3] dark:bg-[#1C1524] border-b border-[#592828]/15 dark:border-[#B0A7E7]/15 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3 truncate">
            <div className="p-2 rounded-xl bg-[#544799] text-[#EAE3D3] shrink-0 shadow-xs">
              <FileText className="w-5 h-5 text-[#B0A7E7]" />
            </div>
            <div className="truncate">
              <span className="text-base sm:text-lg font-bold text-[#592828] dark:text-[#EAE3D3] font-heading truncate block">
                2548 Internet Blueprint – Επίσημο Executive Preview
              </span>
              <span className="text-xs text-[#592828]/70 dark:text-[#EAE3D3]/70 font-mono">
                Μάνος Μιχαλίτσης · 25 Χρόνια Εμπειρίας & 48 Βιβλία σε 10 Στρατηγικά Κεφάλαια
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#592828] dark:text-[#EAE3D3] hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer shrink-0"
            aria-label="Κλείσιμο"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 pt-3 pb-2 bg-[#FAF7F0] dark:bg-[#15101B] border-b border-[#592828]/10 dark:border-[#B0A7E7]/10 flex items-center gap-2 sm:gap-4 overflow-x-auto shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-heading font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-[#544799] text-white shadow-xs'
                : 'text-[#592828]/70 dark:text-[#EAE3D3]/70 hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            1. Σύνοψη & Η Μεγάλη Εικόνα
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('excerpts')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-heading font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'excerpts'
                ? 'bg-[#544799] text-white shadow-xs'
                : 'text-[#592828]/70 dark:text-[#EAE3D3]/70 hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            2. Χρυσοί Κανόνες & Frameworks
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('chapters')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-heading font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'chapters'
                ? 'bg-[#544799] text-white shadow-xs'
                : 'text-[#592828]/70 dark:text-[#EAE3D3]/70 hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            3. Τα 10 Κεφάλαια (Πίνακας)
          </button>
        </div>

        {/* Document Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="p-6 rounded-2xl bg-white dark:bg-[#1E1729] border border-[#592828]/15 dark:border-[#B0A7E7]/20 shadow-sm flex flex-col md:flex-row gap-6 items-center">
                <img
                  src="/assets/aistudio/Generated_Image_October_29__2026_-_8_09PM_fae162ee.png"
                  alt="2548 Blueprint Cover"
                  className="w-36 sm:w-44 rounded-xl shadow-lg border border-[#592828]/20 shrink-0"
                />
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#544799] dark:text-[#B0A7E7] uppercase tracking-wider">
                    <BrandStar size={14} className="text-[#592828] dark:text-[#B0A7E7]" />
                    <span>ΑΠΟΚΛΕΙΣΤΙΚΟ BLUEPRINT ΨΗΦΙΑΚΗΣ ΑΥΤΟΝΟΜΙΑΣ</span>
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#592828] dark:text-white leading-tight">
                    Γιατί γράφτηκε το 2548 Internet Blueprint;
                  </h3>
                  <p className="text-sm sm:text-base text-[#592828]/85 dark:text-[#EAE3D3]/85 leading-relaxed">
                    «Χρειάστηκαν <strong>25 χρόνια συνεχών δοκιμών</strong>, επιτυχιών και λαθών στο παγκόσμιο διαδίκτυο, καθώς και η αποδόμηση <strong>48 κορυφαίων βιβλίων</strong> επιχειρηματικότητας, ψυχολογίας, marketing και αυτοματοποιήσεων για να αποσταχθεί αυτός ο οδηγός. Ο στόχος είναι ένας: <em>να γλιτώσεις 10 χρόνια άσκοπης περιπλάνησης και να χτίσεις πραγματική ψηφιακή αυτονομία</em>.»
                  </p>
                  <div className="text-xs font-mono text-[#544799] dark:text-[#B0A7E7] font-semibold">
                    — Μάνος Μιχαλίτσης, theopenmind.club
                  </div>
                </div>
              </div>

              {/* 4 Core Pillars Overview */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#1E1729] border border-[#592828]/15 dark:border-[#B0A7E7]/20">
                  <div className="flex items-center gap-2.5 text-[#544799] dark:text-[#B0A7E7] font-heading font-bold text-base mb-2">
                    <Lightbulb className="w-5 h-5 shrink-0" />
                    <h4>1. Mindset & Cognitive Models</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#592828]/80 dark:text-[#EAE3D3]/80 leading-relaxed">
                    Αποδόμηση των Kahneman, Marcus Aurelius, Taleb & Naval. Πώς σκέφτονται οι digital operators που αντέχουν σε κάθε κρίση χωρίς πανικό.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#1E1729] border border-[#592828]/15 dark:border-[#B0A7E7]/20">
                  <div className="flex items-center gap-2.5 text-[#544799] dark:text-[#B0A7E7] font-heading font-bold text-base mb-2">
                    <Zap className="w-5 h-5 shrink-0" />
                    <h4>2. Irresistible Offers & Funnel Math</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#592828]/80 dark:text-[#EAE3D3]/80 leading-relaxed">
                    Μοντέλα Hormozi ($100M Offers) και Russell Brunson. Πώς στήνεις μαθηματικά κερδοφόρες προσφορές που μετατρέπουν επισκέπτες σε πιστούς πελάτες.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#1E1729] border border-[#592828]/15 dark:border-[#B0A7E7]/20">
                  <div className="flex items-center gap-2.5 text-[#544799] dark:text-[#B0A7E7] font-heading font-bold text-base mb-2">
                    <Layers className="w-5 h-5 shrink-0" />
                    <h4>3. Systems, Automations & Scale</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#592828]/80 dark:text-[#EAE3D3]/80 leading-relaxed">
                    Αυτοματοποιημένες ροές email, lead magnets, webhook pipelines και συστήματα που δουλεύουν για σένα χωρίς να απαιτούν 16 ώρες χειροκίνητης εργασίας.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#1E1729] border border-[#592828]/15 dark:border-[#B0A7E7]/20">
                  <div className="flex items-center gap-2.5 text-[#544799] dark:text-[#B0A7E7] font-heading font-bold text-base mb-2">
                    <Sparkles className="w-5 h-5 shrink-0" />
                    <h4>4. Next-Gen Tech & Vibe Coding</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#592828]/80 dark:text-[#EAE3D3]/80 leading-relaxed">
                    Υλοποίηση σύγχρονου web software και landing pages με AI agents, Edge architecture και καθαρή πρόθεση χωρίς boilerplate περιττό κώδικα.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'excerpts' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="p-5 rounded-2xl bg-white dark:bg-[#1E1729] border border-[#592828]/15 dark:border-[#B0A7E7]/20">
                <span className="text-xs font-mono font-bold text-[#544799] dark:text-[#B0A7E7] uppercase">
                  ΑΠΟΣΠΑΣΜΑ 01 // ΕΠΙΧΕΙΡΗΜΑΤΙΚΗ ΜΟΧΛΕΥΣΗ
                </span>
                <h4 className="font-heading text-lg font-bold text-[#592828] dark:text-white mt-1">
                  Naval Ravikant – «Permissionless Leverage»
                </h4>
                <p className="text-sm text-[#592828]/85 dark:text-[#EAE3D3]/85 mt-2 leading-relaxed italic">
                  «Στην παλιά οικονομία, για να πολλαπλασιάσεις το αποτέλεσμά σου χρειαζόσουν άδεια από τράπεζες ή στρατούς εργαζομένων. Στη νέα οικονομία, ο κώδικας και τα media (όπως ένα αφοσιωμένο Mailcast) δουλεύουν για σένα 24/7, με οριακό κόστος αναπαραγωγής ίσο με μηδέν. Μάθε να χτίζεις περιουσιακά στοιχεία που δεν κοιμούνται ποτέ.»
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-[#1E1729] border border-[#592828]/15 dark:border-[#B0A7E7]/20">
                <span className="text-xs font-mono font-bold text-[#544799] dark:text-[#B0A7E7] uppercase">
                  ΑΠΟΣΠΑΣΜΑ 02 // ΑΡΧΙΤΕΚΤΟΝΙΚΗ ΠΡΟΣΦΟΡΑΣ
                </span>
                <h4 className="font-heading text-lg font-bold text-[#592828] dark:text-white mt-1">
                  Alex Hormozi – «The Grand Slam Offer Formula»
                </h4>
                <p className="text-sm text-[#592828]/85 dark:text-[#EAE3D3]/85 mt-2 leading-relaxed italic">
                  «Η τιμή δεν είναι ποτέ το πραγματικό πρόβλημα. Το πρόβλημα είναι η σχέση Αντιλαμβανόμενης Αξίας προς Κόπο και Χρόνο. Όταν αυξάνεις στο μέγιστο το Dream Outcome και εκμηδενίζεις την προσπάθεια του πελάτη μέσω αυτοματισμών, η πρότασή σου γίνεται αυτονόητη επιλογή.»
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-[#1E1729] border border-[#592828]/15 dark:border-[#B0A7E7]/20">
                <span className="text-xs font-mono font-bold text-[#544799] dark:text-[#B0A7E7] uppercase">
                  ΑΠΟΣΠΑΣΜΑ 03 // ΑΝΤΙ-ΕΥΘΡΑΥΣΤΟΤΗΤΑ
                </span>
                <h4 className="font-heading text-lg font-bold text-[#592828] dark:text-white mt-1">
                  Nassim Nicholas Taleb – «Antifragility & Owned Audiences»
                </h4>
                <p className="text-sm text-[#592828]/85 dark:text-[#EAE3D3]/85 mt-2 leading-relaxed italic">
                  «Όσοι βασίζονται αποκλειστικά σε social media accounts είναι εύθραυστοι: ένας αλγόριθμος μπορεί να εξαφανίσει το εισόδημά τους σε μια νύχτα. Η μόνη αντι-εύθραυστη στρατηγική είναι η ιδιόκτητη λίστα email (Owned Audience) σε συνδυασμό με high-converting funnels.»
                </p>
              </div>
            </div>
          )}

          {activeTab === 'chapters' && (
            <div className="space-y-3 animate-in fade-in duration-200">
              <div className="text-xs sm:text-sm text-[#592828]/80 dark:text-[#EAE3D3]/80 font-medium mb-2">
                Ακολουθούν τα 10 κεφάλαια του πλήρους PDF όπως παραδίδονται στο email σου:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {REAL_2548_CHAPTERS.map((ch) => (
                  <div key={ch.num} className="p-3.5 rounded-xl bg-white dark:bg-[#1E1729] border border-[#592828]/15 dark:border-[#B0A7E7]/20">
                    <div className="flex items-center justify-between text-xs font-mono font-bold text-[#544799] dark:text-[#B0A7E7]">
                      <span>ΚΕΦΑΛΑΙΟ {ch.num}</span>
                      <span className="text-[#592828]/70 dark:text-[#EAE3D3]/70">{ch.booksCount}</span>
                    </div>
                    <div className="font-heading text-sm font-bold text-[#592828] dark:text-white mt-1">
                      {ch.title}
                    </div>
                    <div className="text-xs text-[#592828]/75 dark:text-[#EAE3D3]/75 mt-1 truncate">
                      {ch.summary}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Conversion Hook Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-[#B0A7E7]/25 via-white/80 to-[#544799]/15 dark:from-[#544799]/30 dark:via-[#1E1729] dark:to-[#592828]/25 border border-[#544799]/30 dark:border-[#B0A7E7]/30 shadow-md">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-xs font-mono font-bold text-[#544799] dark:text-[#B0A7E7] uppercase flex items-center justify-center sm:justify-start gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>100% ΔΩΡΕΑΝ ΠΡΟΣΒΑΣΗ ΣΤΟ ΠΛΗΡΕΣ ΕΓΓΡΑΦΟ</span>
                </div>
                <div className="text-base sm:text-lg font-extrabold font-heading text-[#592828] dark:text-white">
                  Αυτό είναι μόνο ένα μικρό δείγμα 2%. Κατέβασε ολόκληρο το 2548 Blueprint τώρα!
                </div>
                <div className="text-xs sm:text-sm text-[#592828]/80 dark:text-[#EAE3D3]/80">
                  Περιλαμβάνει αναλυτικά και τα 48 βιβλία + επιλογή 25 εβδομάδων προσωπικής εκπαίδευσης στο email σου.
                </div>
              </div>
              <CtaButton
                label="ΕΓΓΡΑΦΗ & ΛΗΨΗ"
                onClick={() => {
                  onClose();
                  if (onSubscribeClick) onSubscribeClick();
                }}
                size="large"
                className="shrink-0 text-sm sm:text-base py-3.5 px-7"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="px-6 py-4 bg-[#EAE3D3] dark:bg-[#1C1524] border-t border-[#592828]/15 dark:border-[#B0A7E7]/15 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-[#592828]/80 dark:text-[#EAE3D3]/80 text-center sm:text-left font-medium">
            Άμεση αποστολή του πλήρους PDF 2548 στο inbox σου με την εγγραφή.
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
