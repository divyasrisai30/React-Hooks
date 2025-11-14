import { useCallback, useMemo, useState } from "react"

export default function Multiplication(){
    const [count, setCount] = useState(0);
    const [factor, setFactor] = useState(0);

    const calculateProduct = useMemo(()=>{
        return count * factor
    },[count, factor])

    return(
        <div>
            <h2>Count {count}</h2>
            <h2>Factor {factor}</h2>
            <h2>Product {calculateProduct}</h2>

            <button onClick={()=> setCount(count+1)}>Increment count</button>
            <button onClick={()=> setFactor(factor+1)}>Increment factor</button>
        </div>
    )
}