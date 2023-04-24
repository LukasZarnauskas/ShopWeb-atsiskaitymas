import React from 'react'

function Button({type = '', children, }) {
  return (
    <button className='bg-teal-500 text-white text-xl font-bold border-none cursor-pointer py-3 px-6 hover:bg-teal-700 mt-3' type={type} >{children}</button>
  )
}

export default Button