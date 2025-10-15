import { useEffect, useRef, useState } from "react"

export default function TrackingPreviousValue(){
    const [count, setCount] = useState(0);
    const prevValue = useRef(-3);

    useEffect(()=>{
        prevValue.current = count;
        console.log(prevValue.current);
    });
    return(
        <div>
            <h2>Count: {count}</h2>
            <h2>Previous Value: {prevValue.current}</h2>
            <button onClick={()=> setCount(prev => prev+1)}>increment</button>
        </div>
    )
}