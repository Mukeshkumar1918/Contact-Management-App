// ✅ ViewContact.jsx
// Displays detailed information about a single contact inside a modal popup

import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button"; // Optional - can be used if you want footer buttons

function ViewContact({ selectedContact, onClose }) {
  // 🔹 State to control modal visibility
  const [showModal, setShowModal] = useState(false);

  // 🔹 Whenever a contact is selected, show the modal
  useEffect(() => {
    if (selectedContact) {
      setShowModal(true);
    }
  }, [selectedContact]);

  // 🔹 Prevent rendering if no contact is selected or modal is closed
  if (!showModal || !selectedContact) return null;

  return (
    <Modal show={showModal} onHide={onClose}>
      {/* 🔹 Modal Header */}
      <Modal.Header closeButton>
        <Modal.Title>Contact details</Modal.Title>
      </Modal.Header>

      {/* 🔹 Modal Body - shows full contact details */}
      <Modal.Body>
        {/* Bootstrap icon for profile look */}
        <i className="bi bi-person-circle fs-1 text-primary mb-3"></i>

        {/* Contact information section */}
        <div className="text-start px-4">
          <p className="mb-2">
            <strong>ID:</strong> {selectedContact.id}
          </p>
          <p className="mb-2">
            <strong>Name:</strong> {selectedContact.name}
          </p>
          <p className="mb-2">
            <strong>Email:</strong> {selectedContact.email}
          </p>
          <p className="mb-0">
            <strong>Mobile:</strong> {selectedContact.mobile}
          </p>
        </div>
      </Modal.Body>

      {/* 🔹 Optional Footer for additional buttons (commented for now) */}
      {/* 
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onClose}>
          Save Changes
        </Button>
      </Modal.Footer> 
      */}
    </Modal>
  );
}

export default ViewContact;
