import React from 'react'
import Card from './Components/Card'

const App = () => {
   const profileData = [
  {
    id: 1,
    name: "Noah Thompson",
    profession: "Frontend Developer",
    image: "https://i.pravatar.cc/150?img=12",
    hobbies: ["Coding", "Reading", "Travel"],
  },
  {
    id: 2,
    name: "Ava Johnson",
    profession: "UI/UX Designer",
    image: "https://i.pravatar.cc/150?img=32",
    hobbies: ["Designing", "Sketching", "Photography"],
  },
  {
    id: 3,
    name: "Liam Carter",
    profession: "Backend Developer",
    image: "https://i.pravatar.cc/150?img=45",
    hobbies: ["Problem Solving", "Gaming", "Music"],
  },
  {
    id: 4,
    name: "Sophia Williams",
    profession: "Data Analyst",
    image: "https://i.pravatar.cc/150?img=47",
    hobbies: ["Data Research", "Cooking", "Books"],
  },
  {
    id: 5,
    name: "Ethan Brown",
    profession: "Mobile App Developer",
    image: "https://i.pravatar.cc/150?img=56",
    hobbies: ["App Building", "Fitness", "Cricket"],
  },
];

  
  return (
    <div className='flex items-center justify-between' >
       {profileData.map((val)=>{
            return   <Card key={val.id} user={val}/> 
       })}
    </div>
  )
}

export default App

