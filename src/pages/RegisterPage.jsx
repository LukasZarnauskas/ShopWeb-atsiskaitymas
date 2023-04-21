import React from 'react'
import RegisterForm from '../auth/RegisterForm'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase';

function RegisterPage() {

  function userRegisterFire({email, password}){


createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
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