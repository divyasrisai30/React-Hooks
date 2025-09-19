import {useState} from 'react';

export default function ToDoList(){
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const addTodo = () =>{
        setTodos([...todos, newTodo]);
        setNewTodo("")
    }
    return (
        <div>
            <h1>To Do List</h1>
            <input
                type='text'
                value={newTodo}
                onChange={(e)=>setNewTodo(e.target.value)}
            />
            <button onClick={addTodo}>Add To List</button>
            <ul>
                {todos.map((todo, idx)=>(
                    <li key={idx}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}