import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { BrandStar } from './BrandStar.tsx';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Newsletter & Σκοπός',
    question: 'Τι είναι το theopenmind.club Mailcast και σε ποιους απευθύνεται;',
    answer: 'Το theopenmind.club είναι ένα εβδομαδιαίο ψηφιακό dispatch (Mailcast) σχεδιασμένο για creators, tech entrepreneurs, operators και επαγγελματίες που αρνούνται τα παραδοσιακά στεγανά. Κάθε Κυριακή αποδομούμε πραγματικά συστήματα, mindset shifts και εργαλεία υλοποίησης χωρίς περιττή φλυαρία.'
  },
  {
    id: 'faq-2',
    category: 'Ψηφιακή Αυτονομία',
    question: 'Τι σημαίνει στην πράξη «Ψηφιακή Αυτονομία»;',
    answer: 'Σημαίνει να μην εξαρτάσαι από τις ιδιοτροπίες των αλγορίθμων των social media ή από τρίτες πλατφόρμες. Χτίζεις ιδιόκτητα assets (owned audience, newsletters, automated funnels και custom web apps) που παράγουν αξία αθόρυβα 24/7, αγοράζοντας πίσω τον χρόνο και την ανεξαρτησία σου.'
  },
  {
    id: 'faq-3',
    category: 'Τεχνολογία & AI',
    question: 'Τι είναι το Vibe Coding και χρειάζομαι τεχνικές γνώσεις προγραμματιστή;',
    answer: 'Καθόλου. Το Vibe Coding είναι η σύγχρονη φιλοσοφία υλοποίησης όπου καθοδηγείς AI agents και rapid prototyping εργαλεία με σαφή πρόθεση, διαύγεια και prompt engineering. Σου επιτρέπει να φτιάχνεις λειτουργικό λογισμικό, landing pages και αυτοματισμούς σε ώρες αντί για μήνες, χωρίς να γράφεις boilerplate κώδικα.'
  },
  {
    id: 'faq-4',
    category: 'Οδηγός 2548',
    question: 'Πώς παραδίδεται ο «Οδηγός 2548 – Η Χρυσή Βιβλιοθήκη»;',
    answer: 'Με την καταχώριση του email σου, αποκτάς άμεση ψηφιακή πρόσβαση στο αρχείο του Οδηγού (συμπυκνωμένη γνώση 25 ετών και 48 κορυφαίων βιβλίων σε 4 πυλώνες: Mindset, Funnel Math, Systems & Vibe Coding). Το αρχείο αποστέλλεται επίσης απευθείας στο inbox σου.'
  },
  {
    id: 'faq-5',
    category: 'Συχνότητα & Privacy',
    question: 'Πόσο συχνά στέλνετε emails και τι ισχύει για τα δεδομένα μου;',
    answer: 'Στέλνουμε αυστηρά 1 email την εβδομάδα, κάθε Κυριακή πρωί. Σεβόμαστε απόλυτα τον χρόνο και την ηρεμία σου: μηδενικό spam, πλήρης συμμόρφωση με το GDPR, και δυνατότητα διαγραφής με 1 κλικ στο υποσέλιδο κάθε μηνύματος.'
  },
  {
    id: 'faq-6',
    category: 'Κόστος & Διαφάνεια',
    question: 'Υπάρχει κάποιο κρυφό κόστος ή συνδρομή;',
    answer: 'Όχι, η συνδρομή στο Mailcast και η λήψη του Οδηγού 2548 είναι 100% δωρεάν. Η αποστολή μας είναι να χτίσουμε μια κοινότητα σκεπτόμενων ανθρώπων με ανοιχτό μυαλό και υψηλά πρότυπα εκτέλεσης.'
  },
  {
    id: 'faq-7',
    category: 'Μεθοδολογία DACH',
    question: 'Τι προσφέρει η εκπαίδευση από τη γερμανόφωνη αγορά (DACH);',
    answer: 'Η γερμανική και ελβετική σχολή direct-response και digital engineering φημίζονται παγκοσμίως για τη μαθηματική τους προσέγγιση: zero-fluff αρχιτεκτονική, απόλυτη ακρίβεια στις μετρήσεις και αξιόπιστα funnels που αντέχουν στον χρόνο αντί για επιπόλαια trends.'
  }
];

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 relative border-t border-[#592828]/15 dark:border-[#B0A7E7]/15 bg-[#FAF7F0]/60 dark:bg-[#120D18]/70 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B0A7E7]/25 dark:bg-[#544799]/30 border border-[#544799]/20 text-xs font-mono text-[#544799] dark:text-[#B0A7E7] mb-4">
            <BrandStar size={13} className="text-[#592828] dark:text-[#B0A7E7]" />
            <span className="font-bold">ΣΥΧΝΕΣ ΕΡΩΤΗΣΕΙΣ // FAQ</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#592828] dark:text-[#EAE3D3] tracking-tight [text-wrap:balance]">
            Όλα όσα χρειάζεται να γνωρίζεις.
          </h2>
          <p className="mt-4 text-[#592828]/80 dark:text-[#EAE3D3]/80 text-sm sm:text-base leading-relaxed">
            Διαφάνεια, καθαρές απαντήσεις και η φιλοσοφία πίσω από το theopenmind.club και την προσέγγιση της ψηφιακής αυτονομίας.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3.5">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-[#592828]/15 dark:border-[#B0A7E7]/20 bg-white dark:bg-[#1E1729]/80 overflow-hidden shadow-xs hover:border-[#544799]/40 dark:hover:border-[#B0A7E7]/40 transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-6 py-5 sm:py-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#544799] dark:text-[#B0A7E7] font-semibold">
                      {faq.category}
                    </span>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-[#592828] dark:text-[#EAE3D3] pr-2 leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-180 bg-[#544799] text-[#EAE3D3] border-[#544799]'
                        : 'bg-[#FAF7F0] dark:bg-white/5 text-[#592828] dark:text-[#B0A7E7] border-[#592828]/15 dark:border-[#B0A7E7]/20'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-[#592828]/85 dark:text-[#EAE3D3]/85 text-sm sm:text-base leading-relaxed border-t border-[#592828]/10 dark:border-[#B0A7E7]/10 animate-in fade-in slide-in-from-top-1 duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quiet Help Note */}
        <div className="mt-12 text-center text-xs text-[#592828]/70 dark:text-[#EAE3D3]/60">
          Έχεις κάποια άλλη ερώτηση; Απάντησε απευθείας σε οποιοδήποτε εβδομαδιαίο Mailcast — διαβάζουμε και απαντάμε σε κάθε email.
        </div>

      </div>
    </section>
  );
};
