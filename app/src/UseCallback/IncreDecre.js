import { useCallback, useState } from "react"

export default function IncreDecre(){

    const [count, setCount] = useState(0);
    const handleIncrement = useCallback(()=>{
        
        setCount(prev => prev+1);
        console.log("increment",count);
    },[])//stable function 
    const handleDecrement = useCallback(()=>{
        // console.log("decrement",count);
        setCount(prev => prev-1);
    },[])
    return(
        <div>
            <h2>Count {count}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}