import React from 'react'
import Logo from '@/components/Helper/Logo'
import { NavLinks } from '@/constants'
import Link from 'next/link'
import { Download, MenuIcon } from 'lucide-react'
import ThemeToggler from '@/components/Helper/ThemeToggler'

const Nav = () => {
    return (
        <div className='fixed top-0 left-0 w-full h-[12vh] z-50 transition-all duration-200'>

            <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>

                <Logo />

                <div className='hidden lg:flex items-center space-x-20'>
                    {NavLinks.map((item) => {
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className='text-black dark:text-white hover:text-yellow-500 dark:hover:text-yellow-200 font-semibold   transition-all duration-200'
                            >
                                {item.name}
                            </Link>
                        )
                    })}
                </div>
                <div className="flex items-center space-x-4">
                    <a
                        href="#_"
                        className="box-border relative z-20 inline-flex items-center justify-center w-auto px-6 sm:px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
                    >
                        <span className="relative z-20 flex items-center space-x-2 text-sm">
                            <Download className="w-4 h-4" />
                            <span>Download CV</span>
                        </span>
                    </a>
                    <ThemeToggler/>
                    <MenuIcon className='h-8 w-8 cursor-pointer text-black dark:text-white lg:hidden ' />
                </div>

            </div>

        </div>
    )
}

export default Nav