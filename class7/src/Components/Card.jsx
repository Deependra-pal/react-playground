import React from 'react'

const Card = (props) => {
    
  return (
    <div className='p-5 w-[230px] bg-green-400 rounded-lg flex flex-col items-center justify-center gap-0.5 m-10   '>
         <div className='images h-[150px] w-[150px] flex  '>
            <img src={props.user.image} className='h-full w-full rounded-full object-cover'/>
         </div>

         <h1 className='text-2xl'>{props.user.name}</h1>
         <h1 className='text-red-500 text-[20px]'>{props.user.role}</h1>
         <h1 className='text-2xl'>{props.user.discription}</h1>
         <button onClick={props.deleteItem} className='px-3 py-1 bg-red-600 rounded mt-1.5 active:scale-95'>Remove</button>

      
    </div>
  )
}

export default Card
