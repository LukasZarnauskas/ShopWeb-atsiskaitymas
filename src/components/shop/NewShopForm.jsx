import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import {useAuthCtx} from '../../store/AuthProvider'
import ValidMsg from '../ui/ValidMsg'
import Button from '../ui/Button'
 
function NewShopForm({onAdd}) {
    const { user } = useAuthCtx()
    const formik = useFormik({
        initialValues: {
            name:'',
            town:'',
            year:0,
            description: '',
            imgUrl: '',
            userUid: user?.uid || '',
        },
        validationSchema: Yup.object({
        name: Yup.string()
            .min(4, 'Min 4 symbols')
            .required('Field required'),
        town: Yup.string()
            .min(4, 'Min 4 symbols')
            .required('Field required'),
        year: Yup.number()
            .min(1970, 'Start year must be after 1970.')
            .max(2022, 'Start year cannot be after 2022.')
            .required('Field required')
            .positive('Start year must be a positive number.')
            .test('len', 'Start year must be exactly 4 digits.', val => val && val.toString().length === 4),
        description: Yup.string()
            .min(6, 'Min 6 symbols')
            .required('Field required'),
        imgUrl: Yup.string()
            .min(5, 'Min 5 symbols')
            .required('Field required'),
        }),
        onSubmit:(values)=> {
            console.log(values);
            onAdd(values)
        }

    })
    // • shopName: input - (stringas, minimum 4 simboliai, privalomas laukas )
    // • town: input - (stringas, minimum 4 simboliai, privalomas laukas )
    // • startYear: input (skaicius, 4 simboliai, min 1970, max 2022, privalomas laukas)
    // • description: textarea - (stringas, mažiausiai 6 simboliai privalomas laukas)
    // • ImageUrl: input (stringas, min 5, privalomas)
    return (
        <form onSubmit={formik.handleSubmit} class="max-w-4xl mx-auto p-4">
          <label className='text-2xl text-gray-500' htmlFor="name">Shop name:</label>
          <input className='w-full' id='name' name='name' placeholder='Shop name' type="text" onChange={formik.handleChange} onBlur={formik.handleChange} value={formik.values.name} />
          {formik.touched.name && formik.errors.name && <ValidMsg text={formik.errors.name}/> }
        
          <label className='text-2xl text-gray-500' htmlFor="town">Town:</label>
          <input className='w-full' id='town' name='town' type="text" placeholder='Town' onChange={formik.handleChange} onBlur={formik.handleChange} value={formik.values.town} />
          {formik.touched.town && formik.errors.town && <ValidMsg text={formik.errors.town}/> }
        
          <label className='text-2xl text-gray-500' htmlFor="year">Start year:</label>
          <input className='w-full' id='year' name='year' type="number" placeholder='Start year' onChange={formik.handleChange} onBlur={formik.handleChange} value={formik.values.year} />
          {formik.touched.year && formik.errors.year && <ValidMsg text={formik.errors.year}/> }
        
          <label className='text-2xl text-gray-500' htmlFor="description">Description:</label>
          <textarea className="w-full max-w-full h-20" id='description' name='description' placeholder='Description' onChange={formik.handleChange} onBlur={formik.handleChange} value={formik.values.description} />
          {formik.touched.description && formik.errors.description && <ValidMsg text={formik.errors.description}/> }
        
          <label className='text-2xl text-gray-500' htmlFor="imgUrl">Image Url:</label>
          <input className='w-full' id='imgUrl' name='imgUrl' type="text" placeholder='Image Url' onChange={formik.handleChange} onBlur={formik.handleChange} value={formik.values.imgUrl} />
          {formik.touched.imgUrl && formik.errors.imgUrl && <ValidMsg text={formik.errors.imgUrl}/> }
          <Button type="submit">Add shop</Button>
        </form>
      );
      
  
  
}

export default NewShopForm