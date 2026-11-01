export interface Testimonial {
  id: string;
  name: string;
  course: string;
  achievement?: string;
  quote: string;
  highlightTag: string;
  avatarSeed: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "jamshed-hossain",
    name: "Jamshed Hossain",
    course: "IELTS Preparation Batch",
    achievement: "Official IELTS Band 6.0 Score",
    quote:
      "Achieving my target IELTS score felt daunting until I joined The Educatee Centre. The small batch size of 16 students ensured that Babar Sir gave me individual diagnostic feedback on my speaking and writing errors every week. The mock tests simulated the real exam perfectly.",
    highlightTag: "IELTS Band 6.0 Achiever",
    avatarSeed: "jamshed",
  },
  {
    id: "fahim-ahmed",
    name: "Fahim Ahmed",
    course: "SSC/Dakhil Spoken English Batch",
    achievement: "Spoken English Graduate",
    quote:
      "I had extreme stage fear whenever I had to utter a single English sentence. Classes with Babar Sir were completely different from any coaching in Feni—no boring grammar memorization, just energetic speaking activities, laughs, and genuine encouragement. Today I can speak confidently in front of everyone.",
    highlightTag: "Speaking Confidence",
    avatarSeed: "fahim",
  },
  {
    id: "nusrat-jahan",
    name: "Nusrat Jahan",
    course: "Spoken English (Girls Batch)",
    achievement: "Graduation Award Recipient",
    quote:
      "The dedicated Girls Batch at The Educatee Centre created such a respectful, secure, and inspiring environment. Babar Sir doesn't just teach English—he teaches self-belief, moral values, and communication etiquette. Our graduation day was one of the most memorable milestones of my life.",
    highlightTag: "Girls Batch Graduate",
    avatarSeed: "nusrat",
  },
  {
    id: "tanvir-hasan",
    name: "Tanvir Hasan",
    course: "Spoken English for Working Professionals",
    achievement: "Corporate Evening Batch",
    quote:
      "As a working professional in Feni, finding a quality English speaking batch in the evening after office was a blessing. The focus on business meetings, emails, and phone etiquette directly helped me present myself with confidence in front of my company management.",
    highlightTag: "Career Advancement",
    avatarSeed: "tanvir",
  },
  {
    id: "ceo-award-winner",
    name: "Student Excellence Recognition",
    course: "The Educatee Centre Honors",
    achievement: "Annual 'CEO Award' Recipient",
    quote:
      "Receiving the CEO Award from Engineer Zahir Uddin Babar Sir at our farewell ceremony showed me how deeply this center cares about each student's character, consistency, and progress. It is truly an institution of unique service.",
    highlightTag: "CEO Award Winner",
    avatarSeed: "award",
  },
];
