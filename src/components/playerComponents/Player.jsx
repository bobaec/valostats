import React from 'react';
import './Player.scss';
import PlayerHeader from './PlayerHeader';
import Rank from './Rank';
import HistoryOverview from './HistoryOverview';
import MatchHistory from './MatchHistory';
import SummaryByAgent from './SummaryByAgent';
import { useParams } from 'react-router-dom';


export default function Player({match}) {

  let params = useParams()
  return (
    <div className='player-wrapper'>
      <div className='player-content'>
        <div className='player-header-container'>
          <PlayerHeader username={params.username} />
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
      </div>
    </div>
  );
}
