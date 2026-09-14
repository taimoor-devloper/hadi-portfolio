// All site content lives here: profile info, skills (AboutMe) and projects (slider + detail pages)
export { DataArray } from "./projects";

export const SiteConfig = {
  name: "Hadi Ali",
  shortName: "Hadi",
  role: "UI/UX Designer",
  location: "Karachi, Pakistan",
  email: "ha1526298@gmail.com",
  behance: "https://www.behance.net/hadiali125",
  linkedin: "https://www.linkedin.com/in/hadi-ali-2253a8277/",
  resume: "/Hadi_Ali_Resume.pdf",
  yearsExperience: "2+",
  projectsCount: "50+",
  screensCount: "600+",
  // hero portrait, e.g. "/profile.png" in /public (a cut-out PNG with transparent background looks best).
  // Leave null to show the project collage instead.
  photo: null,
  intro:
    "UI/UX Designer with 2+ years of experience creating clean, user-focused management systems, web and mobile interfaces — with design systems, user flows and developer-ready handoff.",
};

export const NavLinks = [
  { label: "Home", href: "/#home" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "About Me", href: "/#about-me-component" },
  { label: "Experience", href: "/#experience" },
  { label: "Hire Me", href: "/page/contactme" },
];

// brands I've designed for
export const PastBrands = [
  "TCS Sentiments",
  "Bluebird Art Paint",
  "SOGO Store",
  "Autojin Parts",
  "MTJ",
  "Dhoraji",
  "Wheelrack",
];

// US-based brands I'm currently building management systems for (under NDA)
export const CurrentBrands = ["Wilbarts", "BYOT Auto Parts", "Nivago Pick-A-Part"];

export const AboutData = [
  {
    count: 1,
    title: "UI Design",
    img: "/first.svg",
    array: [
      "Mobile Apps (35+ screen flows)",
      "Web Dashboards",
      "Landing Pages & Websites",
      "Dark & Light Themes",
      "Color & Typography",
      "Responsive Desktop & Mobile",
      "RTL / Multi-language Layouts",
    ],
  },
  {
    count: 2,
    title: "UX Design",
    img: "/second.svg",
    array: [
      "UX Research & Competitor Analysis",
      "Usability Testing",
      "User Flows & Journey Mapping",
      "Low-fidelity Wireframes",
      "Information Hierarchy",
      "Conversion-focused CTAs",
      "Accessibility & Contrast",
    ],
  },
  {
    count: 3,
    title: "Design Systems",
    img: "/third.svg",
    array: [
      "Reusable Components",
      "Auto Layout & Variants",
      "Modular Grids",
      "Style Guides",
      "Iconography",
      "Scalable Figma Files",
      "Developer Handoff",
    ],
  },
  {
    count: 4,
    title: "Management Systems",
    img: "/fourth.svg",
    array: [
      "Multi-role Dashboards",
      "Data Tables & Advanced Filters",
      "Analytics & Progress Charts",
      "Order & Delivery Tracking",
      "Admin / Business Panels",
      "Multi-step Forms",
      "Auto Parts Platforms (US)",
    ],
  },
  {
    count: 5,
    title: "Prototyping",
    img: "/fifth.svg",
    array: [
      "Low to High Fidelity",
      "Interactive Figma Prototypes",
      "Transitions & Button States",
      "Modal Layers",
      "Device Mockups",
      "Clickable User Journeys",
      "Design Walkthroughs",
    ],
  },
  {
    count: 6,
    title: "Tools",
    img: "/sisxth.svg",
    array: [
      "Figma (Prototyping & Animations)",
      "Adobe Photoshop & Illustrator",
      "Adobe XD",
      "HTML, CSS & WordPress",
      "Jira & Slack",
      "Iconify / Unsplash / Wireframe Plugins",
      "Mockup Tools",
    ],
  },
];

// from Hadi_Ali_Resume.pdf — newest first
export const Experience = [
  {
    role: "UI/UX Designer",
    company: "Zeroweb",
    location: "Melbourne, Australia (Remote)",
    start: "Jul 2025",
    end: "Present",
    current: true,
    summary:
      "Designing web, mobile and branding assets for global clients, focusing on user-centric, conversion-focused design. Creating landing pages, UI systems and marketing visuals while ensuring consistency and performance.",
    achievements: [
      "Designed high-converting landing pages and digital products",
      "Enhanced brand visuals and user experience across projects",
      "Delivered developer-friendly, responsive designs for global clients",
    ],
    tags: ["Landing Pages", "UI Systems", "Branding", "Marketing Visuals"],
  },
  {
    role: "UI/UX Designer",
    company: "Mean3 Pvt Ltd",
    location: "Karachi, Pakistan",
    start: "Oct 2024",
    end: "Jun 2025",
    summary:
      "Designed e-commerce websites and mobile apps with a focus on conversion-driven UX and modern UI. Collaborated with developers for smooth handoff and built responsive layouts, prototypes and design systems.",
    achievements: [
      "Improved user engagement and checkout conversions",
      "Built scalable design systems for consistency and faster development",
    ],
    brands: ["TCS", "MTJ", "SOGO", "Dhoraji (app)", "Wheelrack (Canada)"],
    tags: ["E-commerce", "Mobile Apps", "Design Systems", "Prototyping"],
  },
  {
    role: "UI/UX Designer",
    company: "Astral Developers",
    location: "Karachi, Pakistan",
    start: "Mar 2024",
    end: "Sep 2024",
    summary:
      "Supported UI/UX design for live projects, creating wireframes, prototypes and visual assets in Figma. Assisted in research, UI components and client presentations while collaborating with the design team.",
    achievements: [
      "Contributed to live project designs",
      "Recognized for quick learning and strong attention to detail",
    ],
    tags: ["Wireframes", "Prototypes", "Research", "Figma"],
  },
];

export const Education = [
  { title: "Diploma in Software Engineering", school: "Aptech Learning", period: "2022 – 2025" },
  { title: "Diploma in Graphic Design", school: "Click5 Institute", period: "2023" },
  { title: "Intermediate", school: "Govt Premier College (Morning)", period: "2021 – 2023" },
];

export const Awards = [
  {
    title: "UI/UX Designer of the Year",
    issuer: "Aptech Learning",
    date: "May 2025",
    note: "Tech Olympic Season 2, Aptech North Karachi — Winner (2025)",
  },
];
