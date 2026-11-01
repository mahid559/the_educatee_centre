export interface FacilityItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  status: "VERIFIED" | "IN_PROGRESS";
}

export const facilitiesData: FacilityItem[] = [
  {
    id: "spoken-english-room",
    title: "Dedicated Spoken English Training Room",
    subtitle: "A Quiet Sanctuary Away from the Noisy World",
    description:
      "Unlike noisy commercial coaching centers, our dedicated Spoken English room is specifically arranged to foster intimate, confidence-building conversation. Equipped with seminar seating, clear audio acoustics, and an interactive whiteboard, students immerse themselves in speaking drills without feeling intimidated or distracted.",
    features: [
      "Acoustically calm, distraction-free environment",
      "Semi-circular seating arrangement encouraging eye contact and peer dialogue",
      "Interactive whiteboards for instant grammar visualization",
      "Dedicated space for presentations, roleplays, and mini-debates",
    ],
    image: "/images/classroom_spoken.jpg",
    status: "VERIFIED",
  },
  {
    id: "computer-lab",
    title: "Fully Functional Computer Training Lab",
    subtitle: "Practical 1-to-1 Workstations for IT & Office Skills",
    description:
      "A fully equipped computer lab designed to support practical hands-on learning for Basic Computer, MS Office, typing fluency, and digital marketing. Every student operates directly on a desktop workstation, ensuring real technical proficiency rather than theoretical note-taking.",
    features: [
      "Dedicated individual desktop workstations for every student",
      "High-speed internet connectivity for research and digital tools",
      "Installed software: MS Word, Excel, PowerPoint, Bijoy & Avro typing",
      "Supervised lab sessions with direct mentor support",
    ],
    image: "/images/computer_lab.jpg",
    status: "VERIFIED",
  },
  {
    id: "prime-location",
    title: "Convenient Campus at Appayan Afroz Tower",
    subtitle: "Central Feni Location with Clear Elevator Access",
    description:
      "Conveniently situated right near Pourashava Gate on College Road in Feni. Located on the 5th floor (accessed by pressing the 4th-floor button on the elevator), the facility gives students a high-elevation, quiet learning atmosphere isolated from street-level traffic noise.",
    features: [
      "Centrally accessible location near Pourashava Gate on College Road",
      "Modern commercial building with elevator access (Lift 4th Floor)",
      "High floor level providing natural daylight and peaceful ambiance",
      "Welcoming reception area for student inquiries and parent counseling",
    ],
    image: "/images/hero_student.jpg",
    status: "VERIFIED",
  },
  {
    id: "small-batch-policy",
    title: "Strict Small Batch Capacity (Max 16)",
    subtitle: "Personal Attention for Every Single Student",
    description:
      "We believe true language acquisition and digital skills cannot happen in overcrowded lecture halls with 50+ students. For IELTS and speaking batches, we strictly cap enrollment at 16 students per class so the instructor can listen to and mentor each individual student every single day.",
    features: [
      "Maximum 16 students per batch for IELTS and spoken classes",
      "Every student gets speaking time and diagnostic feedback in every class",
      "Zero backbenchers — every seat is an active participant seat",
      "Special separate batch schedules available including Girls Batch",
    ],
    image: "/images/ielts_prep.jpg",
    status: "VERIFIED",
  },
];
