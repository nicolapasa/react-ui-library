import React, { useState } from 'react'
import Card from './Card'
import image3 from '/3.jpg'
import image4 from '/4.jpg'
const Carousel = ({data}) => {
    const [show, setShow] = useState(0)
  return (
    <>
    <div className='carousel'>
    <button className='prev' onClick={()=>setShow(show===0?  data.length-1: show-1)}>&larr;</button>
       {
         data.map((item, key)=>{

            return (
                <>
                 {show ===key ?(<div className="item fade-in">
            <Card   rounded={'rounded'} 
             bordered={'bordered'} 
             content={item.content}
             title={item.title} 
             image={item.image} 
             />
        </div>) : (<div className="item fade-out">
            <Card   rounded={'rounded'} 
             bordered={'bordered'} 
             content={item.content}
             title={item.title} 
             image={item.image} 
             />
        </div>) }
                </>
            )
         })

       }
        
        <button className='next' onClick={()=>setShow(show===data.length-1? 0: show+1)}>&rarr;</button>
       
     </div>
         </>
    
  )
}

export default Carousel