/**
 * Portfolio Data — Single source of truth
 * ========================================
 * Modify ONLY this file to update every section of the portfolio.
 * Navigation items are generated automatically from the sections that
 * contain data — if a section array is empty the link won't appear.
 */

/* ------------------------------------------------------------------ */
/*  Type definitions                                                   */
/* ------------------------------------------------------------------ */

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  title: string;
  subtitle: string;
  emails: string[];
  phone?: string;
  location: string;
  avatar: string;
  availabilityBadge: string;
  about: string[];
}

export interface Stat {
  label: string;
  value: string;
}

export interface SkillCategory {
  icon: string; // Lucide icon key
  title: string;
  skills: string[];
}

export interface SoftSkill {
  icon: string;
  name: string;
  description: string;
}

export interface Education {
  period: string;
  degree: string;
  field: string;
  institution: string;
  institutionUrl?: string;
  description: string;
  latest?: boolean;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  description: string;
  current?: boolean;
}

export interface Publication {
  year: string;
  title: string;
  journal: string;
  authors: string;
  doi?: string;
  url?: string;
  role: 'first-author' | 'co-author';
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  url?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  type?: 'Course' | 'Certificate' | 'Specialization';
  skills?: string[];
  url?: string;
}

export interface SocialLink {
  icon: string;
  label: string;
  url: string;
}

export interface AcademicLink {
  icon: string;
  label: string;
  url: string;
}

export interface NavItem {
  icon: string;
  label: string;
  href: string;
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

export const personalInfo: PersonalInfo = {
  firstName: 'Hamza',
  lastName: 'Tahri Jouti',
  title: 'Software Engineering Student',
  subtitle:
    'Passionate about building modern web applications and solving complex problems with clean, efficient code.',
  emails: ['h.tahrijouti@esisa.ac.ma'],
  phone: undefined,
  location: 'Fès, Morocco',
  avatar: 'https://avatars.githubusercontent.com/u/263998779?v=4',
  availabilityBadge: 'Available for Internship',
  about: [
    "I'm a Software Engineering student at ESISA (École Supérieure d'Ingénierie en Sciences Appliquées) in Fès, Morocco. I'm driven by a deep curiosity for technology and a desire to create impactful digital solutions.",
    'My studies have given me a strong foundation in computer science, algorithms, data structures, and software architecture. I enjoy working across the full stack — from crafting polished user interfaces to designing robust backend systems.',
    "I thrive in collaborative environments and believe in continuous learning. When I'm not coding, I'm exploring new frameworks, contributing to open-source projects, or sharpening my problem-solving skills through coding challenges.",
    "I'm currently seeking internship opportunities where I can apply my skills, learn from experienced professionals, and contribute to meaningful projects.",
  ],
};

export const stats: Stat[] = [
  { label: 'Projects Built', value: '5+' },
  { label: 'Technologies', value: '10+' },
  { label: 'Years of Study', value: '3+' },
  { label: 'Certificates', value: '2+' },
];

export const technicalSkills: SkillCategory[] = [
  {
    icon: 'code',
    title: 'Frontend Development',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Astro'],
  },
  {
    icon: 'server',
    title: 'Backend Development',
    skills: ['Node.js', 'Express', 'REST APIs', 'SQL', 'MongoDB'],
  },
  {
    icon: 'wrench',
    title: 'Tools & DevOps',
    skills: ['Git', 'GitHub', 'VS Code', 'npm', 'Vercel', 'Linux'],
  },
  {
    icon: 'cpu',
    title: 'Computer Science',
    skills: ['Data Structures', 'Algorithms', 'OOP', 'Design Patterns', 'UML'],
  },
];

export const softSkills: SoftSkill[] = [
  {
    icon: 'users',
    name: 'Team Collaboration',
    description: 'Effective communication and teamwork in agile environments.',
  },
  {
    icon: 'lightbulb',
    name: 'Problem Solving',
    description: 'Analytical thinking and creative approaches to complex challenges.',
  },
  {
    icon: 'clock',
    name: 'Time Management',
    description: 'Organized workflow with ability to meet tight deadlines.',
  },
  {
    icon: 'trending-up',
    name: 'Continuous Learning',
    description: 'Eager to explore new technologies and grow as a developer.',
  },
];

export const education: Education[] = [
  {
    period: '2022 — Present',
    degree: "Engineering Degree in Computer Science",
    field: 'Software Engineering',
    institution: 'ESISA — École Supérieure d\'Ingénierie en Sciences Appliquées',
    institutionUrl: 'https://www.esisa.ac.ma',
    description:
      'Comprehensive curriculum covering software engineering, algorithms, databases, web development, networks, and project management. Hands-on projects using modern technologies.',
    latest: true,
  },
  {
    period: '2020 — 2022',
    degree: 'Baccalauréat Sciences Mathématiques',
    field: 'Mathematics & Physics',
    institution: 'Lycée, Fès',
    description:
      'Strong foundation in mathematics, physics, and analytical thinking. Prepared for competitive engineering school entrance.',
  },
];

/** Leave empty if no professional/internship experience */
export const experiences: Experience[] = [];

/** Leave empty if no publications */
export const publications: Publication[] = [];

/** Leave empty if no certifications */
export const certifications: Certification[] = [];

/** Academic profile links (Google Scholar, ORCID, etc.) — leave empty if none */
export const academicLinks: AcademicLink[] = [];

export const projects: Project[] = [
  {
    title: 'Student Management System',
    description:
      'A full-stack web application for managing student records, built with TypeScript. Features include CRUD operations, search & filter, and a responsive dashboard interface.',
    tags: ['TypeScript', 'Web App', 'Full-Stack'],
    url: 'https://github.com/htahrijouti-hash/student-managment',
  },
  {
    title: 'Portfolio Website',
    description:
      'A modern, responsive portfolio built with Astro and deployed on Vercel. Features dark/light theme, glassmorphism design, AI chatbot assistant, and ATS-compatible resume export.',
    tags: ['Astro', 'TypeScript', 'Vercel', 'CSS'],
    url: 'https://github.com/htahrijouti-hash/PORTFOLIO',
  },
  {
    title: 'Algorithm Visualizer',
    description:
      'Interactive web tool to visualize sorting and pathfinding algorithms step by step. Helps understand algorithm complexity and behavior in real time.',
    tags: ['JavaScript', 'Algorithms', 'Canvas', 'Education'],
  },
  {
    title: 'Task Manager CLI',
    description:
      'A command-line task management tool built with Node.js. Supports creating, editing, completing, and organizing tasks with persistent JSON storage.',
    tags: ['Node.js', 'CLI', 'JSON', 'Productivity'],
  },
  {
    title: 'Weather Dashboard',
    description:
      'A responsive weather application that fetches real-time data from a weather API. Displays current conditions, forecasts, and location-based search.',
    tags: ['JavaScript', 'REST API', 'CSS', 'Responsive'],
  },
];

export const socialLinks: SocialLink[] = [
  {
    icon: 'github',
    label: 'GitHub',
    url: 'https://github.com/htahrijouti-hash',
  },
  {
    icon: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/hamza-tahri-jouti-0870313b6/',
  },
  {
    icon: 'mail',
    label: 'Email',
    url: 'mailto:h.tahrijouti@esisa.ac.ma',
  },
];

/* ------------------------------------------------------------------ */
/*  Dynamic navigation builder                                         */
/* ------------------------------------------------------------------ */

function buildNavItems(): NavItem[] {
  const items: NavItem[] = [
    { icon: 'home', label: 'Home', href: '#hero' },
    { icon: 'user', label: 'About', href: '#about' },
    { icon: 'layers', label: 'Skills', href: '#skills' },
    { icon: 'graduation-cap', label: 'Education', href: '#education' },
  ];

  if (experiences.length > 0) {
    items.push({ icon: 'briefcase', label: 'Experience', href: '#experience' });
  }

  if (publications.length > 0) {
    items.push({ icon: 'book-open', label: 'Publications', href: '#publications' });
  }

  if (certifications.length > 0) {
    items.push({ icon: 'award', label: 'Certifications', href: '#certifications' });
  }

  items.push({ icon: 'folder-open', label: 'Projects', href: '#projects' });
  items.push({ icon: 'send', label: 'Contact', href: '#contact' });

  return items;
}

export const navItems: NavItem[] = buildNavItems();

/** Publication metrics (only meaningful when publications exist) */
export const publicationMetrics = publications.length > 0
  ? {
      total: publications.length,
      firstAuthor: publications.filter((p) => p.role === 'first-author').length,
      coAuthor: publications.filter((p) => p.role === 'co-author').length,
      citations: 0,
    }
  : null;
