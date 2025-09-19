import { useState } from "react";

export default function IncreDecre(){
    const [value, setValue] = useState(0);

    const increment = ()=>{setValue((prevState)=> prevState+1)};
    const decrement = ()=>setValue((prevState)=> prevState-1);
    return (
        <div>
            <h1>Value: {value}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    );
}