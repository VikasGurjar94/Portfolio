import React from 'react'
import ProjectCard from './ProjectCard';
import { projects } from '@/data';
import SectionHeading from '@/components/Helper/SectionHeading';

const Project = () => {
    return (
        <div className="py-16 bg-gray-100 dark:bg-black">
            <SectionHeading
                title_1="Featured"
                title_2="Projects"
                description="A selection of my recent work and side projects"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto">
                {projects.map((project, index) => {
                    return (
                        <div key={index}>
                            <ProjectCard {...project} />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Project