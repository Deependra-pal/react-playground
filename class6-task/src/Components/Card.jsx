import React from 'react'

const Card = (props) => {

  return (
        
    
        <div className='w-[230px]  rounded overflow-hidden m-[20px] pb-1 border-2 border-black '>
        <div className='h-[230px] w-full bg-red-200 '>
            <img src={props.user.image}
            className='h-full w-full object-cover '/>
        </div>

         <div className='flex flex-col items-center gap-1'>
        <h1 className='text-2xl'>{props.user.name}</h1>
        <h1 className='text-2xl' >{props.user.age}</h1>
        <h1  className='text-2xl text-red-500 '>{props.user.profassion}</h1>
        <button className='border px-2 py-1 bg-red-700 rounded border-none text-2xl text-center active:scale-95'>remove</button>
        </div>
        </div>
    
  )
} 

export default Card
