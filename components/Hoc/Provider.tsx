import { ThemeProvider } from 'next-themes'
import React, { ReactNode } from 'react'

const Provider = ({children} : {children : ReactNode}) => {
  return (
    <div>
        <ThemeProvider attribute="class" enableSystem defaultTheme='system' >
            {children}
        </ThemeProvider>
    </div>
  )
}

export default Provider