import SectionHeading from "@/components/Helper/SectionHeading";
import { Briefcase, GraduationCap } from "lucide-react";
import React from "react";
import { experiences } from "@/data";

const Experience = () => {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-950">
      <SectionHeading
        title_1="Education & "
        title_2="Journey"
        description="My professional journey and academic background"
      />

      <div className="relative px-6 max-w-4xl mx-auto">
        {/* timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400 to-blue-900 md:-translate-x-px"></div>

        {experiences.map((item, index) => {
          return (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* timeline icon */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center z-10">
                {item.type === "work" ? (
                  <Briefcase className="w-4 h-4 text-blue-500" />
                ) : (
                  <GraduationCap className="w-4 h-4 text-blue-500" />
                )}
              </div>

              {/* content */}
              <div className="ml-16 md:ml-0 md:w-[calc(50%-2rem)]">
                <div className="bg-white dark:bg-gray-900 shadow-md rounded-xl p-6 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-2 text-sm text-blue-500 mb-2">
                    <span className="px-3 py-1 rounded-full bg-blue-600/10 font-medium">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    {item.company}
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, i) => {
                      return (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-md bg-indigo-500 text-white"
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* empty side */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
