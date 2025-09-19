import { useState } from "react";

export default function Visibility(){
    const [isVisible, setVisibility] = useState();

    const toggleVisibility = () =>{
        setVisibility((prev)=> !prev);
    }
    return(
        <div>
            <button onClick={toggleVisibility}>
                {isVisible? "Hide":"Show"} text
            </button>
            {isVisible && <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore corporis provident quisquam, laboriosam, atque cumque error est saepe consequuntur expedita quibusdam, minus id laborum autem nemo doloremque repellendus veniam? Vitae?</p>}
        </div>
    );
}