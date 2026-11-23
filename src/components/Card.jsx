/*import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
    <div>
       <h1 className='text-3xl'>User name is{props.a}</h1>  
         
    </div>
  )
}

export default <Card></Card>*/


import React from 'react'

const Card = (props) => {
    console.log(props.profilephoto) // you can see the output in console
  return (
    <div className='mr-6 px-5 py-8 bg-black text-white mt-4 inline-block p-6 text-center rounded'>
        <img className='h-32 w-32 rounded-full mb-3' src={props.profilephoto} alt="" />
               <h1 className='text-2xl font-semibold mb-4'>{props.name} {props.surname}</h1>
        <h2>{props.city},{props.age},{props.profession}</h2>
        <button className=' mt-5 bg-emerald-700 px-4 py-2 font-medium text-center rounded'>add friend</button>
    </div> 
  )
}

export default Card
