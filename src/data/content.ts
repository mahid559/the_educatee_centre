// ============================================================================
// The Educatee Centre - Central Content & Asset Registry
// Location: Feni, Bangladesh
// All text, contact details, course information, and image paths reside here.
// ============================================================================

export interface CourseTier {
  id: string;
  name: string;
  badge?: string;
  target: string;
  description: string;
  highlights: string[];
  popular?: boolean;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'English' | 'IELTS' | 'IT & Digital Skills';
  description: string;
  badge?: string;
  accentColor: 'blue' | 'pink' | 'teal' | 'yellow';
  image: string;
  imageAlt: string;
  targetAudience: string[];
  keyHighlights: string[];
  curriculumOutline: string[];
  // TODO: Update fee, duration, and batch schedule once finalized by administration
  duration: string;
  schedule: string;
  fee: string;
  batchType: string;
  features: string[];
  tiers?: CourseTier[];
  faqs?: { question: string; answer: string }[];
}

export interface HighlightItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: 'calendar' | 'award' | 'users' | 'sparkles';
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  accent: 'blue' | 'pink' | 'teal' | 'yellow';
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  features: string[];
}

export interface CultureGalleryItem {
  id: string;
  image: string;
  imageAlt: string;
  width: number;
  height: number;
  title?: string;
  category?: string;
  caption?: string;
  badge?: string;
}

export type GalleryCategory =
  | "graduation"
  | "certificates"
  | "awards"
  | "classroom"
  | "outdoor";

export interface HomeGalleryCaption {
  label: string;
  tagline: string;
}

export const homeGalleryCaptions: Record<GalleryCategory, HomeGalleryCaption> = {
  graduation: {
    label: "GRADUATION DAY",
    tagline: "Celebrating every milestone",
  },
  certificates: {
    label: "CERTIFICATES",
    tagline: "Recognizing every effort",
  },
  awards: {
    label: "AWARDS",
    tagline: "Honoring excellence",
  },
  classroom: {
    label: "CLASSROOM",
    tagline: "Where confidence begins",
  },
  outdoor: {
    label: "OUTDOOR FUN",
    tagline: "Learning and laughing together",
  },
};

export interface Testimonial {
  id: string;
  name: string;
  date: string;
  text: string;
  source: 'Facebook';
  isShort?: boolean;
  featured?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'admission' | 'demo' | 'batches' | 'location' | 'contact' | 'courses';
}

// TODO: Confirm with the center (and reviewers if needed) before publishing names
export const testimonials: Testimonial[] = [
  {
    id: "fb-1",
    name: "Ahmed Shafin",
    date: "31 January 2024",
    text: "learning english is fun with the Educatee centre. they are providing 4 months IELTS course. Which is probably the best service in town. teachers are so skilled and highly qualified. They are passionate and sincere about their service.",
    source: "Facebook",
    featured: true,
  },
  {
    id: "fb-2",
    name: "Safayat Hossain Ton Moy",
    date: "31 January 2024",
    text: "The trainers are highly motivated and skilled. They make the lessons easy just like that. anyone can learn quickly with their experienced teaching method.",
    source: "Facebook",
  },
  {
    id: "fb-3",
    name: "Abdullah AL Mehmud",
    date: "31 January 2024",
    text: "The best thing about The Educatee Centre is their vision and care about every individual student. Best educational institution in feni for obvious reasons.",
    source: "Facebook",
    featured: true,
  },
  {
    id: "fb-4",
    name: "Naimur Rahman",
    date: "31 January 2024",
    text: "Undoubtedly they are providing the best service in Feni. Especially the spoken English with the educated team is fantastic. All instructors are highly skilled",
    source: "Facebook",
    featured: true,
  },
  {
    id: "fb-5",
    name: "Sayful Islam",
    date: "2 May 2023",
    text: "The Educatee Centre is the perfect place to learn English. The teachers are experienced and the classes are well-structured, making learning easy and enjoyable.",
    source: "Facebook",
    featured: true,
  },
  {
    id: "fb-6",
    name: "Raihan Chowdhury",
    date: "14 March 2023",
    text: "The Educatee Centre is a top-notch English teaching centre. The teachers are dedicated and passionate about teaching, and the classes are fun and interactive.",
    source: "Facebook",
    featured: true,
  },
  {
    id: "fb-7",
    name: "Sharif Mazumder",
    date: "26 October 2022",
    text: "This best English learning institutions in the town!",
    source: "Facebook",
    isShort: true,
  },
  {
    id: "fb-8",
    name: "Fahimul Hoq Tahi",
    date: "17 March 2024",
    text: "I have been watching the activity of this institution for long period time and I think this is a good place for learning not only english but also a lot of necessary skills for career. I am highly recommending this institution..",
    source: "Facebook",
    featured: true,
  },
  {
    id: "fb-9",
    name: "Abdulla Al Momin",
    date: "14 March 2024",
    text: "Highly recommended for learning english in feni.",
    source: "Facebook",
    isShort: true,
  },
  {
    id: "fb-10",
    name: "Kazi Ovi",
    date: "14 March 2024",
    text: "I am a regular student of this fantastic institution. Highly recommended for learning english.",
    source: "Facebook",
  },
];

export const siteContent = {
  brand: {
    name: "The Educatee Centre",
    location: "Feni, Bangladesh",
    // TODO: Confirm exact founding date in 2022 with Engr. Zahir Uddin Babar
    establishedYear: 2022,
    foundingNote: "Established in 2022 in Feni as a welcoming learning sanctuary for English and IT mastery.",
    tagline: "Overcome Your Fear of English. Build Your Global Future.",
    subtext: "Feni's premier institute for conversational English fluency, targeted IELTS preparation, and practical IT skills in a warm, motivating environment.",
    logoPath: "/logo.svg",
    logoPng: "/logo.png",
  },

  contact: {
    address: "Appayan Afroz Tower (5th floor), Near Pourashava Gate, College Road, Feni",
    primaryPhone: "01874-232272",
    secondaryPhone: "01576-560505",
    whatsappNumber: "8801874232272",
    whatsappLink: "https://wa.me/8801874232272",
    facebookUrl: "https://www.facebook.com/TheEducatee.edu",
    email: "theeducatee.feni@gmail.com",
    // TODO: Confirm exact opening hours for Friday and weekend timings
    openingHours: "Saturday - Thursday: 9:00 AM - 8:00 PM (Friday: Closed / Special Batches Only)",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.3218765415797!2d91.396825!3d23.013589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37536831d10206cb%3A0x8677c7ec52aa4cb5!2sCollege%20Rd%2C%20Feni!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd",
  },

  announcement: {
    active: true,
    text: "Free Demo Classes starting this week! Special 50% discount on Girls' Batch and IELTS Foundation.",
    actionText: "Book Free Demo",
    actionLink: "/admissions#free-demo",
  },

  hero: {
    tag: "FENI'S TRUSTED LANGUAGE & IT INSTITUTE",
    headlineLine1: "Overcome Your Fear of English.",
    headlineLine2: "Build Your Global Future.",
    subtext: "Master spoken English with zero hesitation, prepare for your target IELTS band with free mock tests in small groups of 16, and gain hands-on computer skills in a friendly, encouraging environment.",
    primaryCtaText: "Book a Free Demo Class",
    primaryCtaLink: "#free-demo",
    secondaryCtaText: "Explore Programs",
    secondaryCtaLink: "/programs",
    image: "/images/hero/caf58086-d66d-4d16-bba5-f4698f7966c4.png",
    imageAlt: "Enthusiastic students practicing English and IT skills at The Educatee Centre",
  },

  highlights: [
    {
      id: "h1",
      title: "Established 2022",
      subtitle: "Dedicated to Feni's students",
      iconName: "calendar",
    },
    {
      id: "h2",
      title: "Expert Instructors",
      subtitle: "Personal mentorship & care",
      iconName: "award",
    },
    {
      id: "h3",
      title: "Friendly Learning",
      subtitle: "Zero judgment environment",
      iconName: "users",
    },
    {
      id: "h4",
      title: "Free Demo Classes",
      subtitle: "Experience before enrolling",
      iconName: "sparkles",
    },
  ] as HighlightItem[],

  about: {
    story: {
      tag: "OUR STORY",
      title: "A Friendly Sanctuary for English & Digital Mastery in Feni",
      image: "/images/about/about-community.jpg",
      imageAlt: "Inside The Educatee Centre interactive classroom",
      // TODO: Confirm exact founding month/date in 2022 with Engr. Zahir Uddin Babar
      paragraph1: "Established in 2022 in the heart of Feni, The Educatee Centre was born out of a clear observation: countless bright students, job seekers, and professionals in our community felt held back — not by lack of intelligence, but by anxiety and hesitation when speaking English or working with modern digital tools.",
      paragraph2: "We built The Educatee Centre to be the exact opposite of an intimidating coaching center. Located on the quiet 5th floor of Appayan Afroz Tower on College Road, our campus is an encouraging, judgment-free space where making mistakes is celebrated as the first natural step toward real mastery.",
    },
    mission: {
      title: "Our Mission",
      description: "To remove the paralyzing fear of speaking English among Feni's students, deliver practical hands-on computer training on individual workstations, and prepare every learner with the language fluency and digital agility needed for global opportunities.",
    },
    vision: {
      title: "Our Vision",
      description: "To become Feni's premier learning community where conversational confidence, modern IT competence, and ethical values empower young minds to lead in university admissions, overseas study, and fulfilling professional careers.",
    },
    whyLoveUs: [
      {
        id: "love-1",
        title: "Friendly & Quiet Environment",
        description: "Situated on the peaceful 5th floor, our bright classrooms offer a calm sanctuary completely removed from road traffic, where questions are warmly welcomed.",
        accent: "blue",
      },
      {
        id: "love-2",
        title: "Practical, Application-Based Teaching",
        description: "Zero dry memorization. You learn English by speaking in real-world conversation circles, and IT by practicing on your own dedicated computer.",
        accent: "pink",
      },
      {
        id: "love-3",
        title: "Personal Mentorship & Care",
        description: "Led by Engineer Zahir Uddin Babar, each student receives close personal attention, continuous encouragement, and moral guidance.",
        accent: "teal",
      },
      {
        id: "love-4",
        title: "Celebrations & Community",
        description: "From our proud Graduation Day and heartfelt Farewell Ceremonies to the prestigious CEO Award, we celebrate student growth like family.",
        accent: "yellow",
      },
    ] as FeatureCard[],
  },

  aboutPreview: {
    tag: "ABOUT THE EDUCATEE CENTRE",
    title: "Towards a Confident & Globally Skilled Generation",
    lead: "Founded in 2022 in the heart of Feni, The Educatee Centre is built on a simple belief: every student can master English and modern digital tools when taught with patience, real practice, and genuine encouragement.",
    bullets: [
      "Friendly, fear-free atmosphere where asking questions is celebrated",
      "Separate Girls' Batch for comfortable, dedicated spoken English practice",
      "Interactive speaking sessions with small groups of maximum 16 students",
      "Dedicated hands-on computer room with individual workstations",
    ],
    ctaText: "Learn More About Us",
    ctaLink: "/about",
    image: "/images/about/about-community.jpg",
    imageAlt: "Inside The Educatee Centre interactive classroom",
  },

  whyChooseUs: [
    {
      id: "why-1",
      title: "Friendly Learning Environment",
      description: "We eliminate the intimidation of learning English. Our classroom is a warm, encouraging space where mistakes are welcomed as natural steps to fluency.",
      accent: "blue",
    },
    {
      id: "why-2",
      title: "Practical, Hands-on Teaching",
      description: "Less memorization, more action. Whether speaking in English or practicing on a dedicated computer workstation, you learn by doing every single day.",
      accent: "pink",
    },
    {
      id: "why-3",
      title: "Personal Mentorship & Care",
      description: "Led personally by Engineer Zahir Uddin Babar, each student receives close individual guidance, confidence boosting, and personalized study feedback.",
      accent: "teal",
    },
    {
      id: "why-4",
      title: "Regular Events & Celebrations",
      description: "Learning is exciting at Educatee. From Graduation Days to the prestigious CEO Award, we celebrate student milestones together like family.",
      accent: "yellow",
    },
  ] as FeatureCard[],

  founder: {
    name: "Engr. Zahir Uddin Babar",
    title: "Founder, CEO & Lead Instructor",
    credentials: "B.Sc. Engineering • Passionate Educator & Language Mentor",
    message: "At The Educatee Centre, our mission is to ensure that no student in Feni feels held back by their fear of English or lack of modern computer skills. When I started Educatee in 2022, I wanted to build more than just a training institute — I wanted a safe, uplifting community where every student feels valued, respected, and inspired to reach their full potential. Join us for a free demo class and discover the difference friendly mentorship can make.",
    teachingStyle: "Engaging, conversational, and mentor-like. Engr. Zahir Uddin Babar seamlessly blends practical spoken drills with ethical life lessons, character building, and career guidance, inspiring students to speak fearlessly with genuine purpose.",
    image: "/images/founder/engr-zahir-uddin-babar.jpg",
    imageAlt: "Engineer Zahir Uddin Babar, Founder and CEO of The Educatee Centre",
  },

  // TODO: Add actual faculty members (name, role, and verified photo) once approved by administration
  facultyPlaceholders: [
    {
      id: "fac-1",
      name: "Faculty Instructor (To be announced)",
      role: "Language & Spoken English Trainer",
      specialty: "Phonetics & Fluency Development",
      note: "TODO: Add verified instructor profile",
      image: "/images/faculty/faculty-1.jpg",
      imageAlt: "The Educatee Centre Faculty Instructor Placeholder",
      isPlaceholder: true,
    },
    {
      id: "fac-2",
      name: "Faculty Instructor (To be announced)",
      role: "IT & Digital Skills Trainer",
      specialty: "Computer Applications & Marketing",
      note: "TODO: Add verified instructor profile",
      image: "/images/faculty/faculty-2.jpg",
      imageAlt: "The Educatee Centre IT Trainer Placeholder",
      isPlaceholder: true,
    },
  ],

  facilities: [
    {
      id: "spoken-lab",
      title: "Interactive Spoken English Room",
      description: "A bright, acoustically treated room designed specifically for conversation circles, paired dialogues, and confidence-building roleplays in a quiet, distraction-free environment.",
      image: "/images/about/about-community.jpg",
      imageAlt: "Spoken English classroom with circle seating and collaborative discussion space",
      features: [
        "Quiet, focused academic atmosphere",
        "Circle seating promoting natural eye contact and open speaking",
        "Multimedia screen for interactive phonetics and audio exercises",
        "Air-conditioned comfort on the peaceful 5th floor"
      ]
    },
    {
      id: "computer-lab",
      title: "Dedicated Computer Training Lab",
      description: "A fully equipped IT room where every enrolled student works on their own dedicated PC workstation. No sharing, no rushing — 100% hands-on practical practice.",
      image: "/images/facilities/computer-room.jpg",
      imageAlt: "Dedicated IT computer room with individual workstations for practical training",
      features: [
        "1 student per dedicated modern PC workstation (strictly no sharing)",
        "High-speed internet for live web research and campaign practice",
        "Up-to-date Microsoft Office suite and creative design software",
        "Continuous instructor assistance during every lab session"
      ]
    },
    {
      id: "quiet-environment",
      title: "Quiet, Focused 5th-Floor Environment",
      description: "Elevated above College Road noise, our center provides the peaceful focus essential for language absorption and analytical learning.",
      image: "/images/hero/hero.jpg",
      imageAlt: "Calm, welcoming study environment at The Educatee Centre",
      features: [
        "Quiet and peaceful study space away from street noise",
        "Noise-isolated classrooms with bright ambient natural light",
        "Safe, welcoming environment with dedicated staff support",
        "Clean, comfortable student lounge and waiting area"
      ]
    }
  ] as FacilityItem[],

  gallery: {
    title: "Life at Educatee",
    subtext: "Celebrating student milestones, recognizing achievement, and fostering vibrant community spirit in Feni.",
    categories: [
      { id: "graduation" as const, label: "Graduation Day", captionLabel: "GRADUATION DAY", tagline: "Celebrating every milestone" },
      { id: "certificates" as const, label: "Certificates", captionLabel: "CERTIFICATES", tagline: "Recognizing every effort" },
      { id: "awards" as const, label: "Awards", captionLabel: "AWARDS", tagline: "Honoring excellence" },
      { id: "classroom" as const, label: "Classroom", captionLabel: "CLASSROOM", tagline: "Where confidence begins" },
      { id: "outdoor" as const, label: "Outdoor & Fun", captionLabel: "OUTDOOR FUN", tagline: "Learning and laughing together" },
    ],
    captions: homeGalleryCaptions,
  },

  cultureGallery: [
  {
    "id": "gal-1",
    "image": "/images/gallery/graduation/086711202_648169754634015_4914525750402207896_n.jpg",
    "imageAlt": "Graduation Day at The Educatee Centre",
    "width": 2048,
    "height": 1536,
    "category": "Graduation Day"
  },
  {
    "id": "gal-2",
    "image": "/images/gallery/certificates/486572072_645244751593182_425354543393614183_n.jpg",
    "imageAlt": "Certificates at The Educatee Centre",
    "width": 2048,
    "height": 1728,
    "category": "Certificates"
  },
  {
    "id": "gal-3",
    "image": "/images/gallery/awards/057597948_791840006933655_3299946384635604609_n.jpg",
    "imageAlt": "Awards at The Educatee Centre",
    "width": 1540,
    "height": 2048,
    "category": "Awards"
  },
  {
    "id": "gal-4",
    "image": "/images/gallery/classroom/557593266_792413500209639_4966182424805824257_n.jpg",
    "imageAlt": "Classroom at The Educatee Centre",
    "width": 1170,
    "height": 1655,
    "category": "Classroom"
  },
  {
    "id": "gal-5",
    "image": "/images/gallery/outdoor/038425521_1017265301057790_1570134642383545483_n.jpg",
    "imageAlt": "Outdoor & Fun at The Educatee Centre",
    "width": 2048,
    "height": 1152,
    "category": "Outdoor & Fun"
  },
  {
    "id": "gal-6",
    "image": "/images/gallery/graduation/486549808_648169831300674_1298202646620577133_n.jpg",
    "imageAlt": "Graduation Day at The Educatee Centre",
    "width": 960,
    "height": 720,
    "category": "Graduation Day"
  },
  {
    "id": "gal-7",
    "image": "/images/gallery/certificates/650177057_924423867008601_8500057580163147555_n.jpg",
    "imageAlt": "Certificates at The Educatee Centre",
    "width": 2048,
    "height": 1536,
    "category": "Certificates"
  },
  {
    "id": "gal-8",
    "image": "/images/gallery/awards/555476827_787662397351416_2911080322614586653_n.jpg",
    "imageAlt": "Awards at The Educatee Centre",
    "width": 206,
    "height": 206,
    "category": "Awards"
  },
  {
    "id": "gal-9",
    "image": "/images/gallery/classroom/559052932_795537903230532_1134023329949609899_n.jpg",
    "imageAlt": "Classroom at The Educatee Centre",
    "width": 2048,
    "height": 1536,
    "category": "Classroom"
  },
  {
    "id": "gal-10",
    "image": "/images/gallery/outdoor/601830060_859325220185133_7989134668382657040_n.jpg",
    "imageAlt": "Outdoor & Fun at The Educatee Centre",
    "width": 206,
    "height": 206,
    "category": "Outdoor & Fun"
  },
  {
    "id": "gal-11",
    "image": "/images/gallery/graduation/560095835_797690506348605_6556200756662473813_n.jpg",
    "imageAlt": "Graduation Day at The Educatee Centre",
    "width": 2048,
    "height": 1320,
    "category": "Graduation Day"
  },
  {
    "id": "gal-12",
    "image": "/images/gallery/certificates/651882441_924431650341156_8541662025390578614_n.jpg",
    "imageAlt": "Certificates at The Educatee Centre",
    "width": 2048,
    "height": 1536,
    "category": "Certificates"
  },
  {
    "id": "gal-13",
    "image": "/images/gallery/awards/649280364_924420960342225_5003807260382575450_n.jpg",
    "imageAlt": "Awards at The Educatee Centre",
    "width": 2048,
    "height": 1536,
    "category": "Awards"
  },
  {
    "id": "gal-14",
    "image": "/images/gallery/classroom/560143314_804969528954036_5708054548518236706_n.jpg",
    "imageAlt": "Classroom at The Educatee Centre",
    "width": 206,
    "height": 206,
    "category": "Classroom"
  },
  {
    "id": "gal-15",
    "image": "/images/gallery/outdoor/602373293_859329650184690_8112060812601947593_n.jpg",
    "imageAlt": "Outdoor & Fun at The Educatee Centre",
    "width": 2048,
    "height": 1536,
    "category": "Outdoor & Fun"
  },
  {
    "id": "gal-16",
    "image": "/images/gallery/graduation/607706044_863471033103885_1201250032460442840_n.jpg",
    "imageAlt": "Graduation Day at The Educatee Centre",
    "width": 2048,
    "height": 1536,
    "category": "Graduation Day"
  },
  {
    "id": "gal-17",
    "image": "/images/gallery/certificates/652332385_924431583674496_2978045403681900790_n.jpg",
    "imageAlt": "Certificates at The Educatee Centre",
    "width": 2048,
    "height": 1536,
    "category": "Certificates"
  },
  {
    "id": "gal-18",
    "image": "/images/gallery/awards/651702472_924447613672893_2483923809284310917_n.jpg",
    "imageAlt": "Awards at The Educatee Centre",
    "width": 960,
    "height": 720,
    "category": "Awards"
  },
  {
    "id": "gal-19",
    "image": "/images/gallery/classroom/721099278_998335056284148_2042963328931241711_n.jpg",
    "imageAlt": "Classroom at The Educatee Centre",
    "width": 2048,
    "height": 1536,
    "category": "Classroom"
  },
  {
    "id": "gal-20",
    "image": "/images/gallery/outdoor/653365312_924504800333841_7549797409060557155_n.jpg",
    "imageAlt": "Outdoor & Fun at The Educatee Centre",
    "width": 2048,
    "height": 1536,
    "category": "Outdoor & Fun"
  },
  {
    "id": "gal-21",
    "image": "/images/gallery/graduation/830968588_1095206203263699_3345362751275082960_n.jpg",
    "imageAlt": "Graduation Day at The Educatee Centre",
    "width": 2048,
    "height": 1536,
    "category": "Graduation Day"
  },
  {
    "id": "gal-22",
    "image": "/images/gallery/certificates/831327307_1095349053249414_4941003578874012454_n.jpg",
    "imageAlt": "Certificates at The Educatee Centre",
    "width": 2048,
    "height": 1536,
    "category": "Certificates"
  },
  {
    "id": "gal-23",
    "image": "/images/gallery/awards/743050008_1022233403894313_6915417186812600644_n.jpg",
    "imageAlt": "Awards at The Educatee Centre",
    "width": 1536,
    "height": 2048,
    "category": "Awards"
  },
  {
    "id": "gal-24",
    "image": "/images/gallery/classroom/722953677_997463319704655_8353961146378372240_n.jpg",
    "imageAlt": "Classroom at The Educatee Centre",
    "width": 2048,
    "height": 1536,
    "category": "Classroom"
  },
  {
    "id": "gal-25",
    "image": "/images/gallery/outdoor/739335537_1033877599045524_2998915434243075354_n.jpg",
    "imageAlt": "Outdoor & Fun at The Educatee Centre",
    "width": 960,
    "height": 720,
    "category": "Outdoor & Fun"
  },
  {
    "id": "gal-26",
    "image": "/images/gallery/graduation/834387449_1118517147796364_9150298075086731163_n (1).jpg",
    "imageAlt": "Graduation Day at The Educatee Centre",
    "width": 2048,
    "height": 1536,
    "category": "Graduation Day"
  },
  {
    "id": "gal-27",
    "image": "/images/gallery/certificates/832592777_1095348209916165_7139133087998485533_n.jpg",
    "imageAlt": "Certificates at The Educatee Centre",
    "width": 2048,
    "height": 1536,
    "category": "Certificates"
  },
  {
    "id": "gal-28",
    "image": "/images/gallery/awards/830513828_4648207118734839_8111924575250440686_n.jpg",
    "imageAlt": "Awards at The Educatee Centre",
    "width": 1448,
    "height": 1086,
    "category": "Awards"
  },
  {
    "id": "gal-29",
    "image": "/images/gallery/classroom/746067535_1022969907153996_1478698739500016569_n.jpg",
    "imageAlt": "Classroom at The Educatee Centre",
    "width": 1536,
    "height": 2048,
    "category": "Classroom"
  },
  {
    "id": "gal-30",
    "image": "/images/gallery/outdoor/739762928_1035722768906377_5528683453237671430_n.jpg",
    "imageAlt": "Outdoor & Fun at The Educatee Centre",
    "width": 960,
    "height": 720,
    "category": "Outdoor & Fun"
  },
  {
    "id": "gal-31",
    "image": "/images/gallery/certificates/832779916_1095349273249392_31323409940372666_n.jpg",
    "imageAlt": "Certificates at The Educatee Centre",
    "width": 2048,
    "height": 1536,
    "category": "Certificates"
  },
  {
    "id": "gal-32",
    "image": "/images/gallery/awards/833864485_1645383267096365_6071913849449253786_n.jpg",
    "imageAlt": "Awards at The Educatee Centre",
    "width": 2048,
    "height": 2048,
    "category": "Awards"
  },
  {
    "id": "gal-33",
    "image": "/images/gallery/outdoor/746021033_1023480330436287_7783435890954779967_n.jpg",
    "imageAlt": "Outdoor & Fun at The Educatee Centre",
    "width": 2048,
    "height": 1536,
    "category": "Outdoor & Fun"
  },
  {
    "id": "gal-34",
    "image": "/images/gallery/certificates/832994170_1095348163249503_8000750830610793761_n.jpg",
    "imageAlt": "Certificates at The Educatee Centre",
    "width": 2048,
    "height": 1536,
    "category": "Certificates"
  },
  {
    "id": "gal-35",
    "image": "/images/gallery/outdoor/746808028_1023480327102954_4831974290325789200_n.jpg",
    "imageAlt": "Outdoor & Fun at The Educatee Centre",
    "width": 2048,
    "height": 1536,
    "category": "Outdoor & Fun"
  },
  {
    "id": "gal-36",
    "image": "/images/gallery/certificates/833060628_1095349023249417_3078269679763061803_n.jpg",
    "imageAlt": "Certificates at The Educatee Centre",
    "width": 2048,
    "height": 1536,
    "category": "Certificates"
  },
  {
    "id": "gal-37",
    "image": "/images/gallery/outdoor/748631427_1028091739975146_738324265459961494_n.jpg",
    "imageAlt": "Outdoor & Fun at The Educatee Centre",
    "width": 2048,
    "height": 1536,
    "category": "Outdoor & Fun"
  },
  {
    "id": "gal-38",
    "image": "/images/gallery/certificates/833060632_1095349416582711_862643610559834982_n.jpg",
    "imageAlt": "Certificates at The Educatee Centre",
    "width": 2048,
    "height": 1536,
    "category": "Certificates"
  },
  {
    "id": "gal-39",
    "image": "/images/gallery/outdoor/750565618_1028091719975148_6628783504481586196_n.jpg",
    "imageAlt": "Outdoor & Fun at The Educatee Centre",
    "width": 2048,
    "height": 1536,
    "category": "Outdoor & Fun"
  },
  {
    "id": "gal-40",
    "image": "/images/gallery/certificates/833523879_1095349153249404_7527348310474072844_n.jpg",
    "imageAlt": "Certificates at The Educatee Centre",
    "width": 2048,
    "height": 1536,
    "category": "Certificates"
  },
  {
    "id": "gal-41",
    "image": "/images/gallery/outdoor/750582944_2100265430845147_6175067686592255176_n.jpg",
    "imageAlt": "Outdoor & Fun at The Educatee Centre",
    "width": 960,
    "height": 720,
    "category": "Outdoor & Fun"
  },
  {
    "id": "gal-42",
    "image": "/images/gallery/certificates/834948207_1095348846582768_6244307365087932372_n.jpg",
    "imageAlt": "Certificates at The Educatee Centre",
    "width": 2048,
    "height": 1536,
    "category": "Certificates"
  },
  {
    "id": "gal-43",
    "image": "/images/gallery/outdoor/751805006_1718841236005083_5426002590649470592_n.jpg",
    "imageAlt": "Outdoor & Fun at The Educatee Centre",
    "width": 960,
    "height": 720,
    "category": "Outdoor & Fun"
  }
] as CultureGalleryItem[],

  programs: [
    {
      id: "spoken-english-ssc-dakhil",
      slug: "spoken-english-ssc-dakhil",
      title: "SSC / Dakhil Spoken English",
      subtitle: "Dedicated separate Girls' Batch & Regular Batch",
      category: "English",
      description: "Designed specifically for post-exam SSC and Dakhil students to break the ice, overcome stage fright, and build spontaneous English speaking fluency in a supportive peer group.",
      badge: "50% Off Girls Batch",
      accentColor: "blue",
      image: "/images/programs/ssc-dakhil-spoken-english.png",
      imageAlt: "SSC & Dakhil Spoken English Course thumbnail",
      targetAudience: [
        "SSC & Dakhil examination candidates awaiting results or starting college",
        "Female students seeking an exclusively female, comfortable learning setting",
        "Beginners with basic textbook grammar who freeze when speaking English aloud",
        "Students wanting to build lasting speaking confidence before college"
      ],
      keyHighlights: [
        "Dedicated separate comfortable Girls' batch",
        "Overcomes stage fright and removes speaking hesitation completely",
        "Everyday situational roleplays, dialogues & phonetics guidance",
        "Essential spoken grammar applied in practice with zero rote memorization",
        "100% offline interactive classroom sessions"
      ],
      curriculumOutline: [
        "Module 1: Conquering Speaking Hesitation & Ice-Breaking Drills",
        "Module 2: Daily Life Conversation Circles & Routine Expressions",
        "Module 3: Correct English Pronunciation, Word Stress & Rhythm",
        "Module 4: Practical Grammar for Natural Sentence Formation",
        "Module 5: Public Speaking, Impromptu Introductions & Group Debates"
      ],
      // TODO: Confirm upcoming batch schedule, fee, and exact duration with administration
      duration: "To be announced",
      schedule: "To be announced",
      fee: "To be announced",
      batchType: "Offline / Separate Girls Batch & Regular Batch",
      features: [
        "Separate Girls batch",
        "Small interactive groups",
        "Free speaking handouts",
        "Certificate on completion"
      ],
      faqs: [
        {
          question: "Is there a completely separate batch for female students?",
          answer: "Yes! We run an exclusive, comfortable Girls' Batch where female students practice speaking freely with complete privacy and peer encouragement."
        },
        {
          question: "I know grammar rules but freeze when speaking. Can this course help?",
          answer: "This course is engineered specifically for that! We eliminate textbook memorization and focus on interactive speaking drills that build spontaneous reflex fluency."
        },
        {
          question: "Can I attend a free demo class before enrolling?",
          answer: "Absolutely! We conduct free demo classes before every new batch so you can experience the interactive classroom atmosphere first-hand."
        }
      ]
    },
    {
      id: "spoken-english-professionals",
      slug: "spoken-english-professionals",
      title: "Spoken English for Working Professionals",
      subtitle: "Convenient evening batch designed around job schedules",
      category: "English",
      description: "Polished workplace English, email etiquette, client communication, and interview mastery designed specifically to fit the busy evening schedules of jobholders and entrepreneurs.",
      badge: "Evening Batch",
      accentColor: "blue",
      image: "/images/programs/spoken-english-professionals.png",
      imageAlt: "Spoken English for Working Professionals Course thumbnail",
      targetAudience: [
        "Working professionals, corporate executives, bankers, and teachers",
        "Business owners and entrepreneurs dealing with corporate clients",
        "University graduates preparing for corporate job interviews & BCS viva",
        "Anyone needing fluent workplace English for meetings, calls, and emails"
      ],
      keyHighlights: [
        "Convenient evening time slots tailored to office working hours",
        "Workplace meetings, client presentations & negotiations",
        "Professional email drafting, formal tone & executive vocabulary",
        "Mock job interviews, resume screening & viva confidence",
        "Supportive networking community with fellow professionals in Feni"
      ],
      curriculumOutline: [
        "Module 1: Professional Workplace Etiquette & Meeting Communication",
        "Module 2: Executive Email Writing, Reports & Formal Vocabulary",
        "Module 3: Impactful Presentation Delivery & Handling Q&A Confidently",
        "Module 4: Client Phone Handling, Negotiations & Professional Small Talk",
        "Module 5: Job Interview Simulations, Viva Strategy & Poise"
      ],
      // TODO: Confirm upcoming batch schedule, fee, and exact duration with administration
      duration: "To be announced",
      schedule: "To be announced",
      fee: "To be announced",
      batchType: "Evening Batch (After Office Hours)",
      features: [
        "Evening classes",
        "Workplace roleplay simulations",
        "One-on-one pronunciation review",
        "Certificate on completion"
      ],
      faqs: [
        {
          question: "What time do the professional evening classes take place?",
          answer: "Evening batches are scheduled after standard office hours (typically 6:30 PM - 8:00 PM). Please contact us or book a demo for exact upcoming batch timings."
        },
        {
          question: "Will this course cover formal email writing and corporate presentations?",
          answer: "Yes, workplace correspondence, presentation slide commentary, and business meeting etiquette are core pillars of this curriculum."
        }
      ]
    },
    {
      id: "ielts-preparation",
      slug: "ielts-preparation",
      title: "IELTS Preparation",
      subtitle: "Post-HSC Foundation, Complete Course & Crash Course",
      category: "IELTS",
      description: "Structured band-targeted preparation across Listening, Reading, Writing, and Speaking with free authentic Cambridge mock tests. Classes strictly capped at a maximum of 16 students.",
      badge: "Max 16 Students",
      accentColor: "yellow",
      image: "/images/programs/ielts-preparation.png",
      imageAlt: "IELTS Preparation Course thumbnail",
      targetAudience: [
        "Post-HSC students planning for higher study abroad (UK, USA, Canada, Australia, Europe)",
        "Job seekers applying for international migration or work visas",
        "Candidates aiming for target Band 6.5, 7.0, 7.5 or 8.0+",
        "Students seeking personalized writing correction and mock exam practice"
      ],
      keyHighlights: [
        "Three distinct specialized tracks: Post-HSC Foundation, Target-Based Complete Course, and Crash Course",
        "Strictly small groups: maximum 16 students per batch for individual focus",
        "Regular authentic Cambridge-format free mock tests with detailed evaluations",
        "Individual Task 1 & Task 2 writing assessments with sentence-by-sentence feedback",
        "One-on-one simulated speaking interviews with examiner-grade review"
      ],
      curriculumOutline: [
        "Module 1: Diagnostic Assessment & Band Strategy Roadmap",
        "Module 2: Listening Module (Audio accents, note completion, multiple choice)",
        "Module 3: Reading Module (Skimming, scanning, True/False/Not Given mastery)",
        "Module 4: Writing Module (Task 1 data reports/letters & Task 2 Band 7+ essays)",
        "Module 5: Speaking Module (1-on-1 interview simulations & fluency drills)",
        "Module 6: Full-Length Authentic Mock Tests with Band Score Analysis"
      ],
      // TODO: Confirm upcoming batch schedule, fee, and exact duration with administration
      duration: "To be announced",
      schedule: "To be announced",
      fee: "To be announced",
      batchType: "Small Group (Max 16 Students)",
      features: [
        "Max 16 students/batch",
        "Free authentic mock tests",
        "Individual writing corrections",
        "One-on-one speaking drills"
      ],
      tiers: [
        {
          id: "tier-foundation",
          name: "Post-HSC Foundation",
          badge: "Starting Fresh",
          target: "Post-HSC candidates & early starters",
          description: "Builds a robust academic English vocabulary, sentence structure precision, and reading endurance before moving into intense test strategies.",
          highlights: [
            "Grammar & academic vocabulary booster",
            "Introductory reading & listening techniques",
            "Speaking confidence & phonetics drills",
            "Free diagnostic band evaluation"
          ],
        },
        {
          id: "tier-complete",
          name: "Target-Based Complete Course",
          badge: "Most Popular",
          target: "Target Band 6.5 to 8.0+ seekers",
          description: "Our comprehensive flagship program covering advanced test strategies for all 4 test components with rigorous weekly evaluations.",
          highlights: [
            "Comprehensive 4-module mastery",
            "Weekly full-length mock tests included",
            "Personalized essay & graph corrections",
            "Strict max 16 students per batch guarantee"
          ],
          popular: true,
        },
        {
          id: "tier-crash",
          name: "Crash Course",
          badge: "Fast Track",
          target: "Upcoming test-takers needing fast revision",
          description: "High-intensity fast-track preparation focusing on high-scoring tips, time management tricks, and full-length exam simulations.",
          highlights: [
            "Exam strategy & time management drills",
            "Targeted weaknesses diagnosis",
            "Simulated speaking interview marathons",
            "Quick band score optimization"
          ],
        }
      ],
      faqs: [
        {
          question: "Why are IELTS classes capped at 16 students?",
          answer: "Quality over quantity. With a maximum of 16 students, our lead instructors can give line-by-line feedback on every student's essays and conduct regular 1-on-1 speaking interviews."
        },
        {
          question: "Are mock tests really free of charge?",
          answer: "Yes! Full-length Cambridge-format mock tests are completely free for all enrolled IELTS students, complete with examiner-standard band scoring and feedback."
        },
        {
          question: "Which tier should I choose?",
          answer: "If you just finished HSC, the Foundation track prepares your core English. If you have moderate English fluency, the Complete Course is recommended. For test-takers with an exam date within a month, the Crash Course is ideal."
        }
      ]
    },
    {
      id: "basic-computer-ms-office",
      slug: "basic-computer-ms-office",
      title: "Basic Computer & Microsoft Office",
      subtitle: "100% practical training in a dedicated computer room",
      category: "IT & Digital Skills",
      description: "Hands-on mastery of Word, Excel, PowerPoint, Bangla & English touch typing, and internet essentials. Every student practices on their own dedicated workstation in a quiet computer lab.",
      badge: "Dedicated PC Lab",
      accentColor: "teal",
      image: "/images/programs/basic-computer-ms-office.png",
      imageAlt: "Basic Computer & MS Office Course thumbnail",
      targetAudience: [
        "School, college, and madrasah students needing essential computer literacy",
        "Job seekers preparing for office, corporate, or government employment",
        "Office assistants needing Word typing, Excel calculations, and email skills",
        "Beginners with zero prior computer experience"
      ],
      keyHighlights: [
        "1 student per dedicated computer workstation (strictly no sharing)",
        "Bangla (Bijoy & Avro) and English high-speed touch typing",
        "Microsoft Word: document formatting, official letters, tables & layout",
        "Microsoft Excel: mathematical formulas, payroll sheets, ledger & charts",
        "Microsoft PowerPoint: modern slide design & presentations",
        "Cloud file storage, professional email communication & internet safety"
      ],
      curriculumOutline: [
        "Module 1: Computer Fundamentals, Hardware, Windows OS & File Management",
        "Module 2: High-Speed Touch Typing in English & Bangla (Bijoy/Avro)",
        "Module 3: MS Word (Official Letters, Formatting, Tables & Printing)",
        "Module 4: MS Excel (Calculations, IF Logic, Financial Sheets & Charts)",
        "Module 5: MS PowerPoint (Presentation Design, Animations & Slideshows)",
        "Module 6: Web Browsing, Email Etiquette, Google Drive & Cyber Security"
      ],
      // TODO: Confirm upcoming batch schedule, fee, and exact duration with administration
      duration: "To be announced",
      schedule: "To be announced",
      fee: "To be announced",
      batchType: "Dedicated PC Lab (1 Student Per Machine)",
      features: [
        "Individual PC for every student",
        "Quiet lab environment",
        "100% practical assignments",
        "Certificate on completion"
      ],
      faqs: [
        {
          question: "Do I have to share a computer with other students?",
          answer: "Never! At The Educatee Centre, every single student sits at their own individual workstation for the entirety of each class."
        },
        {
          question: "I have never touched a computer before. Can I learn?",
          answer: "Yes, our instructors guide you step-by-step from switching on the PC and holding the mouse properly to advanced Excel spreadsheets and touch typing."
        }
      ]
    },
    {
      id: "social-media-marketing",
      slug: "social-media-marketing",
      title: "Social Media Marketing",
      subtitle: "Practical campaigns, content creation & digital branding",
      category: "IT & Digital Skills",
      description: "Learn foundational digital marketing across social platforms. Build and optimize business pages, launch targeted Meta ads, design eye-catching graphics with Canva, and write high-converting copy.",
      badge: "High Demand",
      accentColor: "teal",
      image: "/images/programs/social-media-marketing.png",
      imageAlt: "Social Media Marketing Course thumbnail",
      targetAudience: [
        "Aspiring digital marketers, freelancers, and content creators",
        "Feni business owners looking to increase sales through Facebook marketing",
        "Students wanting to earn through digital freelancing and social media management",
        "Anyone interested in modern digital brand building"
      ],
      keyHighlights: [
        "Meta (Facebook & Instagram) business page setup, verification & branding",
        "Meta Ads Manager: Campaign creation, custom audiences, budgets & ROI",
        "Canva graphic design essentials for social banners and promotional posts",
        "Copywriting fundamentals in Bangla & English for maximum engagement",
        "Practical campaign analysis based on local and international case studies"
      ],
      curriculumOutline: [
        "Module 1: Social Media Landscape & Brand Building Fundamentals",
        "Module 2: Facebook & Instagram Business Page Setup & Organic Growth",
        "Module 3: Canva Graphic Design for High-Performing Social Creatives",
        "Module 4: Meta Ads Manager (Ad Objectives, Targeting, Pixels & Budgets)",
        "Module 5: Content Calendar Creation, Copywriting & Video Reels Strategy",
        "Module 6: Freelancing Platforms & Landing Your First Client"
      ],
      // TODO: Confirm upcoming batch schedule, fee, and exact duration with administration
      duration: "To be announced",
      schedule: "To be announced",
      fee: "To be announced",
      batchType: "Hands-on Practical / Live Case Studies",
      features: [
        "Live ad campaigns",
        "Canva design templates",
        "Business case studies",
        "Certificate on completion"
      ],
      faqs: [
        {
          question: "Do I need graphic design software like Photoshop for this course?",
          answer: "No, we teach modern, high-speed design tools like Canva which allow anyone to create stunning social media graphics without steep learning curves."
        },
        {
          question: "Can local Feni entrepreneurs apply this to their own shops and businesses?",
          answer: "Absolutely! We dedicate class time to local store promotion, targeting customers within Feni and surrounding districts using Facebook location advertising."
        }
      ]
    },
    {
      id: "smart-handwriting",
      slug: "smart-handwriting",
      title: "Smart Handwriting Course",
      subtitle: "English & Bangla neat writing transformation",
      category: "English",
      description: "Transform untidy, slow, or illegible handwriting into neat, beautiful, exam-ready script in both English and Bengali through scientific stroke, grip, and posture correction.",
      badge: "Visible Results",
      accentColor: "pink",
      image: "/images/programs/smart-handwriting.png",
      imageAlt: "Smart Handwriting Course thumbnail",
      targetAudience: [
        "School and college students losing exam marks due to messy handwriting",
        "Candidates preparing for board exams, university admissions, and job tests",
        "Students who experience wrist fatigue or slow writing speed",
        "Anyone seeking clean, confident, and beautiful handwriting"
      ],
      keyHighlights: [
        "Scientific pen grip, sitting posture & wrist pressure correction",
        "Letter formation, spacing, proportion, and stroke consistency",
        "Techniques for maintaining neat presentation under exam time pressure",
        "Both English (print & cursive) and Bangla handwriting modules covered",
        "Individual stroke corrections and progress monitoring"
      ],
      curriculumOutline: [
        "Module 1: Ergonomics, Grip Correction, Posture & Pressure Control",
        "Module 2: English Alphabet Proportions, Slant & Baseline Uniformity",
        "Module 3: English Word Spacing, Line Alignment & Cursive Connections",
        "Module 4: Bangla Matra, Kar, Yuktakkhor & Letter Balance",
        "Module 5: Speed Writing Drills to Ace Exam Papers Neatly"
      ],
      // TODO: Confirm upcoming batch schedule, fee, and exact duration with administration
      duration: "To be announced",
      schedule: "To be announced",
      fee: "To be announced",
      batchType: "Practice & Personal Stroke Correction",
      features: [
        "Special practice workbooks",
        "Personal stroke corrections",
        "Speed development drills",
        "Certificate on completion"
      ],
      faqs: [
        {
          question: "How quickly can someone improve their handwriting?",
          answer: "With our structured scientific drills and workbook practice, noticeable improvements in neatness and spacing appear within just 2 to 3 weeks."
        },
        {
          question: "Is this course only for children or also for adults?",
          answer: "It is open to all ages! Many college students, BCS aspirants, and jobholders attend to increase their writing speed and exam presentation clarity."
        }
      ]
    }
  ] as Course[],

  offers: [
    {
      id: "offer-demo",
      title: "Free Demo Classes Before Every Batch",
      description: "Experience our warm, interactive teaching style and meet your instructors before paying any admission fee. 100% free with no obligation.",
      badge: "Always Available",
      note: "Seats are limited per session",
    },
    {
      id: "offer-discount",
      title: "50% Discount on Selected Batches",
      description: "Special community incentive for our dedicated Girls' Spoken English batches and early-bird IELTS foundation intakes.",
      badge: "50% Off",
      note: "Limited seats available per intake",
    },
  ],

  admissionSteps: [
    {
      number: "01",
      title: "Book a Free Demo Class",
      description: "Fill out the simple 30-second form on this page or WhatsApp us to reserve your free demo seat.",
    },
    {
      number: "02",
      title: "Attend the Live Demo",
      description: "Step into our quiet 5th-floor classrooms and experience our friendly, engaging teaching method.",
    },
    {
      number: "03",
      title: "Choose Your Batch",
      description: "Select the schedule that fits your life (regular, separate girls' batch, or evening professional batch).",
    },
    {
      number: "04",
      title: "Complete Admission at Campus",
      description: "Finalize your admission at our Feni office, collect your course handouts, and begin your journey.",
    },
  ] as StepItem[],

  targetAudiences: [
    {
      title: "SSC & Dakhil Students",
      description: "Conquer spoken English hesitation and learn essential computer skills right after exams.",
      icon: "graduation-cap",
    },
    {
      title: "Post-HSC Students",
      description: "Target Band 6.5 - 8.0+ in IELTS and build academic English fluency for university & study abroad.",
      icon: "compass",
    },
    {
      title: "Working Professionals",
      description: "Convenient evening batches for corporate communication, presentations, emails, and promotion.",
      icon: "briefcase",
    },
    {
      title: "General Skill Seekers",
      description: "Neat handwriting, practical digital literacy, and social media freelancing for all ages.",
      icon: "sparkles",
    },
  ],

  testimonials: testimonials,

  successStories: [
    {
      id: "s1",
      studentName: "IELTS Target Band Achiever (Spotlight)",
      achievement: "Target Band 7.5 Overall",
      program: "IELTS Preparation",
      tag: "IELTS Success Spotlight",
      image: "/images/success/ielts-1.jpg",
      imageAlt: "IELTS success result spotlight at The Educatee Centre",
      quote: "Rigorous writing task evaluations and weekly mock tests at Educatee turned my weaknesses into my highest-scoring modules.",
      isPlaceholder: true
    },
    {
      id: "s2",
      studentName: "CEO Award Recipient (Honors)",
      achievement: "Top Student Honor of the Year",
      program: "English & IT Programs",
      tag: "CEO Award Honor",
      image: "/images/events/award-1.jpg",
      imageAlt: "CEO Award presentation celebrating student academic excellence",
      quote: "The CEO Award inspired me to believe in my capabilities. The Educatee Centre changed my perspective on learning.",
      isPlaceholder: true
    }
  ],

  events: [
    {
      id: "ev-1",
      title: "Annual Graduation & Batch Celebration",
      category: "Graduation",
      dateDisplay: "Celebration Event",
      description: "Honoring our course graduates with certificates, batch memories, and inspiring speeches celebrating their language and IT transformations.",
      image: "/images/events/graduation-1.jpg",
      imageAlt: "Graduation celebration with certificates and caps at The Educatee Centre",
      badge: "Graduation Day"
    },
    {
      id: "ev-2",
      title: "The Prestigious CEO Award Ceremony",
      category: "Awards",
      dateDisplay: "Annual Honor",
      description: "The CEO Award is the highest student distinction at The Educatee Centre, awarded personally by Engr. Zahir Uddin Babar for extraordinary dedication and growth.",
      image: "/images/events/award-1.jpg",
      imageAlt: "CEO Award trophy and certificate ceremony",
      badge: "Top Student Honor"
    },
    {
      id: "ev-3",
      title: "Free English & Career Guidance Seminar",
      category: "Seminars",
      dateDisplay: "Open Community Event",
      description: "Empowering Feni's students with practical insights on conquering English speaking anxiety, IELTS strategies, and IT career pathways.",
      image: "/images/events/seminar-1.jpg",
      imageAlt: "Free educational seminar presented to enthusiastic students",
      badge: "Free Seminar"
    },
    {
      id: "ev-4",
      title: "Batch Farewell & Cultural Fellowship",
      category: "Farewell",
      dateDisplay: "Batch Event",
      description: "Heartfelt farewell ceremonies marking the completion of course batches with shared stories, tea, student performances, and lifelong friendships.",
      image: "/images/events/farewell-1.jpg",
      imageAlt: "Batch farewell ceremony and cultural fellowship",
      badge: "Farewell Day"
    }
  ],

  faqs: [
    {
      id: "faq-1",
      category: "demo",
      question: "How do I attend a Free Demo Class?",
      answer: "You can book your demo seat online by filling out the form on this page, or simply send us a WhatsApp message at 01874-232272. We will confirm your demo schedule and room details immediately. There is no fee or obligation for the demo class."
    },
    {
      id: "faq-2",
      category: "batches",
      question: "Is there a separate batch for female students?",
      answer: "Yes! We run a dedicated, exclusive Girls' Batch for our Spoken English courses. It provides a relaxed, supportive environment where female students can practice speaking freely without any hesitation."
    },
    {
      id: "faq-3",
      category: "batches",
      question: "How many students are there in each IELTS class?",
      answer: "To ensure every student receives personal feedback and speaking time, our IELTS batches are strictly capped at a maximum of 16 students per class. Free authentic Cambridge mock tests are included."
    },
    {
      id: "faq-4",
      category: "location",
      question: "Where is The Educatee Centre located in Feni?",
      answer: "We are located at Appayan Afroz Tower, near the Pourashava Gate on College Road, Feni. We are on the 5th floor with dedicated lift access to our reception."
    },
    {
      id: "faq-5",
      category: "admission",
      question: "What are the course fees and upcoming batch schedules?",
      answer: "Upcoming batch schedules and fee structures are announced before each intake. Please contact us via phone or WhatsApp at 01874-232272, or book a free demo class to receive the latest batch timeline and discount details."
    },
    {
      id: "faq-6",
      category: "contact",
      question: "How can I contact the institute directly?",
      answer: "You can call us directly at 01874-232272 or 01576-560505, chat with us on WhatsApp at 01874-232272, or visit our Facebook page at facebook.com/TheEducatee.edu. Our campus is open Saturday through Thursday from 9:00 AM to 8:00 PM."
    }
  ] as FAQItem[],
};
