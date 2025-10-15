import { useReducer } from "react"

const cartReducer = (state, action) =>{

    switch(action.type){
        case "add":
            /*
            input - id , quantity along with state

            input received is item with all details plus id, quantity
            */
            const element = state.find((item)=>(item.id === action.item.id ));

            if(element){
                console.log("Element present")
                return state.map((item)=> (
                    item.id === action.item.id ? {...item, quantity: item.quantity+action.item.quantity} : item
                ))
            }else{
                return [...state, action.item]
            }
            

        case "update":
            /*
            input:  quantity, id
             */
            return state.map((item)=>(
                item.id === action.id ? {...item, quantity : action.quantity} : item
            ))

        case "remove":
            return state.filter((item)=>(
                item.id !== action.id
            ))

        case "clear":
           return [];

        default:
            throw new Error("Unknown Error");
    }

}

export default function ShoopingCart(){

    const AvailableItems = [
        {
            id: 1,
            name: 'Apple',
            price: 1.5
        },
        {
            id: 2,
            name: 'Banana',
            price: 2.5
        },
        {
            id: 3,
            name: 'Grapes',
            price: 0.5
        },
        {
            id: 4,
            name: 'Orange',
            price: 3.5
        }
    ]

    const [cart, dispatch] = useReducer(cartReducer, [])
    return(
        <div>

            <h1>Cart</h1>
            <h1>Available Items</h1>
            <ul>
                {AvailableItems.map((item, idx)=>(
                    <li key={idx}>
                        {item.name} {item.price.toFixed(2) }
                        <button onClick={()=> dispatch({type: "add", item:{...item, quantity: 1}})}>Add to cart</button>
                    </li>
                ))}
            </ul>

            <h1>Items in the cart</h1>
            <ul>
                { cart.length>0 ? 
                cart.map((item, idx)=>(
                    <li key={idx}>
                        {item.name} - {item.quantity}
                        <button onClick={()=> dispatch({type: "update", id:item.id ,quantity: item.quantity+1})}>+</button>
                        <button onClick={()=> dispatch({type: "update", id:item.id, quantity: Math.max(item.quantity-1, 1)})}>-</button>
                         <button onClick={()=> dispatch({type: "remove", id: item.id})}>remove</button>
                         </li>
                       
                )) :
                <h2>Cart is empty</h2>
                }
            </ul>
        </div>
    )
}