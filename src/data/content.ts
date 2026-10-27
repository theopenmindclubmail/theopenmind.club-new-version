export interface Pillar {
  id: string;
  number: string;
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  gradient: string;
  accent: string;
}

export const PILLARS: Pillar[] = [
  {
    id: 'mindset',
    number: '01',
    emoji: '🧠',
    title: 'Motivation & Mindset Shift',
    subtitle: 'Ψυχολογία του Ελεύθερου Δημιουργού',
    description: 'Αποσυνδέσου από τον θόρυβο της μάζας. Αναγνώρισε τα ασυνείδητα σαμποτάζ, δημιούργησε από θέση πληρότητας και ανάπτυξε την ψυχολογία του ελεύθερου δημιουργού.',
    bullets: [
      'Απεμπλοκή από το burnout και τη νοοτροπία σπανιότητας',
      'Στρατηγική διαύγεια και αποδοτική διαχείριση προσοχής',
      'Ανάπτυξη αταλάντευτης πειθαρχίας & εσωτερικού κινήτρου'
    ],
    gradient: 'from-amber-500/10 via-transparent to-transparent',
    accent: 'text-amber-400'
  },
  {
    id: 'funnels',
    number: '02',
    emoji: '⚙️',
    title: 'High-Converting Funnels',
    subtitle: 'Αρχιτεκτονική Πωλήσεων 24/7',
    description: 'Αρχιτεκτονική πωλήσεων που μετατρέπει αγνώστους σε αφοσιωμένο κοινό. Στρατηγικές funnel engineering που δουλεύουν αθόρυβα 24/7.',
    bullets: [
      'Μαθηματικά ακριβή conversion pathways & lead scoring',
      'Direct-response copywriting που ενεργοποιεί αποφάσεις',
      'Omnichannel retargeting με μηδενική σπατάλη διαφήμισης'
    ],
    gradient: 'from-cyan-500/10 via-transparent to-transparent',
    accent: 'text-cyan-400'
  },
  {
    id: 'vibe-coding',
    number: '03',
    emoji: '💻',
    title: 'Vibe Coding & Agentic AI',
    subtitle: 'Υλοποίηση χωρίς Τεχνικά Φρένα',
    description: 'Υλοποίηση εφαρμογών και web projects από το μηδέν. Μετάτρεψε την πρόθεση και τις ιδέες σου σε λειτουργικό λογισμικό χωρίς να χάνεσαι στον παραδοσιακό κώδικα.',
    bullets: [
      'Αξιοποίηση LLM agents & rapid prototyping frameworks',
      'Από το concept στο live production web app σε λίγες ώρες',
      'Πλήρης έλεγχος της ψηφιακής σου υποδομής'
    ],
    gradient: 'from-indigo-500/10 via-transparent to-transparent',
    accent: 'text-indigo-400'
  },
  {
    id: 'automations',
    number: '04',
    emoji: '⚡',
    title: 'Έξυπνες Αυτοματοποιήσεις (Automations)',
    subtitle: 'Αγόρασε Πίσω τον Χρόνο Σου',
    description: 'Αγόρασε πίσω τον χρόνο σου. Σύνδεσε συστήματα, ανάθεσε τα επαναλαμβανόμενα tasks στο background και μείνε συγκεντρωμένος μόνο σε ό,τι έχει πραγματική αξία.',
    bullets: [
      'End-to-end integration (CRMs, payment gateways, webhooks)',
      'Αυτόματη επεξεργασία δεδομένων και AI agents ροής',
      'Εξάλειψη ανθρώπινου σφάλματος σε λειτουργικές ρουτίνες'
    ],
    gradient: 'from-emerald-500/10 via-transparent to-transparent',
    accent: 'text-emerald-400'
  },
  {
    id: 'projects',
    number: '05',
    emoji: '🚀',
    title: 'Real-World Online Projects',
    subtitle: 'Αποδόμηση στην Πραγματική Αρένα',
    description: 'Πραγματικά case studies, αποδόμηση ψηφιακών εγχειρημάτων και πρακτικές δοκιμές στην αρένα της σύγχρονης online επιχειρηματικότητας.',
    bullets: [
      'Ανάλυση πραγματικών κερδοφόρων ψηφιακών projects',
      'Post-mortem δοκιμές, λάθη, ανατροπές και νίκες',
      'Επαληθευμένα blueprints που μπορείς να αναπαράγεις'
    ],
    gradient: 'from-purple-500/10 via-transparent to-transparent',
    accent: 'text-purple-400'
  }
];

export interface Partner {
  name: string;
  sector: string;
  metric: string;
  description: string;
}

export const PARTNERS: Partner[] = [
  {
    name: 'Nexus Alpha Ventures',
    sector: 'Digital Assets & FinTech',
    metric: '+310% ARR',
    description: 'Στρατηγική funnel engineering & πλήρης ανασχεδιασμός conversion.'
  },
  {
    name: 'Atelier Architecture Athens',
    sector: 'High-End Architectural Studio',
    metric: '100/100 Lighthouse',
    description: 'Υλοποίηση Next-Gen Web Experience & Edge cloud υποδομή.'
  },
  {
    name: 'Vanguard Media Labs',
    sector: 'Growth & Direct-Response',
    metric: '4.8x ROAS',
    description: 'Αυτοματοποιημένες ροές lead capture & high-ticket conversion.'
  },
  {
    name: 'Kallos Bio-Tech',
    sector: 'Longevity & Health Tech',
    metric: '28k Subscribers',
    description: 'Εκκίνηση Mailcast κοινότητας & zero-churn onboarding.'
  },
  {
    name: 'Aether Cloud Systems',
    sector: 'SaaS & Agentic AI',
    metric: '85% Time-Saved',
    description: 'Background AI agents & custom business automations.'
  },
  {
    name: 'Hellas Craft Luxury',
    sector: 'D2C Premium Brand',
    metric: '+180% Checkout CV',
    description: 'Modular funnels & high-converting micro-copy.'
  }
];

export interface Testimonial {
  name: string;
  role: string;
  avatarInitials: string;
  quote: string;
  highlight: string;
  verified: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Γιώργος Παπαδόπουλος',
    role: 'Founder & Vibe Coder, ScalePulse',
    avatarInitials: 'ΓΠ',
    quote: 'Το Mailcast του theopenmind.club είναι το μοναδικό email που ανοίγω με το που σκάσει στο inbox. Χωρίς φρου-φρου και θεωρίες. Χάρη στα breakdowns του vibe coding, έστησα το πρώτο μου full-stack SaaS μέσα σε ένα σαββατοκύριακο.',
    highlight: 'Πρώτο SaaS live σε ένα σαββατοκύριακο',
    verified: 'Μέλος από το 2024'
  },
  {
    name: 'Έλενα Κωνσταντινίδη',
    role: 'Performance Marketer & Consultant',
    avatarInitials: 'ΕΚ',
    quote: 'Ο Οδηγός 2548 και τα frameworks για τα funnels άλλαξαν ριζικά τον τρόπο που τιμολογώ και στήνω συστήματα για τους πελάτες μου. Η διαύγεια και η ακρίβεια της γερμανικής σχολής φαίνεται σε κάθε γραμμή.',
    highlight: 'Τριπλασιασμός αξίας ανά πελάτη',
    verified: 'Επαληθευμένος Συνδρομητής'
  },
  {
    name: 'Νίκος Σταματάκης',
    role: 'E-commerce Operator & Automation Lead',
    avatarInitials: 'ΝΣ',
    quote: 'Αντί να καίγομαι με 14 ώρες χειροκίνητων tasks, εφάρμοσα τις αυτοματοποιήσεις που ανέλυσαν στο newsletter. Γλίτωσα πάνω από 20 ώρες την εβδομάδα, ενώ τα funnels μου δουλεύουν πιο αξιόπιστα από ποτέ.',
    highlight: '20+ ώρες ελεύθερου χρόνου ανά εβδομάδα',
    verified: 'Μέλος Κοινότητας'
  },
  {
    name: 'Δημήτρης Βαλασίδης',
    role: 'Creative Director & Web Architect',
    avatarInitials: 'ΔΒ',
    quote: 'Το case study του Lighthouse Athens v2 έθεσε νέα πρότυπα. Το theopenmind.club δεν σου πουλάει φρούδες ελπίδες—σου δίνει το blueprint και την πειθαρχία να χτίσεις κάτι που αντέχει στον χρόνο.',
    highlight: 'Κορυφαίο τεχνικό επίπεδο & αισθητική',
    verified: 'Επαληθευμένος Συνδρομητής'
  }
];

export interface DachCredential {
  title: string;
  institution: string;
  location: string;
  year: string;
  description: string;
}

export const DACH_CREDENTIALS: DachCredential[] = [
  {
    title: 'High-Ticket Funnel Engineering & Scaling',
    institution: 'Munich Elite Growth Circle & Mastermind',
    location: 'Μόναχο, Γερμανία',
    year: 'DACH Benchmark',
    description: 'Εκπαίδευση στα αυστηρά συστήματα της γερμανικής σχολής direct-response & conversion architecture με μηδενική ανοχή στην αναποτελεσματικότητα.'
  },
  {
    title: 'Digital Systems Architecture & Automations',
    institution: 'DACH Tech Founders Consortium',
    location: 'Ζυρίχη, Ελβετία',
    year: 'Swiss Precision',
    description: 'Μεθοδολογίες ελβετικής ακρίβειας για αυτόνομα workflows, API orchestration και απρόσκοπτη λειτουργία ψηφιακών περιουσιακών στοιχείων.'
  },
  {
    title: 'Behavioral Psychology & High-Converting Copy',
    institution: 'Vienna Direct-Response Academy',
    location: 'Βιέννη, Αυστρία',
    year: 'Behavioral Science',
    description: 'Ψυχολογία απόφασης, διατύπωση ακαταμάχητης προσφοράς και ηθικό influence που μετατρέπει την προσοχή σε αδιάκοπη εμπιστοσύνη.'
  }
];

export const GUIDE_CHAPTERS = [
  {
    num: '01',
    title: 'Mindset & Cognitive Models',
    books: '10 Βιβλία',
    desc: 'Ανάλυση των Kahneman, Munger, Marcus Aurelius & Taleb για διαύγεια υπό αβεβαιότητα.'
  },
  {
    num: '02',
    title: 'Irresistible Offer & Funnel Math',
    books: '12 Βιβλία',
    desc: 'Μοντέλα Hormozi, Brunson, Schwartz & Hopkins για μηχανισμούς μετατροπής.'
  },
  {
    num: '03',
    title: 'Systems, Automations & Leverage',
    books: '14 Βιβλία',
    desc: 'Αρχές Naval Ravikant, Tim Ferriss & Eliyahu Goldratt για μόχλευση κώδικα και μέσων.'
  },
  {
    num: '04',
    title: 'Vibe Coding & Next-Gen Digital Assets',
    books: '12 Βιβλία',
    desc: 'Σύγχρονα εγχειρίδια ανάπτυξης προϊόντων, AI workflows και ψηφιακής ανεξαρτησίας.'
  }
];
