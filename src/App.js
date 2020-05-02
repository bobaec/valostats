import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import TempHome from './components/TempHome';


function App() {
  return (
    <Router>
      <Route exact path="/">
        <TempHome />
      </Route>
    </Router>
  );
}

export default App;
