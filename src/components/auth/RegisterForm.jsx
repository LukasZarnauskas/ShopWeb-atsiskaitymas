import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import ValidMsg from '../ui/ValidMsg'
import Button from '../ui/Button'

function RegisterForm({onRegister}) {

    const formik = useFormik({
    initialValues: {
        email: '',
        password: '',
    },
    validationSchema: Yup.object({
        email: Yup.string()
        .email('Must by email')
        .required('Insert email'),
        password: Yup.string()
        .min(6, 'Min 6 symbos')
        .required('Insert password')
    }),
    onSubmit:(values) => {
        onRegister(values)
    }


    })
    
    // Email: (stringas, email tipo, privalomas laukas )
    // • Password: (stringas, mažiausiai 6 simboliai privalomas laukas

  return (

<form onSubmit={formik.handleSubmit}>
 
        <label className='text-2xl text-gray-500' htmlFor="email">Email:</label>
        <input id='email' name='email' type="text" placeholder='Email' onChange={formik.handleChange} onBlur={formik.handleChange} value={formik.values.email} />
        {formik.touched.email && formik.errors.email && <ValidMsg text={formik.errors.email}/> }
        <label className='text-2xl text-gray-500' htmlFor="password">Password:</label>
        <input  id='password' name='password' type="password" placeholder='password' onChange={formik.handleChange} onBlur={formik.handleChange} value={formik.values.password} />
        {formik.touched.password && formik.errors.password && <ValidMsg text={formik.errors.password}/> }
   <Button type={'submit'} >Register</Button>
    
    </form>
  )
}

export default RegisterForm