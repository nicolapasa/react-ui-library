import React from 'react'

const Alert = ({title, content}) => {
  return (
    <div className='alert'>
        <h1 className='alertTitle'>{title}</h1>
        <p className='bodyTitle'>{content}</p>
    </div>
  )
}

export default Alert