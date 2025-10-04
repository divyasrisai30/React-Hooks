import { useEffect, useState } from "react";

export default function Counter(){

    const [count, setCount] = useState(0);
    
    useEffect(()=>{
        const timer = setInterval(()=>{
            setCount((count)=> count+1);
        },1000)

        return () => clearInterval(timer);
    },[])

    return (
        <div>
            <h2>Counter: {count}</h2>
        </div>
    );
}