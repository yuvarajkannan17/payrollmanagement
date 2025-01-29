import "../styles/SalaryReport.css";
import { Link } from "react-router-dom";

function SalaryReport() {
    const handleBack = () => {
        window.history.back();  // Go to the previous page in the history
    };

    return (
        <div className="salary-report-wrapper">
            <div className="container salaryreport-container">
                <div className="salaryreport-header">
                    <h2>Salary Report</h2>
                    <Link to="/hr/salaryentryform" className="add-salary-btn">Add Salary</Link>
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
                                <th>Basic</th>
                                <th>Gross</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>John Doe</td>
                                <td>January</td>
                                <td>22</td>
                                <td>$2000</td>
                                <td>$2500</td>
                                <td>$2700</td>
                                <td className="action-buttons">
                                    <button className="btn btn-primary btn-sm">Edit</button>
                                    <button className="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
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
