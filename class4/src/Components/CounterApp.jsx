import React, { useState } from 'react'

const CounterApp = () => {

  const [num, setNum] = useState(0);

  const Increase = ()=>{
    setNum(num+1)
  }

    const Decrease = ()=>{
    setNum(num-1)
  }

  const Reset = ()=>{
    setNum(0)
  }
  return (
   <div className=' h-full w-full flex items-center '>
        <div className='h-80 w-120 bg-gray-400 rounded flex flex-col items-center justify-center gap-10'>

               <h1 className='text-3xl font-bold'>{num}</h1>
               <div className='flex gap-5'>
                <button onClick={Increase} className=' active:scale-95 px-3 py-1 bg-green-700'>➕ Increase</button>
                <button onClick={Decrease} className=' active:scale-95 px-3 py-1 bg-green-700'>➖ Decrease</button>
                <button onClick={Reset} className=' active:scale-95 px-3 py-1 bg-green-700'>🔁 Reset</button>
               </div>

        </div>
   </div>
     
  )
}

export default CounterApp
