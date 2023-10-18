// ContactDetails.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { combineReducers } from 'redux';
import contactsReducer from '../redux/reducers';
export type RootState = ReturnType<typeof rootReducer>;
const rootReducer = combineReducers({
    contacts: contactsReducer,
    // otherReducer: otherReducer, // If you have other reducers, include them here
  });

export interface ContactType {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    // Add other properties as needed
  }
const ContactDetails: React.FC<{ contactId: number }> = ({ contactId }) => {
  const contacts = useSelector((state: RootState) => state.contacts);
  const contact: ContactType | undefined = contacts.find((c: ContactType) => c.id === contactId);

  if (!contact) {
    return <div>Contact not found.</div>;
  }

  return (
    <div className="contact-details-container">
      <h2>Contact Details</h2>
      <p>
        <strong>Name:</strong> {contact.firstName} {contact.lastName}
      </p>
      <p>
        <strong>Email:</strong> {contact.email}
      </p>
      <p>
        <strong>Phone:</strong> {contact.phone}
      </p>
    </div>
  );
};

export default ContactDetails;
