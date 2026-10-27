import React, { useState } from 'react';
import { X, Mail, CheckCircle2, Download, ArrowRight, ShieldCheck, ExternalLink } from 'lucide-react';
import { BrandStar } from './BrandStar.tsx';
import { CTA_TARGET_URL } from './CtaButton.tsx';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetUrl?: string;
}

export const SubscribeModal: React.FC<SubscribeModalProps> = ({
  isOpen,
  onClose,
  targetUrl = CTA_TARGET_URL
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      setError('Παρακαλούμε εισάγετε μια έγκυρη διεύθυνση email.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const handleDownloadGuide = () => {
    const content = `# theopenmind.club | Οδηγός 2548 – Η Χρυσή Βιβλιοθήκη της Ψηφιακής Αυτονομίας

Συγχαρητήρια! Καλωσόρισες στην κοινότητα του theopenmind.club.
Αυτό είναι το απόσταγμα 25 ετών εμπειρίας και 48 κορυφαίων βιβλίων.

## Ενότητα 1: Mindset & Cognitive Models (10 Βιβλία)
- Thinking, Fast and Slow (Daniel Kahneman) - Bias recognition & decision trees
- Poor Charlie's Almanack (Charlie Munger) - Mental models across multidisciplinary lattices
- Antifragile (Nassim Nicholas Taleb) - Systems that gain from disorder
- Meditations (Marcus Aurelius) - Stoic sovereign creator focus

## Ενότητα 2: Irresistible Offer & Funnel Math (12 Βιβλία)
- $100M Offers & $100M Leads (Alex Hormozi) - Value equation & volume mechanisms
- DotCom Secrets & Expert Secrets (Russell Brunson) - Value ladder & funnel engineering
- Breakthrough Advertising (Eugene Schwartz) - Mass desire, market awareness & sophisitication
- Scientific Advertising (Claude Hopkins) - Direct-response measurable tracking

## Ενότητα 3: Systems, Automations & Leverage (14 Βιβλία)
- The Almanack of Naval Ravikant (Eric Jorgenson) - Specific knowledge, code & media leverage
- The 4-Hour Workweek (Tim Ferriss) - Elimination, automation, delegation
- The Goal (Eliyahu M. Goldratt) - Theory of Constraints & throughput optimization
- Built to Sell (John Warrillow) - Asset modularity without founder dependency

## Ενότητα 4: Vibe Coding & Next-Gen Digital Assets (12 Βιβλία)
- Rapid Prototyping with Agentic AI & Modern LLMs
- Full-Stack Vibe Coding: From Intent to Production in hours
- Edge Infrastructure, Vercel & High-Performance UI/UX Architectures

Κάθε Κυριακή στις 09:00 π.μ. θα λαμβάνεις το νέο τεύχος του theopenmind.club.
© 2026 theopenmind.club. Όλα τα δικαιώματα διατηρούνται.
`;
    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Odigos_2548_TheOpenMindClub.md');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#EAE3D3] dark:bg-[#15101B] border border-[#592828]/25 dark:border-[#B0A7E7]/25 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Glow ambient background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#B0A7E7]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#592828]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#592828] dark:text-[#EAE3D3] hover:text-[#544799] dark:hover:text-white rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
          aria-label="Κλείσιμο"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B0A7E7]/25 dark:bg-[#544799]/30 border border-[#544799]/20 text-xs font-mono text-[#544799] dark:text-[#B0A7E7] mb-3">
                <BrandStar size={12} className="text-[#592828] dark:text-[#B0A7E7]" />
                <span className="font-bold">THE OPEN MIND MAILCAST</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#592828] dark:text-[#EAE3D3] tracking-tight leading-snug">
                Εγγραφή & Άμεσο Ξεκλείδωμα
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#592828]/80 dark:text-[#EAE3D3]/80 leading-relaxed">
                Συμπλήρωσε το email σου για να λάβεις άμεσα τον <strong>Οδηγό 2548 (Χρυσή Βιβλιοθήκη)</strong> και να προστεθείς στην εβδομαδιαία λίστα.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-[#592828] dark:text-[#EAE3D3] mb-1.5 font-bold">
                  Ηλεκτρονικό Ταχυδρομείο (Email)
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#592828]/50 dark:text-[#EAE3D3]/50 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full pl-10 pr-4 py-3 bg-white dark:bg-[#1E1729] border border-[#592828]/20 dark:border-[#B0A7E7]/25 focus:border-[#544799] focus:ring-1 focus:ring-[#544799] rounded-xl text-sm text-[#592828] dark:text-white placeholder-[#592828]/40 dark:placeholder-slate-500 transition-colors outline-hidden"
                  />
                </div>
                {error && <p className="mt-1.5 text-xs text-rose-600 dark:text-rose-400">{error}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-5 rounded-xl font-heading font-bold uppercase tracking-wider text-sm bg-[#544799] hover:bg-[#473b85] text-[#EAE3D3] shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 active:scale-[0.99]"
              >
                {isSubmitting ? (
                  <span>Επεξεργασία...</span>
                ) : (
                  <>
                    <span>ΕΓΓΡΑΦΗ & ΛΗΨΗ</span>
                    <ArrowRight className="w-4 h-4 text-[#B0A7E7]" />
                  </>
                )}
              </button>
            </form>

            {/* External link button */}
            <div className="mt-4 pt-4 border-t border-[#592828]/15 dark:border-[#B0A7E7]/15 text-center">
              <a
                href={targetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#544799] dark:text-[#B0A7E7] hover:underline inline-flex items-center gap-1.5 transition-colors font-medium"
              >
                <span>Απευθείας μετάβαση στη σελίδα εγγραφής ({targetUrl})</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Trust footer */}
            <div className="mt-6 pt-4 border-t border-[#592828]/10 dark:border-white/5 flex items-center justify-center gap-2 text-[11px] text-[#592828]/70 dark:text-[#EAE3D3]/70">
              <ShieldCheck className="w-3.5 h-3.5 text-[#544799] dark:text-[#B0A7E7] shrink-0" />
              <span>100% Δωρεάν. Κανένα spam. Διαγραφή με 1 κλικ ανά πάσα στιγμή.</span>
            </div>
          </div>
        ) : (
          <div className="text-center py-4 space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#544799]/15 border border-[#544799]/30 text-[#544799] dark:text-[#B0A7E7] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-mono text-[#544799] dark:text-[#B0A7E7] uppercase tracking-wider font-bold">
                Επιτυχής Εγγραφή!
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#592828] dark:text-[#EAE3D3] mt-1">
                Καλωσόρισες στο theopenmind.club
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#592828]/80 dark:text-[#EAE3D3]/80 leading-relaxed max-w-sm mx-auto">
                Έχουμε καταχωρίσει το <strong>{email}</strong>. Το πρώτο τεύχος θα φτάσει στο inbox σου την ερχόμενη Κυριακή.
              </p>
            </div>

            {/* Instant Download of Lead Magnet */}
            <div className="p-4 rounded-2xl bg-white/70 dark:bg-[#1E1729] border border-[#592828]/15 dark:border-[#B0A7E7]/20 text-left">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#592828] dark:text-[#EAE3D3]">Οδηγός 2548 Ξεκλειδώθηκε!</span>
                <span className="text-[10px] font-mono text-[#544799] dark:text-[#B0A7E7] font-bold">Digital Edition</span>
              </div>
              <p className="text-xs text-[#592828]/80 dark:text-[#EAE3D3]/80 mb-3">
                Μπορείς να κατεβάσεις το αρχείο άμεσα στη συσκευή σου τώρα.
              </p>
              <button
                onClick={handleDownloadGuide}
                className="w-full py-2.5 px-4 rounded-xl font-heading font-bold uppercase tracking-wider text-xs bg-[#544799] text-[#EAE3D3] hover:bg-[#473b85] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#B0A7E7]" />
                <span>Κατέβασε τον Οδηγό 2548 (.md)</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2 text-xs text-[#592828]/70 hover:text-[#592828] dark:text-[#EAE3D3]/70 dark:hover:text-white transition-colors cursor-pointer"
            >
              Επιστροφή στη σελίδα
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
