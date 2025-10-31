// ✅ EditContact.jsx
// Allows editing an existing contact using a Bootstrap modal with pre-filled data

import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function EditContact({ contact, onUpdate, onClose }) {
  // 🔹 State to control modal visibility
  const [showModal, setShowModal] = useState(false);

  // 🔹 Form state to hold editable contact details
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });

  // 🔹 When a contact is passed as a prop, populate form fields & open modal
  useEffect(() => {
    if (contact) {
      setFormData(contact);
      setShowModal(true);
    }
  }, [contact]);

  // 🔹 Handle input changes in form fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 Submit updated contact data to parent component
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    onUpdate(formData); // Call parent update function
    onClose(); // Close modal after updating
  };

  // 🔹 Return nothing if modal shouldn't be shown
  if (!showModal || !contact) return null;

  return (
    <Modal show={showModal} onHide={onClose}>
      {/* 🔹 Modal Header */}
      <Modal.Header closeButton>
        <Modal.Title>Edit Contact</Modal.Title>
      </Modal.Header>

      {/* 🔹 Contact Edit Form */}
      <form onSubmit={handleSubmit}>
        <Modal.Body>
          {/* Name Field */}
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Mobile Field */}
          <div className="mb-3">
            <label className="form-label">Mobile</label>
            <input
              type="text"
              name="mobile"
              className="form-control"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>
        </Modal.Body>

        {/* 🔹 Footer Buttons */}
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default EditContact;
