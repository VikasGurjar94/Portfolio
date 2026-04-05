
"use client";
import { useEffect } from "react";
import About from "./About/About"
import ClientReview from "./ClientReview/ClientReview"
import CodingProfiles from "./CodingProfiles/CodingProfiles"
import Contact from "./Contact/Contact"
import Experience from "./Experience/Experience"
import Hero from "./Hero/Hero"
import Project from "./Project/Project"
import Skills from "./Skills/Skills"
import AOS from 'aos';
import 'aos/dist/aos.css';

const home = () => {
    useEffect(() => {
  const initAOS = async () => {
    await import("aos");
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  };
  initAOS();
}, []);

    return (
        <section  className='overflow-hidden'>
           <Hero />
           <Project/>
           <About/>
           <Skills/>
           <Experience/>
           <CodingProfiles/>
           <Contact/>
        </section>
    )
}

export default home