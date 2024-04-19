import React, { useState } from 'react'
import Button from './Button'

const Dialog = ({title, content}) => {
    const [show, setShow] = useState(false)
  return (
     <>

         <Button content={'show'} style={'default'}  callback={()=>setShow(true)} />
    { show &&  
    <div className="containerDialog">
        <div className='dialog'>
            <Button content={'x'} style={'default'} callback={()=>setShow(false)}/>
             <div className="dialogBody"> <h3>{title}</h3>
             <p>{content}</p></div>
            
            </div>
            </div>
       }
</>
  )
}

export default Dialog