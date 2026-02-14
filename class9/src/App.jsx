 import React, { useEffect, useState } from 'react'
 import axios from 'axios'
 
 const App = () => {

  const [user, setUser] = useState('')

  const [num, setNum] = useState(0)

  const inc = ()=>{
    setNum(num+1)
  }


   const getData = async ()=>{
        const response = await axios.get('https://randomuser.me/api/')
        setUser(response.data.results[0].name.first + " " +  response.data.results[0].name.last);    
   }

   useEffect(()=>{
      getData()
   },[num])



   return (
     <div>
      <h1>{user}</h1>
       <button onClick={inc}>click Me</button>
     </div>
   )
 }
 
 export default App
 


