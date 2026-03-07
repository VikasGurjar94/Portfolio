"use client"
import { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
 const [showNav, setShowNav] = useState(false);

    const openNavHandler = () => {
        setShowNav(true);
    }
    const closeNavHandler = () => {
        setShowNav(false);
    }

    return (
        <div className='overflow-hidden'>
            <Nav openNav={openNavHandler} />
            <MobileNav showNav={showNav} closeNav={closeNavHandler} />
        </div>
    )
}

export default ResponsiveNav