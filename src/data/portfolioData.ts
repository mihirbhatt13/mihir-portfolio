export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  description: string;
  bullets: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  type: string;
  status: string;
  technologies: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Mihir Bhatt",
    title: "Software Developer",
    primaryRole: "Software Developer @vidyarthiMitra.org",
    mainPositioning: "Building scalable web applications & database-driven software.",
    secondaryPositioning: "Ex-Data Analytics Intern @ InAmigos Foundation",
    availabilityText: "Open to relevant software opportunities",
    location: "Mumbai, Maharashtra, India",
    phone: "+91 90797 81144",
    email: "mihirbhatt1394@gmail.com",
    github: "https://github.com/mihirbhatt13",
    linkedin: "https://www.linkedin.com/in/mihir-bhatt-02543b353",
  },

  aboutText: [
    "Software Developer currently working at Vidhyarthi Mitra with hands-on experience in web application development, backend development, database-driven applications, and data-focused solutions.",
    "Previously worked as a Data Analytics Intern at InAmigos Foundation, gaining practical experience in data analysis, data collection, research, and structured data handling.",
    "I enjoy solving real-world problems through technology and building scalable, maintainable and user-friendly applications."
  ],

  aboutHighlights: [
    { label: "Current Role", value: "Software Developer" },
    { label: "Previous Experience", value: "Data Analytics Intern" },
    { label: "Focus Areas", value: "Web & Backend Development" },
    { label: "Location", value: "Mumbai, India" }
  ],

  skillCategories: [
    {
      category: "LANGUAGES",
      skills: ["Python", "SQL", "JavaScript", "TypeScript"]
    },
    {
      category: "FRONTEND",
      skills: ["HTML", "CSS", "React.js", "Next.js", "Tailwind CSS"]
    },
    {
      category: "BACKEND & APIs",
      skills: ["Next.js API Routes", "REST APIs", "Authentication", "Role-Based Access Control"]
    },
    {
      category: "DATABASES & ORM",
      skills: ["PostgreSQL", "MySQL", "Oracle SQL", "Prisma ORM"]
    },
    {
      category: "TOOLS & PLATFORMS",
      skills: ["Git", "GitHub", "VS Code", "Vercel"]
    },
    {
      category: "DATA & ANALYTICS",
      skills: ["Pandas", "Matplotlib", "Data Analysis"]
    }
  ],

  projects: [
    {
      id: "school-erp",
      title: "Enterprise School ERP Management System",
      type: "PERSONAL PROJECT",
      status: "LIVE",
      technologies: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Prisma ORM",
        "PostgreSQL",
        "Vercel"
      ],
      githubUrl: "https://github.com/mihirbhatt13/school-erp",
      liveDemoUrl: "https://school-erp-gilt.vercel.app/",
      description: "An enterprise-level School ERP Management System designed to centralize and streamline academic and administrative operations through a structured web application.",
      features: [
        "Role-based access for administrators, teachers, students and accounts",
        "Student management",
        "Teacher management",
        "Class management",
        "Attendance management",
        "Examination and marks management",
        "Fee management",
        "Notices",
        "CRUD operations",
        "REST/API functionality",
        "PostgreSQL database integration",
        "Prisma ORM",
        "Responsive role-specific dashboards",
        "Authentication and RBAC",
        "Vercel deployment"
      ],
      isFeatured: true
    },
    {
      id: "newspaper-ocr",
      title: "Newspaper OCR Processing & Education News Extraction",
      type: "AI / NLP / EDTECH / AUTOMATION",
      status: "LIVE",
      technologies: [
        "Python",
        "Streamlit",
        "OCR",
        "NLP / Text Processing",
        "AI Content Classification",
        "Document Processing"
      ],
      liveDemoUrl: "https://newspaper-ocr-processor-azrv.vercel.app/",
      description: "Built and deployed an AI-powered newspaper processing application that uses OCR and intelligent text filtering to automatically identify, classify, summarize, and structure positive-impact education news from newspaper documents.",
      features: [
        "Newspaper document/image OCR processing",
        "Automatic text extraction",
        "Education-news detection and filtering",
        "Strict education-sector classification",
        "Positive-impact news filtering",
        "Automatic headline extraction",
        "3–5 sentence news summarization",
        "Key people extraction",
        "Organization/institution extraction",
        "Region identification",
        "Education category classification",
        "Structured Daily Education News Brief generation",
        "Live Streamlit deployment"
      ],
      isFeatured: false
    }
  ] as ProjectItem[],

  experiences: [
    {
      id: "exp-1",
      role: "Software Developer",
      company: "Vidhyarthi Mitra",
      location: "Mumbai, India",
      period: "August 2026 – Present",
      isCurrent: true,
      description: "Working as a Software Developer at Vidhyarthi Mitra, contributing to web application development, software projects, and technical tasks.",
      bullets: [
        "Contributing to web application development and software projects.",
        "Working on application features and technical implementation.",
        "Contributing to backend functionality and database-related development.",
        "Working toward scalable and user-friendly software solutions."
      ]
    },
    {
      id: "exp-2",
      role: "Data Analyst Intern",
      company: "InAmigos Foundation",
      location: "Mumbai, India",
      period: "July 2026 – August 2026",
      isCurrent: false,
      description: "Worked on data collection, analysis, and structured data management.",
      bullets: [
        "Worked on data collection, analysis, and structured data management.",
        "Used Excel and Google Sheets for organizing and analyzing information.",
        "Conducted internet research and supported data-driven tasks.",
        "Prepared structured information and reports."
      ]
    },
    {
      id: "exp-3",
      role: "Python Development Intern",
      company: "CODEXINTERN",
      location: "Remote",
      period: "December 2024",
      isCurrent: false,
      description: "Worked on Python development and programming fundamentals.",
      bullets: [
        "Worked on Python development and programming fundamentals.",
        "Practiced programming logic, debugging, data structures, and problem solving.",
        "Gained exposure to software development workflows and SDLC concepts."
      ]
    }
  ] as ExperienceItem[],

  certifications: [
    {
      id: "cert-1",
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte (Forage)",
      date: "July 2026"
    },
    {
      id: "cert-2",
      title: "GenAI Powered Data Analytics Job Simulation",
      issuer: "Tata (Forage)",
      date: "July 2026"
    },
    {
      id: "cert-3",
      title: "AI for Business Professionals",
      issuer: "HP LIFE",
      date: "July 2026"
    },
    {
      id: "cert-4",
      title: "Python for Data Science",
      issuer: "NPTEL, IIT Madras",
      date: "2025"
    }
  ] as CertificationItem[]
};
