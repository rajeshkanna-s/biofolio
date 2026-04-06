// ============================================================
//  src/data/data.ts
//  All site content lives here. Edit this file to personalise.
// ============================================================

export const siteConfig = {
  title: "Rajeshkanna S — Marriage Profile",
  description:
    "A complete personal profile of Rajeshkanna S — Software Engineer, Chennai. Seeking a life partner.",
  ogImage: "/og-preview.jpg",
  passwordProtected: false,   // set true + fill password below to lock the site
  password: "",
  pdfLink: "/rajeshkanna-profile.pdf",
  whatsappNumber: "918667454755",   // country code + number, no +
  emailAddress: "rajeshkannaprogrammer@gmail.com",
};

// ─── HERO ────────────────────────────────────────────────────────────────────

export const hero = {
  sectionLabel: "Seeking Life Partner",
  firstName: "Rajeshkanna",
  lastName: "S",
  displayName: "Rajeshkanna S",
  tagline: "Building software by day, crafting digital experiences by passion.",
  subtitle: "Software Engineer · Chennai, Tamil Nadu",
  profilePhoto: "/photos/rajeshkanna-hero.jpg",   // place in public/photos/
  ctaPrimary: { label: "Know Me Better", href: "#about" },
  ctaSecondary: { label: "Express Interest", href: "#contact" },
  quickBadges: [
    { label: "Age 30", icon: "🎂" },
    { label: "Height 5'7\"", icon: "📏" },
    { label: "Hindu", icon: "🕉️" },
    { label: "Chennai", icon: "📍" },
    // { label: "Non-Manglik", icon: "⭐" },
  ],
};

// ─── QUICK STATS ─────────────────────────────────────────────────────────────

export const quickStats = [
  { icon: "🎂", value: "30", label: "Age" },
  { icon: "📏", value: "5'7\"", label: "Height" },
  { icon: "🎓", value: "B.E (CSE)", label: "Education" },
  { icon: "💼", value: "8+ Yrs", label: "Experience" },
  { icon: "📍", value: "Chennai", label: "Based In" },
  { icon: "🏡", value: "Tamil Nadu", label: "Native" },
];

// ─── ABOUT ME ────────────────────────────────────────────────────────────────

export const about = {
  pullQuote:
    "I consider myself a calm, responsible, and practical person with a positive outlook toward life. I value honesty, mutual respect, and clear communication in all relationships.",
  paragraphs: [
    "I have completed my Bachelor’s degree in Computer Science Engineering and am currently working as a Senior Software Engineer. I consider myself a calm, responsible, and practical person with a positive outlook toward life. I value honesty, mutual respect, and clear communication in all relationships.",
    "I believe marriage is a partnership where both individuals grow together emotionally, professionally, and personally. My intention is to start married life independently, setting up our own home and building a fresh beginning together, while maintaining respect and care for both families.",
    "In terms of beliefs, I respect all religions and the faith each person follows. I am not overly rigid or ritualistic about spirituality, such as mandatory daily or weekly visits to temples or churches. I believe spirituality should be simple, personal, and meaningful, and I expect a similar balanced approach from my partner. Religion has no barrier for me, I am open to a Hindu or Christian partner, as I believe all religions carry the same positive values and divine power. Mutual respect matters more than labels.",
    "On a personal note, I am very independent and self-sufficient. I have been cooking for myself for the past 10 years and genuinely enjoy it; cooking is one of my hobbies. Even if my future partner does not have cooking experience, it is absolutely not an issue for me. I am happy to cook for her and would enjoy teaching her as well, if she is interested.",
    "During my free time, I like watching movies and web series as a form of relaxation and entertainment. I would be happy if my partner also enjoys watching movies and series, as shared interests help build a strong bond, though it is not a strict expectation.",
    "Looking ahead, I have aspirations to start my own business in the future. I strongly believe that a supportive and understanding partner plays a key role in achieving long-term goals, and I am equally committed to being supportive of my partner’s dreams and ambitions.",
    "I have an open mindset regarding my partner’s career choices. Whether she wishes to continue her job, focus on home, or pursue a business venture, I will fully respect and support her decision. I also have no objection if my partner wishes to support her family financially after marriage, as I believe family responsibilities should always be respected.",
    "I would also like to clearly mention that myself and my family do not have any expectations from my partner’s family in terms of dowry, gold, or financial contributions of any kind. A person’s character, values, and compatibility matter far more to me than financial background. Whether my partner’s family is financially modest, middle-class, or well-settled is not a concern for me at all. I believe marriage should be based on mutual respect, understanding, and equality, not financial transactions.",
    "I strongly believe that I can take good care of my life partner and provide her with a happy, respectful, and secure life based on mutual understanding and trust. Looking toward the future, I prefer a small and happy family and would like to have a maximum of two children.",
    "I am looking for a life partner who is understanding, caring, and emotionally mature, someone who values companionship, mutual support, and is ready to walk hand in hand through every phase of life. If you liked my profile as well, it would be nice to communicate and get to know each other better. Please feel free to contact me."
  ],
  friendQuotes: [
    { text: "A dedicated professional who always goes above and beyond.", name: "Colleague" },
    { text: "Hardworking and genuinely helpful — always there when you need him.", name: "Friend" },
    { text: "A problem-solver at heart, both in code and in life.", name: "Mentor" },
  ],
  personalityTraits: [
    { icon: "🏡", label: "Family-First" },
    { icon: "💰", label: "Financially Stable" },
    { icon: "💻", label: "Tech Enthusiast" },
    { icon: "📚", label: "Lifelong Learner" },
    { icon: "🤝", label: "Deeply Loyal" },
    { icon: "🎯", label: "Goal-Oriented" },
    { icon: "😄", label: "Sense of Humour" },
    { icon: "🌱", label: "Emotionally Mature" },
    { icon: "🔧", label: "Problem Solver" },
    { icon: "✈️", label: "Travel Enthusiast" },
  ],
};

// ─── PERSONAL DETAILS ────────────────────────────────────────────────────────

export const personalDetails = {
  identity: [
    { label: "Full Name", value: "Rajeshkanna S" },
    { label: "Date of Birth", value: "19 April 1996" },
    { label: "Age", value: "30 years" },
    { label: "Place of Birth", value: "Chengalpet" },
    { label: "Zodiac Sign", value: "Aries" },
  ],
  physical: [
    { label: "Height", value: "5 feet 75 inches" },
    { label: "Weight", value: "70 kg" },
    { label: "Complexion", value: "Medium white" },
    { label: "Blood Group", value: "B+" },
    { label: "Spectacles", value: "No" },
    { label: "Any Disability", value: "None" },
  ],
  background: [
    { label: "Religion", value: "Hindu" },
    { label: "Caste", value: "MBC" },
    { label: "Mother Tongue", value: "Tamil" },
    { label: "Languages Known", value: "Tamil, English" },
    { label: "Citizenship", value: "Indian" },
  ],
};

// ─── EDUCATION & CAREER ──────────────────────────────────────────────────────

export const career = {
  education: [
    {
      institution: "PERI Institute of Technology",
      degree: "B.E — Computer Science and Engineering",
      year: "2014–2018",
      city: "Chennai, Tamil Nadu",
      highlight: true,
    },
    // {
    //   institution: "Govt Boys Higher Secondary School",
    //   degree: "Higher Secondary Certificate (HSC) — Science Stream",
    //   year: "2012–2014",
    //   city: "Tamil Nadu",
    //   highlight: false,
    // },
    // {
    //   institution: "Govt Boys Higher Secondary School",
    //   degree: "SSLC — Secondary School Leaving Certificate",
    //   year: "2011–2012",
    //   city: "Tamil Nadu",
    //   highlight: false,
    // },
  ],
  current: {
    company: "Kuwy Technology Service Pvt Ltd",
    role: "Software Engineer",
    yearsOfExperience: 8,
    location: "Chennai, Tamil Nadu",
    workMode: "On-site",
    incomeRange: "₹10 – ₹12 LPA",
    showIncome: true,
    linkedIn: "https://www.linkedin.com/in/rajeshkanna-s",
    // description:
    //   "Developing robust web applications using Java, Spring MVC, and Spring Boot. Integrating third-party APIs for payments and data verification. Creating RESTful APIs and collaborating on responsive UI/UX design.",
  },
  previousRoles: [
    {
      company: "Barclays Shared Services",
      role: "Technical Support Specialist",
      period: "June 2017 – Sept 2020",
      // description:
      //   "Provided technical assistance for loan origination and payment processing software. Diagnosed software issues and tracked them in ticketing systems. Collaborated on resolving payment processing discrepancies.",
    },
  ],
  skills: [
    // Core & Backend
    "Java", "Spring Boot", "Spring Framework", "Spring MVC", "Node.js", "Express", "Python",
    "Microservices", "RESTful APIs", "API Integration", "Payment Processing", "OOPS",

    // Frontend
    "JavaScript", "TypeScript", "React", "Angular", "HTML/CSS", "Tailwind CSS",
    "Bootstrap", "Framer", "jQuery", "JSP",

    // Database & DevOps
    "MySQL", "PostgreSQL", "MongoDB", "AWS", "Docker", "Vercel", "Tomcat",

    // AI & Tools
    "GitHub Copilot", "OpenAI", "Anthropic", "Claude", "Gemini", "Meta AI", "Mistral AI", "Perplexity",

    // Developer Tools & Others
    "Git", "GitHub", "Postman", "Jira", "Eclipse/STS", "Advanced Excel"
  ],
  certifications: [],
};

// ─── FAMILY ──────────────────────────────────────────────────────────────────

export const family = {
  intro:
    "We're a close-knit middle-class family from Tamil Nadu. My parents have been married for 35 years — their relationship is the model I aspire to in my own life.",
  parents: [
    {
      relation: "Father",
      name: "Late Selvam P",
      age: null,
      profession: "Retired Home Builder",
      status: "Passed Away",
      photo: "/photos/father.jpg",
    },
    {
      relation: "Mother",
      name: "Alamelu S",
      age: 50,
      profession: "Homemaker",
      status: "Healthy & Active",
      photo: "/photos/mother.jpg",
    },
  ],
  siblings: [
    {
      relation: "Elder Sister",
      name: "Geetha S",
      age: null,
      profession: "",
      maritalStatus: "Married",
    },
    {
      relation: "Younger Sister",
      name: "Rajeshwari S",
      age: null,
      profession: "",
      maritalStatus: "Married",
    },
    {
      relation: "Younger Brother",
      name: "Murugan",
      age: null,
      profession: "",
      maritalStatus: "Unmarried",
    },
  ],
  familyDetails: [
    { label: "Family Type", value: "Nuclear" },
    { label: "Native Place", value: "Chengalpet, Tamil Nadu" },
    { label: "Own House", value: "Not disclosed publicly" },
    { label: "Ancestral Property", value: "Not disclosed publicly" },
    { label: "Family Income", value: "Comfortable — not disclosed publicly" },
  ],
  familyValues: [
    "Respect for elders",
    "Education is priority",
    "Open to all decisions",
    "Celebration of festivals",
    "Always welcoming guests",
  ],
  familyPhoto: "/photos/family.jpg",
};

// ─── HOROSCOPE ───────────────────────────────────────────────────────────────

export const horoscope = {
  details: [
    { label: "Date of Birth", value: "19 April 1996" },
    { label: "Time of Birth", value: "02:55 PM" },
    { label: "Place of Birth", value: "Kattankulathur, Tamil Nadu" },
    { label: "Rashi", value: "Mesha (Aries)" },
    { label: "Nakshatra", value: "Bharani" },
    { label: "Lagnam (Ascendant)", value: "Simmam (Leo)" },
    { label: "Dasa Balance", value: "Sukra Dasa — 6 Yrs, 1 Mo, 5 Days" },
    { label: "Dosham", value: "No Sevvai Dosham" },
    { label: "Caste", value: "Vanniyar — Not particular" },
    { label: "Gothram", value: "Shiva" },
  ],
  manglicStatus: "non-manglik",   // "manglik" | "non-manglik" | "partial"
  kundliAvailable: true,
  kundliPDF: "/rajeshkanna-kundli.pdf",
  note:
    "horoscope details above.",
};

// ─── LIFESTYLE ───────────────────────────────────────────────────────────────

export const lifestyle = {
  food: {
    preference: "Non-Vegetarian",
    loves: ["South Indian Cuisine", "Home Cooked Meals", "Biryani", "Chettinad Chicken"],
    doesntEat: "Nothing specific",
    cooking: "Yes — enjoys cooking on daily and weekends. Speciality: South Indian tiffin & gravy items.",
  },
  fitness: {
    routine: "Morning walks and light gym sessions",
    sports: ["Cricket (casual)", "Badminton"],
    yogaOrMeditation: "Occasional meditation",
  },
  hobbies: [
    { icon: "💻", label: "Coding" },
    { icon: "🌐", label: "Web Development" },
    { icon: "✈️", label: "Travel" },
    { icon: "🎬", label: "Movies" },
    { icon: "🎵", label: "Music" },
    { icon: "📸", label: "Photography" },
    { icon: "🍳", label: "Cooking" },
  ],
  travel: {
    visited: ["Ooty 🏔️", "Kodaikanal 🌿", "Pondicherry 🌊", "Kerala 🌴", "Goa 🏖️"],
    dream: "A trip to Japan and a road trip through the Himalayas.",
  },
  favourites: {
    books: ["The Alchemist — Paulo Coelho", "Atomic Habits — James Clear"],
    movies: ["Vikram", "96", "Interstellar", "The Dark Knight"],
    music: ["Anirudh", "A.R. Rahman", "Ilayaraja", "Yuvan Shankar Raja"],
  },
  habits: {
    smoking: "Never",
    drinking: "Never",
    sleepSchedule: "10 PM – 6 AM",
    typicalSunday:
      "Late morning coffee, coding personal projects or freelance work, watching a movie, and an evening walk.",
  },
};

// ─── GOALS ───────────────────────────────────────────────────────────────────

export const goals = {
  milestones: [
    {
      timeframe: "First Year",
      icon: "🏡",
      heading: "Settle Into Our Life",
      description:
        "Build a comfortable and happy home together. Understand each other's rhythms and grow closer as a couple.",
    },
    {
      timeframe: "3 Years",
      icon: "🌱",
      heading: "Grow Together",
      description:
        "Travel together, build savings, and strengthen our bond. Support each other's career goals and personal growth.",
    },
    {
      timeframe: "5 Years",
      icon: "🚀",
      heading: "Build Something Meaningful",
      description:
        "Achieve financial stability, explore new opportunities, and plan for the future — whether it's a home, business, or family.",
    },
    {
      timeframe: "Long Term",
      icon: "🌅",
      heading: "A Life Well-Lived",
      description:
        "Raise a happy family, give back to the community, and create lasting memories together.",
    },
  ],
  settleIn: "Chennai (preferred), open to Bangalore or Hyderabad.",
  childrenPlan: "Yes — 1 or 2 children. Whenever we both feel ready, no rush.",
  careerAfterMarriage:
    "I completely respect my partner's career. Whether she works, takes a break, or runs her own business — that is entirely her choice, and I will support it fully.",
  financialPhilosophy:
    "Moderate spender, consistent saver. I believe in building a secure future together, transparently.",
};

// ─── PARTNER EXPECTATIONS ────────────────────────────────────────────────────

export const partnerExpectations = {
  lookingFor: [
    { icon: "🎂", label: "Age", value: "25 – 30 years" },
    { icon: "🎓", label: "Education", value: "Graduate and above (any stream)" },
    { icon: "📍", label: "Location", value: "Tamil Nadu preferred, open to anywhere in India" },
    { icon: "🕉️", label: "Religion / Caste", value: "Hindu preferred, open to all communities" },
    { icon: "💼", label: "Career", value: "Working, homemaker, or own business — all fine" },
    { icon: "🌍", label: "Nationality", value: "Indian" },
  ],
  personalityTraitsWanted: [
    "Kind and empathetic",
    "Family-oriented",
    "Independent thinker",
    "Good sense of humour",
    "Emotionally mature",
    "Honest and direct",
  ],
  dealbreakers: [
    "Dishonesty in any form",
    "Disrespect towards parents (mine or hers)",
  ],
  openNote:
    "These are gentle preferences, not a strict checklist. I believe the right connection transcends any criteria. If you feel a resonance, please reach out.",
  whatIBring: [
    { icon: "🤝", heading: "Stability", description: "Financial security, a stable career with 8+ years of experience, and a clear sense of direction in life." },
    { icon: "💬", heading: "Communication", description: "I'm a good listener and believe in talking things through — no silent treatment, ever." },
    { icon: "👨‍👩‍👧", heading: "Family", description: "A warm, welcoming family who will treat my partner like their own daughter." },
    { icon: "😄", heading: "Joy", description: "Laughter, positive energy, and making ordinary days feel special." },
  ],
};

// ─── GALLERY ─────────────────────────────────────────────────────────────────

export const gallery = {
  categories: ["All", "Formal", "Casual", "Travel", "Family", "Hobbies"],
  photos: [
    // Formal
    { src: "/photos/formal-1.jpg", alt: "Formal portrait", category: "Formal" },
    { src: "/photos/formal-2.jpg", alt: "Professional photo", category: "Formal" },
    { src: "/photos/formal-3.jpg", alt: "Office event", category: "Formal" },

    // Casual
    { src: "/photos/casual-1.jpg", alt: "Casual photo", category: "Casual" },
    { src: "/photos/casual-2.jpg", alt: "Weekend outing", category: "Casual" },
    { src: "/photos/casual-3.jpg", alt: "Relaxing day out", category: "Casual" },
    { src: "/photos/casual-4.jpg", alt: "With friends", category: "Casual" },

    // Travel
    { src: "/photos/travel-1.jpg", alt: "Travel adventure", category: "Travel" },
    { src: "/photos/travel-2.jpg", alt: "Scenic destination", category: "Travel" },
    { src: "/photos/travel-3.jpg", alt: "Exploring new places", category: "Travel" },

    // Family
    { src: "/photos/family-1.jpg", alt: "Family gathering", category: "Family" },
    { src: "/photos/family-2.jpg", alt: "Festival celebration", category: "Family" },
    { src: "/photos/family-3.jpg", alt: "Family moments", category: "Family" },

    // Hobbies
    { src: "/photos/hobby-1.jpg", alt: "Coding session", category: "Hobbies" },
    { src: "/photos/hobby-2.jpg", alt: "Creative work", category: "Hobbies" },
    { src: "/photos/hobby-3.jpg", alt: "Weekend hobby", category: "Hobbies" },
  ],
  introVideo: {
    available: false,   // set true and add src when video is ready
    src: "/videos/intro.mp4",
    thumbnail: "/photos/video-thumb.jpg",
    duration: "58 sec",
  },
};

// ─── CONTACT FORM ────────────────────────────────────────────────────────────

export const contactForm = {
  heading: "Let's Begin a Conversation",
  subheading: "",

  // Web3Forms config
  web3formsKey: "8d4d97e4-c634-4683-9793-6a89fcee8329",

  // EmailJS config — replace with your own
  emailjs: {
    serviceId: "service_xxxxxxx",
    templateId: "template_xxxxxxx",
    publicKey: "yeIOTD4_n_jgpIkBo",
  },

  fields: {
    reachingOutAs: ["Myself (the profile)", "My Son / Daughter", "On behalf of family", "A well-wisher"],
    howFound: ["Shared by family", "Shared on WhatsApp", "Shared on Instagram", "Directly by the person", "Other"],
    profileGender: ["Girl", "Boy"],
    ageGroup: ["22 – 25", "26 – 28", "29 – 31", "32 – 35", "35+"],
    locatedIn: [
      "Chennai", "Other Tamil Nadu city", "Bangalore", "Hyderabad",
      "Mumbai", "Delhi", "Other North India", "USA", "UK", "Canada", "Australia", "Other Abroad",
    ],
    educationLevel: ["HSC / Diploma", "Graduate (B.E / B.Tech / B.Sc etc.)", "Post Graduate", "Doctorate / PhD", "Other"],
    workStatus: ["Working in company", "Running own business", "Not currently working", "Student"],
    casteOrReligion: [
      "Hindu — Brahmin", "Hindu — Other caste", "Christian", "Muslim", "Other religion", "Prefer not to say",
    ],
  },

  successMessage: "Thank you! We've received your message and will reach out within 24 hours. 🙏",
  whatsappMessage: "Hello! I came across Rajeshkanna's marriage profile and would like to connect.",
};

// ─── FOOTER ──────────────────────────────────────────────────────────────────

export const footer = {
  name: "Rajeshkanna S",
  tagline: "Software Engineer · Chennai · Seeking Life Partner",
  note: "This profile is shared in confidence. Please do not forward without permission.",
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Career", href: "#career" },
    { label: "Family", href: "#family" },
    { label: "Horoscope", href: "#horoscope" },
    { label: "Gallery", href: "#gallery" },
    { label: "Connect", href: "#contact" },
  ],
  credit: "Built by Rajeshkanna S with Love",
  year: 2026,
};
