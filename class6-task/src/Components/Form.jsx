import React, { useState } from 'react'
import Card from './Card';

const Form = () => {
    const [image, setImage] = useState("")
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [profassion, setProfassion] = useState("");

    const [alldata, setallData] = useState([]) 


    const formHandling = (e)=>{
       e.preventDefault()
        
       const oldData = [...alldata];
       oldData.push({image,name,age,profassion})

       setallData(oldData) 
       
        setAge("")
        setImage("")
        setName("")
        setProfassion("")

    }

    const imageHanling = (e)=>{
     setImage(e.target.value)
    }

    const nameHandling = (e)=>{
           setName(e.target.value)
    }

    const ageHandling = (e)=>{
        setAge(e.target.value)
    }

      const profassionHandling = (e)=>{
        setProfassion(e.target.value)
    }

  return (
    <div className='flex flex-col   w-full'>

      <form onSubmit={formHandling}>
       <input type="text"
        placeholder='Enter your image'
        className='border w-[50%] py-1 px-1 text-2xl'
        value={image}
        onChange={imageHanling}

       />

        <input type="text"
        placeholder='Enter your name'
        className='border w-[50%] py-1 px-1 text-2xl'
        value={name}
        onChange={nameHandling}
        />

        <input type="text"
        placeholder='Enter your age'
        className='border w-[50%] py-1 px-1 text-2xl'
        value={age} 
        onChange={ageHandling}
        />

        <input type="text"
        placeholder='Enter your profassion'
        className='border w-[50%] py-1 px-1 text-2xl'
        value={profassion}
        onChange={profassionHandling}
        />

    <br />
        <button className='border w-full py-1 px-1 text-2xl bg-green-300 rounded active:scale-99' type='submit'>Submit</button>
      </form>
     
     {alldata.map((val,idx)=>{
           return  <div key={idx}>
                     <Card user={val}/>
                    </div>
     })}
       
    </div>
  )
}

export default Form

