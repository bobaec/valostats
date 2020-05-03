import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import TempHome from './components/TempHome';
import MatchHistory from './components/playerComponents/MatchHistory';
import Player from './components/playerComponents/Player';

function App() {
    return (
        <Router>
            <Route exact path="/">
                <TempHome />
            </Route>

            <Route path="/player">
                <Player />
            </Route>
        </Router>
    );
}

export default App;
