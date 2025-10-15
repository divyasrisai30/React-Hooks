import { useMemo, useState } from "react"

export default function Aggregate(){
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

    const total = useMemo(()=>{
        return numbers.reduce((cummilator, number)=>cummilator+number, 0);
    },[numbers])
    return(
        <div>
            <h2>{`total: ${total}`}</h2>
            <button onClick={()=> setNumbers([...numbers, Math.floor(Math.random()*10)])}>Add a random number</button>
        </div>
    )
}