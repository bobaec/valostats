import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TempHome from './components/TempHome';
import Player from './components/playerComponents/Player';
import HomePage from './components/playerComponents/HomePage/HomePage';
import Navbar from './components/playerComponents/HomePage/Navbar';

function App() {
  return (
    <Router>
      <Route exact path='/'>
        <TempHome />
      </Route>

      <Route path='/player/username=:username'>
        <Navbar allowSearch={true} />
        <Player />
      </Route>

      <Route path='/homepage'>
        <Navbar allowSearch={false} />
        <HomePage />
      </Route>
    </Router>
  );
}

export default App;
