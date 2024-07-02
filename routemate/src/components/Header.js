import React from 'react'
import logo from '../assets/logo.png'

import { Link,NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <Link to='/' className='logo'>
      <img src={logo} alt='Routemate logo'></img>
      <span> Routemate</span>
</Link>

<nav className='navigation'>
<NavLink to='/' className='link' end>Home</NavLink>
<NavLink to='/products' className='link'>Products</NavLink>
<NavLink to='/contact' className='link'>Contact</NavLink>
</nav>
      

    </header>
  )
}
