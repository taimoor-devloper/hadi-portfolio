// Project case studies, taken from https://www.behance.net/hadiali125/projects
import { ProjectImages } from "./projectImages";

export const DataArray = [
  {
    slug: "lookna",
    title: "Lookna – Crypto Investment Dashboard UI",
    name: "Lookna Crypto Dashboard",
    category: "Web Dashboard",
    summary:
      "Lookna is a modern crypto investment dashboard designed with a futuristic dark theme. Users can track wallets, discover trending tokens, identify scams and access private sale opportunities — all from a single interface built for clarity, security and accessibility.",
    meta: { Role: "UI/UX Designer", Theme: "Dark with purple accents" },
    tools: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
    tags: ["Crypto Dashboard", "Web3 Design", "Token Explorer", "Dashboard Design"],
    sections: [
      {
        heading: "Design Objectives",
        items: [
          "A clean, modern dark theme that enhances readability and reduces eye strain.",
          "A seamless experience for wallet management, token discovery and market tracking.",
          "Complex financial data displayed in a digestible, well-structured format.",
          "Advanced filtering and intuitive navigation for all investor types.",
          "Consistent tables, cards, buttons and icons across every page.",
        ],
      },
      {
        heading: "Target Audience",
        items: [
          "Crypto traders and investors looking for real-time insights.",
          "Web3 users who need one dashboard for wallet and market management.",
          "Token researchers exploring decentralized exchanges and private sales.",
          "DeFi users concerned about scam tokens and portfolio volatility.",
        ],
      },
      {
        heading: "Design Process",
        items: [
          "Research & Analysis — studied existing crypto dashboards, investor tools and DeFi platforms to find UX flaws and aesthetic gaps.",
          "Wireframing — low-fidelity layouts balancing visuals (icons, graphs, tables) with critical data (token stats, changes, wallet amounts).",
          "UI Design — built in Figma with a modular grid, reusable components and a high-contrast dark palette with purple accents.",
        ],
      },
      {
        heading: "Key Features",
        items: [
          "Wallet Overview with real-time balance, market change and price.",
          "Token Explorer with filterable tables for gainers, new pools, liquidity and trust scores.",
          "Watchlist with multi-timeframe performance metrics.",
          "Scam Identifier to flag and verify tokens.",
          "Private Sale Portal for ongoing and upcoming investment rounds.",
          "Advanced Filters by score, age, volume and liquidity.",
        ],
      },
      {
        heading: "Design System",
        items: [
          "Dark theme UI built for visual comfort during prolonged use.",
          "Red and green color coding for market trends.",
          "Uniform cards, tables and sidebars across pages.",
          "Bold headlines, mono-style numbers and a clear type hierarchy.",
        ],
      },
    ],
    result:
      "A premium, all-in-one environment for crypto investors that simplifies complex data — a scalable design ready for real-time APIs, wallet connections and personalization.",
    behance: "https://www.behance.net/gallery/234662351/Lookna-Crypto-Investment-Dashboard-UI",
    images: ProjectImages["lookna"],
  },
  {
    slug: "filimo-school",
    title: "Education Dashboard UI/UX – Filimo School",
    name: "Filimo School Dashboard",
    category: "Web Dashboard",
    summary:
      "A comprehensive dashboard system for Filimo School, an e-learning platform that connects teachers, students and parents — a clean, structured and user-friendly experience tailored to each role.",
    meta: { Role: "UI/UX Designer", Duration: "2 weeks", Dashboards: "Teacher · Student · Parent" },
    tools: ["Figma", "Adobe Illustrator"],
    tags: ["Education Dashboard", "E-learning Platform", "Multi-role Dashboard", "UX Design"],
    sections: [
      {
        heading: "Problem",
        items: [
          "Teachers needed tools to manage classes, assignments and performance reports.",
          "Students needed an easy way to track lessons, homework and progress.",
          "Parents needed clear insight into their child's learning and communication with teachers.",
        ],
      },
      {
        heading: "Design Goals",
        items: [
          "Simplify navigation for three different user types.",
          "Keep branding and color scheme consistent.",
          "Create role-specific dashboards without losing platform identity.",
          "Provide clean data visualization for progress tracking.",
        ],
      },
      {
        heading: "Research & Insights",
        items: [
          "Teacher: “I want to manage assignments quickly.”",
          "Student: “I need a clear view of lessons and progress.”",
          "Parent: “I want to monitor my child's activity and communicate with teachers.”",
          "Complex dashboards confuse non-technical users, and missing progress visuals lower engagement.",
        ],
      },
      {
        heading: "User Flows",
        items: [
          "Teacher: Create class → Assign homework → Track performance.",
          "Student: View lessons → Complete assignments → Check progress.",
          "Parent: Monitor reports → Communicate with teacher → Support progress.",
        ],
      },
      {
        heading: "High-Fidelity Designs",
        items: [
          "Teacher — class schedule, assignment management, performance analytics.",
          "Student — personalized lesson plan, homework tracker, gamified progress charts.",
          "Parent — performance graph, teacher communication, attendance tracking.",
        ],
      },
    ],
    result:
      "Simplified dashboards improved usability for all three roles, clearer progress visualization helped student engagement, and parents gained more transparency into their child's education.",
    behance: "https://www.behance.net/gallery/234656465/Education-Dashboard-UIUX-Filimo-School",
    images: ProjectImages["filimo-school"],
  },
  {
    slug: "innovative-ai",
    title: "Innovative AI LLC – Landing Page Redesign (Dark Theme)",
    name: "Innovative AI Landing Page",
    category: "Landing Page",
    summary:
      "A dark-theme redesign of the Innovative AI LLC landing page, using the brand's logo colors for a stronger identity — modern, professional and conversion-oriented, highlighting the company's AI solutions.",
    meta: { Role: "UI/UX Designer", Duration: "2 days", Platform: "Desktop & mobile" },
    tools: ["Figma"],
    tags: ["Landing Page", "Redesign", "Dark Theme", "Tech Website"],
    sections: [
      {
        heading: "Problem",
        items: [
          "The previous page was simple but lacked modern visual appeal.",
          "Content hierarchy was unclear.",
          "Calls-to-action had weak visibility.",
        ],
      },
      {
        heading: "Design Goals",
        items: [
          "Use a dark theme that fits the AI/tech brand identity.",
          "Highlight services and solutions effectively.",
          "Place CTAs strategically for better conversions.",
          "Ensure a responsive design for desktop and mobile.",
        ],
      },
      {
        heading: "Page Structure",
        items: [
          "Hero — dark background with brand accents, clear headline and primary CTA.",
          "Services — icon-based cards with short descriptions.",
          "About — concise value proposition with a clear hierarchy.",
          "CTA — bold buttons placed at both the top and bottom of the page.",
          "Mobile — adjusted spacing, font sizes and CTA placement.",
        ],
      },
      {
        heading: "Style Guide",
        items: [
          "Dark base with the logo's accent color.",
          "Modern, high-contrast sans-serif typography.",
          "Rounded buttons, hover effects and card layouts.",
        ],
      },
    ],
    result:
      "The landing page now looks modern, professional and on-brand, with the dark theme and brand accents creating visual consistency and better CTA placement sharpening conversion focus.",
    behance: "https://www.behance.net/gallery/234657645/Innovative-AI-LLC-Landing-Page-Redesign-(Dark-Theme)",
    images: ProjectImages["innovative-ai"],
  },
  {
    slug: "pro-wellness",
    title: "Pro Wellness – Landing Page (Dark Theme)",
    name: "Pro Wellness Landing Page",
    category: "Landing Page",
    summary:
      "A landing page for Pro Wellness with a modern dark theme reflecting professionalism, trust and innovation — clean, engaging and conversion-focused, communicating the brand's value clearly.",
    meta: { Role: "UI/UX Designer", Theme: "Dark" },
    tools: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
    tags: ["Wellness Website", "Landing Page", "Healthcare Web", "UI/UX Design"],
    sections: [
      {
        heading: "Design Objectives",
        items: [
          "A visually appealing dark theme aligned with the brand's palette.",
          "Services, features and subscription plans presented in a clear structure.",
          "A user-friendly, conversion-oriented layout with clear CTAs.",
          "Consistent typography, spacing and imagery.",
          "Trust built through testimonials and key benefits.",
        ],
      },
      {
        heading: "Target Audience",
        items: [
          "Health-conscious individuals looking for expert guidance.",
          "Professionals interested in personalized wellness programs.",
          "Businesses seeking corporate wellness solutions.",
        ],
      },
      {
        heading: "Design Process",
        items: [
          "Research — analyzed top wellness and health-tech sites for user expectations, hierarchy and CTA placement.",
          "Wireframing — low-fidelity wireframes to define content flow and section hierarchy.",
          "High-fidelity design — built in Figma with the brand's colors for a premium feel.",
        ],
      },
      {
        heading: "Key Sections",
        items: [
          "Hero with a clear headline, CTA buttons and engaging visuals.",
          "How It Works — a simple 3-step journey.",
          "About and Why Choose Us sections.",
          "Plans & Pricing with transparent subscription tiers.",
          "Testimonials for social proof.",
        ],
      },
    ],
    result:
      "A premium digital presence for Pro Wellness — clean, modern and effective at communicating the brand's message of health and wellbeing.",
    behance: "https://www.behance.net/gallery/234659287/Pro-Wellness-Landing-Page-(Dark-Theme)",
    images: ProjectImages["pro-wellness"],
  },
  {
    slug: "wonomin",
    title: "WONOMIN – Job & Service Finder App UI/UX Design",
    name: "WONOMIN App",
    category: "Mobile App",
    summary:
      "WONOMIN is a job, gig and service finder app — similar in spirit to Indeed, Upwork and UrbanClap. Users can find jobs, post gigs, hire tutors, discover freelancers and connect with skilled professionals in one seamless app, built with a green and white theme representing trust and growth.",
    meta: { Role: "UI/UX Designer", Screens: "35+", Theme: "Green & white" },
    tools: ["Figma", "Adobe Photoshop"],
    tags: ["Job Finder App", "Service Marketplace", "Multi-user App", "Mobile App Design"],
    sections: [
      {
        heading: "Project Goals",
        items: [
          "An all-in-one app for job seekers, freelancers, employers and tutors.",
          "Both sides of the marketplace: service finders and service providers.",
          "Clean, scalable UI across a large set of unique screens.",
          "Powerful search, filter, profile and posting features.",
          "A light, interactive, mobile-first experience.",
        ],
      },
      {
        heading: "For Job Seekers & Freelancers",
        items: [
          "Personalized onboarding and skill tagging.",
          "Browse, apply to and bookmark jobs and gigs.",
          "Professional profile with portfolio, resume, skills and bio.",
          "Chat with employers, job alerts and notifications.",
          "Payment and contract tracking.",
        ],
      },
      {
        heading: "For Employers & Clients",
        items: [
          "Post a job, service or tutoring need.",
          "Advanced filters to find talent.",
          "Candidate shortlisting and profile viewing.",
          "Interview booking and messaging.",
          "Dashboard with stats, hire history, reviews and ratings.",
        ],
      },
      {
        heading: "Screen Categories",
        items: [
          "Multi-user onboarding, sign up, login and social auth.",
          "Dashboards for jobs, services, tutoring and gigs.",
          "Multi-step profile builder and application flow.",
          "Messaging, interview booking and payment tracker.",
          "Admin/business dashboard, settings, notifications and support.",
          "Empty, error and success states.",
        ],
      },
      {
        heading: "Visual Style",
        items: [
          "Calm, confident green and white for clarity, growth and action.",
          "Clean sans-serif type for a professional but friendly tone.",
          "Modular, auto-layout driven components.",
          "Flat, minimal icons and illustrations.",
        ],
      },
    ],
    result:
      "An extensive, scalable product UI with 35+ screens and multi-user flows for job seekers, employers and tutors — backed by a design system flexible enough to extend to web or an admin panel.",
    behance: "https://www.behance.net/gallery/228073583/WONOMIN-Job-Service-Finder-App-UIUX-Design",
    images: ProjectImages["wonomin"],
  },
  {
    slug: "capsule",
    title: "Capsule – Pharmacy & Delivery App UI/UX Design",
    name: "Capsule Pharmacy App",
    category: "Mobile App",
    summary:
      "Capsule is a pharmacy delivery app that makes healthcare more accessible. Users can browse, order and receive medicines at their doorstep, with a parallel flow for delivery agents — designed end-to-end in Figma.",
    meta: { Role: "UI/UX Designer", Screens: "30+", Theme: "Green & white" },
    tools: ["Figma", "Adobe Photoshop"],
    tags: ["Pharmacy App", "Medicine Delivery", "Healthcare App", "Delivery App UI"],
    sections: [
      {
        heading: "Project Goals",
        items: [
          "A user-friendly pharmacy app with real-time delivery tracking.",
          "Easy search, filtering and checkout for medicines and health products.",
          "A smooth and secure ordering experience for all user types.",
          "Delivery system UI including order tracking and agent views.",
          "A clean, trustworthy green and white healthcare palette.",
        ],
      },
      {
        heading: "Target Users",
        items: [
          "People seeking quick, reliable medicine delivery.",
          "Chronic patients with recurring prescriptions.",
          "Delivery agents fulfilling orders.",
          "Pharmacy staff managing inventory and requests.",
        ],
      },
      {
        heading: "Key Features",
        items: [
          "Medicine search and filter system.",
          "Product details with alternatives and information.",
          "Cart and prescription upload.",
          "Delivery address management and live order tracking.",
          "Order history, wallet and notifications.",
          "RTL layout support for Arabic markets.",
        ],
      },
      {
        heading: "Delivery Agent Flow",
        items: [
          "Agent login.",
          "Pickup and drop-off screens.",
          "Live map (design only).",
          "Earnings dashboard and order status management.",
        ],
      },
    ],
    result:
      "30+ detailed screens covering both customer and agent use cases, with a simple flow for first-time users and trust-building visuals suited to healthcare standards.",
    behance: "https://www.behance.net/gallery/228052347/Capsule-Pharmacy-Delivery-App-UIUX-Design",
    images: ProjectImages["capsule"],
  },
  {
    slug: "tourease",
    title: "TourEase – Travel & Tour Booking App UI/UX Design",
    name: "TourEase App",
    category: "Mobile App",
    summary:
      "TourEase is a travel app for discovering, exploring and booking guided tours. The goal was a clean, user-centric interface that simplifies travel from browsing to booking, with a blue and white theme reflecting trust and openness.",
    meta: { Role: "UI/UX Designer", Screens: "20+", Theme: "Blue & white" },
    tools: ["Figma", "Adobe Photoshop"],
    tags: ["Travel App", "Tour Booking", "Booking App", "Mobile UX"],
    sections: [
      {
        heading: "Project Goals",
        items: [
          "A visually engaging travel app with a seamless user flow.",
          "Search, filter and book tours in just a few taps.",
          "Clean, informative tour detail pages.",
          "Ratings, guides, saved tours and payments.",
          "A responsive design ready for multi-language use.",
        ],
      },
      {
        heading: "Key Features",
        items: [
          "Onboarding and account setup.",
          "Tour discovery with search, categories and trending tours.",
          "Tour detail page with itinerary, price and reviews.",
          "Booking flow with calendar, guests and add-ons.",
          "Guide profiles, saved tours and interactive map view.",
          "Payment, confirmation and upcoming trips dashboard.",
        ],
      },
      {
        heading: "User Flow Highlights",
        items: [
          "A smooth search-to-booking journey with minimal friction.",
          "Thumb-friendly actions for one-hand mobile use.",
          "Contextual tips for first-time users.",
          "Language-switch ready for international markets.",
        ],
      },
      {
        heading: "Design Aesthetic",
        items: [
          "Blue and white palette symbolizing trust and exploration.",
          "Soft edges, light shadows and ample white space.",
          "Travel-themed illustrations and high-quality location imagery.",
        ],
      },
    ],
    result:
      "A complete UI/UX journey across 20+ interactive screens, balancing visual engagement with clarity at every step — designed for future dark mode and RTL support.",
    behance: "https://www.behance.net/gallery/228070277/TourEase-Travel-Tour-Booking-App-UIUX-Design",
    images: ProjectImages["tourease"],
  },
  {
    slug: "calllink",
    title: "CallLink – Audio & Video Call App UI/UX Design",
    name: "CallLink App",
    category: "Mobile App",
    summary:
      "CallLink is an audio and video calling app for smooth, reliable and intuitive communication — quick, high-quality one-on-one and group calls in a minimal interface with a purple and white theme.",
    meta: { Role: "UI/UX Designer", Screens: "10+", Theme: "Purple & white" },
    tools: ["Figma", "Adobe Photoshop"],
    tags: ["Video Call App", "Communication App", "Call Interface", "Mobile App Design"],
    sections: [
      {
        heading: "Project Objectives",
        items: [
          "An easy-to-use app for audio and video communication.",
          "Support for instant calls and scheduled meetings.",
          "A clean, distraction-free calling interface.",
          "A lightweight, responsive and scalable UI.",
        ],
      },
      {
        heading: "Target Users",
        items: [
          "Remote workers and teams.",
          "Students and online learners.",
          "Friends and families.",
          "Freelancers scheduling online meetings.",
        ],
      },
      {
        heading: "Key Features",
        items: [
          "Contact list and recent calls.",
          "One-on-one audio call and video call with floating controls.",
          "Group call UI and scheduled calls.",
          "Call history and missed call alerts.",
          "In-call mute, camera toggle, share and chat.",
          "Profile, availability status and call preferences.",
        ],
      },
      {
        heading: "Design Language",
        items: [
          "Soft purple and clean white for a calm, futuristic vibe.",
          "Rounded, friendly sans-serif typography.",
          "Touch-friendly buttons and bold calls-to-action.",
          "Optional dark mode for visual comfort.",
        ],
      },
    ],
    result:
      "A polished calling experience that prioritizes ease of use and real-time action visibility, with a scalable component system for developers and future updates.",
    behance: "https://www.behance.net/gallery/228071569/CallLink-Audio-Video-Call-App-UIUX-Design",
    images: ProjectImages["calllink"],
  },
  {
    slug: "sparkle",
    title: "Sparkle — Live Video & Chat App UI Design",
    name: "Sparkle App",
    category: "Mobile App",
    summary:
      "Sparkle is a real-time live streaming and random connection app where users meet through video calls, audio calls and chat, get instantly matched with people online and send friend requests — in a modern dark theme with a vibrant, playful palette.",
    meta: { Role: "UI/UX Designer", Screens: "15+", Font: "Outfit" },
    tools: ["Figma", "Adobe Photoshop"],
    tags: ["Live Streaming App", "Video Chat App", "Social App", "Dark Theme"],
    colors: ["#BF1080", "#673B80"],
    sections: [
      {
        heading: "Goals",
        items: [
          "A smooth, real-time UI for video, audio and chat.",
          "Trust and engagement through visual design.",
          "Intuitive navigation across 15+ connected screens.",
          "A fun social experience for Gen Z and millennial users.",
        ],
      },
      {
        heading: "UX Strategy",
        items: [
          "Fast connections with minimal friction to boost engagement and retention.",
          "User control over interactions — block, report and friend requests.",
        ],
      },
      {
        heading: "Key Features",
        items: [
          "Home/match screen that auto-connects with online users.",
          "Live video and audio call UI.",
          "Text chat interface.",
          "Profile and friend requests.",
          "Settings, blocked users and privacy controls.",
        ],
      },
      {
        heading: "Challenges",
        items: [
          "Real-time elements that feel responsive and lightweight.",
          "Balancing screen content during video calls.",
          "Staying expressive without overwhelming users in dark mode.",
        ],
      },
    ],
    result:
      "A dynamic, user-centric UI that is scalable for future features like VIP rooms, filters and gamification — designed to bring people closer in a safe, spontaneous way.",
    behance: "https://www.behance.net/gallery/226318105/Sparkle-Live-Video-Chat-App-UI-Design",
    images: ProjectImages["sparkle"],
  },
  {
    slug: "coffee",
    title: "Mobile App UI Design for Coffee Subscription",
    name: "Coffee Subscription App",
    category: "Mobile App",
    summary:
      "A clean and engaging mobile app for coffee lovers to subscribe to and receive their favorite blends, making the subscription process easy and enjoyable.",
    meta: { Role: "UI/UX Designer", Font: "Sora" },
    tools: ["Figma", "Adobe Photoshop"],
    tags: ["Coffee App", "Subscription App", "Interactive Prototype", "Mobile App Design"],
    colors: ["#E27D19", "#FFFFFF"],
    sections: [
      {
        heading: "Color & Typography",
        items: [
          "A warm coffee tone (#E27D19) paired with clean white backgrounds.",
          "Sora font for a modern, readable style.",
        ],
      },
      {
        heading: "Design Process",
        items: [
          "Wireframing of the app structure and key user flows.",
          "Clean, minimal UI design focused on usability.",
          "An interactive prototype simulating navigation.",
          "A complete journey map from browsing to managing subscriptions.",
        ],
      },
      {
        heading: "Highlights",
        items: [
          "Key screens for subscription plans, product details, checkout and profile.",
          "Subscribing in minimal steps.",
          "A consistent visual language that builds brand identity and trust.",
        ],
      },
      {
        heading: "Challenges",
        items: [
          "Balancing aesthetics with functionality.",
          "An intuitive subscription flow with minimal friction.",
        ],
      },
    ],
    result:
      "A friendly, streamlined app experience for coffee enthusiasts looking for a hassle-free subscription service.",
    behance: "https://www.behance.net/gallery/226315455/Mobile-App-UI-Design-for-Coffee-Subscription",
    images: ProjectImages["coffee"],
  },
  {
    slug: "cricket",
    title: "Cricket Live Streaming App UI Design",
    name: "Cricket Live Streaming App",
    category: "Mobile App",
    summary:
      "A mobile app offering cricket fans a seamless live streaming experience — watch live matches, follow score updates, view highlights and interact through polls and chat.",
    meta: { Role: "UI/UX Designer", Theme: "Dark" },
    tools: ["Figma", "Adobe Photoshop"],
    tags: ["Sports App", "Live Streaming", "Cricket App", "Mobile UX"],
    sections: [
      {
        heading: "Problem",
        items: [
          "Most cricket streaming apps have cluttered or complicated interfaces.",
          "The aim was a clean, intuitive design that lets fans enjoy matches without distractions.",
        ],
      },
      {
        heading: "Research",
        items: [
          "Analyzed popular apps like Tamasha, Daraz and ESPN.",
          "Gathered user feedback to identify pain points.",
          "Applied minimalism, bold typography and vibrant colors to reflect cricket's energy.",
        ],
      },
      {
        heading: "UI Design",
        items: [
          "A dark theme for comfortable prolonged viewing.",
          "A large video player with simple, accessible controls.",
          "A prominent live score ticker and match information.",
          "Planned live chat and polls.",
        ],
      },
      {
        heading: "Challenges",
        items: [
          "Balancing real-time updates with smooth playback.",
          "Keeping controls visible without distracting from the video.",
          "Accessibility through strong contrast and readable font sizes.",
        ],
      },
    ],
    result:
      "A sleek, engaging app where fans can easily stream matches and stay updated with scores and interactive content.",
    behance: "https://www.behance.net/gallery/226313743/Cricket-Live-Streaming-App-UI-Design",
    images: ProjectImages["cricket"],
  },
  {
    slug: "baniik",
    title: "Baniik – Modern Website UI/UX Design & Landing Page",
    name: "Baniik Website",
    category: "Website",
    summary:
      "A freelance project to design a clean, modern and conversion-focused website for Baniik — a brand establishing its digital presence with a strong visual identity and seamless user experience.",
    meta: { Client: "Freelance", Role: "UI/UX Designer", Platform: "Figma" },
    tools: ["Figma", "Adobe Photoshop"],
    tags: ["Website Design", "Landing Page", "Modern Web Design", "Freelance"],
    sections: [
      {
        heading: "Project Goals",
        items: [
          "An engaging, user-friendly landing page highlighting Baniik's services and values.",
          "Responsive design across desktop and mobile.",
          "A clear user flow that drives conversions and engagement.",
          "A bilingual-friendly layout ready for LTR/RTL support.",
        ],
      },
      {
        heading: "What I Delivered",
        items: [
          "Full landing page UI/UX in Figma — layout, typography, icons and color system.",
          "A brand-aligned mockup visualizing the final product.",
          "UX decisions based on user behavior for accessibility and clarity.",
          "Strong visual hierarchy and CTA placement.",
        ],
      },
    ],
    result:
      "A project that translates client needs into an intuitive digital experience while keeping design consistent and performant.",
    behance: "https://www.behance.net/gallery/228051373/Baniik-Modern-Website-UIUX-Design-Landing-Page",
    images: ProjectImages["baniik"],
  },
];
