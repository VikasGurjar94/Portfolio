import SectionHeading from "@/components/Helper/SectionHeading";
import { highlights, stats } from "@/data";
import React from "react";

const About = function () {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* 1. Animate the Heading */}
        <div data-aos="fade-down">
          <SectionHeading
            title_1="About"
            title_2="Me"
            description="Get to know the developer behind the code"
          />
        </div>

        <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
          
          {/* 2. Left Side: Slide in from left */}
          <div className="md:col-span-2" data-aos="fade-right" data-aos-delay="200">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">
              A passionate developer
              <br />
              <span className="text-blue-600 dark:text-blue-400">
                building modern web applications
              </span>
            </h3>
            <div className="mt-6 h-1 w-20 bg-blue-600 rounded"></div>
          </div>

          {/* 3. Right Side: Slide in from right */}
          <div className="md:col-span-3 space-y-6" data-aos="fade-left" data-aos-delay="400">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed italic border-l-4 border-gray-300 dark:border-gray-700 pl-4">
              "I am a B.Tech Computer Science student who enjoys building
              scalable and user-friendly web applications using modern
              technologies."
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I specialize in the <span className="font-semibold text-gray-900 dark:text-white">MERN stack </span>
              and also build applications using <span className="font-semibold text-gray-900 dark:text-white">Next.js</span>.
              I enjoy working across the full stack — from creating clean and
              responsive user interfaces to designing efficient backend APIs
              and databases.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Currently, I am focused on building real-world projects,
              strengthening my knowledge of <span className="font-semibold text-gray-900 dark:text-white">Data Structures & Algorithms</span>,
              and preparing for software engineering internships.
            </p>

            {/* Highlights: Simple fade in */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 text-sm"
                  data-aos="zoom-in"
                  data-aos-delay={500 + (index * 100)} // Staggered delay
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-blue-500" />
                  </div>
                  <span className="text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Stats: Zoom in effect */}
        <div className="mt-16 w-[80%] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-white dark:bg-gray-800 shadow rounded-xl p-6 text-center"
                data-aos="flip-up"
                data-aos-delay={index * 150} // Staggered delay for stats
              >
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;