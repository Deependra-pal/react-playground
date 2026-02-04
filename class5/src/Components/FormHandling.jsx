   import React, { useState } from 'react'
  
  const FormHandling = () => {
      const [title, setTitle] = useState('')
  const [allusers, setalluser] = useState([])

  const formHandler = (e)=>{
     e.preventDefault()
      const newAllUsers = [...allusers]
       newAllUsers.push(title)
        
       console.log(allusers);

       setalluser(newAllUsers)
       
     setTitle('')
      
  }
   return(
     <div>
       <form onSubmit={(e)=>{
        formHandler(e)
       }}>
        <input type="text"
        placeholder='Enter your name'
        required
        value={title}
         onChange={(e)=>{
           setTitle(e.target.value)
 
         }}

         />
         <button>Submit</button>
       </form>

       {allusers.map((e)=>{
            return <h1>{e}</h1>
       })}
       
     </div>
   )
 }
  
  export default FormHandling
  