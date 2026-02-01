 import React, { useState } from 'react'
 
 const Box = () => {

  const [color, setcolor] = useState("red")

  const clickRed = ()=>{
       setcolor("red")
  }
   
  const clickGreen = ()=>{
    setcolor("green")
  }

  const clickBlue = ()=>{
    setcolor("blue")
  }

const bgColor =
         (color === "red")?"bg-red-700" 
         :(color === 'green')?'bg-green-700' 
         :'bg-blue-700'

   return (
     <div className='flex flex-col items-center gap-10'>
       <div className={`h-60 w-80  rounded ${bgColor}`}></div>
       <div>
         <button onClick={clickGreen}  className='mx-1 px-3 py-1 bg-green-700'>Green</button>
          <button onClick={clickRed}  className='mx-1 px-3 py-1 bg-red-700'>Red</button>
           <button onClick={clickBlue}  className='mx-1 px-3 py-1 bg-blue-700'>Blue</button>
       </div>
     </div>
   )
 }
 
 export default Box
 
