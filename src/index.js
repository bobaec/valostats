import React from 'react';
import { render } from 'react-snapshot';
import 'index.css';
import 'Styles/main.scss';
import App from './App.jsx';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
