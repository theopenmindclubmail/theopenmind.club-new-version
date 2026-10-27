import React from 'react';
import { X, ShieldAlert, FileText } from 'lucide-react';
import { BrandStar } from './BrandStar.tsx';

interface LegalModalProps {
  type: 'disclaimer' | 'terms' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#EAE3D3] dark:bg-[#15101B] border border-[#592828]/25 dark:border-[#B0A7E7]/25 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-[#592828]/15 dark:border-[#B0A7E7]/15 mb-6">
          <div className="flex items-center gap-2.5">
            <BrandStar size={18} className="text-[#592828] dark:text-[#B0A7E7]" />
            <h3 className="font-heading text-xl font-bold text-[#592828] dark:text-[#EAE3D3]">
              {type === 'disclaimer' ? 'Αποποίηση Ευθύνης (Disclaimer)' : 'Όροι Χρήσης & Πολιτική Απορρήτου'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#592828] dark:text-[#EAE3D3] hover:text-[#544799] dark:hover:text-white rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Κλείσιμο"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="text-xs sm:text-sm text-[#592828]/85 dark:text-[#EAE3D3]/85 space-y-4 leading-relaxed font-normal">
          {type === 'disclaimer' ? (
            <>
              <p>
                <strong>Γενική Ενημέρωση & Εκπαιδευτικός Σκοπός:</strong> Το περιεχόμενο, τα άρθρα, οι οδηγοί και το Mailcast του theopenmind.club παρέχονται αποκλειστικά για ενημερωτικούς, εκπαιδευτικούς και συμβουλευτικούς σκοπούς.
              </p>
              <p>
                <strong>Χρηματοοικονομική & Επενδυτική Αποποίηση:</strong> Καμία πληροφορία στην παρούσα ιστοσελίδα ή στα αποστελλόμενα μηνύματα δεν συνιστά οικονομική, επενδυτική, φορολογική ή νομική συμβουλή. Κάθε επιχειρηματική κίνηση, υλοποίηση funnel, διαφήμιση ή χρήση τεχνολογίας AI ενέχει ρίσκο.
              </p>
              <p>
                <strong>Αποτελέσματα & Εγγυήσεις:</strong> Τα παραδείγματα αποτελεσμάτων, μετρικών (ARR, conversion rates, ROAS) και μελετών περίπτωσης που αναφέρονται αντικατοπτρίζουν πραγματικές εμπειρίες αλλά δεν αποτελούν εγγύηση μελλοντικών αποτελεσμάτων για οποιονδήποτε μεμονωμένο χρήστη. Η επιτυχία εξαρτάται από την αφοσίωση, τις δεξιότητες και τις συνθήκες της αγοράς του εκάστοτε δημιουργού.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>1. Συλλογή & Χρήση Δεδομένων:</strong> Σεβόμαστε απόλυτα την ιδιωτικότητά σας. Κατά την εγγραφή σας στο Mailcast του theopenmind.club, συλλέγουμε αποκλειστικά τη διεύθυνση ηλεκτρονικού ταχυδρομείου σας για την αποστολή του εβδομαδιαίου ενημερωτικού δελτίου και του δωρεάν Οδηγού 2548.
              </p>
              <p>
                <strong>2. Προστασία & Μη Κοινοποίηση σε Τρίτους:</strong> Τα δεδομένα σας δεν πωλούνται, δεν ενοικιάζονται και δεν διαμοιράζονται ποτέ σε τρίτους για διαφημιστικούς σκοπούς. Χρησιμοποιούνται αυστηρά σύμφωνα με τον Ευρωπαϊκό Κανονισμό Προστασίας Δεδομένων (GDPR).
              </p>
              <p>
                <strong>3. Δικαίωμα Διαγραφής (Unsubscribe):</strong> Κάθε email που λαμβάνετε περιέχει άμεσο σύνδεσμο διαγραφής (1-click unsubscribe) στο κάτω μέρος. Μπορείτε να διαγραφείτε και να ζητήσετε την οριστική διαγραφή των στοιχείων σας ανά πάσα στιγμή.
              </p>
              <p>
                <strong>4. Πνευματική Ιδιοκτησία:</strong> Όλο το πρωτότυπο υλικό, η δομή των funnels, τα κείμενα και ο Οδηγός 2548 αποτελούν πνευματική ιδιοκτησία του theopenmind.club και προστατεύονται από τη σχετική νομοθεσία.
              </p>
            </>
          )}
        </div>

        <div className="mt-8 pt-4 border-t border-[#592828]/15 dark:border-[#B0A7E7]/15 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-bold font-heading uppercase tracking-wider rounded-xl bg-[#544799] text-[#EAE3D3] hover:bg-[#473b85] transition-colors cursor-pointer"
          >
            Κατανόηση & Κλείσιμο
          </button>
        </div>
      </div>
    </div>
  );
};
