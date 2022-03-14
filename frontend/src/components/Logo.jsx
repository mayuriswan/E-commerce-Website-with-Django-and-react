import React from 'react'
import logo from './shared/IMAGES/sneakers1.png'

function Logo() {
  return (
    <div className='w-30 mt-20'>
        <img src={logo} alt="Loading..." className='text-center mx-auto light' width={40} />
    </div>
  )
}

export default Logo