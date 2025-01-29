import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import SignUpForm from "../component/SignUpForm";
import "../styles/EmployeeSignUp.css";

function EmployeeSignUp() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleGoBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <>
      <div className="employee_signup">
        <button onClick={handleGoBack} className="back-btn"> {/* Backward Button */}
          Back
        </button>
        <h4>Employee Registration</h4>
        <SignUpForm />
      </div>
    </>
  );
}

export default EmployeeSignUp;
