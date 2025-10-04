import { useEffect, useState } from "react";

export default function DataImport(){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const interval = setInterval(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response)=>response.json())
        .then((data)=> setData(data))
        .catch((error)=>setError(error))}, 5000);

        //cleaning the function
        return ()=> clearInterval(interval);
    },[])

    return (
        <div>
            {error && <p>Error fetching the data: {error.message}</p>}
            {data ? JSON.stringify(data, null, 7): <p>Loading...</p>}
        </div>
    );
}