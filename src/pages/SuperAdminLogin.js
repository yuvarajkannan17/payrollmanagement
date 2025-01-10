import React from "react";
import Login from "../component/Login";
import "../styles/EmployeeLogin.css";

function SuperAdminLogin() {
  return (
    <div className="employee-login-container">
      <h2 className="employee-login-heading">Super Admin Login</h2>
      <Login loginType="SuperAdmin" />
    </div>
  );
}

export default SuperAdminLogin;
