import { createContext, useContext, useState } from "react"

const ThemeContext = createContext();
const LoginContext = createContext();

export default function ThemeLogin(){

    const [theme, setTheme] = useState('light');
    const [login, setLogin] = useState(null);
    return(
        <div>
            <ThemeContext.Provider value={{theme, setTheme}}>
                <LoginContext value={{login, setLogin}}>
                    <Main/>
                </LoginContext>
            </ThemeContext.Provider>
        </div>
    )
}

function Main(){
    const {theme} = useContext(ThemeContext);
    const {login} = useContext(LoginContext);
    return(
        <div style={{
            backgroundColor: theme=='light'? 'white': 'black',
            color: theme=='light'? 'black': 'white'
        }}>
            <h1>{login? `Hello, ${login.name}`: `Welcome`}</h1>
            <ThemeToggle/>
            <LoginButton/>
        </div>
    )
}

function ThemeToggle(){
    const {theme, setTheme} = useContext(ThemeContext);
    return(
        <button onClick={()=> setTheme(theme==='light'?'dark':'light')}>Toggle Theme</button>
    )
}

function LoginButton(){
    const {login, setLogin} = useContext(LoginContext);
    return login ?
            (<button onClick={()=> setLogin(null)}>Logout</button>):
        (<button onClick={()=>setLogin({name: "John"})}>Login</button>)

}