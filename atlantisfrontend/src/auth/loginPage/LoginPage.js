// components/contactus-form.component.js

import React from 'react';
import { Formik, Field, Form } from 'formik';

import * as Yup from 'yup';

const LoginPage = () => {

    return (
        <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 1000);
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
                <Form className="container">

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