// ContactForm.tsx
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/actions';

const ContactForm: React.FC = () => {
  const initialContact = {
    id: uuid(),
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };

  const [contact, setContact] = useState(initialContact);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addContact(contact));
    setContact(initialContact);
  };

  return (
    <div className="contact-form-container">
      <h2>Add New Contact</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        {/* ...Form fields and validation... */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
export {};
