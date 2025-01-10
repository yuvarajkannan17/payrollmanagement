import React, { useState } from 'react';
import '../styles/Login.css';
import {useFormik} from "formik"
import loginSchema from '../Schema/loginSchema';



const Login = ({loginType}) => {
  const {values,handleChange,handleBlur,errors,handleSubmit,touched}= useFormik({
    initialValues:{
        email:"",
        password:""
    },
    validationSchema:loginSchema,
    onSubmit:(values)=>{
        
        console.log(loginType)
        console.log(values);
    }
   })

  

  return (
    <div className="login-container">
      <h4>Login to Your Account</h4>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email<span style={{color:"red"}}>*</span></label>
          <input
            type="email"
            id="email"
            name='email'
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            
            placeholder='Enter Email'
          />
           {errors.email && touched.email && <small style={{color:"red"}}>{errors.email}</small>}
        </div>
       
        <div className="form-group">
          <label htmlFor="password">Password<span style={{color:"red"}}>*</span></label>
          <input
            type="password"
            id="password"
            name='password'
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            
            placeholder='Enter Password'
          />
           {errors.password && touched.password && <small style={{color:"red"}}>{errors.password}</small>}
        </div>
       
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
