import React from 'react';
import ReactDOM from 'react-dom';
import './src/index.css';
import STORE from './STORE.react.js';
import App from './App.react.js';

ReactDOM.render(
  <App store={STORE} />,
  document.getElementById('root'),
);