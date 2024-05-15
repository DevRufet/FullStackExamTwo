import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
function AdminUpdate() {
  let { id } = useParams();
  const [datas, setdatas] = useState(null);
  useEffect(() => {
    datalar();
  }, [datas]);
  async function Getuser(id) {
    const response = await fetch("http://localhost:3000/users/" + id);
    const data = await response.json();
    return data;
  }
  async function datalar() {
    let datam = await Getuser(id);
    setdatas(datam);
  }
  return (
    <>
    <Helmet>
        <title>Update</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
    {
datas? <Formik
        initialValues={{
          name: datas.name,
          surname: datas.surname,
          age: datas.age,
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          surname: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          age: Yup.number().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            fetch("http://localhost:3000/users/" + id, {
              method: "put",
              headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify({name:values.name,surname:values.surname,age:values.age}),
            });
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="name">Name:</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />

          <label htmlFor="surname">Surname:</label>
          <Field name="surname" type="text" />
          <ErrorMessage name="surname" />

          <label htmlFor="age">Age:</label>
          <Field name="age" type="age" />
          <ErrorMessage name="age" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>:null



     
    }
    </>
  );
}

export default AdminUpdate;
