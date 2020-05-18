import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TempHome from 'Components/TempHome/TempHome';
import Player from 'Components/PlayerComponents/Player/Player';
import HomePage from 'Components/HomePage/HomePage';
import Navbar from 'Components/NavBar/Navbar';
import Footer from 'Components/Footer/Footer';
import { ThemeContext, theme } from 'Context/ThemeContext';

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

        <Route path='/player/username=:username'>
          <Navbar allowSearch={true} applyDarkMode={() => applyDarkMode} isDarkMode={state.isDarkMode} />
          <Player />
          <Footer />
        </Route>

        <Route exact path='/'>
          <div id='home'>
            <Navbar allowSearch={false} />
            <HomePage isDarkMode={!state.isDarkMode} setImgLoaded={setImgLoaded} />
            {state.imgLoaded && <Footer />}
          </div>
        </Route>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
