import React from 'react'
import { useTheme } from 'next-themes'
import { Button } from '../ui/button';
import ThemeToggler from '../Helper/ThemeToggler';

const home = () => {

  return (
    <div className='overflow-hidden'>
       <ThemeToggler></ThemeToggler>
    </div>
  )
}

export default home