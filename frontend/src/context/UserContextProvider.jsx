import React, { useState } from 'react'
import userContext from './userContext'

function UserContextProvider({children}) {

    const [groqKey, setGroqKey] = useState(null)
  return (
    <userContext.Provider value={{groqKey,setGroqKey}}>
        {children}
    </userContext.Provider>
  )
}

export default UserContextProvider