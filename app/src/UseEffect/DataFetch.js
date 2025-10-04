import { useEffect, useState } from "react";

export default function DataFetch(){

    const [data, setData]  = useState();

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos/")
        .then(responce => responce.json())
        .then(data => setData(data))
        .catch((error)=> console.log(error));
    },[])
    return(
        <div>
            {data? <pre>{JSON.stringify(data, null, 1)}</pre>: <p>Loding...</p>}
        </div>
    );
}