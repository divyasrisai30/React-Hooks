import React, {useState, useMemo} from "react";

export default function ExpensiveCalculation(){

    const [count, setCount] = useState(0);
    const [otherState, setOtherstate] = useState(0);

    const expensesCalculation = useMemo(()=>{
        console.log("calculating...");
        return count *2;
    }, [count]);

    
    return(
        <div>
            <h2>Count: {count}</h2>
            <h2>expensesCalculation: {expensesCalculation}</h2>
            <h2>otherState: {otherState}</h2>
            <button onClick={()=>setCount(count+1)}>Increase count</button>
            <button onClick={()=>setOtherstate(otherState+1)}>Increase otherState</button>
        </div>
    )
}