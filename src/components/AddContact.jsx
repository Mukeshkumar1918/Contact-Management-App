// ✅ AddContact.jsx
// Used to add a new contact via a Bootstrap modal form

import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function AddContact({ onAdd, onClose }) {
  // 🔹 Control visibility of Add Contact modal
  const [showModal, setShowModal] = useState(true);

  // 🔹 Store new contact input data
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  // 🔹 Update state as user types in input fields
  const handleChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  // 🔹 Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    onAdd(newContact); // Pass new contact to parent (App.jsx)
  };

  return (
    <Modal
      show={showModal}
      onHide={() => {
        // Close modal when user clicks outside or on close button
        setShowModal(false);
        onClose();
      }}
    >
      {/* 🔹 Modal Header */}
      <Modal.Header closeButton>
        <Modal.Title>Add New Contact</Modal.Title>
      </Modal.Header>

      {/* 🔹 Add Contact Form */}
      <form onSubmit={handleSubmit}>
        <Modal.Body>
          {/* Name Input */}
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={newContact.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={newContact.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Mobile Input */}
          <div className="mb-3">
            <label className="form-label">Mobile</label>
            <input
              type="text"
              name="mobile"
              className="form-control"
              value={newContact.mobile}
              onChange={handleChange}
              required
            />
          </div>
        </Modal.Body>

        {/* 🔹 Modal Footer Buttons */}
        <Modal.Footer>
          {/* Cancel Button */}
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>

          {/* Submit Button */}
          <Button variant="primary" type="submit">
            Add Contact
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default AddContact;
