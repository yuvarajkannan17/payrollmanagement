import React from "react";
import "../styles/SuccessModal.css"

const SuccessModal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Success!</h3>
        <p>{message}</p>
        <button onClick={onClose} className="modal-close-btn">
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;