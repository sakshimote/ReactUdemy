import React, { useState } from 'react'

export const Boxcard = ({result, children}) => {
const[show,setShow]=useState(true);

  return (
    <div className={show?"":"hidden"}>
        <div>  
         <div className =  {`box ${result}`}>
        {children}
        </div>
        <button className='trigger' onClick={()=>setShow(!show)}>Hide</button>
    </div>
   
    </div>
   
  )
}
