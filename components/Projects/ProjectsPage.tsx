"use client";

import { projects } from "@/data";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowLeft, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// ─── Extended projects list including all real projects ────────────────
type Project = {
  title: string;
  description: string;
  image?: string;
  gradient?: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
};

const extraProjects: Project[] = [
  {
    title: "Job Portal App",
    description:
      "Full-stack job portal with Clerk authentication, recruiter dashboard, and real-time application tracking using Supabase.",
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
    techStack: ["React", "Supabase", "Clerk", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/VikasGurjar94",
  },
  {
    title: "ExamNotes AI",
    description:
      "AI-powered notes generation platform with Firebase auth, Razorpay payment integration and dynamic credit system.",
    gradient: "from-lime-500 via-green-500 to-teal-500",
    techStack: ["MERN", "Firebase", "Razorpay", "OpenAI API"],
    demoUrl: "#",
    githubUrl: "https://github.com/VikasGurjar94",
  },
  {
    title: "Voyage AI – Travel Manager",
    description:
      "MERN travel management web app with admin dashboard, tour booking, Redux state management, and MySQL database.",
    gradient: "from-amber-500 via-orange-500 to-red-500",
    techStack: ["MongoDB", "Express", "React", "Node.js", "Redux", "MySQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/VikasGurjar94",
  },
];

const allProjects: Project[] = [...projects, ...extraProjects];

export default function ProjectsPage() {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease", once: true, anchorPlacement: "top-bottom" });
  }, []);

  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,rgba(168,229,253,0.35)_0%,rgba(244,244,254,1)_60%)] dark:bg-slate-950 overflow-hidden">

      {/* ── Hero Banner ── */}
      <section className="relative pt-32 pb-20 text-center px-4">
        <div data-aos="fade-down" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 mb-6">
          <Code2 className="w-4 h-4 text-indigo-600" />
          <span className="text-sm font-medium text-muted-foreground">Portfolio / Projects</span>
        </div>
        <h1 data-aos="fade-up" data-aos-delay="100" className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          My{" "}
          <span className="text-purple-800 dark:text-yellow-400">Projects</span>
        </h1>
        <p data-aos="fade-up" data-aos-delay="200" className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
          A collection of full-stack applications, side projects, and experiments I've built.
        </p>
        <div data-aos="fade-up" data-aos-delay="300">
          <Link href="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Button>
          </Link>
        </div>

        {/* Decorative blobs */}
        <div className="pointer-events-none absolute top-10 left-[-120px] w-[400px] h-[400px] rounded-full bg-purple-300/20 dark:bg-purple-800/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-[-100px] w-[350px] h-[350px] rounded-full bg-indigo-300/20 dark:bg-indigo-800/10 blur-3xl" />
      </section>

      {/* ── Projects Grid ── */}
      <section className="pb-24 w-[90%] xl:w-[80%] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="group relative bg-white dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700/50 hover:-translate-y-2 hover:shadow-xl hover:border-indigo-300 dark:hover:border-indigo-500/40 transition-all duration-300 flex flex-col"
            >
              {/* Gradient Banner */}
              <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.gradient ?? "from-indigo-500 to-purple-600"} shrink-0`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-5xl font-black opacity-20 select-none tracking-widest group-hover:opacity-30 transition-opacity duration-300">
                    {project.title.charAt(0)}
                  </span>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/10 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h2>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full font-medium bg-indigo-600/10 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto">
                  {project.demoUrl && project.demoUrl !== "#" && (
                    <Button asChild size="sm" className="flex-1 bg-indigo-600 hover:bg-indigo-700">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Glow accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.gradient ?? "from-indigo-500 to-purple-600"} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div data-aos="fade-up" className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Want to see more? Check out my GitHub!</p>
          <a
            href="https://github.com/VikasGurjar94"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="gap-2 bg-indigo-600 hover:bg-indigo-700">
              <FaGithub className="w-5 h-5" />
              View All on GitHub
            </Button>
          </a>
        </div>
      </section>
    </main>
  );
}
