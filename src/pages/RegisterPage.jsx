import React from 'react'
import RegisterForm from '../components/auth/RegisterForm'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { useAuthCtx } from '../store/AuthProvider';

function RegisterPage() {
const navigate = useNavigate()
const {ui} = useAuthCtx()
  function userRegisterFire({email, password}){


createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    ui.showSuccess('Register successfuly ! Welcome !')
    navigate('/shops')

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    ui.showError('Something went wrong')
  });
  }
  return (
    <div>
<h1>Register</h1>
      <RegisterForm onRegister={userRegisterFire}/>
    </div>
     )
}

export default RegisterPage