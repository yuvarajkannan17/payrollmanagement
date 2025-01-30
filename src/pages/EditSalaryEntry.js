import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SalaryEntryForm from '../component/SalaryEntryForm';
import "../styles/SalaryEntryForm.css"
const EditSalaryEntry = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const existingData = location.state?.data; // Assuming data is passed via state

  const handleSubmit = (values) => {
    console.log('Updated Entry Data:', values);
    // Handle form submission for updating an existing entry
    // Example: API call to update the data
  };

  return (
    <div className="edit-entry-form-wrapper">
      <button onClick={() => navigate(-1)} className="back-button">
        Back
      </button>
      <SalaryEntryForm initialValues={existingData} onSubmit={handleSubmit} isEditMode={true} />
    </div>
  );
};

export default EditSalaryEntry;