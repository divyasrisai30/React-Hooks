import { useCallback, useEffect, useState } from "react";

export default function EnterKeyPress(){
    const [count, setCount] = useState(0);

    const handleKeyPress = useCallback((event)=>{
        if(event.key==='Enter'){
            setCount(prev => prev+1);
        }
    },[])

    useEffect(()=>{
        window.addEventListener("keydown", handleKeyPress);

        return ()=> window.removeEventListener("keydown", handleKeyPress);
    },[handleKeyPress])
    return(
        <div>
            <h2>Press Enter to increment count :{count}</h2>
        </div>
    )
}