import React, { useState } from 'react';
import '../styles/Login.css';
import { useFormik } from 'formik';
import loginSchema from '../Schema/loginSchema';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing Font Awesome icons
import { useNavigate } from 'react-router-dom';

const Login = ({ loginType }) => {
 const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const { values, handleChange, handleBlur, errors, handleSubmit, touched } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      if(loginType==="HR"){
        navigate("/hr/dashboard")
      }
      console.log(loginType);
      console.log(values);
    }
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="login-container">
      <h4>Login to Your Account</h4>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">
            Email<span style={{ color: 'red' }}>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Enter Email"
          />
          {errors.email && touched.email && <small style={{ color: 'red' }}>{errors.email}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="password">
            Password<span style={{ color: 'red' }}>*</span>
          </label>
          <div className="password-input-container" style={{ position: 'relative' }}>
            <input
              type={showPassword ? 'text' : 'password'} // Toggle between 'text' and 'password'
              id="password"
              name="password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Enter Password"
            />
            <span
              onClick={togglePasswordVisibility}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer'
              }}
            >
              {showPassword ? <FaEye/> : <FaEyeSlash />} {/* Toggle icon */}
            </span>
          </div>
          {errors.password && touched.password && <small style={{ color: 'red' }}>{errors.password}</small>}
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
