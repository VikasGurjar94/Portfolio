import React from 'react'
import { CodeSquareIcon } from 'lucide-react'

const Logo = () => {
  return (
    <div 
    className='flex items-center space-x-2 '
    >
        <div className='bg-blue-800 dark:bg-blue-400 w-10 h-10 rounded-lg flex items-center justify-center flex-col'>
            <CodeSquareIcon color='white' />
        </div>
        <h1 className='sm:text-xl hidden sm:block md:text-2xl text-blue-800 dark:text-blue-400 font-bold ' >
            {"<Vikas/>"}
        </h1>

    </div>
  )
}

export default Logo