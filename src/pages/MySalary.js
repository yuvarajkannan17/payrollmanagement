import React from "react";
import "../styles/MySalary.css";

const salarySlips = [
  { month: "January 2023", amount: "3,000", downloadUrl: "#" },
  { month: "February 2023", amount: "3,000", downloadUrl: "#" },
  { month: "March 2023", amount: "3,000", downloadUrl: "#" },
];

const MySalary = () => {
  return (
    <div className="mysalary-wrapper">
      <div className="mysalary-container">
        <h1 className="mysalary-title">My Salary</h1>
        <table className="mysalary-table">
          <thead>
            <tr>
              <th>Month</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {salarySlips.map((slip, index) => (
              <tr key={index}>
                <td>{slip.month}</td>
                <td>{slip.amount}</td>
                <td className="action-buttons">
                  <button className="view-btn">View</button>
                  <button
                    className="download-btn"
                    onClick={() => window.open(slip.downloadUrl, "_blank")}
                  >
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="back-btn" onClick={() => window.history.back()}>
          Back
        </button>
      </div>
    </div>
  );
};

export default MySalary;
