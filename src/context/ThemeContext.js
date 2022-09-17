import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {

    const [theme, setTheme] = useState(false)


    useEffect(() => {
       document.body.style.backgroundColor = theme ? '282828' : ''
        
        return () => {
            document.body.style.backgroundColor = '#202020'
        }
    }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }} >
        {children}
    </ThemeContext.Provider>  

)}

