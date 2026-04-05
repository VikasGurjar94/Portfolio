"use client"
import { Button } from '@/components/ui/button'
import { Download, FolderOpen } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'

const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Hero = () => {
    return (
        <section id='hero' className="relative  min-h-screen bg-[radial-gradient(circle_476px_at_54.8%_51.5%,rgba(168,229,253,1)_0%,rgba(244,244,254,1)_42.3%,rgba(244,244,254,1)_100%)] flex items-center justify-center overflow-hidden dark:bg-[radial-gradient(circle_farthest-corner_at_50.3%_47.3%,rgba(0,0,0,0)_0.1%,rgba(0,0,0,0)_90%)]">
            <div className="relative z-10 text-center">
                <div data-aos='fade' className="relative mt-20 mb-5 py-5 flex justify-center items-center overflow-hidden rounded-full ">
                    <img
                        src="/personal4.png"
                        alt="Profile"
                        className="w-40 h-40 object-cover rounded-full 
           grayscale-0 scale-100 border-2 border-yellow-400
           md:grayscale md:border-transparent 
           md:hover:grayscale-0 md:hover:ring-4 md:hover:ring-yellow-400/50 
           md:hover:shadow-2xl md:hover:scale-110 md:hover:border-yellow-400 
           
           transition-all duration-500 ease-in-out cursor-pointer"
                    />
                </div>
                <div data-aos='fade-up' className="sm:mb-2">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-600 text-sm text-muted-foreground dark:text-gray-200 mb-8">
                        {/* green dot */}
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        {/* text */}
                        <span>Available for opportunities</span>
                    </span>
                </div>
                {/* {title} */}
                <h1 data-aos='fade-up' data-aos-delay='100' className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 '> Hi, I&apos;m <span className='text-purple-800  dark:text-yellow-400 '>Vikas Gurjar</span></h1>
                <div data-aos='fade-up' data-aos-delay='200' className="text-xl sm:text-2xl md:text-3xl text-black dark:text-white font-semibold mb-4 sm:mb-8 h-12">
                    <TypeAnimation
                        sequence={[
                            "MERN Stack Developer",
                            2000,
                            "Problem Solver",
                            2000,
                            "Open Source Contributor",
                            2000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className='font-mono'
                    />
                </div>
                <p data-aos='fade-up' data-aos-delay='300' className="text-lg text-muted-foreground dark:text-gray-200 max-w-2xl mx-auto mb-10">
                    Crafting exceptional digital experiences with modern technologies.
                    Passionate about building scalable applications and teaching others.
                </p>
                {/* buttons */}
                <div data-aos='fade-up' data-aos-delay='350' className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        size={"lg"}
                        className="w-fit mx-auto sm:mx-0"
                        onClick={() => scrollToSection('projects')}
                    >
                        <FolderOpen className="w-5 h-5 mr-2" />
                        View Projects
                    </Button>
                    <Button size={"lg"} asChild className="w-fit mx-auto sm:mx-0" variant={"outline"}>
                        <a href="/resume.pdf" download="Vikas_Gurjar_Resume.pdf">
                            <Download className="w-5 h-5 mr-2" />
                            Download CV
                        </a>
                    </Button>
                </div>

                {/* Social Links */}
                <div data-aos='fade-up' data-aos-delay='450' className="flex items-center justify-center gap-4 mt-8">
                    <a
                        href="https://www.linkedin.com/in/vikas-gurjar-g9427/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                        className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:shadow-blue-200 dark:hover:shadow-blue-900 hover:-translate-y-1 transition-all duration-300"
                    >
                        <FaLinkedin className="w-5 h-5 text-[#0A66C2] group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">LinkedIn</span>
                    </a>
                    <a
                        href="https://github.com/VikasGurjar94"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                        className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white hover:shadow-gray-200 dark:hover:shadow-gray-700 hover:-translate-y-1 transition-all duration-300"
                    >
                        <FaGithub className="w-5 h-5 text-gray-800 dark:text-white group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">GitHub</span>
                    </a>
                </div>
            
            </div>
        </section>
    )
}

export default Hero