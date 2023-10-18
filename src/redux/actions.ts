export const ADD_CONTACT = 'ADD_CONTACT';
export const EDIT_CONTACT = 'EDIT_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';

export const addContact = (contact: any) => ({
  type: ADD_CONTACT,
  payload: contact,
});

export const editContact = (contact: any) => ({
  type: EDIT_CONTACT,
  payload: contact,
});

export const deleteContact = (contactId: number) => ({
  type: DELETE_CONTACT,
  payload: contactId,
});
