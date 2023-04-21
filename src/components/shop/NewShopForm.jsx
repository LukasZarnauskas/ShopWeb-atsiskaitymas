import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

function NewShopForm({onAdd}) {
    const formik = useFormik({
        initialValues: {
            name:'',
            town:'',
            year:0,
            description: '',
            imgUrl: '',
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
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Shop name:</label>
        <input id='name' name='name' placeholder='Shop name' type="text" onChange={formik.handleChange} onBlur={formik.handleChange} value={formik.values.name} />
        {formik.touched.name && formik.errors.name && <p> {formik.errors.name} </p> }

        <label htmlFor="town">Town:</label>
        <input id='town' name='town' type="text" placeholder='Town' onChange={formik.handleChange} onBlur={formik.handleChange} value={formik.values.town} />
        {formik.touched.town && formik.errors.town && <p> {formik.errors.town} </p> }

        <label htmlFor="year">Start year:</label>
        <input id='year' name='year' type="number" placeholder='Start year' onChange={formik.handleChange} onBlur={formik.handleChange} value={formik.values.year} />
        {formik.touched.year && formik.errors.year && <p> {formik.errors.year} </p> }

        <label htmlFor="description">Description:</label>
        <textarea id='description' name='description' placeholder='Description' onChange={formik.handleChange} onBlur={formik.handleChange} value={formik.values.description} />
{formik.touched.description && formik.errors.description && <p> {formik.errors.description} </p> }


        <label htmlFor="imgUrl">Image Url:</label>
        <input id='imgUrl' name='imgUrl' type="text" placeholder='Image Url' onChange={formik.handleChange} onBlur={formik.handleChange} value={formik.values.imgUrl} />
        {formik.touched.imgUrl && formik.errors.imgUrl && <p> {formik.errors.imgUrl} </p> }
        <button type="submit">Add shop</button>
        
    </form>
  )
}

export default NewShopForm