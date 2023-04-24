import React from 'react'
import LoginForm from '../components/auth/LoginForm'
import { auth, googleProvider } from '../firebase/firebase';
import {GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useAuthCtx } from '../store/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/ui/Hero';
import Button from '../components/ui/Button';

function LoginPage() {
const navigate = useNavigate();
const { ui} = useAuthCtx()

function userLoginFire({email, password}) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      ui.showSuccess('Welcome !')
      navigate('/shops')
    })
    .catch((error) => {
      ui.showError('Wrong email or password')
    });

}

function loginWithGoogle(){

signInWithPopup(auth, googleProvider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    ui.showSuccess('Welcome !')
    navigate('/shops')
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    ui.showError('An error occured! Try again.')
  });
}

return (
  <div className="flex flex-col justify-center items-center mt-20">
   <Hero/>
    <h2 className="text-3xl font-bold mb-6">Login</h2>
      <LoginForm onLogin={userLoginFire} />
      <button className='bg-teal-500 text-white text-xl font-bold border-none cursor-pointer py-3 px-6 hover:bg-teal-700 mt-3' onClick={loginWithGoogle}> Login with Google</button>
  </div>
)
}

export default LoginPage
