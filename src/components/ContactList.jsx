import React, { useEffect, useState } from "react";

function ContactList({
  contactList,
  handleView,
  handleDelete,
  handleEdit,
  handleAdd,
}) {
  if (!contactList) {
    return <p>No contacts available</p>;
  }

  const [searchTerm, setSearchTerm] = useState("");

  function searcharea(e) {
    const search = e.target.value;
    setSearchTerm(search);
  }

  const filteredContacts = contactList.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.mobile.includes(searchTerm)
  );

  return (
    <div className="container">
      {/* Header area */}
      <div className="header">
        <div className="title">Contacts</div>

        <button className="addbutton" onClick={handleAdd} type="button">
          <i className="bi bi-plus-circle"></i>
          <span style={{ marginLeft: 6 }}>Add New Contact</span>
        </button>
      </div>

      {/* Search */}
      <div className="search-bar">
        <input
          type="search"
          placeholder="Search contact here..."
          className="form-control search-input"
          onChange={searcharea}
          value={searchTerm}
        />
      </div>

      {/* Contact grid/list */}
      <div className="contact-list-container">
        {filteredContacts.map((list) => (
          <div className="contact-list" key={list.id}>
            <div className="list">
              {/* ID */}
              <div className="contact-id">{list.id}</div>

              {/* Left: avatar + name + mobile */}
              <div className="contact-left">
                <div className="avatar">
                  {/* You can show initials instead */}
                  {list.name ? list.name.charAt(0).toUpperCase() : "U"}
                </div>

                <div className="contact-name-column">
                  <div className="name">{list.name}</div>
                  <div className="mobile">{list.mobile}</div>
                </div>
              </div>

              {/* Middle: email (hidden on small screens per CSS) */}
              <div className="contact-email">{list.email}</div>

              {/* Actions */}
              <div className="contact-actions">
                <button
                  type="button"
                  className="icon-btn"
                  onClick={() => handleView(list)}
                  aria-label={`View ${list.name}`}
                >
                  <i className="bi bi-eye"></i>
                </button>

                <button
                  type="button"
                  className="icon-btn"
                  onClick={() => handleEdit(list)}
                  aria-label={`Edit ${list.name}`}
                >
                  <i className="bi bi-pencil"></i>
                </button>

                <button
                  type="button"
                  className="icon-btn"
                  onClick={() => handleDelete(list.id)}
                  aria-label={`Delete ${list.name}`}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactList;
