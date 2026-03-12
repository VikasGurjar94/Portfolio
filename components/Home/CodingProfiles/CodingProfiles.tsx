import React from "react";
import SectionHeading from "@/components/Helper/SectionHeading";
import { codingProfiles, githubStats } from "@/data";

const CodingProfiles = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* 1. Animate Section Heading */}
        <div data-aos="fade-down">
          <SectionHeading
            title_1="Coding "
            title_2="Profiles"
            description="My competitive programming and development activity"
          />
        </div>

        {/* Coding Profiles: Staggered zoom-in for a high-impact feel */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {codingProfiles.map((profile, index) => {
            const Icon = profile.icon;

            return (
              <a
                key={index}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl shadow hover:-translate-y-2 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="text-2xl text-blue-500 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{profile.name}</h3>
                </div>

                <p className="text-sm text-blue-600 dark:text-blue-400 font-mono mb-2">
                  @{profile.username}
                </p>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {profile.description}
                </p>
              </a>
            );
          })}
        </div>

        {/* GitHub Activity */}
        <div className="mt-20">
          <div data-aos="fade-down">
            <SectionHeading
              title_1="GitHub "
              title_2="Activity"
              description="Overview of my development work"
            />
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {githubStats.map((stat, index) => {
              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  className="bg-gray-100 dark:bg-gray-900 rounded-xl p-6 text-center shadow border border-transparent dark:hover:border-blue-500/30 transition-all"
                >
                  <h3 className="text-2xl font-bold text-blue-500">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 font-medium">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;