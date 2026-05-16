"use client";

import { projects } from "@/data";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowLeft, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectCard from "../Home/Project/ProjectCard";



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
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="h-full"
            >
              <ProjectCard {...project} />
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
