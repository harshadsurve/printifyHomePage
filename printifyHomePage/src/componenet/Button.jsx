import React from 'react'

function Button({icon,name,customStyles}) {
  return (
    <div className={`px-4 py-1 border  border-black rounded-sm  ${customStyles} font-semibold `}>
      {icon}
        {name}
    </div>
  )
}

export default Button