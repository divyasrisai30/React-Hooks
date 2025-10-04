import { createContext, useContext, useState } from "react"

const userContext = createContext();

export default function Intro(){
    const [user, setUser] = useState({
        name: "John Doe"
    });

    return(
        <div>
            <h2>{user.name}</h2>
            <userContext.Provider value={user}>
                <Dashboard></Dashboard>
            </userContext.Provider>
        </div>
    )
}
// Dashboard -> Sidebar -> Profile

function Dashboard(){
    return(
        <div>
            <h3>Dashboard </h3>
            <Sidebar />
        </div>
    )
}

function Sidebar(){
    return(
        <div>
            <h4>Sidebar </h4>
            <Profile />
        </div>
    )
}
function Profile(){
    const user = useContext(userContext);
    return(
        <div>
            <h5>Profile</h5>
            <h5>{user.name}</h5>
        </div>
    )
}

