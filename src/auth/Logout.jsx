import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../firebase/firebase';
import { useAuthCtx } from '../store/AuthProvider';

function Logout() {
 
    const {isLoggedIn, logout} = useAuthCtx()
function userLogoutFire(){
    signOut(auth)
    .then(() => {
        logout();
      }).catch((error) => {
        
      });
}
    
      


  return  !isLoggedIn ? null : <button onClick={userLogoutFire}>Logout</button>;
  
}

export default Logout