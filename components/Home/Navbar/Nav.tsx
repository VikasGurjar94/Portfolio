"use client";

import React, { useEffect, useState } from "react";
import Logo from "@/components/Helper/Logo";
import { NavLinks } from "@/constants";
import Link from "next/link";
import { Download, MenuIcon } from "lucide-react";
import ThemeToggler from "@/components/Helper/ThemeToggler";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* NAV BACKGROUND ON SCROLL */
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      else setNavBg(false);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* DETECT ACTIVE SECTION */
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  /* SMOOTH SCROLL */
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-[12vh] z-50 transition-all duration-300
      ${
        navBg
          ? "bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">

        <Logo />

        {/* NAV LINKS */}
        <div className="hidden lg:flex items-center space-x-6">

          {NavLinks.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <button
                key={item.name}
                onClick={() => handleScroll(sectionId)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300
                ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-md"
                    : "text-black dark:text-white hover:text-indigo-500"
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center space-x-4">

          {/* DOWNLOAD CV */}
          <a
            href="/resume.pdf"
            download="Vikas_Gurjar_Resume.pdf"
            className="relative inline-flex items-center justify-center px-6 sm:px-8 py-3 font-bold text-white bg-indigo-600 rounded-md transition-all duration-300 hover:bg-indigo-700"
          >
            <span className="flex items-center space-x-2 text-sm">
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </span>
          </a>

          <ThemeToggler />

          {/* MOBILE MENU */}
          <MenuIcon
            onClick={openNav}
            className="h-8 w-8 cursor-pointer text-black dark:text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;