import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import '../styles/MyAccount.css';

const MyAccount = () => {
  const handleBack = () => {
    window.history.back(); // Go to the previous page in the history
  };
  const validationSchema = Yup.object({
    // Personal Information validation
    fullName: Yup.string().required("Full Name is required"),
    dateOfBirth: Yup.date().required("Date of Birth is required"),
    gender: Yup.string().required("Gender is required"),
    nationality: Yup.string().required("Nationality is required"),
    maritalStatus: Yup.string().required("Marital Status is required"),
    contactNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Contact number must be 10 digits")
      .required("Contact Number is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email Address is required"),
    permanentAddress: Yup.string().required("Permanent Address is required"),
    currentAddress: Yup.string(),

    // Educational Details validation
    highestQualification: Yup.string().required("Qualification is required"),
    institution: Yup.string().required("Institution/University is required"),
    graduationYear: Yup.number()
      .min(1900, "Enter a valid year")
      .max(new Date().getFullYear(), "Enter a valid year")
      .required("Year of Graduation is required"),

    // Employment Details validation
    previousEmployer: Yup.string().required("Previous Employer is required"),
    designation: Yup.string().required("Designation is required"),
    employmentDuration: Yup.string().required("Employment Duration is required"),

    // Identification Documents validation
    governmentId: Yup.string().required("Government ID is required"),

    // Point of Contact validation
    reference1: Yup.string().required("At least one reference is required"),

    // Consent and Declaration validation
    consent: Yup.boolean().oneOf([true], "You must consent to the terms").required("Consent is required"),
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      // Personal Information fields
      fullName: "",
      dateOfBirth: "",
      gender: "",
      nationality: "",
      maritalStatus: "",
      contactNumber: "",
      email: "",
      permanentAddress: "",
      currentAddress: "",

      // Educational Details fields
      highestQualification: "",
      institution: "",
      graduationYear: "",

      // Employment Details fields
      previousEmployer: "",
      designation: "",
      employmentDuration: "",

      // Identification Documents fields
      governmentId: "",

      // Point of Contact fields
      reference1: "",
      reference2: "",

      // Consent and Declaration fields
      consent: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Submitted", values);
      alert("Form Submitted Successfully");
    },
  });

  return (
    <Container className="form-container">
      <Row className="justify-content-center">
        <Col md={8} lg={6} xs={12}>
          <h2 className="form-title">Employee Onboarding Form</h2>
          <Form noValidate onSubmit={handleSubmit}>
            {/* Personal Information */}
            <h4>1. Personal Information</h4>
            <Form.Group controlId="fullName">
              <Form.Label>Full Name<span style={{ color: "red" }}>*</span></Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={values.fullName}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Enter your full name"
                isInvalid={touched.fullName && errors.fullName}
              />
              <Form.Control.Feedback type="invalid">{errors.fullName}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="dateOfBirth">
              <Form.Label>Date of Birth<span style={{ color: "red" }}>*</span></Form.Label>
              <Form.Control
                type="date"
                name="dateOfBirth"
                value={values.dateOfBirth}
                onBlur={handleBlur}
                onChange={handleChange}
                isInvalid={touched.dateOfBirth && errors.dateOfBirth}
              />
              <Form.Control.Feedback type="invalid">{errors.dateOfBirth}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="gender">
              <Form.Label>Gender<span style={{ color: "red" }}>*</span></Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={values.gender}
                onBlur={handleBlur}
                onChange={handleChange}
                isInvalid={touched.gender && errors.gender}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">{errors.gender}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="nationality">
              <Form.Label>Nationality<span style={{ color: "red" }}>*</span></Form.Label>
              <Form.Control
                type="text"
                name="nationality"
                value={values.nationality}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Enter your nationality"
                isInvalid={touched.nationality && errors.nationality}
              />
              <Form.Control.Feedback type="invalid">{errors.nationality}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="maritalStatus">
              <Form.Label>Marital Status<span style={{ color: "red" }}>*</span></Form.Label>
              <Form.Control
                as="select"
                name="maritalStatus"
                value={values.maritalStatus}
                onBlur={handleBlur}
                onChange={handleChange}
                isInvalid={touched.maritalStatus && errors.maritalStatus}
              >
                <option value="">Select Marital Status</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">{errors.maritalStatus}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="contactNumber">
              <Form.Label>Contact Number<span style={{ color: "red" }}>*</span></Form.Label>
              <Form.Control
                type="tel"
                name="contactNumber"
                value={values.contactNumber}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Enter your contact number"
                isInvalid={touched.contactNumber && errors.contactNumber}
              />
              <Form.Control.Feedback type="invalid">{errors.contactNumber}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email Address<span style={{ color: "red" }}>*</span></Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Enter your email address"
                isInvalid={touched.email && errors.email}
              />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="permanentAddress">
              <Form.Label>Permanent Address<span style={{ color: "red" }}>*</span></Form.Label>
              <Form.Control
                type="text"
                name="permanentAddress"
                value={values.permanentAddress}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Enter your permanent address"
                isInvalid={touched.permanentAddress && errors.permanentAddress}
              />
              <Form.Control.Feedback type="invalid">{errors.permanentAddress}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="currentAddress">
              <Form.Label>Current Address<span style={{ color: "red" }}>*</span></Form.Label>
              <Form.Control
                type="text"
                name="currentAddress"
                value={values.currentAddress}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Enter your current address"
              />
            </Form.Group>

            {/* Educational Details */}
            <h4>2. Educational Details</h4>
            <Form.Group controlId="highestQualification">
          <Form.Label>Highest Qualification<span style={{ color: "red" }}>*</span></Form.Label>
          <Form.Control
            type="text"
            name="highestQualification"
            value={values.highestQualification}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Degree/Diploma"
          />
        </Form.Group>
        <Form.Group controlId="institution">
          <Form.Label>Institution/University<span style={{ color: "red" }}>*</span></Form.Label>
          <Form.Control
            type="text"
            name="institution"
            value={values.institution}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Institution/University"
          />
        </Form.Group>
        <Form.Group controlId="graduationYear">
          <Form.Label>Year of Graduation<span style={{ color: "red" }}>*</span></Form.Label>
          <Form.Control
            type="text"
            name="graduationYear"
            value={values.graduationYear}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Year of Graduation"
          />
        </Form.Group>
        <Form.Group controlId="certificates">
          <Form.Label>Upload Certificates/Mark Sheets</Form.Label>
          <Form.Control
            type="file"
            name="certificates"
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </Form.Group>


            {/* Employment Details */}
            <h4>3. Employment Details</h4>
            <Form.Group controlId="previousEmployers">
          <Form.Label>Previous Employers</Form.Label>
          <Form.Control
            type="text"
            name="previousEmployers"
            value={values.previousEmployers}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Previous Employers"
          />
        </Form.Group>
        <Form.Group controlId="designation">
          <Form.Label>Designation</Form.Label>
          <Form.Control
            type="text"
            name="designation"
            value={values.designation}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Designation"
          />
        </Form.Group>
        <Form.Group controlId="employmentDuration">
          <Form.Label>Employment Duration</Form.Label>
          <Form.Control
            type="text"
            name="employmentDuration"
            value={values.employmentDuration}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Start and End Dates"
          />
        </Form.Group>
        <Form.Group controlId="reportingManager">
          <Form.Label>Reporting Manager/HR Contact</Form.Label>
          <Form.Control
            type="text"
            name="reportingManager"
            value={values.reportingManager}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Name and Contact Details"
          />
        </Form.Group>
        <Form.Group controlId="reasonForLeaving">
          <Form.Label>Reason for Leaving</Form.Label>
          <Form.Control
            type="text"
            name="reasonForLeaving"
            value={values.reasonForLeaving}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Reason for Leaving"
          />
        </Form.Group>
        <Form.Group controlId="payslips">
          <Form.Label>Upload Payslips</Form.Label>
          <Form.Control
            type="file"
            name="payslips"
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="relievingLetters">
          <Form.Label>Upload Relieving Letters/Experience Certificates</Form.Label>
          <Form.Control
            type="file"
            name="relievingLetters"
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </Form.Group>


            
            {/* Identification Documents */}
        <h4>4. Identification Documents</h4>
        <Form.Group controlId="aadhaar">
          <Form.Label>Aadhaar Number<span style={{ color: "red" }}>*</span></Form.Label>
          <Form.Control
            type="text"
            name="aadhaar"
            value={values.aadhaar}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Aadhaar Number"
          />
        </Form.Group>
        <Form.Group controlId="pan">
          <Form.Label>PAN<span style={{ color: "red" }}>*</span></Form.Label>
          <Form.Control
            type="text"
            name="pan"
            value={values.pan}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="PAN"
          />
        </Form.Group>
        <Form.Group controlId="passport">
          <Form.Label>Passport Number</Form.Label>
          <Form.Control
            type="text"
            name="passport"
            value={values.passport}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Passport Number"
          />
        </Form.Group>
        <Form.Group controlId="voterId">
          <Form.Label>Voter ID</Form.Label>
          <Form.Control
            type="text"
            name="voterId"
            value={values.voterId}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Voter ID"
          />
        </Form.Group>
        <Form.Group controlId="drivingLicense">
          <Form.Label>Driving License (optional)</Form.Label>
          <Form.Control
            type="text"
            name="drivingLicense"
            value={values.drivingLicense}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Driving License"
          />
        </Form.Group>
            
        <Form.Group controlId="idDocuments">
          <Form.Label>Upload Copies of Identification Documents</Form.Label>
          <Form.Control
            type="file"
            name="idDocuments"
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </Form.Group>


            {/* Point of Contact */}
            <h4>5. Point of Contact</h4>
            <Form.Group controlId="reference1">
              <Form.Label>Reference 1<span style={{ color: "red" }}>*</span></Form.Label>
              <Form.Control
                type="text"
                name="reference1"
                value={values.reference1}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Enter Reference 1 details"
                isInvalid={touched.reference1 && errors.reference1}
              />
              <Form.Control.Feedback type="invalid">{errors.reference1}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="reference2">
              <Form.Label>Reference 2</Form.Label>
              <Form.Control
                type="text"
                name="reference2"
                value={values.reference2}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Enter Reference 2 details (optional)"
              />
            </Form.Group>
            

            {/* Consent and Declaration */}
            <h4>6. Consent and Declaration</h4>
            <Form.Group controlId="consent">
              <Form.Check
                type="checkbox"
                label="I consent to verify the details provided and acknowledge that false information can result in termination."
                name="consent"
                checked={values.consent}
                onChange={handleChange}
                isInvalid={touched.consent && errors.consent}
              />
              <Form.Control.Feedback type="invalid">{errors.consent}</Form.Control.Feedback>
            </Form.Group>
            

            {/* Submit Button */}
            <Button variant="primary" type="submit" className="submit-btn">
              Submit
            </Button>
            <button className="btn btn-secondary back-btn" onClick={handleBack}>
          Back
        </button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default MyAccount;
