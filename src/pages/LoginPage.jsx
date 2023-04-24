import React from 'react'
import LoginForm from '../components/auth/LoginForm'
import { auth } from '../firebase/firebase';
import {signInWithEmailAndPassword } from "firebase/auth";
import { useAuthCtx } from '../store/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/ui/Hero';

function LoginPage() {
const navigate = useNavigate();
const { ui} = useAuthCtx()

function userLoginFire({email, password}){
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      // const user = userCredential.user;
      // ...
      // console.log('pavyko', user);
      ui.showSuccess('Welcome !')
      navigate('/shops')
    })
    .catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      ui.showError('Wrong email or password')
    });

}
  


return (
  <div className="flex flex-col justify-center items-center mt-20">
   <Hero/>
    <h2 className="text-2xl font-bold mb-8">Login</h2>
      <LoginForm onLogin={userLoginFire}/>
  </div>
)
}

export default LoginPage