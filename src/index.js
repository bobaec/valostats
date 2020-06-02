import React from 'react';
import { hydrate, render } from "react-dom";
import { loadComponents, getState } from "loadable-components";
import 'index.css';
import 'Styles/main.scss';
import App from './App.jsx';

window.snapSaveState = () => getState();

const rootElement = document.getElementById("root");

loadComponents()
  .then(() => hydrate(<App />, rootElement))
  .catch(() => render(
    <React.StrictMode>
      <App />
    </React.StrictMode>, rootElement));


