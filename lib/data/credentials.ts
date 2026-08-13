export interface Certification {
  id: string;
  name: string;
  institution: string;
  logo: string;
  description: string;
}

export interface Mentor {
  id: string;
  name: string;
  role: string;
}

export const certificationsData: Certification[] = [
  {
    id: "annamalai",
    name: "Certified Practitioner",
    institution: "Annamalai University",
    logo: "/images/Annamalai_University_logo.png",
    description: "Academic certification and formal qualification in holistic education & health programs."
  },
  {
    id: "ayush",
    name: "Recognized Healing Guidance",
    institution: "Ministry of Ayush",
    logo: "/images/Ayush-Ministry.png",
    description: "Aligning with traditional Indian wellness and holistic self-care standards."
  },
  {
    id: "namaste-india",
    name: "Holistic Wellness Leader",
    institution: "Namaste India Wellness",
    logo: "/images/Namaste-India.png",
    description: "Recognized contribution to national personal development and emotional wellness outreach."
  }
];

export const mentorsData: Mentor[] = [
  { id: "mitesh-khatri", name: "Mitesh Khatri", role: "Law of Attraction & Leadership Coach" },
  { id: "siddharth-rajsekar", name: "Siddharth Rajsekar", role: "Digital Leadership & Knowledge Empire Mentor" },
  { id: "kshitij", name: "Kshitij", role: "Transformational Life & Mindset Guide" },
  { id: "jack-canfield", name: "Jack Canfield", role: "Co-creator of Chicken Soup for the Soul & Success Principles" },
  { id: "dr-joe-vitale", name: "Dr. Joe Vitale", role: "Global Ho'oponopono Master & Author of Zero Limits" },
  { id: "dr-john-demartini", name: "Dr. John DeMartini", role: "Human Behavior Specialist & Polymath" },
];
