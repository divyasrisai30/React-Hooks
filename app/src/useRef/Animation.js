import { useRef } from "react"

export default function Animation(){
    const divRef = useRef();

    const handleButton = () =>{
        const div = divRef.current;

        console.log(div);
        div.style.translation= "transform 0.5s ease-in";
        div.style.transform = "translateX(200px)"
    }

    return(
        <div>
            <div
                ref={divRef}
                style={{
                    height: "100px",
                    width: "100px",
                    backgroundColor: "blue"
                }}>
            </div>
            <button onClick={handleButton}>Move button</button>
        </div>
    )
}