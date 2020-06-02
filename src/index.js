import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import 'Styles/main.scss';
import App from './App.jsx';

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  , rootElement);
