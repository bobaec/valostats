import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import 'Styles/main.scss';
import App from './App.jsx';

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootElement);
} else {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
    , rootElement);
}