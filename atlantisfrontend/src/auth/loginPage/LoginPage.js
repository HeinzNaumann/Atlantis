// components/contactus-form.component.js

import React from 'react';
import { Formik, Field, Form } from 'formik';
import { login } from "../service";
import * as Yup from 'yup';

const LoginPage = () => {

    const handleSubmit = async event => {
    //event.preventDefault();
    // setIsLoading(true);
    // resetError();
    try {
        console.log(event)
      // call to api - send value
      await login(event);
     // setIsLoading(false);
     // onLogin();
      //const { from } = location.state || { from: { pathname: "/" } };
      //history.push(from);
    } catch (error) {
      //setError(error);
      // setIsLoading(false);
    }
  };

    return (
        <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={(values, { setSubmitting }) => {
                    
                    handleSubmit(values);
       
                    setSubmitting(false);


            }}
            validationSchema={Yup.object({
                email: Yup.string()
                    .email("invalid email format")
                    .required('Email is required'),
                password: Yup.string()
                .required('No password provided.') 
                .min(8, 'Password is too short - should be 8 chars minimum.')
                .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
            })}
        >
            {(formik, isSubmitting) => (
                <Form className=" form container col-md-4 d-flex flex-column justify-content-center  ">

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <Field name="email" className={(formik.touched.email && formik.errors.email) ? 'form-control is-invalid' : 'form-control'} type="email" />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="invalid-feedback">{formik.errors.email}</div>
                        ) : null}
            </div>
            
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <Field  name="password" className={(formik.touched.password && formik.errors.password) ? 'form-control is-invalid' : 'form-control'} type="password" />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="invalid-feedback">{formik.errors.password}</div>
                        ) : null}
                    </div>

                  

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>  {isSubmitting ? "Please wait..." : "Submit"}</button>
                    </div>

                </Form>
            )
            }
        </Formik >
    );
};

export default LoginPage;