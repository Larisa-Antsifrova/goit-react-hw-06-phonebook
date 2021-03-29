import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducer } from './phonebook-reducers';

const store = configureStore({
  reducer: { contacts: phonebookReducer },
  // middleware: '',
  devTools: process.env.NODE_ENV !== 'production',
});

export { store };
