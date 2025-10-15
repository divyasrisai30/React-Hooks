import { useMemo, useState } from "react";

export default function List() {
    const [item, setItem] = useState("");
    const [itemList, setItemList] = useState([
        "apple",
        "banana",
        "cherry",
        "date",
        "grapes"
    ]);

    const filteredItems = useMemo(()=>{
        return itemList.filter((inputItem) => 
            inputItem.toLowerCase().includes(item.toLowerCase()))
    },[itemList, item])

    return(
        <div>
            <h2>List</h2>
            <input
                type="text"
                value={item}
                onChange={(e)=>setItem(e.target.value)}
            />
            <ul>
            {filteredItems.map((item, idx)=>(
                <li key={idx}>{item}</li>
            ))}
            </ul>
        </div>
    )
}