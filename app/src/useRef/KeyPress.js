import { useEffect, useRef, useState } from "react"

export default function KeyPress(){
    const [count, setCount] = useState(0);
    const countRef = useRef();

    useEffect(()=>{
        countRef.current = count;
    })
    useEffect(()=>{
        const handleClick = ()=>{
            console.log(`Count is ${count}`);
        }
        window.addEventListener('keypress', handleClick);

        return ()=>{
            window.removeEventListener('keypress', handleClick);
        }
    })
    return(
        <div>
            <h2>Count {count}</h2>
            <button onClick={()=> setCount(count => count+1)}>increment</button>
        </div>
    )
}