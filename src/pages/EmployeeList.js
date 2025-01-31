import React, { useState } from 'react';
import '../styles/EmployeeList.css';  // Import the CSS file for styles
import { useNavigate } from 'react-router-dom';

const EmployeeList = () => {
   const navigate= useNavigate();
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

    const [searchQuery, setSearchQuery] = useState(""); // State for search query

    // Filter employees based on name or employee ID
    const filteredEmployees = employees.filter((employee) => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        return (
            employee.name.toLowerCase().includes(lowerCaseQuery) ||
            employee.employeeId.toLowerCase().includes(lowerCaseQuery)
        );
    });

    // Backward button function
    const handleGoBack = () => {
        window.history.back();
    };

    
   

    return (
        <div className="employee-list-wrapper">
            <div className="container employee-list-container">
                <h2 className="employee-list-title">Employee List</h2>

                {/* Search Input */}
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search by Name or Employee ID"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                </div>

                {/* Responsive Table Wrapper */}
                <div className="table-responsive">
                    {filteredEmployees.length > 0 ? (
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
                                {filteredEmployees.map((employee) => (
                                    <tr key={employee.id} >
                                        <td>{employee.employeeId}</td>
                                        <td>{employee.name}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.phone}</td>
                                        <td>{employee.city}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="no-records-found">
                            No records found.
                        </div>
                    )}
                </div>

                {/* Backward Button */}
                <button className="btn back-btn" onClick={handleGoBack}>Back</button>
            </div>
        </div>
    );
};

export default EmployeeList;