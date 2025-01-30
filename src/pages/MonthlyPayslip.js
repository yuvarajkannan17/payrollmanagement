import React from "react";
import { useNavigate } from "react-router-dom";
import { FaDownload } from "react-icons/fa"; // Import download icon
import "../styles/MonthlyPayslip.css"; // Import CSS for styling

const MonthlyPayslip = ({ employeeName }) => {
    const navigate = useNavigate();

    // Sample data for monthly payslips
    const monthlyPayslips = [
        {
            id: 1,
            month: "January 2023",
            totalWorkingDays: 22,
            grossEarning: 27000,
            netIncome: 25000,
        },
        {
            id: 2,
            month: "February 2023",
            totalWorkingDays: 20,
            grossEarning: 26000,
            netIncome: 24000,
        },
    ];

    // Handle download payslip
    const handleDownload = (payslipId) => {
        console.log(`Downloading payslip with ID: ${payslipId}`);
        // Add logic to download the payslip (e.g., generate PDF or CSV)
    };

    // Handle back button
    const handleBack = () => {
        navigate(-1); // Go back to the previous page
    };

    return (
        <div className="monthly-payslip-wrapper">
            <div className="container monthly-payslip-container">
                {/* Title with employee name */}
                <h2 className="monthly-payslip-title">{employeeName}Jhon Salary Report</h2>

                {/* Responsive Table Wrapper */}
                <div className="table-responsive">
                    <table className="table table-bordered monthly-payslip-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Month</th>
                                <th>Total Working Days</th>
                                <th>Gross Earning</th>
                                <th>Net Income</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {monthlyPayslips.length > 0 ? (
                                monthlyPayslips.map((payslip) => (
                                    <tr key={payslip.id}>
                                        <td>{payslip.id}</td>
                                        <td>{payslip.month}</td>
                                        <td>{payslip.totalWorkingDays}</td>
                                        <td>{payslip.grossEarning}</td>
                                        <td>{payslip.netIncome}</td>
                                        <td className="action-buttons">
                                            <button
                                                className="icon-btn"
                                                onClick={() => handleDownload(payslip.id)}
                                            >
                                                <FaDownload className="download-icon" /> {/* Download Icon */}
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="no-records-found">
                                        No records found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Back Button */}
                <button className="btn back-btn" onClick={handleBack}>
                    Back
                </button>
            </div>
        </div>
    );
};

export default MonthlyPayslip;