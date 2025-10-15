import { useReducer } from "react"

const formReducer = (state, action) =>{
    // console.log(state)
    switch(action.type){
        case "update":
            /*input: dynamic values */
            return {...state, [action.field]: action.value}

        case "reset":
            return action.initialState;

        default:
            throw new Error("Uknown Error");
    }
}

export default function Form(){

    const initialState = {name:"", email:"" ,password: ""};
    const [state, dispatch] = useReducer(formReducer, initialState);

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Form Sumitted", state)

    }
    return(
        <form onSubmit={handleSubmit}>
            <label>
                name :  
                <input
                type="text"
                value={state.name}
                onChange={(e)=> dispatch({type:"update", field: 'name', value: e.target.value})}
                />
            </label>
            <label>
                email :  
                <input
                type="email"
                value={state.email}
                onChange={(e)=> dispatch({type:"update", field: 'email', value: e.target.value})}
                />
            </label>
            <label>
                password :  
                <input
                type="password"
                value={state.password}
                onChange={(e)=> dispatch({type:"update", field: 'password', value: e.target.value})}
                />
            </label>  
            <button type="submit">Submit</button>    
            <button onClick={()=>dispatch({type: "reset", initialState})}>Reset</button> 
             </form>
    )
}