import { useState } from "react";

export default function ProfileForm(){
    const [profile, setProfile] = useState({name:"", age:""});

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setProfile((prevProfile)=>({
            ...prevProfile,
            [name]: value,
        }))

        console.log(profile);
    }
    return (
        <div>
            <h1>User Profile</h1>
            <form>
                <input input="text" name="name" placeholder="name" value={profile.name} onChange={handleChange}/>
                <input input="text" name="age" placeholder="age" value={profile.age} onChange={handleChange}/>
                <h1>Name: {profile.name}</h1>
                <h1>Age: {profile.age}</h1>
            </form>
        </div>
    );
}