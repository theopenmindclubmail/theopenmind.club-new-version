import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, CheckCircle2, ArrowRight, RefreshCw, MessageSquare } from 'lucide-react';
import { CtaButton, CTA_TARGET_URL } from './CtaButton.tsx';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  isSurveyPrompt?: boolean;
  isSurveyForm?: boolean;
  surveySubmitted?: boolean;
}

interface QuestionnaireData {
  howDidYouFindUs: string;
  whatDoYouWantToAchieve: string;
  whereDoYouWantToBe: string;
  stepsAlreadyTaken: string;
  expectationsFromMailcast: string;
  email: string;
}

const PRESET_QUESTIONS = [
  'Τι είναι το 2548 Internet Blueprint & πως το χρησιμοποιώ;',
  'Τι είναι το HOUSE OF LIGHT! · ATHENS;',
  'Τι θα μάθω με την συμμετοχή μου στο mailcast;',
  'Συμμετοχή στο ερωτηματολόγιο'
];

export const InteractiveChatbot: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      sender: 'bot',
      text: 'Γεια σου! Είμαι ο ψηφιακός βοηθός του theopenmind.club. Μπορείς να πατήσεις μία από τις έτοιμες ερωτήσεις παρακάτω ή να πληκτρολογήσεις απευθείας οτιδήποτε θέλεις να ρωτήσεις.',
      timestamp: 'Τώρα'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [surveyStep, setSurveyStep] = useState<'idle' | 'awaiting_confirmation' | 'active' | 'completed'>('idle');
  
  // Questionnaire form state
  const [formData, setFormData] = useState<QuestionnaireData>({
    howDidYouFindUs: '',
    whatDoYouWantToAchieve: '',
    whereDoYouWantToBe: '',
    stepsAlreadyTaken: '',
    expectationsFromMailcast: '',
    email: ''
  });

  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, surveyStep]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query) return;

    const userMsgId = 'msg-' + Date.now();
    const newUserMsg: ChatMessage = {
      id: userMsgId,
      sender: 'user',
      text: query,
      timestamp: 'Τώρα'
    };

    setMessages((prev) => [...prev, newUserMsg]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      respondToQuery(query);
      setIsTyping(false);
    }, 600);
  };

  const respondToQuery = (query: string) => {
    const lower = query.toLowerCase();

    // Check Preset 4: Questionnaire Participation
    if (lower.includes('ερωτηματολόγι') || lower.includes('συμμετοχή στο ερωτηματολόγιο') || lower.includes('survey')) {
      setSurveyStep('awaiting_confirmation');
      setMessages((prev) => [
        ...prev,
        {
          id: 'bot-' + Date.now(),
          sender: 'bot',
          text: 'Χαιρόμαστε ιδιαίτερα για τη διάθεσή σου να συμμετάσχεις στο φιλικό μας ερωτηματολόγιο! Η γνώμη σου μας βοηθά να αποκτήσουμε πλήρη εικόνα για το πώς έφτασες σε εμάς, τι θέλεις να πετύχεις, ποια βήματα έχεις ήδη κάνει και τι ακριβώς περιμένεις από το theopenmind.club.\n\nΔέχεσαι να απαντήσεις σε 5 σύντομες ερωτήσεις για να προσαρμόσουμε το περιεχόμενό μας αποκλειστικά στα μέτρα σου;',
          timestamp: 'Τώρα',
          isSurveyPrompt: true
        }
      ]);
      return;
    }

    // Check Preset 1: 2548 Blueprint
    if (lower.includes('2548') || lower.includes('blueprint') || lower.includes('χρυσή βιβλιοθήκη') || lower.includes('χρηση') || lower.includes('χρησιμοποιώ')) {
      setMessages((prev) => [
        ...prev,
        {
          id: 'bot-' + Date.now(),
          sender: 'bot',
          text: `📘 **Τι είναι το 2548 Internet Blueprint & Πώς το Χρησιμοποιείς:**\n\n1. **Τι είναι:** Πρόκειται για το απόσταγμα **25 ετών εμπειρίας** στο παγκόσμιο internet και τη συμπύκνωση **48 κορυφαίων βιβλίων** σε 10 θεμελιώδη κεφάλαια από τον Μάνο Μιχαλίτση (Mindset, Offer Math, Systems, Automations & Vibe Coding).\n\n2. **Πώς το χρησιμοποιείς:**\n• Κάνεις δωρεάν εγγραφή στο Mailcast.\n• Λαμβάνεις αμέσως το πλήρες PDF στο email σου.\n• Επιλέγεις το **25-Week Curriculum** για να λαμβάνεις εβδομαδιαία ανάλυση και εφαρμογή 1 βιβλίου ανά εβδομάδα.`,
          timestamp: 'Τώρα'
        }
      ]);
      return;
    }

    // Check Preset 2: House of Light Athens
    if (lower.includes('house of light') || lower.includes('lighthouse') || lower.includes('athens') || lower.includes('σπίτι')) {
      setMessages((prev) => [
        ...prev,
        {
          id: 'bot-' + Date.now(),
          sender: 'bot',
          text: `🏛️ **Τι είναι το HOUSE OF LIGHT! · ATHENS:**\n\nΕίναι το ζωντανό παράδειγμα της θεωρίας μας στην πράξη (**Top-Level Web Architecture & Minimal Luxury UI/UX**).\n\n• Σχεδιασμένο με Next.js, Vercel Edge Serverless routing και μηδενικό lag.\n• Πετυχαίνει απόλυτο σκορ **100/100** σε Performance, Accessibility, Best Practices και SEO.\n• Μπορείς να το δεις ζωντανά πατώντας το κουμπί στην ενότητα Showcase ή απευθείας στο: https://light-house-athens-nits.vercel.app/`,
          timestamp: 'Τώρα'
        }
      ]);
      return;
    }

    // Check Preset 3: What will I learn in Mailcast
    if (lower.includes('μάθω') || lower.includes('περιεχόμενο') || lower.includes('mailcast') || lower.includes('τετάρτη')) {
      setMessages((prev) => [
        ...prev,
        {
          id: 'bot-' + Date.now(),
          sender: 'bot',
          text: `🚀 **Τι θα μάθεις με τη συμμετοχή σου στο Mailcast:**\n\nΚάθε **Τετάρτη πρωί** αποδομούμε πραγματικά συστήματα χωρίς θεωρίες:\n• **Ψηφιακή Αυτονομία:** Πώς χτίζεις ιδιόκτητα assets (owned audience & funnels) που δεν εξαρτώνται από αλγορίθμους social media.\n• **High-Converting Funnels & Automations:** Συστήματα που δουλεύουν 24/7 στο autopilot.\n• **Vibe Coding & Next-Gen Tech:** Πώς υλοποιείς λειτουργικά digital projects σε ώρες με AI agents.\n• **Mental Models:** Διαυγής σκέψη και νοοτροπία κυρίαρχου operator.`,
          timestamp: 'Τώρα'
        }
      ]);
      return;
    }

    // General fallback response
    setMessages((prev) => [
      ...prev,
      {
        id: 'bot-' + Date.now(),
        sender: 'bot',
        text: `Ευχαριστούμε για την ερώτησή σου! Στο **theopenmind.club** εστιάζουμε στη διαύγεια, την ψηφιακή αυτονομία και την πρακτική εκτέλεση.\n\nΜπορείς να επιλέξεις μία από τις έτοιμες επιλογές παρακάτω, ή να εγγραφείς άμεσα στο Mailcast για να λάβεις τον Οδηγό 2548 και να μιλήσεις απευθείας με τον Μάνο Μιχαλίτση απαντώντας σε οποιοδήποτε email.`,
        timestamp: 'Τώρα'
      }
    ]);
  };

  const startSurvey = () => {
    setSurveyStep('active');
    setMessages((prev) => [
      ...prev,
      {
        id: 'bot-' + Date.now(),
        sender: 'bot',
        text: 'Εξαιρετικά! Ακολουθεί το σύντομο ερωτηματολόγιο. Συμπλήρωσε τα κενά πεδία παρακάτω με ειλικρίνεια — κάθε λεπτομέρεια μετράει:',
        timestamp: 'Τώρα',
        isSurveyForm: true
      }
    ]);
  };

  const declineSurvey = () => {
    setSurveyStep('idle');
    setMessages((prev) => [
      ...prev,
      {
        id: 'bot-' + Date.now(),
        sender: 'bot',
        text: 'Κανένα πρόβλημα! Μπορείς να συμμετάσχεις στο ερωτηματολόγιο όποτε το θελήσεις. Μην παραλείψεις να κάνεις εγγραφή στο Mailcast για να λάβεις τον Οδηγό 2548!',
        timestamp: 'Τώρα'
      }
    ]);
  };

  const handleSurveySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSurveyStep('completed');

    setMessages((prev) => [
      ...prev,
      {
        id: 'bot-' + Date.now(),
        sender: 'bot',
        text: `🎉 **Ευχαριστούμε θερμά για τις απαντήσεις σου!**\n\nΚαταγράψαμε τις απαντήσεις σου με επιτυχία. Μας δίνουν πολύτιμη κατεύθυνση για τα επόμενα Mailcasts και projects μας!\n\nΤελευταίο βήμα: Κάνε κλικ στο κουμπί παρακάτω για να επιβεβαιώσεις την εγγραφή σου και να λάβεις άμεσα το **2548 Internet Blueprint (48 Βιβλία)**.`,
        timestamp: 'Τώρα',
        surveySubmitted: true
      }
    ]);
  };

  return (
    <div className="mt-12 rounded-3xl border border-[#592828]/20 dark:border-[#B0A7E7]/25 bg-white/95 dark:bg-[#1A1322] shadow-xl overflow-hidden transition-colors">
      
      {/* Chatbot Header */}
      <div className="px-5 py-4 bg-gradient-to-r from-[#592828] via-[#544799] to-[#592828] text-white flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
              <Bot className="w-5 h-5 text-[#EAE3D3]" />
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#592828]" />
          </div>
          <div>
            <div className="font-heading font-extrabold text-base sm:text-lg flex items-center gap-2">
              <span>The Open Mind Assistant</span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-white/20 text-[#EAE3D3]">
                Live Support & Survey
              </span>
            </div>
            <div className="text-xs text-[#EDE0D4]/80 font-normal">
              Άμεσες απαντήσεις & φιλικό ερωτηματολόγιο
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            setMessages([
              {
                id: 'init-reset',
                sender: 'bot',
                text: 'Γεια σου! Είμαι ο ψηφιακός βοηθός του theopenmind.club. Μπορείς να πατήσεις μία από τις έτοιμες ερωτήσεις παρακάτω ή να πληκτρολογήσεις απευθείας οτιδήποτε θέλεις να ρωτήσεις.',
                timestamp: 'Τώρα'
              }
            ]);
            setSurveyStep('idle');
          }}
          className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer text-xs flex items-center gap-1"
          title="Επανεκκίνηση συνομιλίας"
        >
          <RefreshCw className="w-4 h-4" />
          <span className="hidden sm:inline">Reset</span>
        </button>
      </div>

      {/* Message Window */}
      <div className="p-4 sm:p-6 space-y-4 max-h-[460px] overflow-y-auto bg-[#FAF7F0]/60 dark:bg-[#120D18]/70">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div className="flex items-start gap-2.5 max-w-[90%] sm:max-w-[80%]">
              {msg.sender === 'bot' && (
                <div className="w-7 h-7 rounded-full bg-[#544799] text-[#EAE3D3] flex items-center justify-center shrink-0 mt-1 shadow-xs">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`p-4 rounded-2xl text-sm sm:text-base leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-[#592828] text-white rounded-tr-xs shadow-xs'
                    : 'bg-white dark:bg-[#1F1728] text-[#592828] dark:text-[#EAE3D3] border border-[#592828]/15 dark:border-[#B0A7E7]/20 rounded-tl-xs shadow-sm'
                }`}
              >
                <div className="whitespace-pre-line">{msg.text}</div>

                {/* Survey Invitation Prompt Actions */}
                {msg.isSurveyPrompt && surveyStep === 'awaiting_confirmation' && (
                  <div className="mt-4 pt-3 border-t border-[#592828]/15 dark:border-[#B0A7E7]/20 flex flex-wrap gap-2.5">
                    <button
                      type="button"
                      onClick={startSurvey}
                      className="px-4 py-2 rounded-xl bg-[#544799] hover:bg-[#43387b] text-white font-heading font-bold text-xs sm:text-sm transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Ναι, ας ξεκινήσουμε! 📝</span>
                    </button>
                    <button
                      type="button"
                      onClick={declineSurvey}
                      className="px-4 py-2 rounded-xl bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-[#592828] dark:text-[#EAE3D3] font-heading font-medium text-xs sm:text-sm transition-all cursor-pointer"
                    >
                      <span>Όχι τώρα, ίσως αργότερα</span>
                    </button>
                  </div>
                )}

                {/* Survey Form Inside the Chat */}
                {msg.isSurveyForm && surveyStep === 'active' && (
                  <form onSubmit={handleSurveySubmit} className="mt-4 pt-4 border-t border-[#592828]/15 dark:border-[#B0A7E7]/20 space-y-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold font-heading text-[#544799] dark:text-[#B0A7E7] uppercase">
                        1. Πώς έφτασες σε εμάς;
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="π.χ. Google, σύσταση φίλου, social media, άρθρο..."
                        value={formData.howDidYouFindUs}
                        onChange={(e) => setFormData({ ...formData, howDidYouFindUs: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#592828]/20 dark:border-[#B0A7E7]/30 bg-white dark:bg-[#15101B] text-xs sm:text-sm text-[#592828] dark:text-[#EAE3D3] focus:outline-hidden focus:border-[#544799]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold font-heading text-[#544799] dark:text-[#B0A7E7] uppercase">
                        2. Τι θέλεις να πετύχεις στον ψηφιακό σου δρόμο;
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="π.χ. Ψηφιακή αυτονομία, επιπλέον εισόδημα, δικό μου brand..."
                        value={formData.whatDoYouWantToAchieve}
                        onChange={(e) => setFormData({ ...formData, whatDoYouWantToAchieve: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#592828]/20 dark:border-[#B0A7E7]/30 bg-white dark:bg-[#15101B] text-xs sm:text-sm text-[#592828] dark:text-[#EAE3D3] focus:outline-hidden focus:border-[#544799]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold font-heading text-[#544799] dark:text-[#B0A7E7] uppercase">
                        3. Πού θέλεις να φτάσεις σε 6-12 μήνες;
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="π.χ. Πλήρης οικονομική ανεξαρτησία, αυτοματοποιημένα funnels..."
                        value={formData.whereDoYouWantToBe}
                        onChange={(e) => setFormData({ ...formData, whereDoYouWantToBe: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#592828]/20 dark:border-[#B0A7E7]/30 bg-white dark:bg-[#15101B] text-xs sm:text-sm text-[#592828] dark:text-[#EAE3D3] focus:outline-hidden focus:border-[#544799]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold font-heading text-[#544799] dark:text-[#B0A7E7] uppercase">
                        4. Τι βήματα έχεις κάνει ήδη μέχρι σήμερα;
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="π.χ. Έχω δοκιμάσει projects, μαθαίνω AI / Vibe Coding, ξεκινάω τώρα..."
                        value={formData.stepsAlreadyTaken}
                        onChange={(e) => setFormData({ ...formData, stepsAlreadyTaken: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#592828]/20 dark:border-[#B0A7E7]/30 bg-white dark:bg-[#15101B] text-xs sm:text-sm text-[#592828] dark:text-[#EAE3D3] focus:outline-hidden focus:border-[#544799]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold font-heading text-[#544799] dark:text-[#B0A7E7] uppercase">
                        5. Τι περιμένεις από εμάς και το Mailcast;
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="π.χ. Πρακτικά συστήματα, καθαρό mindset, έτοιμα blueprints χωρίς θεωρίες..."
                        value={formData.expectationsFromMailcast}
                        onChange={(e) => setFormData({ ...formData, expectationsFromMailcast: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#592828]/20 dark:border-[#B0A7E7]/30 bg-white dark:bg-[#15101B] text-xs sm:text-sm text-[#592828] dark:text-[#EAE3D3] focus:outline-hidden focus:border-[#544799]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold font-heading text-[#544799] dark:text-[#B0A7E7] uppercase">
                        Το Email σου (Προαιρετικό)
                      </label>
                      <input
                        type="email"
                        placeholder="you@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#592828]/20 dark:border-[#B0A7E7]/30 bg-white dark:bg-[#15101B] text-xs sm:text-sm text-[#592828] dark:text-[#EAE3D3] focus:outline-hidden focus:border-[#544799]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-4 rounded-xl bg-[#592828] hover:bg-[#431d1d] text-white font-heading font-extrabold text-sm uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#B0A7E7]" />
                      <span>Υποβολή Απαντήσεων & Καταχώριση</span>
                    </button>
                  </form>
                )}

                {/* Survey Submitted CTA */}
                {msg.surveySubmitted && (
                  <div className="mt-4 pt-3 border-t border-[#592828]/15 dark:border-[#B0A7E7]/20 flex items-center justify-start">
                    <CtaButton
                      label="ΕΓΓΡΑΦΗ & ΛΗΨΗ"
                      className="py-3 px-6 text-sm"
                    />
                  </div>
                )}
              </div>

              {msg.sender === 'user' && (
                <div className="w-7 h-7 rounded-full bg-[#592828] text-white flex items-center justify-center shrink-0 mt-1 shadow-xs">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 text-xs text-[#592828]/60 dark:text-[#EAE3D3]/60 italic pl-10">
            <span className="w-2 h-2 rounded-full bg-[#544799] animate-bounce" />
            <span className="w-2 h-2 rounded-full bg-[#544799] animate-bounce [animation-delay:0.2s]" />
            <span className="w-2 h-2 rounded-full bg-[#544799] animate-bounce [animation-delay:0.4s]" />
            <span>Ο βοηθός απαντάει...</span>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Preset Questions Chips */}
      <div className="p-3 sm:p-4 bg-[#EAE3D3]/70 dark:bg-[#170F1F] border-t border-[#592828]/15 dark:border-[#B0A7E7]/15">
        <div className="text-xs font-mono font-bold text-[#544799] dark:text-[#B0A7E7] uppercase mb-2 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Έτοιμες Ερωτήσεις (Κάντε κλικ για άμεση απάντηση):</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {PRESET_QUESTIONS.map((q, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSend(q)}
              className="text-xs sm:text-sm px-3.5 py-1.5 rounded-full border border-[#544799]/30 dark:border-[#B0A7E7]/30 bg-white/80 dark:bg-[#251A30] text-[#592828] dark:text-[#EAE3D3] hover:bg-[#544799] hover:text-white dark:hover:bg-[#544799] transition-all cursor-pointer font-medium text-left shadow-2xs hover:shadow-xs active:scale-95"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Free-form Input Area */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="p-3 sm:p-4 bg-white dark:bg-[#1E1729] border-t border-[#592828]/15 dark:border-[#B0A7E7]/15 flex items-center gap-3"
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Γράψε εδώ την ερώτησή σου απευθείας..."
          className="flex-1 px-4 py-3 rounded-xl border border-[#592828]/20 dark:border-[#B0A7E7]/30 bg-[#FAF7F0] dark:bg-[#15101B] text-sm text-[#592828] dark:text-[#EAE3D3] focus:outline-hidden focus:border-[#544799] transition-colors"
        />
        <button
          type="submit"
          disabled={!inputText.trim() || isTyping}
          className="p-3 rounded-xl bg-[#544799] hover:bg-[#43387b] disabled:opacity-40 text-white transition-all cursor-pointer shrink-0 shadow-xs active:scale-95"
          aria-label="Αποστολή"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>

    </div>
  );
};
