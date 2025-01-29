import React, { useState } from 'react';
import '../styles/EmployeeList.css';  // Import the CSS file for styles

const EmployeeList = () => {
    const [employees, setEmployees] = useState([
        {
            "id": 1,
            "employeeId": "EMP001",
            "name": "John",
            "email": "john@example.com",
            "phone": "7890838221",
            "city": "Chennai"
        },
        {
            "id": 2,
            "employeeId": "EMP002",
            "name": "Smith",
            "email": "smith@example.com",
            "phone": "9876543210",
            "city": "Hyderabad"
        }
    ]);

    // Backward button function
    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <div className="employee-list-wrapper">
            <div className="container employee-list-container">
                <h2 className="employee-list-title">Employee List</h2>

                {/* Responsive Table Wrapper */}
                <div className="table-responsive">
                    <table className="table table-striped table-bordered table-hover employee-list-table">
                        <thead className='employee-list-header'>
                            <tr>
                                <th>Employee ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((employee) => (
                                <tr key={employee.id}>
                                    <td>{employee.employeeId}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.phone}</td>
                                    <td>{employee.city}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Backward Button */}
                <button className="btn back-btn" onClick={handleGoBack}>Back</button>
            </div>
        </div>
    );
};

export default EmployeeList;
