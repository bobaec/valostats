import React, { useState } from 'react';
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
      <Router>
        <Route exact path='/homepage'>
          <TempHome />
        </Route>

        <Route path='/player/username=:username'>
          <Navbar allowSearch={true} />
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
