"use client" ;
import React, { use, useEffect, useState } from 'react'

import { useTheme } from 'next-themes'
import { Button } from '../ui/button';
import { Moon, Sun } from 'lucide-react';

const ThemeToggler = () => {
    const [mounted,setMounted ] = useState(false)
    const {theme  , setTheme , systemTheme}= useTheme() ;

    useEffect(()=>{
        const mountCheck = ()=>{
            setMounted(true)
        }
        mountCheck();
    },[])

    const currentTheme = theme === 'system' ? systemTheme : theme ;

  return (
    <div className='overflow-hidden'>

        <Button 
        className='cursor-pointer bg-gray-700 rounded-[100%] h-10 w-10 '
        onClick={()=>{
            (theme==='light') ? (setTheme("dark")) : (setTheme("light"))
        }} >
            {(theme==='light') ? <Moon></Moon> : <Sun className='text-white'/>}
        </Button>
    </div>
  )
}

export default ThemeToggler