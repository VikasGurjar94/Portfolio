import { Button } from '@/components/ui/button';
import { ExternalLink, GithubIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import { FaGithub } from 'react-icons/fa6';
type Props = {
    title: string;
    description: string;
    image: string;
    techStack: string[];
    demoUrl?: string;
    githubUrl?: string;
}
const ProjectCard = ({ title, description, image, techStack, demoUrl, githubUrl }: Props) => {
    return (
        <div className="group relative bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            {/* Image container */}
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            {/* main content */}
            <div className="p-6">
                <h3 className="text-xl text-black dark:text-white font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors ">
                    {title}
                </h3>
                {/* Rest of the content would go here */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {description}
                </p>
                {/* tech stacks */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {techStack.map((tech) => {
                        return (
                            <span
                                key={tech}
                                className="text-xs px-3 py-1 rounded-full bg-indigo-600 text-white font-medium"
                            >
                                {tech}
                            </span>
                        );
                    })}
                </div>
                <div className="flex gap-3">
                    {demoUrl && (
                        <Button asChild size={"sm"} className="flex-1">
                            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Live Demo
                            </a>
                        </Button>
                    )}
                    {githubUrl && (
                        <Button asChild variant={"outline"} size={"sm"} className="flex-1">
                            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                                <FaGithub className="w-4 h-4 mr-2" />
                                Github
                            </a>
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard