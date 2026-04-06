import React from 'react'
import ProjectCard from './ProjectCard';
import { projects } from '@/data';
import SectionHeading from '@/components/Helper/SectionHeading';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';


const Project = () => {
    return (
        <section id='projects' className="py-16 bg-gray-100 dark:bg-slate-950 overflow-hidden">
            {/* 1. Animate the Heading */}
            <div data-aos="fade-down">
                <SectionHeading
                    title_1="Featured"
                    title_2="Projects"
                    description="A selection of my recent work and side projects"
                />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto">
                {projects.slice(0, 3).map((project, index) => {
                    return (
                        <div 
                            key={index}
                            data-aos="fade-up"
                            // Staggered delay: Each card appears 100ms after the previous one
                            data-aos-delay={index * 100}
                            // Ensuring cards start invisible
                            className="h-full"
                        >
                            <ProjectCard {...project} />
                        </div>
                    );
                })}
            </div>

            <div className="mt-12 text-center" data-aos="fade-up">
                <Link href="/projects">
                    <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                        View All Projects
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </section>
    )
}

export default Project