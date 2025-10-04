import { createContext, useContext, useState } from "react"

const AuthContext = createContext();

export default function User(){
    //login and logout => dependency user
    //stosre the data using useState
    //login logout availabale to all => createContext and useContext
    const [user, setUser] = useState();

    const login=(username)=>{
        setUser({name:username});
    }
    const logout = () =>{
        setUser(null);
    }

    return(
    <div>
        <AuthContext.Provider value={{user, login, logout}}>
            <Navbar/>
            <MainComponent/>
        </AuthContext.Provider>

    </div>

    //Navbar and MainComponent
    //Display the Navbar information depending on the login.show logout in Navbar
    // if logged in show user information or login
)}
function Navbar() {
    const {user, login, logout} = useContext(AuthContext);
        return(
            <div>
                <p>{user ? `Welcome ${user.name}`:"Not logged in"}</p>
                {user && <button onClick={logout}>Logout</button>}
            </div>
        )
}
function MainComponent(){
    const {user, login, logout} = useContext(AuthContext);
    return(
        <div>
            {user ?( 
                <p>Hello, {user.name}! enjoy</p>
            ):(
                <button onClick={()=>login("DIVYA")}>Login</button>
            )}
        </div>
    )
}