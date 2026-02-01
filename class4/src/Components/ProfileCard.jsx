import React, { useState } from 'react'

const ProfileCard = () => {
const [name] = useState("Rahul")
const [age] = useState(24)
const [isOnline, setisOnline] = useState(true)

const toggleStatus = ()=>{
    setisOnline(prev => !prev)
}

  return (
    <div>
        <div className="p-6 w-64 bg-gray-100 rounded shadow text-center space-y-3">
       <h2 className="text-xl font-bold">Profile</h2>/       
       <p>Name: {name}</p>
       <p>Age: {age}</p>

       <p className={isOnline ? "text-green-600" : "text-red-600"}>
         Status: {isOnline ? "Online 🟢" : "Offline 🔴"}
       </p>

       <button
         onClick={toggleStatus}
         className="px-3 py-1 bg-blue-400 rounded text-white"
       >
         Toggle Status
       </button>
     </div>
    </div>
  )
}

export default ProfileCard


 

 


 


 
