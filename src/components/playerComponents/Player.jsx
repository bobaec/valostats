import React, { useState } from 'react';
import './Player.scss';
import PlayerHeader from './PlayerHeader';
import Rank from './Rank';
import HistoryOverview from './HistoryOverview';
import MatchHistory from './MatchHistory';
import SummaryByAgent from './SummaryByAgent';
import { useParams } from 'react-router-dom';

import LiveGame from './LiveGame/LiveGame';

export default function Player({ match }) {
  let params = useParams();

  const [state, setState] = useState({
    showPlayerStats: true,
    showLiveGame: false,
  });

  const showPlayerStats = () => {
    setState({ ...state, showPlayerStats: true, showLiveGame: false });
  };

  const showLiveGame = () => {
    setState({ ...state, showPlayerStats: false, showLiveGame: true });
  };

  return (
    <div className='player-wrapper'>
      <div className='player-content'>
        <PlayerHeader
          username={params.username}
          liveGame={() => showLiveGame}
          summary={() => showPlayerStats}
        />
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
        {state.showLiveGame && <LiveGame />}
      </div>
    </div>
  );
}
