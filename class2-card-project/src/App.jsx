 import React from 'react'
 import Card from './Components/Card'
 import 'remixicon/fonts/remixicon.css'
 
 const App = () => {
  const profilesData = [
  {
    id: 1,
    image: "https://plus.unsplash.com/premium_photo-1675200124904-dfadce24119f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sophie Bennett",
    profession: "Product Designer who focuses on simplicity & usability.",
    followers: 312,
    projects: 48,
  },
  {
    id: 2,
    image: "https://plus.unsplash.com/premium_photo-1668790692422-1bed034b1ed1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Isabella Reed",
    profession: "UI/UX Designer passionate about clean interfaces.",
    followers: 540,
    projects: 67
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1645437991584-03636b0aad0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGJsYWNrJTIwbW9kZWwlMjBnaXJsfGVufDB8fDB8fHww",
    name: "Olivia Carter",
    profession: "Frontend Designer blending design with code.",
    followers: 289,
    projects: 35
  },
  {
    id: 4,
    image: " https://images.unsplash.com/photo-1664763079262-056e908630e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJsYWNrJTIwbW9kZWwlMjBnaXJsfGVufDB8fDB8fHww",
    name: "Mia Thompson",
    profession: "Creative Designer focused on mobile experiences.",
    followers: 610,
    projects: 72
  },
  {
    id: 5,
    image: "https://plus.unsplash.com/premium_photo-1668896123988-b1566bb54579?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Charlotte Hayes",
    profession: "Visual Designer who loves minimal design systems.",
    followers: 458,
    projects: 51
  },
  {
    id: 6,
    image: "https://plus.unsplash.com/premium_photo-1699389000962-7ac204dcfb3f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Amelia Brooks",
    profession: "Brand Designer crafting modern digital identities.",
    followers: 377,
    projects: 44
  },
  {
    id: 7,
    image: "https://plus.unsplash.com/premium_photo-1700932723384-331930e80d76?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Harper Collins",
    profession: "Interaction Designer focused on user journeys.",
    followers: 690,
    projects: 80
  },
  {
    id: 8,
    image: "https://plus.unsplash.com/premium_photo-1664875849194-0adbac28529f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Evelyn Parker",
    profession: "UX Researcher turning insights into experiences.",
    followers: 520,
    projects: 59
  },
  {
    id: 9,
    image: "https://plus.unsplash.com/premium_photo-1710548651153-82065ec0388e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Abigail Foster",
    profession: "Design Strategist aligning design with business.",
    followers: 470,
    projects: 53
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1548361403-cb0c785eea54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM5fHxtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Emily Watson",
    profession: "Digital Designer building delightful interfaces.",
    followers: 615,
    projects: 76
  },
    {
    id: 11,
    image: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsfGVufDB8fDB8fHww",
    name: "Aria Mitchell",
    profession: "Visual Designer crafting clean and modern interfaces.",
    followers: 428,
    projects: 52
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fG1vZGVsfGVufDB8fDB8fHww",
    name: "Luna Rodriguez",
    profession: "UX Designer focused on user-centered digital products.",
    followers: 603,
    projects: 74
  }
 
];

 

   return (
     <div className='main'>
       
       {profilesData.map((val,ind)=>{
           return   < Card user={val} keys={ind}/>
       })}

     </div>
   )
 }
 
 export default App
 
