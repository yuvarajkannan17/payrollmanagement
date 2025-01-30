import "../styles/SalaryReport.css";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit, FaTrash, FaDownload } from "react-icons/fa";

function SalaryReport() {
    const navigate = useNavigate();
    const handleBack = () => {
        window.history.back();  // Go to the previous page in the history
    };
    function goToEditPage() {
        navigate("/hr/editsalaryentry")
    }

    function handleDelete() {

    }

    function handleDownload(){

    }

    return (
        <div className="salary-report-wrapper">
            <div className="container salaryreport-container">
                <div className="salaryreport-header">
                    <h2>Salary Report</h2>
                    <Link to="/hr/newsalaryentry" className="add-salary-btn">Add Salary</Link>
                </div>

                {/* Responsive Table Wrapper */}
                <div className="table-responsive">
                    <table className="table table-bordered salaryreport-table">
                        <thead >
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
                            <tr>
                                <td>1</td>
                                <td>John Doe</td>
                                <td>January</td>
                                <td>22</td>
                                <td>27000</td>
                                <td>25000</td>
                                <td className="action-buttons">
                                    <button className="icon-btn" onClick={goToEditPage}>
                                        <FaEdit className="edit-icon" /> {/* Edit Icon */}
                                    </button>
                                    <button className="icon-btn" onClick={handleDownload}>
                                        <FaDownload className="download-icon" /> {/* Download Icon */}
                                    </button>
                                    <button className="icon-btn" onClick={handleDelete}>
                                        <FaTrash className="delete-icon" /> {/* Delete Icon */}
                                    </button>
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
