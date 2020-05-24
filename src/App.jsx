import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TempHome from 'Components/TempHome/TempHome';
import Player from 'Components/PlayerComponents/Player/Player';
import HomePage from 'Components/HomePage/HomePage';
import Navbar from 'Components/NavBar/Navbar';
import Footer from 'Components/Footer/Footer';
import TempMessage from 'Components/TempMessage/TempMessage';
import { ThemeContext, theme } from 'Context/ThemeContext';
import AgentsPage from 'Components/AgentsPage/AgentsPage';

function App() {
  const [state, setState] = useState({
    ...theme,
    imgLoaded: false,
  });

  const applyDarkMode = () => {
    setState({ ...state, isDarkMode: !state.isDarkMode });
  };

  const setImgLoaded = () => {
    setState({ ...state, imgLoaded: true });
  };

  return (
    <ThemeContext.Provider value={state.isDarkMode}>
      <Router>
        <Route exact path='/homepage'>
          <TempHome />
        </Route>

        <Route path='/player/username=:username/profile'>
          <Navbar allowSearch={true} applyDarkMode={() => applyDarkMode} isDarkMode={state.isDarkMode} />
          <Player showLiveGame={false} showPlayerStats={true} />
          <Footer />
          <TempMessage />
        </Route>

        <Route path='/player/username=:username/livegame'>
          <Navbar allowSearch={true} applyDarkMode={() => applyDarkMode} isDarkMode={state.isDarkMode} />
          <Player showLiveGame={true} showPlayerStats={false} />
          <Footer />
          <TempMessage />
        </Route>

        <Route exact path='/'>
          <div id='home'>
            <Navbar offset={true} allowSearch={false} />
            <HomePage isDarkMode={!state.isDarkMode} setImgLoaded={setImgLoaded} />
            {state.imgLoaded && <Footer />}
            {state.imgLoaded && <TempMessage open />}
          </div>
        </Route>

        <Route path='/agents'>
          <Navbar allowSearch={true} applyDarkMode={() => applyDarkMode} isDarkMode={state.isDarkMode} />
          <AgentsPage />
          <Footer />
          <TempMessage />
        </Route>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
