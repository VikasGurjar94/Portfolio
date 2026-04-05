import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import { FaGithub } from 'react-icons/fa6';

type Props = {
    title: string;
    description: string;
    image?: string;
    gradient?: string;
    techStack: string[];
    demoUrl?: string;
    githubUrl?: string;
}

const ProjectCard = ({ title, description, image, gradient, techStack, demoUrl, githubUrl }: Props) => {
    return (
        <div className="group relative bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl h-full flex flex-col">
            {/* Image / Gradient Banner */}
            <div className="relative h-48 overflow-hidden shrink-0">
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${gradient ?? 'from-indigo-500 to-purple-600'} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                        <span className="text-white text-4xl font-black opacity-30 select-none tracking-widest">
                            {title.charAt(0)}
                        </span>
                    </div>
                )}
                {/* shimmer overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/10 transition-opacity duration-300" />
            </div>

            {/* main content */}
            <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl text-black dark:text-white font-semibold mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
                    {description}
                </p>
                {/* tech stacks */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {techStack.map((tech) => {
                        return (
                            <span
                                key={tech}
                                className="text-xs px-3 py-1 rounded-full bg-indigo-600/10 text-indigo-700 dark:text-indigo-400 font-medium border border-indigo-200 dark:border-indigo-800"
                            >
                                {tech}
                            </span>
                        );
                    })}
                </div>
                <div className="flex gap-3 mt-auto">
                    {demoUrl && demoUrl !== "#" && (
                        <Button asChild size={"sm"} className="flex-1 bg-indigo-600 hover:bg-indigo-700">
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
                                GitHub
                            </a>
                        </Button>
                    )}
                </div>
            </div>

            {/* bottom accent line */}
            <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${gradient ?? 'from-indigo-500 to-purple-600'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        </div>
    )
}

export default ProjectCard