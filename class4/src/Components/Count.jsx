import React, { useState } from 'react'

const Count = () => {

const [num, setnum] = useState(0)
  
  const ince = ()=>{
    setnum(prev => prev +  1)
  }

  const dec = ()=>{
    setnum(prev => prev - 1 )
  }

  return (
    <div>
      <h1 className='my-2 text-3xl mx-5'>{num}</h1>
      <button onClick={ince} className='px-3 py-1 bg-green-300 mx-2' >Incar</button>
      <button onClick={dec} className='px-3 py-1 bg-green-300'  >decre</button>
    </div>
  )
}

export default Count
