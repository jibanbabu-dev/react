 /* REACT ROUTER DOM*/ 
  
//  import { Link } from "react-router-dom"


// const Header=()=>{
//   return (
    
//     <div className='py-7 px-10 bg-emerald-600 flex items-center justify-between text-white'>
//       <h2 className='text-2xl'>jiban <input className="text-black bg-white"></input></h2>
//       <div className="flex gap-10 text-lg underline">
//        {/* <a className='text-xl underline' href="/home">Home</a>
//         <a className='text-xl underline' href="/about">About</a>
//         <a className='text-xl underline' href="/contact">Contact</a>
//         <a className='text-xl underline' href="/product">Product</a>*/}
//         <Link to='/home' >Home </Link> {/*helps to go one page to another page. if user click home then the URL is change to '/home' as it is set here. then check the URL is it match as instructed in route then ithe home page,contact page,about page.... showed */}
//          <Link to='/about' >About</Link>
//           <Link to='/product' >Product</Link>
//            <Link to='/contact' >Contact</Link>
//       </div>
//     </div>  
//   )
// }
// export default Header 


///// CONTEXT API//////

import React from 'react'

const Header = () => {
  return (
    <div>
      <h1>this is header</h1>
    </div>
  )
}

export default Header