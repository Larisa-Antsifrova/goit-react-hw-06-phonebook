import { combineReducers } from 'redux';
import { ADD, DELETE, UPDATE_FILTER } from './phonebook-action-types';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case ADD:
      const existingContact = state.find(
        contact => contact.name === payload.name,
      );
      if (existingContact) {
        alert(`${existingContact.name} is already in contacts.`);
        return;
      }
      return [payload, ...state];

    case DELETE:
      return state.filter(contact => contact.id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case UPDATE_FILTER:
      return payload;

    default:
      return state;
  }
};

export const phonebookReducer = combineReducers({
  items,
  filter,
});
