import { useState } from "react";

 const UserSide = (props)=>{
    const initialFormState = {id:null,name:'',username:''}
    const [user,setUser] =  useState(initialFormState);

    const handleInputChange = (event)=>{
       const {name,value} = event.target
   

       setUser({...user,[name]:value})
    }
    return (
    <form onSubmit={
        event => {
            event.preventDefault();
            if(!user.name||!user.username) return;
            props.addUser(user);
            setUser(initialFormState);
            console.log(event) }}>
        <label>Product</label>
        <input type="text" onChange={handleInputChange} name="name" value={user.name} />
        <label>Price</label>
        <input type="text" onChange={handleInputChange} name="username" value={user.username} />
        <button>Add to Card</button>
      </form>
    )
 }

export default UserSide;