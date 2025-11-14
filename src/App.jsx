// ✅ Main entry component of the Contact Management App
// Handles fetching, displaying, adding, editing, viewing & deleting contacts

import React, { useState, useEffect } from "react";
import axios from "axios";
// ✅ make sure global styles are imported here

import ContactList from "./components/ContactList";
import ViewContact from "./components/ViewContact";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

function App() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [editContact, setEditContact] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
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

  const handleView = (contact) => setSelectedContact(contact);
  const handleClose = () => setSelectedContact(null);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, { id: contacts.length + 1, ...newContact }]);
    setShowAddModal(false);
  };

  const handleUpdateContact = (updatedContact) => {
    const updatedList = contacts.map((contact) =>
      contact.id === updatedContact.id ? updatedContact : contact
    );
    setContacts(updatedList);
    setEditContact(null);
  };

  const handleDeleteContact = (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      setContacts(contacts.filter((contact) => contact.id !== id));
    }
  };

  return (
    <div className="container">
      <ContactList
        contactList={contacts}
        handleView={handleView}
        handleDelete={handleDeleteContact}
        handleEdit={setEditContact}
        handleAdd={() => setShowAddModal(true)}
      />

      {selectedContact && (
        <ViewContact selectedContact={selectedContact} onClose={handleClose} />
      )}

      {editContact && (
        <EditContact
          contact={editContact}
          onUpdate={handleUpdateContact}
          onClose={() => setEditContact(null)}
        />
      )}

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
