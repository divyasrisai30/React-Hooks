import { useRef, useState } from "react"

export default function Countdown(){

    const [count, setCount] = useState(0);
    const timeId = useRef(null);
    const handleStart = () =>{
        //setInterval return an ID
        timeId.current = setInterval(()=>{
            setCount((prev)=> prev+1)
        }, 1000)
        console.log("Start",timeId.current);
    }
    const handleReset= () =>{
        // clearInterval(timeId.current);
        clearInterval(timeId.current);
        setCount(0);
        console.log("Reset",timeId.current);
        // timeId.current = null;

    }
     const handleStop = () =>{
        //setInterval return an ID
        clearInterval(timeId.current);
        timeId.current = null;
        console.log("Stop",timeId.current);
    }
    return(
        <div>
            <h2>Count {count}</h2>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}