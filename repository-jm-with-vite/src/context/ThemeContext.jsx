import { Children, createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("themeState") || "light";
    });

    useEffect(() => {
        localStorage.setItem("themeState", theme);
    }, [theme]);

    const toggleTheme = () =>{
        setTheme(theme === "light" ? "dark" : "light")
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
    )
}