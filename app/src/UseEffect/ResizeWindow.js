import { useEffect, useState } from "react";

export default function ResizeWindiw(){
    const [windiwSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
});

    const handleResize = () =>{
        console.log("Handle resize");
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
    })
    }

    useEffect(()=>{
        window.addEventListener('resize', handleResize);

        return ()=> window.removeEventListener('resize' , handleResize);
},[])
    return (
        <div>
            <h2>Window Size</h2>
            <p>Width: {windiwSize.width}</p>
            <p>Height: {windiwSize.height}</p>
        </div>
    );
}