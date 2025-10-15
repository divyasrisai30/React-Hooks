import { useReducer, useState } from "react"

const todolistReducer = (state, action)=>{
    console.log(state);
    console.log(action.type)
    console.log(action)
    switch(action.type){
        case "add":
            return [...state, 
                {id: Date.now(), text: action.text, completed: false},]
        case "toggle":
            return state.map((item)=>
                item.id === action.id ? {...item, completed: !item.completed}: item
            );
        case "delete":
            return state.filter((item)=> item.id!==action.id);
        default:
            throw new Error("Unknown error");  
    }
}

export default function ToDo_List(){
    /*requirements: to-dolist
    Todo task will be provided using input
    the list is displayed

    using useState();
        store list
        store each item

    */

    const [todos, dispacher] = useReducer(todolistReducer, []);
    const [item, setItem] =  useState("");




    return(
        <div>
            <h1>ToDoList</h1>
           <input type="text" value={item} onChange={(e)=> setItem(e.target.value)}/>
           <button onClick={()=> dispacher({type: "add", text: item})}>Add to list</button>

            <ul>
                {todos.map((item)=>(
                    <li key={item.id} style={{textDecoration: item.completed ? "line-through":"none"}}>{item.text}
                    <button onClick={()=> dispacher({type: "toggle", id: item.id})}>Toggle</button>
                    <button onClick={()=> dispacher({type: "delete", id: item.id})}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}