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
    { label: "30 Years", icon: "🎂" },
    { label: "5'7\"", icon: "📏" },
    { label: "Hindu", icon: "🕉️" },
    { label: "Chennai", icon: "📍" },
    { label: "Non-Manglik", icon: "⭐" },
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
    "I believe a great marriage is built on friendship first — everything else follows.",
  paragraphs: [
    "I'm Rajeshkanna — a software engineer with 8+ years of professional experience who is passionate about building robust, scalable web applications. I specialize in Java, Spring Boot, and full-stack development, and I also take on freelance web development projects where I've built 30+ websites for startups and small businesses across India.",
    "I'm currently based in Chennai and working at Kuwy Technology Service Pvt Ltd, where I develop web applications using Java, Spring MVC, and Spring Boot, integrate third-party APIs, and collaborate on creating responsive, user-friendly interfaces. Before this, I spent over three years at Barclays Shared Services as a Technical Support Specialist.",
    "I'm looking for a partner who is her own person — confident, curious, and kind. Someone who wants to build a life that feels both rooted and free. I don't have a checklist; I have a feeling I'm looking for.",
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
    { icon: "😄", label: "Great Sense of Humour" },
    { icon: "🌱", label: "Emotionally Mature" },
    { icon: "🔧", label: "Problem Solver" },
    { icon: "✈️", label: "Travel Enthusiast" },
  ],
};

// ─── PERSONAL DETAILS ────────────────────────────────────────────────────────

export const personalDetails = {
  identity: [
    { label: "Full Name",      value: "Rajeshkanna S" },
    { label: "Date of Birth",  value: "14 March 1995" },
    { label: "Age",            value: "30 years" },
    { label: "Place of Birth", value: "Tamil Nadu" },
    { label: "Zodiac Sign",    value: "Pisces" },
  ],
  physical: [
    { label: "Height",      value: "5 feet 7 inches" },
    { label: "Weight",      value: "74 kg" },
    { label: "Complexion",  value: "Wheatish" },
    { label: "Blood Group", value: "O+" },
    { label: "Spectacles",  value: "No" },
    { label: "Any Disability", value: "None" },
  ],
  background: [
    { label: "Religion",       value: "Hindu" },
    { label: "Caste",          value: "Iyer (Brahmin)" },
    { label: "Gotra",          value: "Bharadwaja" },
    { label: "Mother Tongue",  value: "Tamil" },
    { label: "Languages Known", value: "Tamil, English, Hindi (conversational)" },
    { label: "Citizenship",    value: "Indian" },
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
    {
      institution: "Govt Boys Higher Secondary School",
      degree: "Higher Secondary Certificate (HSC) — Science Stream",
      year: "2012–2014",
      city: "Tamil Nadu",
      highlight: false,
    },
    {
      institution: "Govt Boys Higher Secondary School",
      degree: "SSLC — Secondary School Leaving Certificate",
      year: "2011–2012",
      city: "Tamil Nadu",
      highlight: false,
    },
  ],
  current: {
    company: "Kuwy Technology Service Pvt Ltd",
    role: "Software Engineer",
    yearsOfExperience: 8,
    location: "Chennai, Tamil Nadu",
    workMode: "On-site",
    incomeRange: "₹24 – ₹28 LPA",
    showIncome: true,
    linkedIn: "https://www.linkedin.com/in/rajeshkanna-s",
    description:
      "Developing robust web applications using Java, Spring MVC, and Spring Boot. Integrating third-party APIs for payments and data verification. Creating RESTful APIs and collaborating on responsive UI/UX design.",
  },
  skills: [
    "Java", "Spring Boot", "Spring MVC", "RESTful APIs", "JavaScript",
    "Angular", "HTML/CSS", "JSP", "jQuery", "MySQL",
    "Git", "Jira", "Microservices", "API Integration", "Payment Processing",
  ],
  certifications: [
    { name: "Communicating with Confidence — LinkedIn Learning", year: 2023 },
    { name: "Corporate Finance Foundations — LinkedIn Learning", year: 2023 },
    { name: "Building Self Confidence — LinkedIn Learning", year: 2023 },
  ],
};

// ─── FAMILY ──────────────────────────────────────────────────────────────────

export const family = {
  intro:
    "We're a close-knit middle-class family from Tamil Nadu. My parents have been married for 35 years — their relationship is the model I aspire to in my own life.",
  parents: [
    {
      relation: "Father",
      name: "Suresh Krishnamurthy",
      age: 62,
      profession: "Retired Deputy Collector, Government of Tamil Nadu",
      status: "Healthy & Active",
      photo: "/photos/father.jpg",
    },
    {
      relation: "Mother",
      name: "Geetha Suresh",
      age: 58,
      profession: "School Teacher (Retired)",
      status: "Healthy & Active",
      photo: "/photos/mother.jpg",
    },
  ],
  siblings: [
    {
      relation: "Elder Sister",
      name: "Priya Arunkumar",
      age: 32,
      profession: "Gynaecologist, MIOT Hospital, Chennai",
      maritalStatus: "Married (2019), one daughter",
    },
  ],
  familyDetails: [
    { label: "Family Type",      value: "Nuclear (Parents live in Tamil Nadu)" },
    { label: "Native Place",     value: "Tamil Nadu" },
    { label: "Own House",        value: "Yes — 3BHK in Tamil Nadu, apartment in Chennai" },
    { label: "Ancestral Property", value: "Agricultural land" },
    { label: "Family Income",    value: "Comfortable — not disclosed publicly" },
  ],
  familyValues: [
    "Respect for elders",
    "Education is priority",
    "Open to all decisions",
    "Regular temple visits",
    "Celebration of festivals",
    "Always welcoming guests",
  ],
  familyPhoto: "/photos/family.jpg",
};

// ─── HOROSCOPE ───────────────────────────────────────────────────────────────

export const horoscope = {
  details: [
    { label: "Date of Birth",  value: "14 March 1995" },
    { label: "Time of Birth",  value: "06:42 AM" },
    { label: "Place of Birth", value: "Tamil Nadu" },
    { label: "Rashi",          value: "Meena (Pisces)" },
    { label: "Nakshatra",      value: "Revati — Pada 2" },
    { label: "Lagnam",         value: "Kumbha (Aquarius)" },
    { label: "Gotra",          value: "Bharadwaja" },
    { label: "Manglik Status", value: "Non-Manglik" },
    { label: "Padam",          value: "2nd Padam" },
  ],
  manglicStatus: "non-manglik",   // "manglik" | "non-manglik" | "partial"
  kundliAvailable: true,
  kundliPDF: "/rajeshkanna-kundli.pdf",
  note:
    "Full horoscope chart available on request.",
};

// ─── LIFESTYLE ───────────────────────────────────────────────────────────────

export const lifestyle = {
  food: {
    preference: "Vegetarian",
    loves: ["Chettinad Cuisine", "South Indian Tiffin", "Homemade Rasam Rice", "Baking Sourdough"],
    doesntEat: "Non-vegetarian food",
    cooking: "Yes — cooks on most weekends. Signature dish: Pesarattu & Tomato Chutney.",
  },
  fitness: {
    routine: "Gym 4x a week (strength training), weekend trek or long walk",
    sports: ["Badminton", "Cricket (casual)"],
    yogaOrMeditation: "10-min morning meditation",
  },
  hobbies: [
    { icon: "💻", label: "Coding" },
    { icon: "🌐", label: "Web Development" },
    { icon: "📚", label: "Reading" },
    { icon: "🎬", label: "Tamil Cinema" },
    { icon: "✈️", label: "Travel" },
    { icon: "🎵", label: "Music" },
    { icon: "📸", label: "Photography" },
    { icon: "♟️", label: "Chess" },
    { icon: "🍳", label: "Cooking" },
    { icon: "🌿", label: "Indoor Plants" },
  ],
  travel: {
    visited: ["Himachal Pradesh 🏔️", "Kerala 🌴", "Rajasthan 🏰", "Sri Lanka 🌊", "Singapore 🌆", "Dubai ✨"],
    dream: "A slow road trip through the Himalayas and a month in Japan.",
  },
  favourites: {
    books: ["Sapiens — Yuval Noah Harari", "The Alchemist — Paulo Coelho", "Ponniyin Selvan — Kalki"],
    movies: ["Nayagan", "96", "Interstellar", "The Godfather"],
    music: ["Ilayaraja", "A.R. Rahman", "Carnatic classical", "John Mayer"],
  },
  habits: {
    smoking: "Never",
    drinking: "Never",
    sleepSchedule: "10 PM – 6 AM (early riser)",
    typicalSunday:
      "Filter coffee on the balcony, morning call with parents, cooking a big lunch, an evening badminton game, and winding down with a book or old movie.",
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
        "Get comfortable together, understand each other's rhythms. Set up a home that truly feels like ours — cozy, warm, full of plants and books.",
    },
    {
      timeframe: "3 Years",
      icon: "🌱",
      heading: "Grow Together",
      description:
        "Travel to at least two new places together. Start building long-term investments and savings. If we're ready, welcome a child into our family.",
    },
    {
      timeframe: "5 Years",
      icon: "🚀",
      heading: "Build Something",
      description:
        "I'd love to take the leap into a startup or independent consulting. Build enough financial security that we have choices — where we live, how we work.",
    },
    {
      timeframe: "Long Term",
      icon: "🌅",
      heading: "A Life Well-Lived",
      description:
        "Raise children who are kind, curious, and rooted. Retire my parents comfortably. Have a home in the hills. Give back to the community in some meaningful way.",
    },
  ],
  settleIn: "Chennai (preferred), open to Bangalore or Hyderabad. Open to abroad if the opportunity is right.",
  childrenPlan: "Yes — 1 or 2 children. Whenever we both feel ready, no rush.",
  careerAfterMarriage:
    "I completely respect my partner's career. Whether she works, takes a break, or runs her own business — that is entirely her choice, and I will support it fully.",
  financialPhilosophy:
    "Moderate spender, consistent saver. I believe in buying experiences over things. We would manage finances together, transparently.",
};

// ─── PARTNER EXPECTATIONS ────────────────────────────────────────────────────

export const partnerExpectations = {
  lookingFor: [
    { icon: "🎂", label: "Age", value: "25 – 31 years" },
    { icon: "🎓", label: "Education", value: "Graduate and above (any stream)" },
    { icon: "📍", label: "Location", value: "Tamil Nadu preferred, open to anywhere in India" },
    { icon: "🕉️", label: "Religion / Caste", value: "Hindu preferred, open to all communities" },
    { icon: "💼", label: "Career", value: "Working, homemaker, or own business — all fine" },
    { icon: "🌍", label: "Nationality", value: "Indian (NRI also welcome)" },
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
    { icon: "😄", heading: "Joy", description: "Laughter, spontaneous plans, home-cooked meals, and making ordinary days feel special." },
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
  subheading:
    "Fill this short form and we'll get back to you within 24 hours. Most fields are just quick selections.",

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
  credit: "Built with React + TypeScript",
  year: 2025,
};
