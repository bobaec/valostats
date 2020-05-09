import React from 'react';
import './Player.scss';
import PlayerHeader from './PlayerHeader';
import Rank from './Rank';
import HistoryOverview from './HistoryOverview';
import MatchHistory from './MatchHistory';
import SummaryByAgent from './SummaryByAgent';

export default function Player() {
  return (
    <div className='player-wrapper'>
      <div className='player-content'>
        <div className='player-header-container'>
          <PlayerHeader />
          <div className='player-overview'>
            <div className='spacer'>
              <Rank />
              <SummaryByAgent />
            </div>
            <div>
              <HistoryOverview />
              <MatchHistory />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
