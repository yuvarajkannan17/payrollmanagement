import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const EmployeeDashboard = () => {
  return (
    <div
      className="min-vh-100 d-flex flex-column"
      style={{ backgroundColor: "rgb(245, 255, 215)" }}
    >
      {/* Common Header */}
      <header className="text-center py-3 bg-white text-dark">
        <h1>Employee Dashboard</h1>
      </header>

      {/* Content Section */}
      <div className="d-flex flex-column flex-md-row flex-grow-1">
        {/* Left Navigation (Text) */}
        <div className="d-flex flex-column justify-content-center align-items-start p-3 w-100 w-md-50">
          <nav className="w-100">
            <ul className="nav flex-column">
              
              <li className="nav-item mb-3">
                <Link
                  to="/employee/myaccount"
                  className="btn btn-dark w-100"
                  style={{ minWidth: "200px" }}
                >
                  My Account 
                </Link>
              </li>
              <li className="nav-item mb-3">
                <Link
                  to="/employee/mysalary"
                  className="btn btn-dark w-100"
                  style={{ minWidth: "200px" }}
                >
                  My Salary 
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Right Content (Image) */}
        <div className="d-flex justify-content-center align-items-center p-3 w-100 w-md-50">
          <img
            src="/assets/payroll.jpeg"
            alt="Employee Dashboard"
            className="img-fluid rounded shadow"
            style={{ maxWidth: "80%", maxHeight: "80%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
