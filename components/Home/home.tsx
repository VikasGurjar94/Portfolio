import About from "./About/About"
import ClientReview from "./ClientReview/ClientReview"
import CodingProfiles from "./CodingProfiles/CodingProfiles"
import Experience from "./Experience/Experience"
import Hero from "./Hero/Hero"
import Project from "./Project/Project"
import Skills from "./Skills/Skills"

const home = () => {

    return (
        <div className='overflow-hidden'>
           <Hero ></Hero>
           <About/>
           <Skills/>
           <Project/>
           <Experience/>
           {/* <ClientReview/> */}
           <CodingProfiles/>
        </div>
    )
}

export default home