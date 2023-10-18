import { ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT } from './actions';
import { combineReducers } from 'redux';
const initialState: any[] = [];


const contactsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];
    case EDIT_CONTACT:
      return state.map((contact) =>
        contact.id === action.payload.id ? { ...contact, ...action.payload } : contact
      );
    case DELETE_CONTACT:
      return state.filter((contact) => contact.id !== action.payload);
    default:
      return state;
  }
};

export default contactsReducer;
