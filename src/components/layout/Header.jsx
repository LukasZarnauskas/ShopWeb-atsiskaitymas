import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='container'>
<nav>
    <NavLink to={'/'}>
Logo
    </NavLink>
    <NavLink to={'/login'}>
Login
    </NavLink>
    <NavLink to={'/register'}>
Register
    </NavLink>
    <NavLink to={'/shops'}>
Shops
    </NavLink>
    <NavLink to={'/add'}>
Add shop
    </NavLink>
</nav>

    </div>
  )
}

export default Header