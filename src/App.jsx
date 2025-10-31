// ✅ Main entry component of the Contact Management App
// Handles fetching, displaying, adding, editing, viewing & deleting contacts

import React, { useState, useEffect } from "react";
import axios from "axios";

// Importing child components for modular structure
import ContactList from "./components/ContactList";
import ViewContact from "./components/ViewContact";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

function App() {
  // State to hold all contacts
  const [contacts, setContacts] = useState([]);

  // State to store the contact currently being viewed
  const [selectedContact, setSelectedContact] = useState(null);

  // 🔹 State to store the contact currently being edited
  const [editContact, setEditContact] = useState(null);

  // 🔹 Controls Add Contact modal visibility
  const [showAddModal, setShowAddModal] = useState(false);

  // ✅ Fetch contacts once when the app loads
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching sample contacts JSON from GitHub
        const response = await axios.get(
          "https://raw.githubusercontent.com/BitcotDev/fresher-machin-test/main/json/sample.json"
        );
        setContacts(response.data);
      } catch (error) {
        console.log("Error fetching contacts", error);
      }
    };
    fetchData();
  }, []);

  // 🔹 Handle viewing selected contact
  const handleView = (contact) => {
    setSelectedContact(contact);
  };

  // 🔹 Close View Contact modal
  const handleClose = () => {
    setSelectedContact(null);
  };

  // ✅ Add a new contact to the list
  const handleAddContact = (newContact) => {
    setContacts([...contacts, { id: contacts.length + 1, ...newContact }]);
    setShowAddModal(false);
  };

  // ✅ Update an existing contact in the list
  const handleUpdateContact = (updatedContact) => {
    const updatedList = contacts.map((contact) =>
      contact.id === updatedContact.id ? updatedContact : contact
    );
    setContacts(updatedList);
    setEditContact(null);
  };

  // ✅ Delete a contact after confirmation
  const handleDeleteContact = (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      setContacts(contacts.filter((contact) => contact.id !== id));
    }
  };

  return (
    <div className="container">
      {/* 🔹 Main Contact List Component */}
      <ContactList
        contactList={contacts}
        handleView={handleView}
        handleDelete={handleDeleteContact}
        handleEdit={setEditContact}
        handleAdd={() => setShowAddModal(true)}
      />

      {/* 🔹 View Contact Modal */}
      {selectedContact && (
        <ViewContact selectedContact={selectedContact} onClose={handleClose} />
      )}

      {/* 🔹 Edit Contact Modal */}
      {editContact && (
        <EditContact
          contact={editContact}
          onUpdate={handleUpdateContact}
          onClose={() => setEditContact(null)}
        />
      )}

      {/* 🔹 Add Contact Modal */}
      {showAddModal && (
        <AddContact
          onAdd={handleAddContact}
          onClose={() => setShowAddModal(false)}
        />
      )}
    </div>
  );
}

export default App;
