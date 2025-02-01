import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import '../styles/EmployeeOnboard.css';

const EmployeeOnboard = () => {
  const handleBack = () => {
    window.history.back(); // Go to the previous page in the history
  };

  // Validation Schema
  const validationSchema = Yup.object({
    // Personal Information
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

    // Educational Details
    highestQualification: Yup.string().required("Qualification is required"),
    institution: Yup.string().required("Institution/University is required"),
    graduationYear: Yup.number()
      .min(1900, "Enter a valid year")
      .max(new Date().getFullYear(), "Enter a valid year")
      .required("Year of Graduation is required"),
    certificates: Yup.mixed().required("Certificates are required"),

    // Employment Details
    previousEmployer: Yup.string().required("Previous Employer is required"),
    designation: Yup.string().required("Designation is required"),
    employmentDuration: Yup.string().required("Employment Duration is required"),
    reportingManager: Yup.string(),
    reasonForLeaving: Yup.string().required("Reason for Leaving is required"),
    payslips: Yup.mixed().required("Payslips are required"),
    relievingLetters: Yup.mixed().required("Relieving Letters are required"),

    // Identification Documents
    governmentId: Yup.string().required("Government ID is required"),
    passportNumber: Yup.string(),
    voterId: Yup.string(),
    drivingLicense: Yup.string(),
    idDocuments: Yup.mixed().required("ID Documents are required"),

    // Bank Account Details
    bankAccountNumber: Yup.string(),
    bankName: Yup.string(),
    ifscCode: Yup.string(),
    bankDocuments: Yup.mixed(),

    // Point of Contact
    reference1Name: Yup.string().required("Reference 1 Name is required"),
    reference1Designation: Yup.string().required("Reference 1 Designation is required"),
    reference1Relationship: Yup.string().required("Reference 1 Relationship is required"),
    reference1Contact: Yup.string().required("Reference 1 Contact is required"),
    reference2Name: Yup.string(),
    reference2Designation: Yup.string(),
    reference2Relationship: Yup.string(),
    reference2Contact: Yup.string(),

    // Consent and Declaration
    consent: Yup.boolean().oneOf([true], "You must consent to the terms").required("Consent is required"),
  });

  // Formik Initialization
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      // Personal Information
      fullName: "",
      dateOfBirth: "",
      gender: "",
      nationality: "",
      maritalStatus: "",
      contactNumber: "",
      email: "",
      permanentAddress: "",
      currentAddress: "",

      // Educational Details
      highestQualification: "",
      institution: "",
      graduationYear: "",
      certificates: null,

      // Employment Details
      previousEmployer: "",
      designation: "",
      employmentDuration: "",
      reportingManager: "",
      reasonForLeaving: "",
      payslips: null,
      relievingLetters: null,

      // Identification Documents
      governmentId: "",
      passportNumber: "",
      voterId: "",
      drivingLicense: "",
      idDocuments: null,

      // Bank Account Details
      bankAccountNumber: "",
      bankName: "",
      ifscCode: "",
      bankDocuments: null,

      // Point of Contact
      reference1Name: "",
      reference1Designation: "",
      reference1Relationship: "",
      reference1Contact: "",
      reference2Name: "",
      reference2Designation: "",
      reference2Relationship: "",
      reference2Contact: "",

      // Consent and Declaration
      consent: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Submitted", values);
      alert("Form Submitted Successfully");
    },
  });

  return (
    <Container fluid className="employee-onboard-container">
      <Row className="justify-content-center">
        <Col lg={10} md={12} xs={12}>
          <h2 className="employee-onboard-title">Employee Onboarding Form</h2>
          <Form noValidate onSubmit={handleSubmit} className="employee-onboard-form">
            {/* Personal Information */}
            <h4 className="employee-onboard-section-title">1. Personal Information</h4>
            <Row>
              <Col lg={6} md={12} xs={12}>
                <Form.Group controlId="fullName" className="employee-onboard-form-group">
                  <Form.Label>Full Name<span className="employee-onboard-required">*</span></Form.Label>
                  <Form.Control
                    type="text"
                    name="fullName"
                    value={values.fullName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    isInvalid={touched.fullName && errors.fullName}
                    className="employee-onboard-input"
                  />
                  <Form.Control.Feedback type="invalid" className="employee-onboard-error">
                    {errors.fullName}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col lg={6} md={12} xs={12}>
                <Form.Group controlId="dateOfBirth" className="employee-onboard-form-group">
                  <Form.Label>Date of Birth<span className="employee-onboard-required">*</span></Form.Label>
                  <Form.Control
                    type="date"
                    name="dateOfBirth"
                    value={values.dateOfBirth}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={touched.dateOfBirth && errors.dateOfBirth}
                    className="employee-onboard-input"
                  />
                  <Form.Control.Feedback type="invalid" className="employee-onboard-error">
                    {errors.dateOfBirth}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col lg={6} md={12} xs={12}>
                <Form.Group controlId="gender" className="employee-onboard-form-group">
                  <Form.Label>Gender<span className="employee-onboard-required">*</span></Form.Label>
                  <Form.Control
                    as="select"
                    name="gender"
                    value={values.gender}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={touched.gender && errors.gender}
                    className="employee-onboard-input"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid" className="employee-onboard-error">
                    {errors.gender}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col lg={6} md={12} xs={12}>
                <Form.Group controlId="nationality" className="employee-onboard-form-group">
                  <Form.Label>Nationality<span className="employee-onboard-required">*</span></Form.Label>
                  <Form.Control
                    type="text"
                    name="nationality"
                    value={values.nationality}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter your nationality"
                    isInvalid={touched.nationality && errors.nationality}
                    className="employee-onboard-input"
                  />
                  <Form.Control.Feedback type="invalid" className="employee-onboard-error">
                    {errors.nationality}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col lg={6} md={12} xs={12}>
                <Form.Group controlId="maritalStatus" className="employee-onboard-form-group">
                  <Form.Label>Marital Status<span className="employee-onboard-required">*</span></Form.Label>
                  <Form.Control
                    as="select"
                    name="maritalStatus"
                    value={values.maritalStatus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={touched.maritalStatus && errors.maritalStatus}
                    className="employee-onboard-input"
                  >
                    <option value="">Select Marital Status</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widowed">Widowed</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid" className="employee-onboard-error">
                    {errors.maritalStatus}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col lg={6} md={12} xs={12}>
                <Form.Group controlId="contactNumber" className="employee-onboard-form-group">
                  <Form.Label>Contact Number<span className="employee-onboard-required">*</span></Form.Label>
                  <Form.Control
                    type="tel"
                    name="contactNumber"
                    value={values.contactNumber}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter your contact number"
                    isInvalid={touched.contactNumber && errors.contactNumber}
                    className="employee-onboard-input"
                  />
                  <Form.Control.Feedback type="invalid" className="employee-onboard-error">
                    {errors.contactNumber}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col lg={6} md={12} xs={12}>
                <Form.Group controlId="email" className="employee-onboard-form-group">
                  <Form.Label>Email Address<span className="employee-onboard-required">*</span></Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    isInvalid={touched.email && errors.email}
                    className="employee-onboard-input"
                  />
                  <Form.Control.Feedback type="invalid" className="employee-onboard-error">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col lg={6} md={12} xs={12}>
                <Form.Group controlId="permanentAddress" className="employee-onboard-form-group">
                  <Form.Label>Permanent Address<span className="employee-onboard-required">*</span></Form.Label>
                  <Form.Control
                    type="text"
                    name="permanentAddress"
                    value={values.permanentAddress}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter your permanent address"
                    isInvalid={touched.permanentAddress && errors.permanentAddress}
                    className="employee-onboard-input"
                  />
                  <Form.Control.Feedback type="invalid" className="employee-onboard-error">
                    {errors.permanentAddress}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col lg={12} md={12} xs={12}>
                <Form.Group controlId="currentAddress" className="employee-onboard-form-group">
                  <Form.Label>Current Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="currentAddress"
                    value={values.currentAddress}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter your current address"
                    className="employee-onboard-input"
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Educational Details */}
            <h4 className="employee-onboard-section-title">2. Educational Details</h4>
            <Row>
              <Col lg={6} md={12} xs={12}>
                <Form.Group controlId="highestQualification" className="employee-onboard-form-group">
                  <Form.Label>Highest Qualification<span className="employee-onboard-required">*</span></Form.Label>
                  <Form.Control
                    type="text"
                    name="highestQualification"
                    value={values.highestQualification}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Degree/Diploma"
                    isInvalid={touched.highestQualification && errors.highestQualification}
                    className="employee-onboard-input"
                  />
                  <Form.Control.Feedback type="invalid" className="employee-onboard-error">
                    {errors.highestQualification}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col lg={6} md={12} xs={12}>
                <Form.Group controlId="institution" className="employee-onboard-form-group">
                  <Form.Label>Institution/University<span className="employee-onboard-required">*</span></Form.Label>
                  <Form.Control
                    type="text"
                    name="institution"
                    value={values.institution}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Institution/University"
                    isInvalid={touched.institution && errors.institution}
                    className="employee-onboard-input"
                  />
                  <Form.Control.Feedback type="invalid" className="employee-onboard-error">
                    {errors.institution}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col lg={6} md={12} xs={12}>
                <Form.Group controlId="graduationYear" className="employee-onboard-form-group">
                  <Form.Label>Year of Graduation<span className="employee-onboard-required">*</span></Form.Label>
                  <Form.Control
                    type="number"
                    name="graduationYear"
                    value={values.graduationYear}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Year of Graduation"
                    isInvalid={touched.graduationYear && errors.graduationYear}
                    className="employee-onboard-input"
                  />
                  <Form.Control.Feedback type="invalid" className="employee-onboard-error">
                    {errors.graduationYear}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col lg={6} md={12} xs={12}>
                <Form.Group controlId="certificates" className="employee-onboard-form-group">
                  <Form.Label>Upload Certificates/Mark Sheets<span className="employee-onboard-required">*</span></Form.Label>
                  <Form.Control
                    type="file"
                    name="certificates"
                    onChange={(e) => setFieldValue("certificates", e.target.files[0])}
                    isInvalid={touched.certificates && errors.certificates}
                    className="employee-onboard-input"
                  />
                  <Form.Control.Feedback type="invalid" className="employee-onboard-error">
                    {errors.certificates}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            {/* Employment Details */}
            <h4 className="employee-onboard-section-title">3. Employment Details</h4>
            <Row>
              <Col lg={6} md={12} xs={12}>
                <Form.Group controlId="previousEmployer" className="employee-onboard-form-group">
                  <Form.Label>Previous Employer<span className="employee-onboard-required">*</span></Form.Label>
                  <Form.Control
                    type="text"
                    name="previousEmployer"
                    value={values.previousEmployer}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Previous Employer"
                    isInvalid={touched.previousEmployer && errors.previousEmployer}
                    className="employee-onboard-input"
                  />
                  <Form.Control.Feedback type="invalid" className="employee-onboard-error">
                    {errors.previousEmployer}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col lg={6} md={12} xs={12}>
                <Form.Group controlId="designation" className="employee-onboard-form-group">
                  <Form.Label>Designation<span className="employee-onboard-required">*</span></Form.Label>
                  <Form.Control
                    type="text"
                    name="designation"
                    value={values.designation}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Designation"
                    isInvalid={touched.designation && errors.designation}
                    className="employee-onboard-input"
                  />
                  <Form.Control.Feedback type="invalid" className="employee-onboard-error">
                    {errors.designation}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col lg={6} md={12} xs={12}>
                <Form.Group controlId="employmentDuration" className="employee-onboard-form-group">
                  <Form.Label>Employment Duration<span className="employee-onboard-required">*</span></Form.Label>
                  <Form.Control
                    type="text"
                    name="employmentDuration"
                    value={values.employmentDuration}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Start and End Dates"
                    isInvalid={touched.employmentDuration && errors.employmentDuration}
                    className="employee-onboard-input"
                  />
                  <Form.Control.Feedback type="invalid" className="employee-onboard-error">
                    {errors.employmentDuration}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col lg={6} md={12} xs={12}>
                <Form.Group controlId="reportingManager" className="employee-onboard-form-group">
                  <Form.Label>Reporting Manager/HR Contact</Form.Label>
                  <Form.Control
                    type="text"
                    name="reportingManager"
                    value={values.reportingManager}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Name and Contact Details"
                    className="employee-onboard-input"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col lg={6} md={12} xs={12}>
                <Form.Group controlId="reasonForLeaving" className="employee-onboard-form-group">
                  <Form.Label>Reason for Leaving<span className="employee-onboard-required">*</span></Form.Label>
                  <Form.Control
                    type="text"
                    name="reasonForLeaving"
                    value={values.reasonForLeaving}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Reason for Leaving"
                    isInvalid={touched.reasonForLeaving && errors.reasonForLeaving}
                    className="employee-onboard-input"
                  />
                  <Form.Control.Feedback type="invalid" className="employee-onboard-error">
                    {errors.reasonForLeaving}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col lg={6} md={12} xs={12}>
                <Form.Group controlId="payslips" className="employee-onboard-form-group">
                  <Form.Label>Payslips of Last Organisation<span className="employee-onboard-required">*</span></Form.Label>
                  <Form.Control
                    type="file"
                    name="payslips"
                    onChange={(e) => setFieldValue("payslips", e.target.files[0])}
                    isInvalid={touched.payslips && errors.payslips}
                    className="employee-onboard-input"
                  />
                  <Form.Control.Feedback type="invalid" className="employee-onboard-error">
                    {errors.payslips}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col lg={12} md={12} xs={12}>
                <Form.Group controlId="relievingLetters" className="employee-onboard-form-group">
                  <Form.Label>Upload Relieving Letters/Experience Certificates<span className="employee-onboard-required">*</span></Form.Label>
                  <Form.Control
                    type="file"
                    name="relievingLetters"
                    onChange={(e) => setFieldValue("relievingLetters", e.target.files[0])}
                    isInvalid={touched.relievingLetters && errors.relievingLetters}
                    className="employee-onboard-input"
                  />
                  <Form.Control.Feedback type="invalid" className="employee-onboard-error">
                    {errors.relievingLetters}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            {/* Identification Documents */}
            <h4 className="employee-onboard-section-title">4. Identification Documents</h4>
            <Row>
              <Col lg={6} md={12} xs={12}>
                <Form.Group controlId="governmentId" className="employee-onboard-form-group">
                  <Form.Label>Government ID<span className="employee-onboard-required">*</span></Form.Label>
                  <Form.Control
                    type="text"
                    name="governmentId"
                    value={values.governmentId}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Aadhaar, PAN, etc."
                    isInvalid={touched.governmentId && errors.governmentId}
                    className="employee-onboard-input"
                  />
                  <Form.Control.Feedback type="invalid" className="employee-onboard-error">
                    {errors.governmentId}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col lg={6} md={12} xs={12}>
                <Form.Group controlId="passportNumber" className="employee-onboard-form-group">
                  <Form.Label>Passport Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="passportNumber"
                    value={values.passportNumber}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Passport Number"
                    className="employee-onboard-input"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col lg={6} md={12} xs={12}>
                <Form.Group controlId="voterId" className="employee-onboard-form-group">
                  <Form.Label>Voter ID</Form.Label>
                  <Form.Control
                    type="text"
                    name="voterId"
                    value={values.voterId}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Voter ID"
                    className="employee-onboard-input"
                  />
                </Form.Group>
              </Col>
              <Col lg={6} md={12} xs={12}>
                <Form.Group controlId="drivingLicense" className="employee-onboard-form-group">
                  <Form.Label>Driving License (optional)</Form.Label>
                  <Form.Control
                    type="text"
                    name="drivingLicense"
                    value={values.drivingLicense}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Driving License"
                    className="employee-onboard-input"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col lg={12} md={12} xs={12}>
                <Form.Group controlId="idDocuments" className="employee-onboard-form-group">
                  <Form.Label>Upload Copies of Identification Documents<span className="employee-onboard-required">*</span></Form.Label>
                  <Form.Control
                    type="file"
                    name="idDocuments"
                    onChange={(e) => setFieldValue("idDocuments", e.target.files[0])}
                    isInvalid={touched.idDocuments && errors.idDocuments}
                    className="employee-onboard-input"
                  />
                  <Form.Control.Feedback type="invalid" className="employee-onboard-error">
                    {errors.idDocuments}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            {/* Bank Account Details */}
            <h4 className="employee-onboard-section-title">5. Bank Account Details (Optional for Payroll Verification)</h4>
            <Row>
              <Col lg={6} md={12} xs={12}>
                <Form.Group controlId="bankAccountNumber" className="employee-onboard-form-group">
                  <Form.Label>Bank Account Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="bankAccountNumber"
                    value={values.bankAccountNumber}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Bank Account Number"
                    className="employee-onboard-input"
                  />
                </Form.Group>
              </Col>
              <Col lg={6} md={12} xs={12}>
                <Form.Group controlId="bankName" className="employee-onboard-form-group">
                  <Form.Label>Bank Name and Branch</Form.Label>
                  <Form.Control
                    type="text"
                    name="bankName"
                    value={values.bankName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Bank Name and Branch"
                    className="employee-onboard-input"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col lg={6} md={12} xs={12}>
                <Form.Group controlId="ifscCode" className="employee-onboard-form-group">
                  <Form.Label>IFSC Code</Form.Label>
                  <Form.Control
                    type="text"
                    name="ifscCode"
                    value={values.ifscCode}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="IFSC Code"
                    className="employee-onboard-input"
                  />
                </Form.Group>
              </Col>
              <Col lg={6} md={12} xs={12}>
                <Form.Group controlId="bankDocuments" className="employee-onboard-form-group">
                  <Form.Label>Upload Bank Documents</Form.Label>
                  <Form.Control
                    type="file"
                    name="bankDocuments"
                    onChange={(e) => setFieldValue("bankDocuments", e.target.files[0])}
                    className="employee-onboard-input"
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Point of Contact */}
            <h4 className="employee-onboard-section-title">6. Point of Contact</h4>
            <Row>
              <Col lg={6} md={12} xs={12}>
                <Form.Group controlId="reference1Name" className="employee-onboard-form-group">
                  <Form.Label>Reference 1: Name<span className="employee-onboard-required">*</span></Form.Label>
                  <Form.Control
                    type="text"
                    name="reference1Name"
                    value={values.reference1Name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Name"
                    isInvalid={touched.reference1Name && errors.reference1Name}
                    className="employee-onboard-input"
                  />
                  <Form.Control.Feedback type="invalid" className="employee-onboard-error">
                    {errors.reference1Name}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col lg={6} md={12} xs={12}>
                <Form.Group controlId="reference1Designation" className="employee-onboard-form-group">
                  <Form.Label>Reference 1: Designation<span className="employee-onboard-required">*</span></Form.Label>
                  <Form.Control
                    type="text"
                    name="reference1Designation"
                    value={values.reference1Designation}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Designation"
                    isInvalid={touched.reference1Designation && errors.reference1Designation}
                    className="employee-onboard-input"
                  />
                  <Form.Control.Feedback type="invalid" className="employee-onboard-error">
                    {errors.reference1Designation}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col lg={6} md={12} xs={12}>
                <Form.Group controlId="reference1Relationship" className="employee-onboard-form-group">
                  <Form.Label>Reference 1: Relationship<span className="employee-onboard-required">*</span></Form.Label>
                  <Form.Control
                    type="text"
                    name="reference1Relationship"
                    value={values.reference1Relationship}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Relationship"
                    isInvalid={touched.reference1Relationship && errors.reference1Relationship}
                    className="employee-onboard-input"
                  />
                  <Form.Control.Feedback type="invalid" className="employee-onboard-error">
                    {errors.reference1Relationship}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col lg={6} md={12} xs={12}>
                <Form.Group controlId="reference1Contact" className="employee-onboard-form-group">
                  <Form.Label>Reference 1: Contact Details<span className="employee-onboard-required">*</span></Form.Label>
                  <Form.Control
                    type="text"
                    name="reference1Contact"
                    value={values.reference1Contact}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Contact Details"
                    isInvalid={touched.reference1Contact && errors.reference1Contact}
                    className="employee-onboard-input"
                  />
                  <Form.Control.Feedback type="invalid" className="employee-onboard-error">
                    {errors.reference1Contact}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col lg={6} md={12} xs={12}>
                <Form.Group controlId="reference2Name" className="employee-onboard-form-group">
                  <Form.Label>Reference 2: Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="reference2Name"
                    value={values.reference2Name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Name"
                    className="employee-onboard-input"
                  />
                </Form.Group>
              </Col>
              <Col lg={6} md={12} xs={12}>
                <Form.Group controlId="reference2Designation" className="employee-onboard-form-group">
                  <Form.Label>Reference 2: Designation</Form.Label>
                  <Form.Control
                    type="text"
                    name="reference2Designation"
                    value={values.reference2Designation}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Designation"
                    className="employee-onboard-input"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col lg={6} md={12} xs={12}>
                <Form.Group controlId="reference2Relationship" className="employee-onboard-form-group">
                  <Form.Label>Reference 2: Relationship</Form.Label>
                  <Form.Control
                    type="text"
                    name="reference2Relationship"
                    value={values.reference2Relationship}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Relationship"
                    className="employee-onboard-input"
                  />
                </Form.Group>
              </Col>
              <Col lg={6} md={12} xs={12}>
                <Form.Group controlId="reference2Contact" className="employee-onboard-form-group">
                  <Form.Label>Reference 2: Contact Details</Form.Label>
                  <Form.Control
                    type="text"
                    name="reference2Contact"
                    value={values.reference2Contact}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Contact Details"
                    className="employee-onboard-input"
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Consent and Declaration */}
            <h4 className="employee-onboard-section-title">7. Consent and Declaration</h4>
            <Row>
              <Col>
                <Form.Group controlId="consent" className="employee-onboard-form-group">
                  <Form.Check
                    type="checkbox"
                    label="I consent to verify the details provided and acknowledge that false information can result in termination."
                    name="consent"
                    checked={values.consent}
                    onChange={handleChange}
                    isInvalid={touched.consent && errors.consent}
                    className="employee-onboard-checkbox"
                  />
                  <Form.Control.Feedback type="invalid" className="employee-onboard-error">
                    {errors.consent}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            {/* Submit and Back Buttons */}
            <Row>
              <Col>
                <Button variant="primary" type="submit" className="employee-onboard-submit-btn">
                  Submit
                </Button>
              </Col>
              <Col>
                <Button className="employee-onboard-back-btn" onClick={handleBack}>
                  Back
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EmployeeOnboard;
