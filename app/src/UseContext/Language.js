import { createContext, useContext, useState } from "react";


const LanguageContext = createContext();
export default function Language(){
    const [language, setLanguage] = useState("en");

    const changeLanguage = (lang) =>{
        setLanguage(lang);
    }
    return(
        <div>
            <LanguageContext.Provider value={{language, changeLanguage}}>
                <Header/>
                <Content/>
            </LanguageContext.Provider>
        </div>
    )
}

function Header(){
    const {language, changeLanguage} = useContext(LanguageContext);
    return(
        <div>
            <header>
                <h1>{language==="en"?"Hello":"Hola"}</h1>
                <button onClick={()=> changeLanguage('en')}>English</button>
                <button onClick={()=> changeLanguage('es')}>Espanol</button>
            </header>
        </div>
    )
}
function Content(){
    const {language} = useContext(LanguageContext);
    return(
        <div>
            <p>
                {language==='en'?
                "Welcome to the site":"!hfkjdhfjhkjdfhjkd"}
            </p>
        </div>
    )
}