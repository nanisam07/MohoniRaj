export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqData: FAQItem[] = [
  {
    id: "what-is-hooponopono",
    category: "General Practice",
    question: "What is Ho'oponopono?",
    answer: "Ho'oponopono is an ancient Hawaiian healing method focused on reconciliation, forgiveness, and clearing subconscious emotional baggage. By repetition and deep internal resonance with four powerful phrases ('I'm Sorry', 'Please Forgive Me', 'Thank You', 'I Love You'), it cleanses stored memories and rewires the subconscious mind for profound peace and emotional clarity."
  },
  {
    id: "prior-experience",
    category: "General Practice",
    question: "Do I need prior experience in meditation or healing?",
    answer: "No! This method is designed to be simple, accessible, and practical for complete beginners as well as experienced practitioners alike. There are no complicated steps or ritualistic setups required — anyone can learn and apply it immediately."
  },
  {
    id: "will-it-work",
    category: "Results & Process",
    question: "Will this method really work for me?",
    answer: "Yes! Ho'oponopono has helped millions of people worldwide release emotional trauma, break subconscious loops, and heal mental distress. As long as you approach the practice with an open heart and willingness to release, you will experience noticeable inner transformation."
  },
  {
    id: "recording",
    category: "Workshop Info",
    question: "Will I get a recording of the workshop?",
    answer: "No. This workshop is an interactive LIVE experiential session. The real-time group energy and live guided healing practice are best experienced in person during the live stream. Make sure to block your time and attend live."
  },
  {
    id: "is-it-free",
    category: "Workshop Info",
    question: "Is the live workshop really FREE?",
    answer: "Yes! The live introductory workshop is 100% FREE with no hidden charges. Mohiniraj offers this to make authentic emotional healing simple, accessible, and available to everyone seeking transformation."
  },
  {
    id: "finance-relationships",
    category: "Results & Process",
    question: "Can Ho'oponopono help with financial blocks and relationship issues?",
    answer: "Absolutely! Financial roadblocks and relationship conflicts are often manifestations of stored subconscious beliefs, fears, and past emotional pain. By cleansing these subconscious memories using Ho'oponopono, you release resistance and allow abundance, harmony, and peace to flow into all areas of life."
  }
];
