import React, { useState } from 'react'

const SingleInput = () => {

    const [user, setUser] = useState("")
    const [allUser, setallUser] = useState([])
  
    const FormHandler = (e)=>{
            e.preventDefault()
            const newUser = [...allUser];
             newUser.push(user)

              console.log(allUser); 


             setallUser(newUser)

             

        setUser('')
           
            
    }
  return (
    <div>
      <form onSubmit={(e)=>{
        FormHandler(e)
      }}>
        <input type="text"
        placeholder='Enter a name'
        value={user} 
        onChange={(e)=>{
            setUser(e.target.value)
            
        }}
        />
        <button>Submit</button>
      </form>

         {allUser.map((e,idx)=>{
          return <h1 key={idx} >{e}</h1>
         })}

    </div>
  )
}

export default SingleInput
