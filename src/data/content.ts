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
    name: 'House of Light! Athens',
    sector: 'High-End Architectural Retreat',
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
    role: 'Founder & Operator, ScalePulse',
    avatarInitials: 'ΓΠ',
    quote: 'Το Mailcast του theopenmind.club είναι το μοναδικό email που ανοίγω με το που σκάσει στο inbox κάθε Τετάρτη. Χωρίς φρου-φρου. Χάρη στα breakdowns του vibe coding, έστησα το πρώτο μου full-stack SaaS σε χρόνο μηδέν.',
    highlight: 'Πρώτο SaaS live σε 1 σαββατοκύριακο',
    verified: 'Μέλος από το 2024'
  },
  {
    name: 'Έλενα Κωνσταντινίδη',
    role: 'Performance Marketer & Consultant',
    avatarInitials: 'ΕΚ',
    quote: 'Το 2548 Internet Blueprint και τα frameworks για τα funnels άλλαξαν ριζικά τον τρόπο που τιμολογώ και στήνω συστήματα για τους πελάτες μου. Η διαύγεια και η ακρίβεια της γερμανικής σχολής φαίνεται σε κάθε γραμμή.',
    highlight: 'Τριπλασιασμός αξίας ανά πελάτη',
    verified: 'Επαληθευμένος Συνδρομητής'
  },
  {
    name: 'Νίκος Σταματάκης',
    role: 'E-commerce Operator & Automation Lead',
    avatarInitials: 'ΝΣ',
    quote: 'Αντί να καίγομαι με 14 ώρες χειροκίνητων tasks, εφάρμοσα τις αυτοματοποιήσεις που ανέλυσε ο Μάνος. Γλίτωσα πάνω από 20 ώρες την εβδομάδα, ενώ τα funnels μου δουλεύουν πιο αξιόπιστα από ποτέ.',
    highlight: '20+ ώρες ελεύθερου χρόνου ανά εβδομάδα',
    verified: 'Μέλος Κοινότητας'
  },
  {
    name: 'Δημήτρης Βαλασίδης',
    role: 'Creative Director & Web Architect',
    avatarInitials: 'ΔΒ',
    quote: 'Το case study του House of Light! Athens έθεσε νέα πρότυπα. Το theopenmind.club δεν σου πουλάει φρούδες ελπίδες—σου δίνει το blueprint και την πειθαρχία να χτίσεις κάτι που αντέχει στον χρόνο.',
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

// ΠΡΑΓΜΑΤΙΚΑ ΠΕΡΙΕΧΟΜΕΝΑ ΑΠΟ ΤΟ ΕΠΙΣΗΜΟ PDF ΤΟΥ 2548 INTERNET BLUEPRINT
export interface RealChapter {
  num: string;
  title: string;
  booksCount: string;
  books: string[];
  summary: string;
  solutions: string[];
}

export const REAL_2548_CHAPTERS: RealChapter[] = [
  {
    num: '01',
    title: 'Εισαγωγή στο online επιχειρείν',
    booksCount: '4 Βιβλία',
    books: [
      'The Lean Startup - Eric Ries',
      'The 4-Hour Workweek - Timothy Ferriss',
      'The $100 Startup - Chris Guillebeau',
      'The Art of the Start - Guy Kawasaki'
    ],
    summary: 'Βασικές αρχές online επιχείρησης, μέθοδοι για γρήγορη εκκίνηση, ελάχιστους πόρους και βιώσιμα μοντέλα.',
    solutions: [
      'Δημιουργία Minimum Viable Product (MVP) για άμεση επικύρωση ιδεών',
      'Outsourcing και αυτοματοποίηση εργασιών για απελευθέρωση χρόνου',
      'Έναρξη με ελάχιστο κεφάλαιο βασισμένη σε υπάρχουσες δεξιότητες'
    ]
  },
  {
    num: '02',
    title: 'Καινοτομία και στρατηγική',
    booksCount: '4 Βιβλία',
    books: [
      'Zero to One - Peter Thiel',
      'Blue Ocean Strategy - W. Chan Kim & Renée Mauborgne',
      'Purple Cow - Seth Godin',
      'The Cluetrain Manifesto - Rick Levine et al.'
    ],
    summary: 'Στρατηγικές για δημιουργία μονοπωλιακών ιδεών, αποφυγή ανταγωνισμού και ανάπτυξη νέων αγορών (Blue Ocean).',
    solutions: [
      'Καινοτομία από 0 σε 1 αντί για στείρα αντιγραφή ανταγωνιστών',
      'Εύρεση "μπλε ωκεανού" χωρίς κορεσμό',
      'Σχεδιασμός αξιοσημείωτων προϊόντων (Purple Cow)'
    ]
  },
  {
    num: '03',
    title: 'Χτίσιμο brand και επικοινωνία',
    booksCount: '4 Βιβλία',
    books: [
      'Building a StoryBrand - Donald Miller',
      'The E-Myth Revisited - Michael E. Gerber',
      'Crushing It! - Gary Vaynerchuk',
      'Expert Secrets - Russell Brunson'
    ],
    summary: 'Χτίσιμο ισχυρού brand, storytelling όπου ο πελάτης είναι ο ήρωας και δημιουργία πιστής κοινότητας.',
    solutions: [
      'StoryBrand Framework για κρυστάλλινα μηνύματα',
      'Δόμηση συστημάτων που λειτουργούν χωρίς εξάρτηση από τον ιδρυτή',
      'Προσωπικό branding και αυθεντική παρουσία στα social media'
    ]
  },
  {
    num: '04',
    title: 'Ψυχολογία και συμπεριφορά καταναλωτή',
    booksCount: '3 Βιβλία',
    books: [
      'Influence: The Psychology of Persuasion - Robert B. Cialdini',
      'Hooked: How to Build Habit-Forming Products - Nir Eyal',
      'Contagious: How to Build Word of Mouth - Jonah Berger'
    ],
    summary: 'Οι θεμελιώδεις αρχές πειθούς, δημιουργία συνηθειών χρήσης (Hook Model) και viral word-of-mouth (STEPPS).',
    solutions: [
      'Αμοιβαιότητα, κοινωνική απόδειξη, συνέπεια και σπανιότητα',
      'Hook Model (Trigger -> Action -> Reward -> Investment)',
      'Social Currency & Practical Value για διάδοση περιεχομένου'
    ]
  },
  {
    num: '05',
    title: 'Digital Marketing: Βασικές αρχές',
    booksCount: '5 Βιβλία',
    books: [
      'DotCom Secrets - Russell Brunson',
      'Digital Marketing for Dummies - Ryan Deiss et al.',
      'Permission Marketing - Seth Godin',
      'Inbound Marketing - Brian Halligan & Dharmesh Shah',
      'Digital Marketing Strategy - Simon Kingsnorth'
    ],
    summary: 'Αρχιτεκτονική πωλησιακών funnels (lead magnets, tripwires, core offers) και permission-based marketing.',
    solutions: [
      'Δόμηση σταδιακών funnels που μεγιστοποιούν το Customer Lifetime Value',
      'Inbound οργανική προσέλκυση μέσω SEO & content',
      'Απόκτηση ρητής άδειας (permission) για μακροχρόνια σχέση εμπιστοσύνης'
    ]
  },
  {
    num: '06',
    title: 'Content marketing και social media',
    booksCount: '5 Βιβλία',
    books: [
      'Epic Content Marketing - Joe Pulizzi',
      'The Art of Social Media - Guy Kawasaki & Peg Fitzpatrick',
      'Everybody Writes - Ann Handley',
      'Youtility - Jay Baer',
      'Killing Marketing - Joe Pulizzi & Robert Rose'
    ],
    summary: 'Διανομή περιεχομένου υψηλής αξίας που εκπαιδεύει, εμπνέει και μετατρέπεται σε κερδοφόρο μηχανισμό.',
    solutions: [
      'Ιστορίες που αξίζει να μοιραστούν αντί για στείρες διαφημίσεις',
      'Youtility: Παροχή τόσο χρήσιμης βοήθειας που οι πελάτες πληρώνουν',
      'Σαφής, προσαρμοσμένη γραφή για newsletter και social media'
    ]
  },
  {
    num: '07',
    title: 'Προηγμένες στρατηγικές Marketing',
    booksCount: '5 Βιβλία',
    books: [
      'The New Rules of Marketing and PR - David Meerman Scott',
      'The 22 Immutable Laws of Marketing - Al Ries & Jack Trout',
      'Launch - Jeff Walker',
      'The Ultimate Guide to Google AdWords - Perry Marshall et al.',
      'The Art of SEO - Eric Enge et al.'
    ],
    summary: 'Product Launch Formula, real-time marketing, αλάνθαστοι νόμοι branding και βελτιστοποίηση Search & PPC.',
    solutions: [
      'Product Launch Formula: Pre-launch buzz, scarcity και upsells',
      'Νόμος της Εστίασης: Κυριαρχία σε μία μοναδική λέξη στην αγορά',
      'Στοχευμένα Google Ads & Technical SEO για οργανική επισκεψιμότητα'
    ]
  },
  {
    num: '08',
    title: 'Αυτοματοποίηση βασικών εργασιών',
    booksCount: '4 Βιβλία',
    books: [
      'Automate the Boring Stuff with Python - Al Sweigart',
      'Workflow Automation with Zapier - Bryan Helmig',
      'Marketing Automation For Dummies - Mathew Sweezey',
      'Think Outside the Inbox - David Cummings & Adam Blitzer'
    ],
    summary: 'Αυτοματοποίηση επαναλαμβανόμενων εργασιών με Python, Zapier και automated email sequences.',
    solutions: [
      'Zapier & Make: Σύνδεση συστημάτων χωρίς απαίτηση κώδικα',
      'Αυτόματες ροές lead capture, scoring και onboarding',
      'Απελευθέρωση 20+ ωρών εβδομαδιαίως από χειροκίνητα tasks'
    ]
  },
  {
    num: '09',
    title: 'Προηγμένη αυτοματοποίηση και ΑΙ',
    booksCount: '9 Βιβλία',
    books: [
      'Automate This - Christopher Steiner',
      'Python for DevOps - Noah Gift et al.',
      'Robotic Process Automation (RPA)',
      'Web Scraping with Python - Ryan Mitchell',
      'Selenium Testing Tools - Unmesh Gundecha',
      'Automate and Grow - Michael Devellano',
      'The Automated Customer Acquisition System'
    ],
    summary: 'Αξιοποίηση τεχνητής νοημοσύνης (AI), Robotic Process Automation (RPA) και data-driven συστημάτων πελατών.',
    solutions: [
      'AI agents για ανάλυση συμπεριφοράς και εξατομίκευση',
      'RPA για αυτοματοποιημένη διαχείριση αποθεμάτων & παραγγελιών',
      'Συστήματα αυτόματης απόκτησης πελατών 24/7'
    ]
  },
  {
    num: '10',
    title: 'Κλιμάκωση και βελτιστοποίηση',
    booksCount: '5 Βιβλία',
    books: [
      'Traction - Gabriel Weinberg & Justin Mares',
      'Work the System - Sam Carpenter',
      'The Long Tail - Chris Anderson',
      'Automate and Grow - Michael Devellano',
      'The Automated Customer Acquisition System'
    ],
    summary: 'Εύρεση του ιδανικού καναλιού traction από τα 19 διαθέσιμα, λειτουργία με συστήματα (SOPs) και The Long Tail.',
    solutions: [
      'Bullseye Framework για επιλογή του νο1 καναλιού ανάπτυξης',
      'Work the System: Επιχείρηση που λειτουργεί αυτόνομα χωρίς επίβλεψη',
      'Κυριαρχία σε κερδοφόρες niche αγορές της μακριάς ουράς'
    ]
  }
];

// Compatibility alias
export const GUIDE_CHAPTERS = REAL_2548_CHAPTERS.map(ch => ({
  num: ch.num,
  title: ch.title,
  books: ch.booksCount,
  desc: ch.summary
}));
