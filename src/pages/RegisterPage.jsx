import React from 'react'
import RegisterForm from '../components/auth/RegisterForm'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { useAuthCtx } from '../store/AuthProvider';
import Hero from '../components/ui/Hero';

function RegisterPage() {
const navigate = useNavigate()
const {ui} = useAuthCtx()
  function userRegisterFire({email, password}){


createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    // const user = userCredential.user;
    ui.showSuccess('Register successfuly ! Welcome !')
    navigate('/shops')

  })
  .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    ui.showError('Something went wrong')
  });
  }
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <Hero/>
<h2 className='text-3xl font-bold mb-6'>Register</h2>
      <RegisterForm onRegister={userRegisterFire}/>
    </div>
     )
}

export default RegisterPage