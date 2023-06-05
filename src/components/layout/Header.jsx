import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import { useAuthCtx } from '../../store/AuthProvider';
import Logout from '../../components/auth/Logout';

function Header() {
  const { isLoggedIn } = useAuthCtx();
  const [open, setOpen] = useState(false);

  return (
    <header className="">
      <div className="m-4 flex justify-between items-center border-b border-gray-100">
        <Link to={'/'}>
          {' '}
          <div className="flex">
            {' '}
            <img className="mb-1" src="img/58px.svg" alt="logo" />{' '}
            <h3 className="ml-2 hover:text-gray-500 hidden lg:block">
              SHOPSWEB
            </h3>
          </div>
        </Link>
        <div className="flex items-center">
          <nav className={`${open ? 'block' : 'hidden'} lg:block  flex`}>
            {!isLoggedIn && (
              <NavLink to={'/'} className="mr-2 font-bold px-1 text-lg ">
                Login
              </NavLink>
            )}
            {!isLoggedIn && (
              <NavLink to={'/register'} className="mr-2 font-bold px-1 text-lg">
                Register
              </NavLink>
            )}
            {isLoggedIn && (
              <NavLink to={'/shops'} className="mr-2 font-bold px-1 text-lg">
                Shops
              </NavLink>
            )}
            {isLoggedIn && (
              <NavLink to={'/add'} className="mr-2 font-bold px-1 text-lg">
                Add shop
              </NavLink>
            )}
            {isLoggedIn && (
              <NavLink to={'/'} className="mr-2 font-bold px-1 text-lg">
                <Logout />
              </NavLink>
            )}
          </nav>
          <FiMenu
            className=" block h-16 w-10 cursor-pointer text-gray-500 lg:hidden"
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
