import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuthCtx } from '../../store/AuthProvider'
import Logout from '../../components/auth/Logout'

function Header() {
const { isLoggedIn } = useAuthCtx()

  return (
    <div className='container'>
<nav>
    <NavLink to={'/'}>
Logo
    </NavLink>
   {!isLoggedIn &&  <NavLink to={'/'}>
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
    <NavLink to={'/'}>
        <Logout/>
    </NavLink>
</nav>
    </div>
  )
}

export default Header