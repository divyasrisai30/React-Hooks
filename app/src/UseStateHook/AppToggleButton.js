import {useState} from 'react'

export default function AppToggleButton(){
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    }
    return (
        <div style={{
            backgroundColor: isDarkMode? 'black':"white",
            color: isDarkMode?"white":"black"}}>  
        <h2>{isDarkMode? "Dark Mode":"Light Mode"}</h2>
        <button onClick={toggleTheme}>Toggle</button>
        </div>
    )
}