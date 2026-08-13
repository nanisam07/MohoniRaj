export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  rating: number;
  image: string;
  text: string;
  highlight: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "yashovanthi",
    name: "Yashovanthi",
    role: "Workshop Participant",
    rating: 5,
    image: "/images/Yashovanthi-Review.jpg",
    text: "Attending Mohiniraj's Ho'oponopono session was a turning point for me. I was carrying years of silent emotional baggage, stress, and anxiety. The simple four phrases helped me release negative thoughts almost instantly. I feel a profound sense of inner lightness and peaceful calm that I haven't felt in years.",
    highlight: "A turning point in my life — released years of silent emotional baggage almost instantly."
  },
  {
    id: "lavanya",
    name: "Lavanya Sistla",
    role: "Working Professional",
    rating: 5,
    image: "/images/Lavanya-Sistla.jpg",
    text: "Mohiniraj's teaching style is so authentic, peaceful, and practical. I used to overthink every small decision at work and in relationships. After integrating the live practice into my daily routine, my overthinking has reduced dramatically and my relationships have healed deeply.",
    highlight: "My overthinking reduced dramatically and my relationships have healed deeply."
  },
  {
    id: "latha",
    name: "Latha",
    role: "Homemaker",
    rating: 5,
    image: "/images/Latha-Review.jpg",
    text: "I was emotionally drained balancing family responsibilities while feeling unappreciated. Mohiniraj showed me how to clear subconscious resentment with Ho'oponopono. Now, I wake up with deep gratitude, joy, and peace in my heart every single day.",
    highlight: "Now I wake up with deep gratitude, joy, and peace in my heart every single day."
  }
];
