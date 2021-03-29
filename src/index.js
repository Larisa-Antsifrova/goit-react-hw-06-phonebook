// Imports from React
import React from 'react';
import ReactDOM from 'react-dom';
// Imports from Redux
import { Provider } from 'react-redux';
import { store } from './redux/store';
// Imports of components
import App from './App';
// Styles imports
import 'modern-normalize/modern-normalize.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
