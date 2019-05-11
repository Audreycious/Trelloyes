import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import STORE from './STORE.react'
import App from './App.react';

ReactDOM.render(
  <App store={STORE} />,
  document.getElementById('root'),
);