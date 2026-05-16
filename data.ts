import {
  Briefcase,
  Coffee,
  Code2,
  Database,
  GitBranch,
  Globe,
  GraduationCap,
  Layout,
  Mail,
  MapPin,
  Palette,
  Server,
  Terminal,
  Github,
  Linkedin,
  PhoneCallIcon,
  Phone,
} from "lucide-react";

import { FaCediSign, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { LiaLinkedin } from "react-icons/lia";

/* ---------------- STATS ---------------- */

export const stats = [
  { label: "Projects Built", value: "15+" },
  { label: "DSA Problems Solved", value: "150+" },
  { label: "Technologies Learned", value: "12+" },
  { label: "Current Focus", value: "Full Stack" },
];

/* ---------------- HIGHLIGHTS ---------------- */

export const highlights = [
  { icon: MapPin, text: "Based in India" },
  { icon: Briefcase, text: "Open for Software Engineering Internships" },
  { icon: GraduationCap, text: "BTech CSE • IIIT Vadodara (Diu Campus)" },
  { icon: Coffee, text: "Passionate about building scalable web apps" },
];

/* ---------------- TESTIMONIALS (OPTIONAL) ---------------- */

/* ---------------- EDUCATION / EXPERIENCE ---------------- */

/* ---------------- SOCIAL LINKS ---------------- */

export const footerSocialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/VikasGurjar94",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/vikas-gurjar-g9427/",
    label: "LinkedIn",
  },
  {
    icon: FaTwitter,
    href: "https://x.com/VikasGurja46809",
    label: "X",
  },
  {
    icon: Mail,
    href: "mailto:vikasgurjar9638@gmail.com",
    label: "Email",
  },
];

export const contactInfo = [
  {
    label: "Email",
    value: "vikasgurjar9638@gmail.com",
    href: "mailto:vikasgurjar9638@gmail.com",
    icon: Mail,
  },
  {
    label: "Location",
    value: "India",
    href: "",
    icon: MapPin,
  },
  {
    label: "Phone",
    value: "+91 9638953766",
    href: "",
    icon: Phone,
  },
 
];
/* ---------------- PROJECTS ---------------- */

export const projects = [
  {
    title: "AI Exam Notes Generator",
    description:
      "AI-powered web app for generating high-quality notes, documentation, and diagrams with Google auth, Razorpay credits, and instant PDF downloads.",
    image: "/aiNotes.png",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    techStack: ["React.js", "Node.js" , "Razorpay" , "Gemini API"],
    demoUrl: "https://ainotesgenerator-frontend.onrender.com",
    githubUrl: "https://github.com/VikasGurjar94/AINotesGenerator",
  },
  {
    title: "NextStep Careers",
    description:
      "Modern full-stack job portal connecting recruiters and candidates, built with React, Supabase.",
    image: "/nextStepCareers.png",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    techStack: ["Supabase", "Clerk auth", "React", "Shadcn UI"],
    demoUrl: "https://next-step-careers.netlify.app",
    githubUrl: "https://github.com/VikasGurjar94/NextStep-Careers",
  },
  {
    title: "Voyage AI",
    description:
      "A full-stack travel planning web app combining tour booking with AI-powered itinerary generation, booking management, and expense tracking.",
    image: "/voyageAI.png",
    gradient: "from-blue-500 via-cyan-500 to-teal-400",
    techStack: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    demoUrl: "https://voyage-ai-mern.vercel.app",
    githubUrl: "https://github.com/VikasGurjar94/VoyageAI-mern",
  },

  {
    title: "Space Site",
    description: "A static responsive landing page built with React and Vite for learning responsive design.",
    image: "/spaceSite.png",
    gradient: "from-purple-500 via-indigo-500 to-blue-500",
    techStack: ["React", "Vite", "CSS", "Responsive Design"],
    demoUrl: "https://vikas-space.netlify.app",
    githubUrl: "https://github.com/VikasGurjar94/Space-site",
  },
  {
    title: "Cache Coherence Simulator",
    description: "Interactive simulator for cache coherence protocols (MESI), featuring step-by-step visualizations and cache state tracking.",
    image: "/cs.png",
    gradient: "from-blue-600 via-cyan-500 to-teal-400",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://cache-coherence-simulator-pi.vercel.app",
    githubUrl: "https://github.com/VikasGurjar94/cache-explorer-40",
  },
  {
    title: "K72 Agency Clone",
    description: "A visually engaging, animated agency website clone demonstrating advanced GSAP animations and creative scroll interactions.",
    image: "/k7.png",
    gradient: "from-gray-700 via-gray-900 to-black",
    techStack: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    demoUrl: "https://k72agency-clone.netlify.app",
    githubUrl: "https://github.com/VikasGurjar94/K72-clone",
  },
  {
    title: "Portfolio V1",
    description: "My personal developer portfolio website to showcase my skills, projects, and professional journey.",
    image: "/portfolio.png",
    gradient: "from-orange-500 via-amber-500 to-yellow-400",
    techStack: ["React", "JavaScript", "CSS"],
    demoUrl: "https://vikasgurjar.vercel.app",
    githubUrl: "https://github.com/VikasGurjar94/Portfolio",
  },
  {
    title: "Cynthia Ugwu Clone",
    description: "A highly interactive, award-winning portfolio clone featuring custom cursor effects, smooth scrolling, and GSAP animations.",
    image: "/cyn.png",
    gradient: "from-zinc-600 via-neutral-700 to-stone-800",
    techStack: ["HTML5", "CSS3", "JavaScript", "GSAP", "Locomotive Scroll"],
    demoUrl: "https://vikasgurjar94.github.io/CynthiaUgwuClone",
    githubUrl: "https://github.com/VikasGurjar94/CynthiaUgwuClone",
  },
];

/* ---------------- SKILLS ---------------- */

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: Code2 },
      { name: "CSS", icon: Palette },
      { name: "JavaScript", icon: Terminal },
      { name: "React", icon: Code2 },
      { name: "Next.js", icon: Globe },
      { name: "Tailwind CSS", icon: Layout },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Server },
      { name: "MongoDB", icon: Database },
      { name: "MySQL", icon: Database },
      { name: "REST APIs", icon: Globe },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: GitBranch },
      { name: "Linux", icon: Terminal },
      { name: "Data Structures", icon: Code2 },
      { name: "Problem Solving", icon: Code2 },
    ],
  },
];

// {experiences}

export const experiences = [
  {
    type: "education",
    title: "BTech in Computer Science",
    company: "IIIT Vadodara – ICD Diu Campus",
    period: "2024 – 2028",
    description:
      "Currently pursuing Computer Science with focus on Data Structures & Algorithms, Operating Systems, DBMS and Computer Networks.",
    technologies: [
      "DSA",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "OOP"
    ],
  },

  {
    type: "learning",
    title: "Full Stack Web Development",
    company: "Self Learning",
    period: "2024 – Present",
    description:
      "Learning and building modern web applications using MERN stack and Next.js with focus on scalable backend APIs and responsive frontend interfaces.",
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL"
    ],
  },

  {
    type: "work",
    title: "Full Stack Projects Development",
    company: "Personal Projects",
    period: "2025 – Present",
    description:
      "Developed multiple web applications using MERN stack and Next.js including full stack CRUD applications and responsive frontend projects.",
    technologies: [
      "MERN Stack",
      "Next.js",
      "Tailwind CSS",
      "REST APIs",
      "Git",
      "GitHub"
    ],
  },
];

// {extra data for coding profiles}
import { SiLeetcode, SiCodeforces, SiGeeksforgeeks, SiGithub } from "react-icons/si";

export const codingProfiles = [
  {
    name: "LeetCode",
    username: "vikas-gurjar",
    description: "Solved 150+ Data Structures & Algorithms problems.",
    icon: SiLeetcode,
    link: "https://leetcode.com/u/Vikas_Gurjar94/",
  },
  {
    name: "Codeforces",
    username: "vikas_gurjar",
    description: "Practicing competitive programming and improving problem solving.",
    icon: SiCodeforces,
    link: "https://codeforces.com/profile/Vikas_Gurjar94",
  },
  {
    name: "GeeksforGeeks",
    username: "vikas-gurjar",
    description: "Practicing DSA concepts and coding interview problems.",
    icon: SiGeeksforgeeks,
    link: "https://www.geeksforgeeks.org/profile/user_28sqyay7uok?tab=activity",
  },
  {
    name: "GitHub",
    username: "VikasGurjar",
    description: "Open source projects, full stack applications and experiments.",
    icon: SiGithub,
    link: "https://github.com/VikasGurjar94",
  },
];

export const githubStats = [
  { label: "Repositories", value: "20+" },
  { label: "Commits", value: "200+" },
  { label: "Projects", value: "15+" },
  { label: "Technologies", value: "20+" },
];
