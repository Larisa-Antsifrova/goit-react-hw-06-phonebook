import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { phonebookReducer } from './phonebook-reducers';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: { contacts: phonebookReducer },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export { store };
