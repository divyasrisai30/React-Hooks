import { useReducer } from "react"

function accountReducer(state, action){

    switch(action.type){
        case "deposite":
            return {...state, balance: state.balance+action.amount}

        case "withdraw":
            return {...state, balance: state.balance-action.amount}

        case "reset":
            return {balance: 0}

        default:
            throw new Error("Unknown Error");

    }

}

export default function BankAccount(){
    const [state, dispatch] = useReducer(accountReducer, {balance: 0});

    function handleDeposite(){
        dispatch({
            type: "deposite",
            amount: 100
        })
    }
    function handleWithdraw(){
        dispatch({
            type: "withdraw",
            amount: 50
        })
    }
    function handleReset(){
        dispatch({
            type: "reset",
            amount: 100
        })
    }
    return(
        <div>
            <h2>${state.balance}</h2>
            <button onClick={handleDeposite}>Deposit</button>
            <button onClick={handleWithdraw}>Withdraw</button>
            <button onClick={handleReset}>Reset</button>

        </div>
    )
}