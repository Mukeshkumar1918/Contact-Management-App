import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function AddContact({ onAdd, onClose }) {
  const [showModal, setShowModal] = useState(true);
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(newContact);
  };

  return (
    <Modal
      show={showModal}
      onHide={() => {
        setShowModal(false);
        onClose();
      }}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Add New Contact</Modal.Title>
      </Modal.Header>

      <form onSubmit={handleSubmit}>
        <Modal.Body>
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

        <Modal.Footer className="d-flex flex-column flex-md-row gap-2">
          <Button variant="secondary" onClick={onClose} className="w-100 w-md-auto">
            Cancel
          </Button>
          <Button variant="primary" type="submit" className="w-100 w-md-auto">
            Add Contact
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default AddContact;
