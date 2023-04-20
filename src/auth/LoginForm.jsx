import { Formik, useFormik } from 'formik'
import React from 'react'

function LoginForm() {
    const formik = useFormik({
initialValues: {
    email: '',
    password: '',
},
onSubmit:(values)=> {
    console.log(values);
}

    })



  return (
    <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input id='email' name='email' type="email" placeholder='Email' onChange={formik.handleChange} onBlur={formik.handleChange} value={formik.values.email} />
   
        <label htmlFor="password">Email:</label>
        <input id='password' name='password' type="password" placeholder='password' onChange={formik.handleChange} onBlur={formik.handleChange} value={formik.values.password} />
   <button type='submit'>Login</button>
   </form>
  )
}

export default LoginForm