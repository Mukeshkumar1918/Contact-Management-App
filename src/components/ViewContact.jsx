import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";

function ViewContact({ selectedContact, onClose }) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (selectedContact) setShowModal(true);
  }, [selectedContact]);

  if (!showModal || !selectedContact) return null;

  return (
    <Modal show={showModal} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Contact Details</Modal.Title>
      </Modal.Header>

      <Modal.Body className="text-center">
        <i className="bi bi-person-circle fs-1 text-primary mb-3"></i>
        <div className="text-start px-4">
          <p><strong>ID:</strong> {selectedContact.id}</p>
          <p><strong>Name:</strong> {selectedContact.name}</p>
          <p><strong>Email:</strong> {selectedContact.email}</p>
          <p><strong>Mobile:</strong> {selectedContact.mobile}</p>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ViewContact;
