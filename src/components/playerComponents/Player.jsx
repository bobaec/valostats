import React, { useState } from 'react';
import './Player.scss';
import PlayerHeader from './PlayerHeader';
import Rank from './Rank';
import HistoryOverview from './HistoryOverview';
import MatchHistory from './MatchHistory';
import SummaryByAgent from './SummaryByAgent';
import LiveGame from './LiveGame/LiveGame';

export default function Player() {
  const [state, setState] = useState({
    showPlayerStats: true,
    showLiveGame: false,
  });

  const showPlayerStats = () => {
    setState({ ...state, showPlayerStats: false, showLiveGame: true });
  };

  const showLiveGame = () => {
    setState({ ...state, showPlayerStats: false, showLiveGame: true });
  };

  return (
    <div className='player-wrapper'>
      <div className='player-content'>
        <PlayerHeader />
        {state.showPlayerStats && (
          <div className='player-header-container'>
            <div className='player-overview'>
              <div className='spacer'>
                <Rank />
                <SummaryByAgent />
              </div>
              <div className='data-container'>
                <HistoryOverview />
                <MatchHistory />
              </div>
            </div>
          </div>
        )}
        {state.showLiveGame && <LiveGame liveGame={() => showPlayerStats} summary={() => showLiveGame} />}
      </div>
    </div>
  );
}
