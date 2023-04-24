import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../../firebase/firebase';
import { useAuthCtx } from '../../store/AuthProvider';
function Logout() {
 
    const {isLoggedIn, logout} = useAuthCtx()
function userLogoutFire(){
    signOut(auth)
    .then(() => {
        logout();
      }).catch((error) => {
        
      });
}
    
      


  return  !isLoggedIn ? null : <button className=' rounded-md px-1 border-gray-200 text-teal-500 hover:bg-teal-500 hover:text-white' onClick={userLogoutFire} >Logout</button>;
  
  
}

export default Logout