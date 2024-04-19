import React from 'react'

const Button = ({style, content, rounded, callback}) => {
    

  return (
    <button className={` ${style} ${rounded}  `} onClick={()=>callback()} >{content}</button>
  )
}

export default Button