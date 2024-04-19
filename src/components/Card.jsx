import React from 'react'
import Button from './Button'

const Card = ({title, content, image, rounded, shadow, bordered}) => {
  return (
    <div className={`card ${rounded} ${shadow} ${bordered}`}>
       <img src={image} alt={title} />
       <div className="card-body">
       <h1>{title}</h1>
       <p>{content}</p>
       <Button rounded={'rounded'} style={'info'} content={'Read'} />
       </div>
      
    </div>
  )
}

export default Card