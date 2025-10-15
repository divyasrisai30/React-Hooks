import { useRef, useState } from "react"

export default function Debounce(){
    const [value, setValue] = useState();
    const timeoutRef = useRef("");

    const handleChange = (e)=>{

       const inputValue = e.target.value;

        if(timeoutRef.current){
            clearTimeout(timeoutRef);
        }
        timeoutRef.current = 
            setTimeout(() =>{
                setValue(inputValue);
            }, 500)

    }
    return(<div>
        <input onChange={handleChange}/>
        <h3>Debouncing value: {value}</h3>
    </div>)
}