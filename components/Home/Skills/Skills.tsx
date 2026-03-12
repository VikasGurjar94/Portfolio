import SectionHeading from '@/components/Helper/SectionHeading';
import { skillCategories } from '@/data';
import React from 'react'
import SkillCard from './SkillCard';

const Skills = () => {
    return (
        <section id='skills' className="py-16 bg-gray-100 dark:bg-slate-950 overflow-hidden">
            {/* 1. Animate the Heading */}
            <div data-aos="fade-down">
                <SectionHeading
                    title_1="Technical"
                    title_2="Skills"
                    description="Technologies I've been working with recently"
                />
            </div>

            <div className="space-y-12 w-[80%] mx-auto">
                {skillCategories.map((category, categoryIndex) => {
                    return (
                        <div key={category.title} data-aos="fade-up" data-aos-delay={categoryIndex * 100}>
                            {/* Category Title with a subtle fade-right */}
                            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                                {category.title}
                            </h3>

                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:grid-cols-3">
                                {category.skills.map((skill, index) => {
                                    return (
                                        <div 
                                            key={index}
                                            data-aos="zoom-in"
                                            // Staggered delay: base delay for category + individual delay for each card
                                            data-aos-delay={(categoryIndex * 100) + (index * 50)}
                                        >
                                            <SkillCard name={skill.name} icon={skill.icon} />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default Skills