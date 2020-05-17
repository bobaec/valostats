import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TempHome from './components/TempHome';
import Player from './components/playerComponents/Player';
import HomePage from './components/playerComponents/HomePage/HomePage';
import Navbar from './components/playerComponents/HomePage/NavBar/Navbar';
import { ThemeContext, theme } from 'Context/ThemeContext';

function App() {
  const [state, setState] = useState({
    ...theme,
  });

  const applyDarkMode = () => {
    setState({ ...state, isDarkMode: !state.isDarkMode });
  };

  return (
    
    <ThemeContext.Provider value={state.isDarkMode}>
        <Helmet>
        <meta name="title" content="Valorant Stats, Database, Guide - VALOSTATS.GG" />
        <meta name="description" content="Real-time Valorant Stats! Check your profile, use powerful global Valorant Statistics!" />
        <meta name="keywords" content="Valorant Stats, Valorant Guide, Real-time In Game, Statistics, Valorant Spectate, Leaderboards, Chart, Agent Guide, Agent Build, Agent Counter" />
        <title>Valorant Stats, Database, Guide - VALOSTATS.GG</title>
      </Helmet>
      <Router>
        <Route exact path='/homepage'>
          <TempHome />
        </Route>

        <Route path='/player/username=:username'>
          <Navbar allowSearch={true} applyDarkMode={() => applyDarkMode} isDarkMode={state.isDarkMode} />
          <Player />
        </Route>

        <Route exact path='/'>
          <Navbar allowSearch={false} applyDarkMode={() => applyDarkMode} isDarkMode={state.isDarkMode} />
          <HomePage isDarkMode={state.isDarkMode} />
        </Route>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
