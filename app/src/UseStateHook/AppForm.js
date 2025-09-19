import { useState } from "react";
export default function AppForm(){
    const [name, setName]  =  useState();
    const [email, setEmail] = useState();

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(`${name} and ${email}`);
    }

    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}