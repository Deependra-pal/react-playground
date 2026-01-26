//  import React from 'react'
//  import Women from './Components/Women'
//  import Men from './Components/Men'
 
//  const App = () => {
//   const user1 ={
//     name:'Sarthak',
//     age:30,
//     gender:'Male'
//   }
//     const user2 ={
//     name:'Shreya',
//     age:20,
//     gender:'Female'
//   }
//      const user3 ={
//     name:'Bixi',
//     age:14,
//     gender:'Male'
//   }
//    return (
//      <div>
//        {/* // conditional rendring  */}
//        {user1.gender === "Male"? user3.age > 10 ? <Men /> : <Women /> : <Women/> }
//      </div>
//    )
//  }
 
//  export default App
 
//   Function calling 
 
 import React from 'react'
 
 const App = () => {

  function btnClick(a){
   var num =  Math.floor( Math.random()*9999)
   console.log(num , a);
  }

   return (
     <div>
       <button 
        onClick={function(){
            btnClick("Hello")
        }}
       className=' active:scale-95 bg-emerald-600  text-white px-6 py-3 rounded font-bold m-2'>
        Click to Download 
       </button>
     </div>
   )
 }
 
 export default App
 