import React, { useState } from 'react'

const SimpleLoginForm = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

  const  Formhandling = (e)=>{
    e.preventDefault()
    console.log(email);
    console.log(password);

    setEmail("")
    setPassword("")
    
    
  }

  const EmailHandling = (e)=>{
          setEmail(e.target.value)  
  }

  const Passwordhandling = (e)=>{
    setPassword(e.target.value) 
  }

  
  return (
    <div>
      <form onSubmit={Formhandling}>

        <input type="email" 
        required
          placeholder='Enter your email'
          value={email}
          onChange={EmailHandling}

        />

        <input type="password"
        required
         placeholder='Enter your password'
         value={password}
         onChange={Passwordhandling}
        />


        <button>Submit</button>
      </form>
    </div>
  )
}

export default SimpleLoginForm
