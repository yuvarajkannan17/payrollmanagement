import "../styles/SalaryReport.css";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit, FaTrash, FaDownload } from "react-icons/fa";
import { useState } from "react";

function SalaryReport() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    // Mock data for recent employee salary reports
    const salaryReports = [
        { id: "EMP001", name: "John Doe", month: "January", paidDays: 22, grossIncome: 27000, netIncome: 25000 },
        { id: "EMP002", name: "Jane Smith", month: "February", paidDays: 20, grossIncome: 28000, netIncome: 26000 },
        { id: "EMP003", name: "Alice Johnson", month: "March", paidDays: 21, grossIncome: 29000, netIncome: 27000 },
        { id: "EMP004", name: "Bob Brown", month: "April", paidDays: 23, grossIncome: 30000, netIncome: 28000 },
        { id: "EMP002", name: "Jane Smith", month: "March", paidDays: 20, grossIncome: 28000, netIncome: 26000 },
    ];

    const handleBack = () => {
        window.history.back();  // Go to the previous page in the history
    };

    const goToEditPage = () => {
        navigate("/hr/editsalaryentry");
    };

    const handleDelete = (id) => {
        // Handle delete logic here
        console.log(`Delete salary report with ID: ${id}`);
    };

    const handleDownload = (id) => {
        // Handle download logic here
        console.log(`Download salary report with ID: ${id}`);
    };

    const filteredReports = salaryReports.filter(report =>
        report.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        report.id.toString().includes(searchTerm)
    );

    return (
        <div className="salary-report-wrapper">
            <div className="container salaryreport-container">
                <div className="salaryreport-header">
                    <h2>Salary Report</h2>
                    <Link to="/hr/newsalaryentry" className="add-salary-btn">Add Salary</Link>
                </div>

                {/* Search Input */}
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search by Name or Employee ID"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                </div>

                {/* Responsive Table Wrapper */}
                <div className="table-responsive">
                    <table className="table table-bordered salaryreport-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Month</th>
                                <th>Total Paid Days</th>
                                <th>Gross Income</th>
                                <th>Net Income</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredReports.length > 0 ? (
                                filteredReports.map(report => (
                                    <tr key={report.id}>
                                        <td>{report.id}</td>
                                        <td>{report.name}</td>
                                        <td>{report.month}</td>
                                        <td>{report.paidDays}</td>
                                        <td>{report.grossIncome}</td>
                                        <td>{report.netIncome}</td>
                                        <td className="action-buttons">
                                            <button className="icon-btn" onClick={goToEditPage}>
                                                <FaEdit className="edit-icon" /> {/* Edit Icon */}
                                            </button>
                                            <button className="icon-btn" onClick={() => handleDownload(report.id)}>
                                                <FaDownload className="download-icon" /> {/* Download Icon */}
                                            </button>
                                            <button className="icon-btn" onClick={() => handleDelete(report.id)}>
                                                <FaTrash className="delete-icon" /> {/* Delete Icon */}
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="text-center no-records">
                                        No records found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Back Button */}
                <button className="btn btn-secondary back-btn" onClick={handleBack}>
                    Back
                </button>
            </div>
        </div>
    );
}

export default SalaryReport;