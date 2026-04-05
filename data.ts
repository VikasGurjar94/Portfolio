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
    title: "Developer Portfolio",
    description:
      "Personal portfolio website showcasing projects, technical skills and development journey.",
    image: "",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    techStack: ["Next.js", "React", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/VikasGurjar94",
  },
  {
    title: "MERN Blog Platform",
    description:
      "Full stack blog application where users can create, edit and manage posts with authentication.",
    image: "",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    demoUrl: "#",
    githubUrl: "https://github.com/VikasGurjar94",
  },
  {
    title: "Task Management App",
    description:
      "Productivity application for managing daily tasks with CRUD operations and responsive UI.",
    image: "",
    gradient: "from-orange-500 via-amber-500 to-yellow-400",
    techStack: ["React", "JavaScript", "CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/VikasGurjar94",
  },
  {
    title: "Weather Forecast App",
    description:
      "Weather application that fetches real-time data from public APIs and displays dynamic weather information.",
    image: "",
    gradient: "from-sky-500 via-blue-500 to-violet-500",
    techStack: ["JavaScript", "API", "HTML", "CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/VikasGurjar94",
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
  { label: "Commits", value: "150+" },
  { label: "Projects", value: "15+" },
  { label: "Technologies", value: "12+" },
];
