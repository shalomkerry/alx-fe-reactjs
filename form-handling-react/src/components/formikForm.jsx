import React from 'react';
import { Formik,ErrorMessage,Field,Form } from 'formik';
import NavBar from './NavBar';
import * as Yup from "yup"


const SignupForm = ()=>{


return (
           
        
<Formik 
    initialValues={{
        userName:'',
        email:'',
        password:'',
    }}
   validationSchema={Yup.object({ 
    userName:Yup.string()
    .min(4,"Username can't be less than 4 letters")
    .required("Required"),
    email:Yup.string()
    .email('Please Enter a valid Email')
    .required('Required'),
    password:Yup.string().min(4,'Password should at least be    4 digits').required('Required').matches(/^\d+$/,'Password should only be a number')
   })}
    onSubmit={(values,{setSubmitting})=>{
        setTimeout(()=>{

        alert(JSON.stringify(values,null,2))
        setSubmitting(false)
        },400)
    }}

>
<Form>

        <label htmlFor="userName">Insert your User Name</label>
        <Field name='userName' type='text'></Field>
        <ErrorMessage name='userName'/>

        <label htmlFor="email">Email</label>
        <Field name='email' type='text'></Field>
        <ErrorMessage name='email'/>

        <label htmlFor="password">Password</label>
        <Field name='password' type='text'></Field>
        <ErrorMessage name='email'/>
        
        <input type="submit" value={'submit'} />
        </Form>
<NavBar/>
  
    </Formik>
    
)
}
export default SignupForm; 

