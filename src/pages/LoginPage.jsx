import React from 'react'
import LoginForm from '../components/auth/LoginForm'
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
      // console.log('pavyko', user);
      ui.showSuccess('Welcome !')
      navigate('/shops')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      ui.showError('Wrong email or password')
    });

}
  


return (
  <div className="flex flex-col justify-center items-center min-h-screen">
    <h1 className="text-3xl font-bold mb-8">Login</h1>
    <div className="bg-white rounded-lg shadow-2xl p-6">
      <LoginForm onLogin={userLoginFire}/>
    </div>
  </div>
)
}

export default LoginPage