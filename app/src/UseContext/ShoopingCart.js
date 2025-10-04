import { createContext, useContext, useState } from "react";

const CartContext = new createContext();

export default function ShoopingCart(){
    const [cart, setCart] = useState([]);

    const addToCart = (item)=>{
        setCart((prevList)=>[...prevList, item ])
        console.log(`added item ${item}`)
    }

    const removeItem = (item) =>{
        setCart((prevList)=> prevList.filter((i)=> i!==item))
    }
    return(
        <div>
            <CartContext.Provider value={{cart, addToCart, removeItem}}>
                <ProductList/>
                <ShoopingList/>
            </CartContext.Provider>
        </div>
    )
}

function ProductList(){
    const {addToCart} = useContext(CartContext);

    return(
        <div>
            <h2>Available Products</h2>
            <button onClick={()=>addToCart("Product 1")}>Add Product 1</button>
            <button onClick={()=>addToCart("Product 2")}>Add Product 2</button>
            <button onClick={()=>addToCart("Product 3")}>Add Product 3</button>
        </div>
    )
}

function ShoopingList(){
    const {cart, removeItem} = useContext(CartContext);
    return(
        <div>
            <h2>Shooping List</h2>
            <ul>
                {cart.map((item, idx)=>(
                    <li key={idx}>{item} <button onClick={()=>removeItem(item)}> remove</button></li>
                ))}
            </ul>
        </div>
    )
}