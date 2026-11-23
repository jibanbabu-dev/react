/*import { useState } from "react"

function App(){
  return (
    <div>
    <h1>hello</h1>
    <h2>hello2</h2>
    </div>
  )
}
export default App*/

   
 ////calling function/////


/*import React from 'react'
let App=()=> {
  const user="jiban"
  let abc=() => {
    console.log("hello");
  }
  return(
    <div>
    <div>hello{user}</div>
    <button onClick={abc}>change user</button>
    </div>
  )
}
export default App*/


/////HOOKS//////
////USESTATE//

/*import React, {useState} from 'react'
let App=()=>{
  const[num,setNum]=useState(0)
  let increnum=()=>{
    setNum(num+10);
  }
   let decrenum=()=>{
   setNum(num-10);
   }
  return(
    <div>
      <h2>Number is{num}</h2>
       <button onClick={increnum}>Increment </button>
       <button onClick={decrenum}>Decrement</button>
    </div>
  )
}*/

      ////useref/////

/*import React, { useRef } from 'react'

function App() {

  const num = useRef(0)

  const changeNumber = () => {
    num.current = num.current + 10

    console.log(num.current)
  }

  return (
    <div>
      <h1>{num.current}</h1>

      <button onClick={changeNumber}>
        Increase
      </button>
    </div>
  )
}*/

      ///// tailwindcss////

   /* import react from 'react'
    const App=()=>{
      return(
        <div>
          <h2 className='text-5xl  bg-red-700 text-yellow-200'>Hello guys</h2>
          <h2>Hi jiban</h2>
        </div>
      )
    }*/


      ///FORM HANDILING//////

  /*import { useState } from "react"
  const App=()=>{
    const sumbitHandler=(e)=>{
      e.preventDefault()  // form sumbit karne time page reload hone se rokta hain
      console.log("form sumbitted");
    }   
  


  return (
    <div>
        <form onSubmit={(e)=>{
           sumbitHandler(e)
        }}>
          <input className='px-4 py-3 text-xl m-5 rounded' type="text" placeholder="enter your name"></input>
          <button className='px-4 py-3 text-white m-5 font-semibold bg-emerald-600 rounded'>sumbit</button>
        </form>
    </div>
  )
  }*/


     /// TWO WAY BINDING IN REACT/////


  /*import { useState } from "react"
  const App=()=>{
   const[username,Setusername]= useState('')
   const sumbitHandler=(e)=>{
    e.preventDefault()
    console.log(username)
    Setusername("")
   }
  


  return (
    <div>
        <form onSubmit={(e)=>{
          sumbitHandler(e)
        }}>
          <input 
         value={username}
         onChange={(e)=>{
          Setusername(e.target.value)
         }}
          className='px-4 py-3 text-xl m-5 rounded'
           type="text" 
           placeholder="enter your name">

           </input>
          <button className='px-4 py-3 text-white m-5 font-semibold bg-emerald-600 rounded'>sumbit</button>
        </form>
    </div>
  )
  }*/


     //COMPONENTS////

    //import { useState } from "react"
    /* import Header from "./components/Header";
    import Navbar from "./components/Navbar";
    import Footer from "./components/Footer";
  function App(){
   return (
  <div>
   
   
   
   <nav className="bg-emerald-950 text-white flex py-5 px-10 items-center justify-between">
   <h1 className="text-2xl">sheryians</h1>
   <div className="flex gap-8 items-center">
   <h3 className="text-xl">About</h3>
   <h3 className="text-xl">Contact</h3>
   <h3 className="text-xl">services</h3>
   <h3 className="text-xl">YourAccount</h3>
   </div>

   
   </nav>
   <div className="h-160"></div>
   <Footer/>
   
   
    </div>
  )
}*/


 // use component under a component\\\


/*import React from "react"
import Navbar from "./components/Navbar"
const App=()=>{
  return (
    <>
   <Navbar />
  
   </>

    
  )
}*/

  

//////////////PROPS AND PROPS DRILLING////////;;;;;///
 

 /*import React from 'react'
import Card from './components/Card'
 
 const App = () => {
  const user=10
   return (
     <div>
        <Card a={user} />
     </div>
   )
 }
 
 export default App */




 //////////////ANOTHE EXAMPLE OF PROPS////////




 /*import React from 'react'
import Card from './components/Card'
 
 const App = () => {

const user=[
  {
  
    "name": "Rahul Sharma",
    "city": "Kolkata",
    "age": 22,
    "profession": "Software Developer",
    "profilePhoto": "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
   
    "name": "Priya Singh",
    "city": "Delhi",
    "age": 24,
    "profession": "Graphic Designer",
    "profilePhoto": "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
  
    "name": "Amit Verma",
    "city": "Mumbai",
    "age": 25,
    "profession": "Data Analyst",
    "profilePhoto": "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    
    "name": "Sneha Das",
    "city": "Bangalore",
    "age": 23,
    "profession": "Frontend Developer",
    "profilePhoto": "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    
    "name": "Arjun Patel",
    "city": "Hyderabad",
    "age": 26,
    "profession": "UI/UX Designer",
    "profilePhoto": "https://randomuser.me/api/portraits/men/5.jpg"
  }
]


   return (
     <div >
      <div className='p-10'> 
        {user.map(function(elem,idx){
          //return<h1>{elem.name}</h1>
          return <Card key= {idx} name={elem.name} age={elem.age} city={elem.city} profession={elem.profession} profilephoto={elem.profilephoto}/>
        })}
      </div>
     </div>
    )
 
  }
 export default App*/


 ///////////@@@@@@ANOTHER EXAMPLE///////////////
 

 /*import React from 'react'
import Ex from './components/Ex'
 
 const App = () => {

   return (
    <div>
       <Ex name="raj"/>
     <div>App</div>
     </div>
   )
 }
 
 export default App*/ 



/* 
    ====================================
           INTEGRATING API
   ====================================
*/


 /*import axios from 'axios' //axios is j.s library used to  send request to a server and get data from an API
import React, { use, useState } from 'react'
 
 const App = () => {
   const [data, setData]=useState([])
    const getData= async()=>{ // async is a function where we can use await.
     const response= await axios.get('https://picsum.photos/v2/list')// it request data from server and    wait and not execute until the data comes
      setData(response.data)// reciving all API data
     console.log(response.data)
    }
   return (
     <div className="p-10">
        <button onClick={getData} className="bg-amber-700 rounded text-white font-semibold text-2xl py-3 px-6 active:scale-90">get data</button>
      
        {data.map(function(elem,idx){
          return <div key={idx} className="bg-gray-50 text-black flex items-center justify-between w-full px-7 py-6 rounded mb-3">
            <img  className="h-40"src={elem.download_url} alt="" />
            <h1>{elem.author}</h1>
            </div>
        })}
          
     </div>
   )
 }
 
 export default App*/





 /*   =================
       REACT ROUTER DOM 
      =================*/


      /*import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home  from './Pages/Home'
import Product from './Pages/Product'
import Header from './components/Header'

      
      const App = () => {
       
        return (
          <div>
            
         <Header />
            <Routes>
              <Route  path='/about' element={<About />}/>
              <Route path='/contact' element={<Contact />}/>
             <Route path='/home' element={<Home />}/>
              <Route path='/product' element={<Product />}/>
            </Routes>
          </div>
        )
      }
      
      export default App*/ 




        /*///////////////
           CONTEXT API
        //////////////*/


   import React, { useContext } from 'react'
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'
 import {DataContext}  from './Context/UserContext'
   const App = () => {
    const data = useContext(DataContext)
    console.log(data)
     return (
    
       <div>
         <Header />
      <Section />
    <Footer />
        <h1>hello brother</h1>
       </div>
     )
   }
   
   export default App     