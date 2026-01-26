import React from 'react'

const Nav = (props) => {
    console.log(props);
    
  return (
    <div style={{backgroundColor:props.color}}  className='flex items-center justify-between px-10 py-3 m-5'>
        <h2 className='text-4xl'>{props.title}</h2>
      <div className='flex gap-10'>
        <h3 className='text-2xl'>{props.links[0]}</h3>
        <h3 className='text-2xl'>{props.links[1]}</h3>
        <h3 className='text-2xl'>{props.links[2]}</h3>
      </div>
    </div>
  )
}

export default Nav 
