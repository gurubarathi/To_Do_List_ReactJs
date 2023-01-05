import { useEffect, useState } from "react"

const Edit = (props)=>{
   const [user,setUser] = useState(props.currentUser)

   useEffect(()=>{
        setUser(props.currentUser)
   },[props])

   const handleInputChange = (event)=>{
    const {name,value} = event.target

    setUser({...user,[name]:value})
    }

    return (
        <form onSubmit={
            event => {
                event.preventDefault();
                if(!user.name||!user.username) return;
                props.updateUser(user.id,user);
            }
        }>
            <label>Product Name</label>
            <input type="text" onChange={handleInputChange} name="name" value={user.name} />
            <label>Price</label>
            <input type="text" onChange={handleInputChange} name="username" value={user.username} />
            <button>Add to Card</button>
            <button className="button muted-button" onClick={()=>{
                props.setEditing(false)
            }}>Cancel</button>
          </form>
    )
}

export default Edit;