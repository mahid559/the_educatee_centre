export interface Instructor {
  id: string;
  name: string;
  role: string;
  title: string;
  bio: string;
  philosophy: string;
  teachingSubjects: string[];
  image: string;
  quote?: string;
  verified: boolean;
}

export const instructors: Instructor[] = [
  {
    id: "zahir-uddin-babar",
    name: "Engr. Zahir Uddin Babar",
    role: "Founder, CEO & Lead Instructor",
    title: "Chief Executive Officer & Lead English Mentor",
    bio: "The driving visionary behind The Educatee Centre. Known affectionately by hundreds of students across Feni as 'Babar Sir', he is celebrated for an energetic, charismatic teaching methodology that makes English natural, engaging, and entirely devoid of boredom. Combining an engineering analytical mindset with deep educational passion, he weaves ethical mentorship and life confidence directly into language lessons.",
    philosophy:
      "Teaching is not about imposing textbook rules; it is about building the courage within a student to speak their mind to the world without fear.",
    teachingSubjects: [
      "SSC & Dakhil Spoken English",
      "Spoken English for Working Professionals",
      "IELTS Preparation (Speaking & Writing)",
      "Youth Character & Leadership Mentorship",
    ],
    image: "/images/founder_mentor.jpg",
    quote: "English is not something to fear; it is a universal bridge connecting your potential to global opportunities.",
    verified: true,
  },
  {
    id: "mahmudul-hasan",
    name: "Mahmudul Hasan",
    role: "Senior Academic Mentor & Advisor",
    title: "Senior Faculty Advisor",
    bio: "Encountered and celebrated at The Educatee Centre as a brilliant and wise presence. He works alongside Babar Sir to enrich student learning, guide academic strategy, and ensure that every learner receives thoughtful guidance on their higher academic journey.",
    philosophy:
      "A student thrives when knowledge is delivered with warmth, patience, and unwavering belief in their potential.",
    teachingSubjects: [
      "Academic Strategy & Guidance",
      "Foundational Grammar & Language Skills",
      "Student Academic Mentoring",
    ],
    image: "/images/hero_student.jpg",
    verified: true,
  },
  {
    id: "misbah",
    name: "Trainer Misbah",
    role: "Leadman Handwriting Trainer & Program Founder",
    title: "Specialist Trainer",
    bio: "Specialist instructor affiliated with the Leadman Smart Handwriting program, focused on transforming student handwriting through scientific stroke mechanics, posture alignment, and aesthetic speed training.",
    philosophy:
      "Clear, elegant handwriting is the mirror of a disciplined mind and the gateway to superior exam performance.",
    teachingSubjects: [
      "English Cursive & Print Presentation",
      "Scientific Stroke Mechanics & Letter Balance",
      "Exam Speed Drills",
    ],
    image: "/images/classroom_spoken.jpg",
    verified: true,
  },
];
