import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {

  const validationSchema = Yup.object({
    username: Yup.string().required().min(3, 'Username must be at least 3 characters'),
    email: Yup.string().required()
      .email('Invalid email address'),
    password: Yup.string()
      .required()
      .min(6, 'Password must be at least 6 characters'),
  });

 string().required;
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  
  const handleSubmit = (values, { resetForm }) => {
    alert('Form submitted successfully!');
    console.log('Form Data:', values);
    resetForm(); 
  };

  return (
    <div>
      <h1>Formik Form with Validation</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div>
              <label>Username:</label>
              <Field type="text" name="username" />
              <ErrorMessage name="username" component="span" style={{ color: 'red' }} />
            </div>

            <div>
              <label>Email:</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="span" style={{ color: 'red' }} />
            </div>

            <div>
              <label>Password:</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="span" style={{ color: 'red' }} />
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
