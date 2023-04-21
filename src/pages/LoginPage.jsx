import React from 'react'
import LoginForm from '../auth/LoginForm'
import { auth } from '../firebase/firebase';
import {signInWithEmailAndPassword } from "firebase/auth";
import { useAuthCtx } from '../store/AuthProvider';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
const navigate = useNavigate();
const { ui} = useAuthCtx()

function userLoginFire({email, password}){
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      console.log('pavyko', user);
      ui.showSuccess('Welcome')
      navigate('/shops')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      ui.showError('Wrong email or password')
    });

}
  


  return (
    <div>
        <h1>Login</h1>
        <LoginForm onLogin={userLoginFire}/>
    </div>
  )
}

export default LoginPage