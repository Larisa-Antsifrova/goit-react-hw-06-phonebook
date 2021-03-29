import { combineReducers } from 'redux';
import { ADD, DELETE, UPDATE_FILTER } from './phonebook-action-types';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case ADD:
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
