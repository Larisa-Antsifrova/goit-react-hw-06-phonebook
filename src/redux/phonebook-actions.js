import { ADD, DELETE, UPDATE_FILTER } from './phonebook-action-types';

export const addContact = contact => ({
  type: ADD,
  payload: contact,
});

export const deleteContact = contactId => ({
  type: DELETE,
  payload: contactId,
});

export const updateFilter = value => ({
  type: UPDATE_FILTER,
  payload: value,
});
