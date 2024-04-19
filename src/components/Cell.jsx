import React from 'react'
import clsx from "clsx";
const Cell = ({children, isActive, onClick}) => {
  return (
    <div onClick={()=>onClick()} className={clsx(`cell  `, {"active": isActive, "noactive": !isActive})}>{children}</div>
  )
}

export default Cell