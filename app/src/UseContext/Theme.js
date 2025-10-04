import { createContext, useContext, useState } from "react"

const ThemeContext = createContext();

export default function Theme(){
    const [theme, setTheme] = useState("light");

    const toggleTheme = () =>{
        setTheme(prevTheme => prevTheme==="light"? "dark":"light");
    }

    return(
        <div>
            <ThemeContext.Provider value={{theme, toggleTheme}}>
                <Toolbar></Toolbar>
            </ThemeContext.Provider>
        </div>
    )
}

// Theme -> Toolbar -> ToggleTheme -> 
function Toolbar(){
    return(
        <div>
            <ToggleTheme></ToggleTheme>
        </div>
    )
}
function ToggleTheme(){
    const {theme, toggleTheme} = useContext(ThemeContext);
    return(
        <div>
            <h2>Theme {theme}</h2>
            <button onClick={toggleTheme}>change Theme</button>
        </div>
    )
}