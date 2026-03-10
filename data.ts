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
} from "lucide-react";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

/* ---------------- STATS ---------------- */

export const stats = [
  { label: "Projects Built", value: "15+" },
  { label: "DSA Problems Solved", value: "150+" },
  { label: "Technologies Learned", value: "8+" },
  { label: "Currently Learning", value: "Full Stack" },
];

/* ---------------- HIGHLIGHTS ---------------- */

export const highlights = [
  { icon: MapPin, text: "Based in India" },
  { icon: Briefcase, text: "Open for internships" },
  { icon: GraduationCap, text: "IIIT Vadodara BTech CSE " },
  { icon: Coffee, text: "Passionate about coding & problem solving" },
];

/* ---------------- TESTIMONIALS (OPTIONAL) ---------------- */

export const userReviewData = [
  {
    id: 1,
    name: "Peer Developer",
    profession: "Student Developer",
    userImage: "/images/u1.jpg",
    review:
      "Great problem-solving skills and always eager to learn new technologies.",
  },
  {
    id: 2,
    name: "Project Collaborator",
    profession: "Frontend Developer",
    userImage: "/images/u2.jpg",
    review:
      "Very dedicated developer with strong fundamentals in JavaScript and React.",
  },
];

/* ---------------- EDUCATION / EXPERIENCE ---------------- */

export const contactInfo = [
  {
    type: "education",
    title: "BTech in Computer Science",
    company: "IIIT Vadodara - ICD Diu Campus",
    period: "2024 - 2028",
    description:
      "Focused on Data Structures, Algorithms, Operating Systems, DBMS, and Computer Networks.",
    technologies: [
      "DSA",
      "DBMS",
      "OOP",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  {
    type: "learning",
    title: "Full Stack Web Development",
    company: "Self Learning",
    period: "2024 - Present",
    description:
      "Learning modern full stack development with React, Next.js and Node.js.",
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Express",
    ],
  },
];

/* ---------------- SOCIAL LINKS ---------------- */

export const footerSocialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/YOUR_GITHUB",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/YOUR_LINKEDIN",
    label: "LinkedIn",
  },
  {
    icon: FaTwitter,
    href: "https://twitter.com",
    label: "Twitter",
  },
  {
    icon: Mail,
    href: "mailto:YOUR_EMAIL",
    label: "Email",
  },
];

/* ---------------- PROJECTS ---------------- */

export const projects = [
  {
    title: "Portfolio Website",
    description:
      "Personal developer portfolio showcasing projects, skills and experience.",
    image: "/images/p1.jpg",
    techStack: ["Next.js", "Tailwind CSS", "React"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Todo App",
    description:
      "Task management application with CRUD functionality and local storage.",
    image: "/images/p2.jpg",
    techStack: ["React", "JavaScript", "CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Weather App",
    description:
      "Weather forecasting application using public APIs with responsive UI.",
    image: "/images/p3.jpg",
    techStack: ["JavaScript", "API", "HTML", "CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Full Stack Blog App",
    description:
      "Blog platform where users can create, edit and delete posts.",
    image: "/images/p4.jpg",
    techStack: ["Node.js", "Express", "MongoDB", "React"],
    demoUrl: "#",
    githubUrl: "#",
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
      { name: "REST API", icon: Globe },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: GitBranch },
      { name: "Linux", icon: Terminal },
      { name: "DSA", icon: Code2 },
    ],
  },
];