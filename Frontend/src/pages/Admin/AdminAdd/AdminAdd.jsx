import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
import { Helmet } from 'react-helmet-async';
function AdminAdd() {
  return (
    <>
    <Helmet>
        <title>Add</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
    <Formik
       initialValues={{ name: '', surname: '', age: '' }}
       validationSchema={Yup.object({
         name: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
         surname: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
         age: Yup.number().required('Required'),
       })}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
            fetch("http://localhost:3000/users" , {
              method: "post",
              headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify(values),
            });
           setSubmitting(false);
         }, 400);
       }}
     >
       <Form>
         <label htmlFor="name">Name:</label>
         <Field name="name" type="text" />
         <ErrorMessage name="name" />
 
         <label htmlFor="surname">SurName:</label>
         <Field name="surname" type="text" />
         <ErrorMessage name="surname" />
 
         <label htmlFor="age">Age:</label>
         <Field name="age" type="age" />
         <ErrorMessage name="age" />
 
         <button type="submit">Submit</button>
       </Form>
     </Formik>
    
    
    </>
  )
}

export default AdminAdd