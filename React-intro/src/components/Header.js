import React from 'react'
import Logo from '../assets/logo.png'

export const Header = () => {
  return (
    <div>
        <img className='logo' src={Logo} alt='logo image'></img>
    </div>
  )
}
