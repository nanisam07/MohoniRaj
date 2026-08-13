export interface Story {
  id: string;
  name: string;
  age?: string;
  headline: string;
  image: string;
  challenges: string;
  goals: string;
  transformation: string;
  quote?: string;
}

export const transformationStories: Story[] = [
  {
    id: "aditya",
    name: "Aditya",
    headline: "Secured ₹9 Crore Financial Support Effortlessly",
    image: "/images/Aditya.jpg",
    challenges: "Aditya struggled with financial blocks and serious challenges to secure financial support to meet his health challenges, leading to extreme stress and uncertainty.",
    goals: "Attract financial abundance and secure financial aid from the government without obstacles or endless delays.",
    transformation: "After practicing Ho'oponopono under Mohiniraj's guidance, his mindset shifted completely. Within a short time, he effortlessly secured a ₹9 Crore financial aid grant from the government, allowing him to move forward with confidence and gratitude.",
    quote: "Ho'oponopono cleared emotional resistance I didn't even realize I had. The ₹9 Cr financial support came through smoothly without friction."
  },
  {
    id: "udaya",
    name: "Udaya",
    headline: "Transformed into a Successful Prenatal Coach",
    image: "/images/Udaya.jpg",
    challenges: "Udaya felt stuck in an unfulfilling career, constantly battling self-doubt and unsure how to transition into her true passion for helping expecting mothers.",
    goals: "Gain complete mental clarity, overcome hesitation and self-doubt, and establish herself as a full-time prenatal coach.",
    transformation: "Using Ho'oponopono healing techniques, she cleared subconscious emotional resistance, gained inner confidence, and has since helped 300+ mothers experience smooth, joyful, and healthy births.",
    quote: "I unlocked my life purpose. Overcoming self-doubt allowed me to empower over 300 mothers on their birthing journey."
  },
  {
    id: "pavani",
    name: "Pavani",
    age: "19",
    headline: "Overcame Suicidal Thoughts & Achieved Her College Dream",
    image: "/images/Pavani-1.jpeg",
    challenges: "Pavani battled severe emotional distress and overwhelming suicidal thoughts due to intense academic pressure and personal emotional struggles.",
    goals: "Find deep emotional healing, regain her self-worth, and secure admission to her dream university.",
    transformation: "By applying Ho'oponopono daily, she released past pain, gained renewed hope, and successfully secured a seat at her dream college, transforming her life with joy and self-belief.",
    quote: "Ho'oponopono literally saved my life. I went from deep darkness to securing a seat at my dream university."
  },
  {
    id: "abhijna",
    name: "Abhijna",
    age: "19",
    headline: "Overcame Confusion & Regret, Found Total Clarity in Life",
    image: "/images/Abhijna.jpg",
    challenges: "Abhijna struggled with chronic procrastination, intense fear of the future, and extreme confusion about choosing her educational and career path. Even after making decisions, she often felt regretful and lonely.",
    goals: "Achieve mental stability, find true satisfaction in her choices, and make better decisions for herself without fear or doubt.",
    transformation: "Through Ho'oponopono, she shifted her mindset, started taking action without hesitation, and stopped regretting past decisions. She now trusts the universe and believes in herself, moving forward with clarity and confidence.",
    quote: "I stopped second-guessing myself. Ho'oponopono gave me the mental clarity to make decisions without fear or regret."
  }
];
