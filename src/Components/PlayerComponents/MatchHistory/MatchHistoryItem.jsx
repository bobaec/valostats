import React, { useState } from 'react';
import MatchDetails from './MatchDetails';
import MatchHistoryTeamList from './MatchHistoryTeamList/MatchHistoryTeamList';
import useAgentPortraits from 'Hooks/useAgentPortraits';

export default function MatchHistoryItem(props) {
  const [state, setState] = useState({
    showMatchDetails: false,
  });

  const img = useAgentPortraits(props.agent);

  return (
    <>
      <div className='match-container'>
        <div className={`win-loss-indicator ${props.matchResult}`}></div>
        <div className={`match-inner-container ${props.matchResult}`}>
          <div className='match-summary-container'>
            <div className='row'>
              <div className='match-type'>Competitive</div>
              <div className='match-date'>15 days ago</div>
            </div>
            <div className='row'>
              <div className={`match-result ${props.matchResult}`}>
                {props.matchResult}
              </div>
              <div className='match-time'>26:41</div>
            </div>
          </div>
          <div className='seperator'></div>
          <div className='match-performance-container'>
            <img className='hero-icon' src={img} alt='' />
            <div className='kda-container'>
              <div className='kda-breakdown'>4 / 6 / 7</div>
              <div className='kda-ratio'>1.83 KDA</div>
            </div>
          </div>
          <div className='seperator'></div>
          <div className='best-round'></div>
          <div className='seperator'></div>
          <div className='match-players'>
            <MatchHistoryTeamList />
            <MatchHistoryTeamList />
          </div>
          <div className='seperator'></div>
          <i
            className={`fas fa-chevron-down show-more ${
              state.showMatchDetails ? 'rotate' : ''
            }`}
            onClick={() =>
              state.showMatchDetails
                ? setState({ ...state, showMatchDetails: false })
                : setState({ ...state, showMatchDetails: true })
            }></i>
        </div>
      </div>
      {state.showMatchDetails && (
        <MatchDetails matchResult={props.matchResult} />
      )}
    </>
  );
}
