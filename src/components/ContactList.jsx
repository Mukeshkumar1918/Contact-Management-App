// ✅ ContactList.jsx
// Displays all contacts, search functionality, and buttons for view, edit, and delete actions

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function ContactList({
  contactList,
  handleView,
  handleDelete,
  handleEdit,
  handleAdd,
}) {
  // 🔹 If no contacts are available, show a message
  if (!contactList) {
    return <p>No contacts available</p>;
  }

  // 🔹 State for handling search input
  const [searchTerm, setSearchTerm] = useState("");

  // 🔹 Update search term whenever user types
  function searcharea(e) {
    const search = e.target.value;
    setSearchTerm(search);
  }

  // 🔹 Filter contacts dynamically based on name, email, or mobile
  const filteredContacts = contactList.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.mobile.includes(searchTerm)
  );

  return (
    <div className="container rounded">
      {/* 🔹 Header section with Add Contact button */}
      <div
        className="d-flex align-items-center p-4 "
        style={{ justifyContent: "center" }}
      >
        <button
          className="btn btn-primary w-25 addbutton "
          onClick={handleAdd}
          
        >
          Add New Contact <i className="bi bi-plus-circle"></i>
        </button>
      </div>

      {/* 🔹 Search bar to find contacts */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          type="search"
          placeholder="Search contact here..."
          className="form-control w-50 my-3 ms-5"
          onChange={searcharea}
          value={searchTerm}
        />
      </div>

      {/* 🔹 Main contact list container */}
      <div className="contact-list-container">
        {filteredContacts.map((list) => (
          <div className="contact-list" key={list.id}>
            {/* Each contact card */}
            <div className="list d-flex align-items-center justify-content-between w-75 bg-light text-dark gap-1 mb-2 ps-3 pe-3 rounded">
              {/* Contact ID */}
              <p>{list.id}</p>

              {/* 🔹 Contact avatar + name + mobile */}
              <div className="d-flex align-items-center justify-content-center">
                <i className="bi bi-person-circle fs-3 me-3"></i>
                <div className="contact-name-column">
                  <p>{list.name}</p>
                  <p>{list.mobile}</p>
                </div>
              </div>

              {/* 🔹 Contact email */}
              <p>{list.email}</p>

              {/* 🔹 Additional address field if available */}
              <p>{list.add}</p>

              {/* 🔹 Action buttons (View, Edit, Delete) */}
              <div className="d-flex gap-2">
                {/* View Button */}
                <button
                  type="button"
                  className="btn"
                  onClick={() => handleView(list)}
                >
                  <i className="bi bi-eye"></i>
                </button>

                {/* Edit Button */}
                <button
                  type="button"
                  className="btn "
                  onClick={() => handleEdit(list)}
                >
                  <i className="bi bi-pencil"></i>
                </button>

                {/* Delete Button */}
                <button
                  type="button"
                  className="btn"
                  onClick={() => handleDelete(list.id)}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            </div>
          </div>
        ))}

        {filteredContacts?.length <= 0 && (
          <p style={{ textAlign: "center" }}>No Record found</p>
        )}
      </div>

      {/* Optional Bootstrap modal trigger (commented) */}
      {/* 
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> 
      */}
    </div>
  );
}

export default ContactList;
