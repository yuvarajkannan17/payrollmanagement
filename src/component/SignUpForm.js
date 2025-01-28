import React, { useState } from 'react';
import '../styles/SignUpForm.css';
import { useFormik } from 'formik';
import * as Yup from 'yup'; // For validation
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Font Awesome icons

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [submittedData, setSubmittedData] = useState(null); // State to store submitted data

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword((prev) => !prev);

  const validationSchema = Yup.object({
    employeeId: Yup.string().required('Employee ID is required'),
    name: Yup.string()
      .matches(/^[a-zA-Z\s]{3,}$/, 'Name must be at least 3 characters long and contain only letters and spaces.')
      .required('Name is required'),
    email: Yup.string().email('Enter Valid Email Address').required('Email is required'),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
      .required('Phone number is required'),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
        'Password must be 8+ characters with uppercase, lowercase, a number, and a special character.'
      )
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const { values, handleChange, handleBlur, errors, handleSubmit, touched } = useFormik({
    initialValues: {
      employeeId: '',
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: (values) => {
      setSubmittedData(values);
      setIsModalOpen(true); // Open the modal on form submission
    },
  });

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="employeeId">
            Employee ID<span style={{ color: 'red' }}>*</span>
          </label>
          <input
            type="text"
            id="employeeId"
            name="employeeId"
            value={values.employeeId}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Enter Employee ID"
          />
          {errors.employeeId && touched.employeeId && <small style={{ color: 'red' }}>{errors.employeeId}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="name">
            Name<span style={{ color: 'red' }}>*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Enter Name"
          />
          {errors.name && touched.name && <small style={{ color: 'red' }}>{errors.name}</small>}
        </div>

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
          <label htmlFor="phone">
            Phone Number<span style={{ color: 'red' }}>*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={values.phone}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Enter Phone Number"
          />
          {errors.phone && touched.phone && <small style={{ color: 'red' }}>{errors.phone}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="password">
            Password<span style={{ color: 'red' }}>*</span>
          </label>
          <div className="password-input-container" style={{ position: 'relative' }}>
            <input
              type={showPassword ? 'text' : 'password'}
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
                cursor: 'pointer',
              }}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          {errors.password && touched.password && <small style={{ color: 'red' }}>{errors.password}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">
            Confirm Password<span style={{ color: 'red' }}>*</span>
          </label>
          <div className="password-input-container" style={{ position: 'relative' }}>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              name="confirmPassword"
              value={values.confirmPassword}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Confirm Password"
            />
            <span
              onClick={toggleConfirmPasswordVisibility}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
              }}
            >
              {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          {errors.confirmPassword && touched.confirmPassword && <small style={{ color: 'red' }}>{errors.confirmPassword}</small>}
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>

      {/* Modal for Success Message */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h4>Registration Successful!</h4>
            <p>
              <strong>Email:</strong> {submittedData.email}
            </p>
            <p>
              <strong>Password:</strong> {submittedData.password}
            </p>
            <button onClick={closeModal} className="close-btn">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpForm;
