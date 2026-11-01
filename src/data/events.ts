export interface EventItem {
  id: string;
  title: string;
  category: "Ceremony" | "Workshop / Demo" | "Academic";
  dateText: string;
  description: string;
  highlights: string[];
  image: string;
  status: "Featured" | "Upcoming" | "Annual";
}

export const eventsData: EventItem[] = [
  {
    id: "graduation-farewell-ceremony",
    title: "SSC & Dakhil Spoken English Graduation & Farewell Ceremony",
    category: "Ceremony",
    dateText: "Held at the completion of each cohort",
    description:
      "A signature tradition of The Educatee Centre. Completing cohorts celebrate their journey with certificates, student speech presentations, honorary crests, gift-giving exchanges, and joyous farewell meals with Babar Sir and mentors.",
    highlights: [
      "Official Course Completion Certificate distribution",
      "Student English speech showcases & self-expression",
      "Special 'CEO Award' honors for outstanding perseverance",
      "Memorable photo sessions and student gift exchanges",
    ],
    image: "/images/graduation_celebration.jpg",
    status: "Featured",
  },
  {
    id: "free-demo-seminar",
    title: "Free Spoken English Seminar & Demo Sessions",
    category: "Workshop / Demo",
    dateText: "Pre-batch opening schedules (e.g., 4th, 6th, 8th & rolling 1st of month)",
    description:
      "Our 'Try Before You Buy' experiential session. Prospective students attend an interactive class for free, experience Engr. Zahir Uddin Babar's engaging teaching style, and understand how fear can be overcome before committing to enrollment.",
    highlights: [
      "100% Free interactive masterclass — no obligation",
      "Direct live interaction with Lead Instructor Babar Sir",
      "Practical tips on overcoming English speaking anxiety",
      "Immediate spot-enrollment discount opportunities (up to 50% off)",
    ],
    image: "/images/classroom_spoken.jpg",
    status: "Upcoming",
  },
  {
    id: "ielts-mock-masterclass",
    title: "IELTS Diagnostic Mock Test & Strategy Masterclass",
    category: "Academic",
    dateText: "Scheduled bi-weekly for enrolled & aspiring candidates",
    description:
      "Simulated real exam environment covering all 4 modules. Candidates test their speed, listening accuracy, and essay structure under timed conditions, followed by comprehensive band score reviews.",
    highlights: [
      "Real test conditions with standard Cambridge materials",
      "Individual diagnostic score sheet pointing out gap areas",
      "One-on-one speaking interview evaluations with recorded analysis",
      "Clear pathway guidance for foreign university admissions",
    ],
    image: "/images/ielts_prep.jpg",
    status: "Upcoming",
  },
  {
    id: "ceo-award-night",
    title: "Annual Student Excellence & CEO Award Recognition",
    category: "Ceremony",
    dateText: "Annual Cultural & Recognition Showcase",
    description:
      "The institute honors students who demonstrated exceptional moral integrity, attendance, speaking progress, and community spirit throughout the academic year.",
    highlights: [
      "Prestigious 'CEO Award' crest and honor roll",
      "Recognition of top IELTS band achievers (e.g. Jamshed Hossain 6.0)",
      "Inspiring addresses by academic mentors and community leaders",
      "Alumni networking and future career pathway guidance",
    ],
    image: "/images/founder_mentor.jpg",
    status: "Annual",
  },
];
