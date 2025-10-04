import { useEffect, useState } from "react";

export default function LocalStorage(){
    const [name, setName] = useState(()=>{
        return localStorage.getItem("name") || ""
    });

    useEffect(()=>{
        localStorage.setItem("name", name);
    },[name]);
    return(
        <div>
            <h2>Name</h2>
            <input
            type="text"
            value={name}
            // name=""
            onChange={(e)=> setName(e.target.value)}
            />
            <h3>Name: {name}</h3>
        </div>
        
    );
}