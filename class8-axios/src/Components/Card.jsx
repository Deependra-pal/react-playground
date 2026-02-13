import React from 'react'

const Card = ({user}) => {
    console.log(user);

   const cl1 =  Math.floor(Math.random()*256)
   const cl2 =  Math.floor(Math.random()*256)
   const cl3 =  Math.floor(Math.random()*256)
    
  return (
    <div style={{backgroundColor:`rgb(${cl1},${cl2},${cl3})`}} className='card'>
      <div className='text-div'>
        <h1>{user.name}</h1>
        <h2>{user.username}</h2>
        <h3>{user.email}</h3>
        <h4>{user.website}</h4>
        <p>{user.phone}</p>
        </div>
       
    </div>
  )
}

export default Card
