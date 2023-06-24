import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store';
import { Provider } from 'react-redux';
import 'normalize.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import App from './App';

const rootEl = document.getElementById('root');
const root = ReactDOM.createRoot(rootEl);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
