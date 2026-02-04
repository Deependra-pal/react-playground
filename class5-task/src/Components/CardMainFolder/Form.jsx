import React, { useState } from 'react'

const Form = () => {

     const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        age:""
     })

     const [ submitteduser, setsubmittedUser] = useState(null) ;

    const FormHandling = (e)=>{
       e.preventDefault()
        console.log(user);  
      
        setsubmittedUser(user)
        setUser({
        firstName:"",
        lastName:"",
        age:""
        })
       
    } 

    const handleChange = (e)=>{
         
        const {name,value} = e.target;

     setUser(prev => ({
           ...prev,
           [name]:value
     }));
        
 
    }

  return (
    <div>
     
      <form onSubmit={FormHandling}>
        <input type="text" 
        placeholder='Enter  your firstName'
        name='firstName'
        value={user.firstName}
        onChange={handleChange}
        />

        <input type="text"
        placeholder='Enter your lastName' 
        name='lastName'
        value={user.lastName}
        onChange={handleChange}
        />

        <input type="text"
        placeholder='Enter your age'
        name='age' 
        value={user.age}
        onChange={handleChange}
        />

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form