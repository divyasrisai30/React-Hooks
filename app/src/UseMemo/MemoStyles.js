import { useMemo, useState } from "react"

export default function MemoStyles(){
    const [isHighlited, setIsHighlighted] = useState();

    const styles = useMemo(()=>{
        return{
            backgroundColor: isHighlited? "yellow":"white",
            color: isHighlited?"black":"gray",
            padding: "10px",
            boarder: "1px solid black",
        }

    } ,[isHighlited])
    return(
        <div style={styles}>
            <button onClick={()=> setIsHighlighted((prev) =>!prev)}>Toggle button</button>
        </div>
    )
}