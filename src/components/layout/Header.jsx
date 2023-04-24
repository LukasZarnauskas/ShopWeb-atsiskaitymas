import React, { useState } from 'react'
import {FiMenu} from 'react-icons/fi'
import { Link, NavLink } from 'react-router-dom'
import { useAuthCtx } from '../../store/AuthProvider'
import Logout from '../../components/auth/Logout'

function Header() {
const { isLoggedIn } = useAuthCtx()
const [open, setOpen] = useState(false)
console.log(open);
  return (
    <header className='m-4 flex justify-between items-center'><Link to={'/'}>
<img src="../../../public/img/58px.svg" alt="logo" />
    </Link>
<div className='flex items-center'>
<nav className={`${open ? 'block' : 'hidden'} flex`}>
    
   {!isLoggedIn &&  <NavLink to={'/'} className='mr-2 font-bold '>
Login
    </NavLink>}
    {!isLoggedIn &&  <NavLink to={'/register'} className='mr-2 font-bold '>
Register
    </NavLink>}
    {isLoggedIn &&  <NavLink to={'/shops'} className='mr-2 font-bold '>
Shops
    </NavLink>}
    {isLoggedIn &&  <NavLink to={'/add'} className='mr-2 font-bold '>
Add shop
    </NavLink>}
    <NavLink to={'/'} className='mr-2'>
        <Logout/>
    </NavLink>
    
</nav>
    <FiMenu className=' block h-16 w-10 cursor-pointer' onClick={() => setOpen(!open)}/>
    </div>
    </header>
  )
}

export default Header