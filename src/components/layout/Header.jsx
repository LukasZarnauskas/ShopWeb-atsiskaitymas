import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuthCtx } from '../../store/AuthProvider'

function Header() {
const { isLoggedIn, logout } = useAuthCtx()

  return (
    <div className='container'>
<nav>
    <NavLink to={'/'}>
Logo
    </NavLink>
   {!isLoggedIn &&  <NavLink to={'/login'}>
Login
    </NavLink>}
    {!isLoggedIn &&  <NavLink to={'/register'}>
Register
    </NavLink>}
    {isLoggedIn &&  <NavLink to={'/shops'}>
Shops
    </NavLink>}
    {isLoggedIn &&  <NavLink to={'/add'}>
Add shop
    </NavLink>}
</nav>
{isLoggedIn && <button onClick={logout}>Logout</button>}
    </div>
  )
}

export default Header