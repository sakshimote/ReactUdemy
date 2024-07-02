import React from 'react'
import Logo from '../assets/Logo.png'

export const Header = () => {
  return (
    <header>
      <img src={Logo}/>
      <a href='/'>Home</a>
    </header>
  )
}
