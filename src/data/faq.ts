export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Spoken English" | "IELTS" | "Computer & Skills" | "Admissions & Location";
}

export const faqs: FAQItem[] = [
  {
    category: "General",
    question: "Where is The Educatee Centre located, and how do I reach it?",
    answer:
      "The Educatee Centre is located at Appayan Afroz Tower, Near Pourashava Gate, College Road, Feni. Note on elevator access: Our facility is located on the 5th floor, but in the elevator please press the 4th-floor button to arrive directly at our reception. Our reception team is ready to welcome you Saturday through Thursday from 9:00 AM to 8:00 PM.",
  },
  {
    category: "Admissions & Location",
    question: "How does the 'Free Demo Class' work before enrollment?",
    answer:
      "We operate on a transparent 'Try Before You Buy' model. Before committing to enrollment or paying any fees, prospective students are invited to attend a free interactive demo class or seminar. This allows you to experience Engr. Zahir Uddin Babar's engaging teaching style, see our classrooms, and ensure our curriculum aligns with your learning goals.",
  },
  {
    category: "Spoken English",
    question: "Who can enroll in the SSC/Dakhil Spoken English program?",
    answer:
      "This program is specifically tailored for SSC and Dakhil candidates (e.g. Target Batch 2026) as well as secondary students looking to overcome spoken English hesitation. Lessons focus on confidence-building, practical conversation, and functional grammar without burdensome rote memorization.",
  },
  {
    category: "Spoken English",
    question: "Are there separate batches available for female students?",
    answer:
      "Yes, absolutely. The Educatee Centre regularly organizes dedicated 'Girls Batches' for Spoken English to ensure a comfortable, respectful, and supportive learning environment for female learners.",
  },
  {
    category: "Spoken English",
    question: "Do you offer evening batches for working professionals and job holders?",
    answer:
      "Yes. We have specialized evening spoken English cohorts specifically curated for corporate executives, job holders, and busy business owners in Feni. These classes focus directly on workplace communication, meeting contributions, email writing, and interview fluency.",
  },
  {
    category: "IELTS",
    question: "How many students are enrolled in each IELTS class?",
    answer:
      "To guarantee high-quality diagnostic feedback, our IELTS classes are strictly capped at a maximum of 16 students per batch. Unlike overcrowded lecture halls, this small-batch system ensures every student gets personal speaking practice and writing essay evaluations directly from the instructor.",
  },
  {
    category: "IELTS",
    question: "Are free mock tests included in the IELTS course?",
    answer:
      "Yes. All enrolled IELTS students benefit from regular full-length diagnostic mock tests replicating the official exam environment. Each mock test is accompanied by a detailed score review to identify improvement areas before test day.",
  },
  {
    category: "Computer & Skills",
    question: "Is the Basic Computer & MS Office training completely practical?",
    answer:
      "Yes, 100% practical. Classes are held inside our dedicated computer training lab where each student works on an individual desktop workstation. You will gain hands-on proficiency in MS Word, Excel, PowerPoint, internet operations, and Bangla/English typing.",
  },
  {
    category: "Admissions & Location",
    question: "When do new batches commence?",
    answer:
      "New private batches generally begin on the 1st of each upcoming month, accompanied by free demo seminars held during the first week. Please contact us via phone (01874-232272) or WhatsApp to reserve a seat in the next intake.",
  },
  {
    category: "General",
    question: "Who is the Lead Instructor and Founder?",
    answer:
      "Engineer Zahir Uddin Babar serves as the Founder, CEO, and Lead Instructor of The Educatee Centre. Known for his charismatic, zero-boredom teaching approach and personal student mentorship, he conducts core Spoken English and IELTS programs while instilling ethical and social values.",
  },
  {
    category: "Admissions & Location",
    question: "What are the course fees and available discounts?",
    answer:
      "We strive to keep quality education accessible in Feni. While exact fees vary by program and duration tier, we frequently offer promotional discounts of up to 50% for early enrollments and special demographic batches. Please contact our office or submit our demo booking form to receive current intake pricing.",
  },
];
