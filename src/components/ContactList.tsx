// ContactList.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './ContactDetails';
import { deleteContact } from '../redux/actions';

// contactsTypes.ts
export interface ContactType {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    // Add other properties as needed
  }
  
const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts);
  const dispatch = useDispatch();

  const handleDeleteContact = (contactId: number) => {
    dispatch(deleteContact(contactId));
  };
  if (!contacts) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="contact-list-container">
      <h2>Contacts</h2>
      {contacts.length === 0 ? (
        <p>No contacts added yet.</p>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id} className="contact-list-item">
              <strong>Name:</strong> {contact.firstName} {contact.lastName}
              <br />
              <strong>Email:</strong> {contact.email}
              <br />
              <strong>Phone:</strong> {contact.phone}
              <br />
              <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
