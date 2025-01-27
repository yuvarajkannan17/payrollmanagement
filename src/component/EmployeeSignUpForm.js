import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../styles/EmployeeSignUp.css';  // Assuming your styles are here
import { useFormik } from 'formik';
const EmployeeSignUpForm = () => {
  
  
     const {values,handleBlur,handleChange,handleSubmit}= useFormik({
    initialValues:{
        employeeId: '',
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    }
  })

 
  return (
    <Container className="form-container">
      <Row className="justify-content-center">
        <Col md={6} lg={4} xs={12}>
          
          <h2 className="form-title">Employee Registration</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="employeeId">
              <Form.Label>Employee ID</Form.Label>
              <Form.Control
                type="text"
                name="employeeId"
                onBlur={handleBlur}
                value={values.employeeId}
                onChange={handleChange}
                placeholder='Employee Id'
              />
            </Form.Group>

            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder='Name'
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder='Email'
              />
            </Form.Group>

            <Form.Group controlId="phone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={values.phone}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder='Phone'
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Password'
              />
            </Form.Group>

            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Confirm Password'
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="submit-btn">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EmployeeSignUpForm;
