import React, { useState } from 'react'

const MultipleInput = () => {

    const [userName, setuserName] = useState({firstName:"",lastName:""})


const FormHandler = (e)=>{
    e.preventDefault()
   console.log(userName);    
}

const handleChange = (e)=>{
  console.log(e.target.value);
  
}
 

 
  

  return (
    <div>
      
      <form onSubmit={FormHandler}>
            <input type="text" 
            placeholder='Enter your first name'
            name='firstName'
            value={userName.firstName}
           onChange={handleChange}
           />

            <input type="text" 
            placeholder='Enter your last name'
            name='lastName'
            value={userName.lastName}
              // onChange={handleChange}
            />

            <button>Submit</button>

      </form>

    </div>
  )
}

export default MultipleInput
