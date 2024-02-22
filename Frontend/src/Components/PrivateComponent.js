import React from 'react'
import { Outlet } from 'react-router-dom'

const PrivateComponent = () => {
       console.log(document.cookie);
    return (
          <>     
            <Outlet/>
         </>

  )
}

export default PrivateComponent