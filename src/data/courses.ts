export interface Course {
  slug: string;
  title: string;
  category: "English Proficiency" | "Test Preparation" | "Digital Skills / IT" | "Skill Development";
  badge?: string;
  featured: boolean;
  shortDescription: string;
  fullOverview: string;
  targetAudience: string[];
  keyFeatures: string[];
  curriculumHighlights: {
    topic: string;
    points: string[];
  }[];
  format: string;
  classSize: string;
  scheduleNote: string;
  feeInfo: {
    display: string;
    note: string;
    hasPromotionalDiscount: boolean;
  };
  instructor: {
    name: string;
    role: string;
  };
  demoAvailable: boolean;
  image: string;
}

export const courses: Course[] = [
  {
    slug: "ssc-dakhil-spoken-english",
    title: "SSC & Dakhil Spoken English",
    category: "English Proficiency",
    badge: "Most Popular",
    featured: true,
    shortDescription:
      "A foundational spoken English program specifically designed for SSC and Dakhil students to break speaking fears, build conversational fluency, and master practical grammar.",
    fullOverview:
      "Transitioning from rote memorization to real-life English communication is the primary barrier for secondary students. This specialized course is carefully structured for SSC and Dakhil candidates (e.g. Target Batch 2026). Classes focus on confidence-building, proper pronunciation, everyday conversation scenarios, and functional English grammar without the burden of dry textbook rules. Distinct batches are also available, including dedicated Girls Batches.",
    targetAudience: [
      "SSC & Dakhil Examination Candidates",
      "Students with fear or hesitation in speaking English",
      "Learners seeking practical grammar mastery",
      "Female students seeking dedicated Girls Batches",
    ],
    keyFeatures: [
      "Active, zero-boredom conversational exercises",
      "Overcoming speaking hesitation & stage fear",
      "Essential practical grammar for real life & exams",
      "Dedicated, respectful batches (including Girls Batch)",
      "Free initial Demo Sessions before final enrollment",
      "Celebratory Graduation Ceremony upon completion",
    ],
    curriculumHighlights: [
      {
        topic: "Foundational Speaking Confidence",
        points: [
          "Eliminating hesitation & psychological speaking barriers",
          "Everyday greetings, introductions, and self-expression",
          "Classroom, social, and family conversational scenarios",
        ],
      },
      {
        topic: "Practical Functional Grammar",
        points: [
          "Essential sentence structures without memorizing formulas",
          "Tense application in natural spoken dialogues",
          "Common grammatical pitfalls and natural correction",
        ],
      },
      {
        topic: "Vocabulary & Pronunciation",
        points: [
          "High-frequency conversational vocabulary",
          "Correct accent, syllable stress, and speech rhythm",
          "Describing objects, events, and personal aspirations",
        ],
      },
      {
        topic: "Interactive Speaking Sessions",
        points: [
          "Pair discussions and group conversational activities",
          "Public speaking mini-presentations",
          "Continuous personalized feedback from the instructor",
        ],
      },
    ],
    format: "Offline (Appayan Afroz Tower, 5th Floor)",
    classSize: "Interactive Group Batches",
    scheduleNote: "Regular day batches available. New private batches start on the 1st of each month.",
    feeInfo: {
      display: "Inquire for Current Batch Fee",
      note: "Frequent 50% discount promotional offers available for new intakes and Girls Batches. Contact office for current offer.",
      hasPromotionalDiscount: true,
    },
    instructor: {
      name: "Engr. Zahir Uddin Babar",
      role: "Lead English Instructor & CEO",
    },
    demoAvailable: true,
    image: "/images/classroom_spoken.jpg",
  },
  {
    slug: "spoken-english-working-professionals",
    title: "Spoken English for Working Professionals",
    category: "English Proficiency",
    badge: "Evening Batches",
    featured: true,
    shortDescription:
      "Tailored executive spoken English classes scheduled during evening hours, focused on workplace communication, meetings, email correspondence, and corporate confidence.",
    fullOverview:
      "Designed specifically around the busy schedules of job holders, business owners, and corporate aspirants in Feni. This program bypasses generic beginner lessons to focus directly on professional English: workplace interactions, phone etiquette, formal presentations, interview communication, and cross-cultural corporate discussions. Evening class slots ensure you never have to choose between your career and your personal growth.",
    targetAudience: [
      "Corporate employees & job holders",
      "Business owners & entrepreneurs",
      "Graduates preparing for corporate job interviews",
      "Professionals seeking career advancement through English fluency",
    ],
    keyFeatures: [
      "Convenient evening batches to accommodate office schedules",
      "Practical workplace scenarios & professional roleplays",
      "Refined pronunciation and professional vocabulary",
      "Direct mentorship from Engr. Zahir Uddin Babar",
      "Networking with like-minded career-driven peers",
      "Free trial class available before commitment",
    ],
    curriculumHighlights: [
      {
        topic: "Workplace Communication",
        points: [
          "Professional introductions and corporate elevator pitches",
          "Leading and contributing to business meetings",
          "Handling phone conversations and customer inquiries",
        ],
      },
      {
        topic: "Professional Presentation & Discussions",
        points: [
          "Structuring arguments and persuasive speaking",
          "Formal presentations with confidence and clarity",
          "Expressing opinions, agreement, and diplomatic disagreement",
        ],
      },
      {
        topic: "Job Interview & Career Fluency",
        points: [
          "Common interview questions and articulate responses",
          "Professional body language and vocal projection",
          "Clear explanation of professional experience and achievements",
        ],
      },
    ],
    format: "Offline (Appayan Afroz Tower, 5th Floor)",
    classSize: "Focused Executive Batch",
    scheduleNote: "Evening classes designed specifically for work schedules.",
    feeInfo: {
      display: "Inquire for Executive Batch Fee",
      note: "Flexible payment options. Early admission discounts periodically announced on Facebook.",
      hasPromotionalDiscount: true,
    },
    instructor: {
      name: "Engr. Zahir Uddin Babar",
      role: "Lead English Instructor & CEO",
    },
    demoAvailable: true,
    image: "/images/founder_mentor.jpg",
  },
  {
    slug: "ielts-preparation",
    title: "IELTS Preparation (Foundation, Main & Crash)",
    category: "Test Preparation",
    badge: "Official Band 6.0+ Track Record",
    featured: true,
    shortDescription:
      "Comprehensive IELTS training across all four modules (Listening, Reading, Writing, Speaking) with small groups strictly capped at 16 students, free full-length mock tests, and expert strategy.",
    fullOverview:
      "Whether you are targeting post-HSC university admission abroad or professional immigration, The Educatee Centre's IELTS program provides a rigorous, test-proven curriculum. We offer tiered learning pathways: Post-HSC Foundation (for students who need grammar and vocabulary reinforcement), Target-Based Complete Course, and Intensive Crash Course options. With strictly limited batch sizes of only 16 students per class, every candidate receives personal diagnostic feedback and free mock examinations.",
    targetAudience: [
      "Post-HSC graduates aspiring for foreign university admissions",
      "Immigration and global work visa applicants",
      "Students needing to improve from Band 5.0/5.5 to Band 6.5 - 7.5+",
      "Candidates seeking intensive mock test practice with scoring reviews",
    ],
    keyFeatures: [
      "Strictly small batches: Maximum 16 students per class",
      "Complete 4-module mastery: Listening, Reading, Writing, Speaking",
      "Regular free full-length mock tests with diagnostic reviews",
      "High-scoring alumni track record (e.g. Band 6.0+ achievers like Jamshed Hossain)",
      "Tiered pathways: Foundation, Main Target-based, and Crash course",
      "Comprehensive official Cambridge preparation materials",
    ],
    curriculumHighlights: [
      {
        topic: "Speaking & Listening Mastery",
        points: [
          "One-on-one speaking interviews with recorded evaluation",
          "Overcoming exam anxiety and fluency pauses in Part 1, 2 & 3",
          "Listening strategies for accents, distractors, and rapid note-taking",
        ],
      },
      {
        topic: "Academic & General Reading",
        points: [
          "Skimming, scanning, and rapid keyword location techniques",
          "Tackling True/False/Not Given and Headings match questions",
          "Time management strategies to finish all 40 questions on time",
        ],
      },
      {
        topic: "Task 1 & Task 2 Writing Excellence",
        points: [
          "Task 1: Graph, chart, map, and process report structures",
          "Task 2: Essay ideation, cohesive paragraphs, and academic vocabulary",
          "Grammatical range and accuracy scoring criteria breakdown",
        ],
      },
      {
        topic: "Mock Tests & Diagnostic Review",
        points: [
          "Simulated full exam environment mock tests",
          "Individual feedback sessions pointing out score gaps",
          "Final band score target refinement before test registration",
        ],
      },
    ],
    format: "Offline (Appayan Afroz Tower, 5th Floor)",
    classSize: "Strictly Limited to 16 Students per Class",
    scheduleNote: "Morning, afternoon, and evening batches. New sessions announced dynamically.",
    feeInfo: {
      display: "Inquire for Tiered Pricing",
      note: "Special 50% discount campaigns recently offered for select intakes. Contact office for active promotions.",
      hasPromotionalDiscount: true,
    },
    instructor: {
      name: "Engr. Zahir Uddin Babar",
      role: "Lead IELTS Specialist & CEO",
    },
    demoAvailable: true,
    image: "/images/ielts_prep.jpg",
  },
  {
    slug: "basic-computer-ms-office",
    title: "Basic Computer & Microsoft Office Applications",
    category: "Digital Skills / IT",
    badge: "Hands-on Lab Training",
    featured: true,
    shortDescription:
      "Practical, application-based computing literacy conducted in a dedicated computer lab. Learn MS Word, Excel, PowerPoint, Internet operations, and workplace digital productivity.",
    fullOverview:
      "Digital literacy is no longer optional—it is the prerequisite for any modern academic or corporate path. Held inside The Educatee Centre's dedicated computer training lab, this course is completely practical: every student practices directly on workstations. From drafting professional letters in MS Word and managing data sheets in MS Excel to creating compelling slide decks in PowerPoint and navigating online tools, students gain true hands-on capability.",
    targetAudience: [
      "School, college, and university students needing IT literacy",
      "Job seekers preparing for government and private office roles",
      "Beginners with zero prior computer experience",
      "Anyone wishing to earn a verified computer training certificate",
    ],
    keyFeatures: [
      "Conducted in our dedicated, air-conditioned computer training lab",
      "100% hands-on learning—one student per workstation",
      "Practical projects: CV making, invoice calculation, business slides",
      "Internet research, email etiquette, and cloud storage basics",
      "Potential Computer Shaksharta Mission certification pathway",
      "Friendly mentors guiding step-by-step from day one",
    ],
    curriculumHighlights: [
      {
        topic: "Computer Fundamentals & Operating System",
        points: [
          "Hardware basics, file management, folder organization",
          "Windows tools, shortcuts, and safe browsing practices",
          "Keyboard typing fluency and essential shortcuts",
        ],
      },
      {
        topic: "Microsoft Word (Document Processing)",
        points: [
          "Document formatting, styles, tables, and page setup",
          "Official letter drafting, resume/CV creation, and printing",
          "Proofreading, spellcheck, and headers/footers",
        ],
      },
      {
        topic: "Microsoft Excel (Data & Spreadsheets)",
        points: [
          "Cell formatting, row/column operations, and data entry",
          "Essential mathematical formulas: SUM, AVERAGE, IF, COUNT",
          "Salary sheets, grade calculation, and simple data charts",
        ],
      },
      {
        topic: "Microsoft PowerPoint & Internet Essentials",
        points: [
          "Designing engaging visual presentations and slide layouts",
          "Transitions, animations, and presenter mode",
          "Professional email sending, attachments, Google Drive",
        ],
      },
    ],
    format: "Offline (Dedicated Computer Lab, Appayan Afroz Tower)",
    classSize: "Limited Lab Workstations per Batch",
    scheduleNote: "Multiple batch timings available throughout the week.",
    feeInfo: {
      display: "Inquire for Lab Course Fee",
      note: "Affordable fee structure. Contact office for current admission details and batch dates.",
      hasPromotionalDiscount: false,
    },
    instructor: {
      name: "IT Faculty Team",
      role: "Certified Computer Instructors",
    },
    demoAvailable: true,
    image: "/images/computer_lab.jpg",
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing & Freelance Foundations",
    category: "Digital Skills / IT",
    badge: "Career Ready",
    featured: false,
    shortDescription:
      "A practical foundational course on social media growth strategies, Facebook & Instagram marketing, content creation basics, and client freelancing fundamentals.",
    fullOverview:
      "Learn how modern businesses reach customers and how independent digital creators generate income. This foundational program covers the essentials of social media platforms: setting up business pages, content planning, audience targeting, organic engagement, and sponsored ad basics. Ideal for young people in Feni looking to build commercial digital skills or start online freelance services.",
    targetAudience: [
      "Aspiring freelancers and remote work seekers",
      "Local business owners wanting to market on Facebook & Instagram",
      "Students interested in creative digital marketing careers",
      "Anyone seeking high-demand digital skills",
    ],
    keyFeatures: [
      "Real-world case studies based on active social media marketing",
      "Facebook Business Suite, Meta Ads Manager fundamentals",
      "Content strategy: copy, visuals, and video reels",
      "Client outreach and freelance project management basics",
      "Interactive mentoring and live question-and-answer support",
    ],
    curriculumHighlights: [
      {
        topic: "Social Platform Ecosystems",
        points: [
          "Facebook Page optimization and branding checklist",
          "Instagram for business and visual storytelling",
          "Understanding social media algorithms and reach metrics",
        ],
      },
      {
        topic: "Content Creation & Copywriting",
        points: [
          "Writing persuasive captions and headlines that convert",
          "Basic visual design principles using free creative tools",
          "Creating high-engagement short-form videos and reels",
        ],
      },
      {
        topic: "Paid Advertising & Freelancing",
        points: [
          "Meta Ads Manager: boosting posts vs. targeted campaigns",
          "Defining target demographics, interests, and budgets",
          "Freelance platforms, client communication, and portfolio building",
        ],
      },
    ],
    format: "Offline (Computer Lab / Seminar Room)",
    classSize: "Practical Batch",
    scheduleNote: "Weekend and evening batch options available.",
    feeInfo: {
      display: "Inquire for Marketing Batch Fee",
      note: "Promotional bundle discounts available when taken alongside Computer literacy.",
      hasPromotionalDiscount: false,
    },
    instructor: {
      name: "Digital Media Faculty",
      role: "Marketing Trainers",
    },
    demoAvailable: true,
    image: "/images/hero_student.jpg",
  },
  {
    slug: "smart-handwriting-course",
    title: "Leadman Smart Handwriting Course",
    category: "Skill Development",
    badge: "Specialized Training",
    featured: false,
    shortDescription:
      "A focused niche program dedicated to transforming student handwriting in English and Bengali for clearer exam presentation, faster speed, and aesthetic appeal.",
    fullOverview:
      "Handwriting plays a decisive role in board examination grading and overall academic confidence. Associated with specialized handwriting methodologies (Leadman program / Trainer Misbah), this course helps students correct their pen grip, line alignment, letter proportion, and writing speed. Offered in dedicated periodic batches.",
    targetAudience: [
      "School and college students with messy or illegible handwriting",
      "Exam candidates wanting to score higher through neat presentation",
      "Parents seeking handwriting improvement for their children",
    ],
    keyFeatures: [
      "Step-by-step stroke and letter formation correction",
      "Techniques for English and Bengali script clarity",
      "Ergonomic pen grip and fatigue reduction exercises",
      "Speed writing methods tailored for exam time constraints",
      "Noticeable transformation in handwriting within classes",
    ],
    curriculumHighlights: [
      {
        topic: "Grip & Posture Correction",
        points: [
          "Proper pen holding angle and finger placement",
          "Body posture and page alignment for steady strokes",
        ],
      },
      {
        topic: "Letter Formation & Proportions",
        points: [
          "Uppercase and lowercase consistency",
          "Script strokes, vowels, and joined characters",
          "Spacing between words and neat line maintenance",
        ],
      },
      {
        topic: "Exam Presentation & Speed",
        points: [
          "Speed drills without sacrificing legibility",
          "Paper margins, headings, and clean answer presentation",
        ],
      },
    ],
    format: "Offline (Appayan Afroz Tower)",
    classSize: "Small Focused Batches",
    scheduleNote: "Announced periodically on dynamic seasonal schedules.",
    feeInfo: {
      display: "Inquire for Batch Schedule & Fee",
      note: "Materials and specialized practice workbooks provided.",
      hasPromotionalDiscount: false,
    },
    instructor: {
      name: "Misbah",
      role: "Trainer / Program Facilitator",
    },
    demoAvailable: true,
    image: "/images/classroom_spoken.jpg",
  },
];
