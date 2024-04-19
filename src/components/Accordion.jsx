import React, { useState } from 'react'

const Accordion = ({data}) => {
   const [section, setSection]=useState(0)
  
  return (
    <div className='accordion'>
        {
            data.map((item, index)=>{
                return(
                    <>
                      <div className="section" onClick={()=>{setSection(index)}}>
            <h1>{item.title}</h1>
            {
                section===index &&  <p>{item.content}</p>
            }
           
        </div>
                    </>
                )
            })
        }
      
      
    </div>
  )
}

export default Accordion