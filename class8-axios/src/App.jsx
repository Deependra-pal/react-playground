import axios from 'axios'
import React, { useState } from 'react'
import Card from './Components/Card'

const App = () => {

  const [alluser, setallUser] = useState([])

  const getData = async ()=>{
    const response =  await axios.get('https://jsonplaceholder.typicode.com/users');
    setallUser(response.data)
     console.log(response.data); 
     
  } 

  return (
    <div className='main'>
    <button onClick={getData}>click me </button>
   <div className='cards'>
      {alluser.map((elm,idx)=>{
        // console.log(elm);
        return <div key={idx} >
              < Card  user={elm} />
        </div>
       })}
   </div>
    </div>
  ) 
}

export default App

