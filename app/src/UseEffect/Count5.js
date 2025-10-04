import { useEffect, useState } from "react";

export default function Count5(){
    const [count, setCount] = useState(0);
    const [msg, setMsg] = useState("");

    useEffect(()=>{
        if(count>5){
            setMsg("Count is greater than 5");
        }else{
            setMsg(""); 
        }
    },[count])
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <p>Message: {msg}</p>
        </div>
    );
}