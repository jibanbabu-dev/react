import React, { createContext } from 'react'
 export const DataContext=createContext()

const UserContext = ({children}) => {
    const username="jiban"
  return (
    <div>
        <DataContext.Provider value={username}>{children}</DataContext.Provider> 
   </div> // app.jsx main jo bhi likhe wo print nehi hoga
  )
}

export default UserContext