import React from 'react';
import { useNavigate } from 'react-router-dom';
import SalaryEntryForm from '../component/SalaryEntryForm';
import "../styles/SalaryEntryForm.css"
const NewSalaryEntry = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log('New Entry Data:', values);
    // Handle form submission for creating a new entry
    // Example: API call to save the data
  };

  return (
    <div className="new-entry-form-wrapper">
      <button onClick={() => navigate(-1)} className="back-button">
        Back
      </button>
      <SalaryEntryForm onSubmit={handleSubmit} />
    </div>
  );
};

export default NewSalaryEntry;