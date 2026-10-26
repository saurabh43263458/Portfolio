export const portfolioData = {
  personal: {
    name: "Saurabh Mishra",
    shortName: "SM",
    role: "FULL-STACK DEVELOPER",
    headline: {
      regular1: "I craft digital",
      highlight: "experiences",
      regular2: "that move."
    },
    intro: "A final-year computer science student and React developer building thoughtful, high-performance products from concept to production.",
    email: "sm427878@gmail.com",
    phone: "+91 7985165277",
    whatsappUrl: "https://wa.me/917985165277?text=Hi%20Saurabh%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!",
    resumeUrl: "/assets/Saurabh_Mishra_Resume.pdf",
    web3FormsAccessKey: "d6a3bdfd-7ce9-4dfa-a7e2-66607f3bb12e",
    availability: "Available for work",
    location: "NOIDA, INDIA · OPEN TO OPPORTUNITIES",
    portrait: "/assets/saurabh-mishra.png",
    socialLinks: [
      { name: "GITHUB", url: "https://github.com/saurabh43263458" },
      { name: "LINKEDIN", url: "https://www.linkedin.com/in/saurabh-m-global" },
      { name: "WHATSAPP", url: "https://wa.me/917985165277?text=Hi%20Saurabh%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!" }
    ]
  },
  navLinks: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
    { label: "Resume", href: "/assets/Saurabh_Mishra_Resume.pdf", isExternal: true }
  ],
  skillsMarquee: [
    "REACT.JS",
    "NEXT.JS",
    "TYPESCRIPT",
    "NODE.JS",
    "EXPRESS.JS",
    "MONGODB",
    "TAILWIND CSS",
    "TANSTACK QUERY",
    "ZUSTAND",
    "GSAP",
    "REST APIS"
  ],
  projects: [
    {
      id: "fleet",
      num: "(01)",
      title: "Fleet",
      desc: "A complete ride-booking experience connecting riders and drivers in real time.",
      tags: "MERN · GOOGLE MAPS · GSAP",
      link: "https://fleet-frontend-three.vercel.app/",
      ariaLabel: "Open Fleet live project",
      image: "/assets/fleet-mockup.jpg",
      type: "image"
    },
    {
      id: "kitsatoz",
      num: "(02)",
      title: "KITSaTOz",
      desc: "Premium 3D-printed mechanical kits, artisan wooden DIY projects, and custom rapid prototyping platform.",
      tags: "REACT · TAILWIND CSS · VITE · E-COMMERCE",
      link: "https://www.kitsatoz.com/",
      ariaLabel: "Open KITSaTOz live project",
      image: "/assets/kitsatoz-mockup.jpg",
      type: "image"
    }
  ],
  stats: [
    { value: "6", suffix: "+", label: "React & TypeScript\nprojects built" },
    { value: "100", suffix: "+", label: "Students mentored\nin web development" },
    { value: "9", suffix: "+", label: "Dashboard modules\ndelivered" }
  ],
  expertise: [
    {
      id: "01",
      title: "Frontend\nengineering",
      skills: "React.js · Next.js · TypeScript\nHTML · CSS · Tailwind CSS"
    },
    {
      id: "02",
      title: "Full-stack\ndevelopment",
      skills: "Node.js · Express.js · MongoDB\nMySQL · REST APIs"
    },
    {
      id: "03",
      title: "Performance &\nproduct craft",
      skills: "TanStack Query · Zustand · Redux\nLazy loading · Code splitting"
    }
  ],
  experiences: [
    {
      date: "MAY 2026 — PRESENT",
      role: "React.js Intern",
      company: "Talentrise Technokrate Pvt. Limited",
      description: "Building enterprise dashboards with React and TypeScript, using TanStack Query, Redux and Zustand for resilient state management. Shipping faster interfaces with lazy loading and code splitting.",
      link: "https://drive.google.com/file/d/162YLWBxePKCG-Zq5u8103riuq0Xtsb-W/view"
    },
    {
      date: "2024 — 2025",
      role: "Web Development Mentor",
      company: "Google Developer Groups on Campus",
      description: "Mentored 100+ students through hands-on JavaScript, React and MongoDB sessions, and guided 5+ frontend projects toward scalable, maintainable architectures."
    }
  ]
};
