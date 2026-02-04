 import React, { useState } from 'react'
 
 const SingleInput = () => {

    const [user, setUser] = useState("Hello")

    const  FormHandling = (e)=>{
         e.preventDefault()
           console.log(user);      
    setUser("")
    
    }

    const Change = (e)=>{
           setUser(e.target.value);
           
    }

   return (
     <div>
       <form onSubmit={FormHandling}>
        <input type="text"
        value={user}
         
        placeholder='Enter your name' 
     onChange={Change}
        />
        <button>Submit</button>
       </form>
    
      <h1>{user}</h1>
          
     </div>
   )
 }
 
 export default SingleInput
 
