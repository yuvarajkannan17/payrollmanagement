import React from "react";
import Login from "../component/Login";
import "../styles/EmployeeLogin.css";

function HRLogin() {
  return (
    <div className="employee-login-container">
      <h2 className="employee-login-heading">HR Login</h2>
      <Login loginType="HR" />
    </div>
  );
}

export default HRLogin;
