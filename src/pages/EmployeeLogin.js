import React from "react";
import Login from "../component/Login";
import "../styles/EmployeeLogin.css";

function EmployeeLogin() {
  return (
    <div className="employee-login-container">
      <h2 className="employee-login-heading">Employee Login</h2>
      <Login loginType="Employee" />
    </div>
  );
}

export default EmployeeLogin;
