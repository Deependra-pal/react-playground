import React, { useState } from 'react'
import Card from './Card'

const Form = () => {

    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [role, setRole] = useState("")
    const [discription, setDiscription] = useState("")
     
     
    const localData =  JSON.parse(localStorage.getItem("all-User")) || []  
    
     
     
    const [alluser, setallUser] = useState(localData); 
     
    const formHandling = (e)=>{
        e.preventDefault()

        const olduser  = [...alluser]
        olduser.push({image,name,role,discription})
        setallUser(olduser) 

        localStorage.setItem("all-User",JSON.stringify(olduser))



        setDiscription("")
        setImage("")
        setName("")
        setRole("")
    }

   const deleteItem = (idx)=>{
           const copyUser = [...alluser] 
           copyUser.splice(idx,1)
  
           setallUser(copyUser)
           localStorage.setItem("all-User",JSON.stringify(copyUser))

   }

    const imageHandler = (e)=>{
        setImage(e.target.value)
    }

     const nameHandler = (e)=>{
        setName(e.target.value)
    }

     const roleHandler = (e)=>{
        setRole(e.target.value)
    }

     const discriptionHandler = (e)=>{
        setDiscription(e.target.value)
    }

  return (

    <div className='m-2'>
    
    <form onSubmit={formHandling} >
      <input type="text"
      placeholder='enter image'
      className='border w-[50%] py-0.5 px-1'
      value={image} 
      onChange={imageHandler}
      />

      <input type="text"
      placeholder='Enter name'
      className='border w-[50%] py-0.5 px-1' 
      value={name}
      onChange={nameHandler}
      />

      <input type="text"
      placeholder='Enter Role' 
      className='border w-[50%] py-0.5 px-1'
      value={role}
      onChange={roleHandler}
      />

      <input type="text"
      placeholder='Enter your Discription'
      className='border w-[50%] py-0.5 px-1' 
      value={discription}
      onChange={discriptionHandler}
      />

      <button className='border w-full py-0.5 px-1 text-2xl bg-green-400 active:scale-99' type='submit'>Submit</button>

    </form>

    {alluser.map((elm,idx)=>{
        return  <div key={idx}>
            < Card user={elm} deleteItem={deleteItem} />
        </div>
    })}

    </div>
  )
}

export default Form
