import React from 'react'
import { useTheme } from 'next-themes'
import { Button } from '../ui/button';
import ThemeToggler from '../Helper/ThemeToggler';
import Nav from './Navbar/Nav';

const home = () => {

  return (
    <div className='overflow-hidden'>
       {/* <ThemeToggler></ThemeToggler> */}
        <Nav></Nav>
    </div>
  )
}

export default home