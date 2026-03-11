import React from "react";
import SectionHeading from "@/components/Helper/SectionHeading";
import { codingProfiles, githubStats } from "@/data";

const CodingProfiles = () => {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6">

        <SectionHeading
          title_1="Coding "
          title_2="Profiles"
          description="My competitive programming and development activity"
        />

        {/* Coding Profiles */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {codingProfiles.map((profile, index) => {
            const Icon = profile.icon;

            return (
              <a
                key={index}
                href={profile.link}
                target="_blank"
                className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl shadow hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="text-2xl text-blue-500" />
                  <h3 className="font-semibold text-lg">{profile.name}</h3>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
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
          <SectionHeading
            title_1="GitHub "
            title_2="Activity"
            description="Overview of my development work"
          />

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {githubStats.map((stat, index) => {
              return (
                <div
                  key={index}
                  className="bg-gray-100 dark:bg-gray-900 rounded-xl p-6 text-center shadow"
                >
                  <h3 className="text-2xl font-bold text-blue-500">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
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
