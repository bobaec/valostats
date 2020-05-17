import React, { useState } from 'react';
import MatchDetails from './MatchDetails';
import heroIcon from 'Images/portraitPlaceholder.png';

export default function MatchHistoryItem(props) {
  const [state, setState] = useState({
    showMatchDetails: false,
    firstTeam: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'],
    secondTeam: ['Player 6', 'Player 7', 'Player 8', 'Player 9', 'Player 10'],
  });

  const teamlist = (item) => {
    return item.map((player) => (
      <div className='team-player'>
        <img className='hero-icon small' src={heroIcon} alt='' />
        <span>{player}</span>
      </div>
    ));
  };

  const firstTeam = teamlist(state.firstTeam);
  const secondTeam = teamlist(state.secondTeam);

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
              <div className={`match-result ${props.matchResult}`}>{props.matchResult}</div>
              <div className='match-time'>26:41</div>
            </div>
          </div>
          <div className='seperator'></div>
          <div className='match-performance-container'>
            <img className='hero-icon' src={heroIcon} alt='' />
            <div className='kda-container'>
              <div className='kda-breakdown'>4 / 6 / 7</div>
              <div className='kda-ratio'>1.83 KDA</div>
            </div>
          </div>
          <div className='seperator'></div>
          <div className='best-round'></div>
          <div className='seperator'></div>
          <div className='match-players'>
            <div className='team-list'>{firstTeam}</div>
            <div className='team-list'>{secondTeam}</div>
          </div>
          <div className='seperator'></div>
          <i
            className={`fas fa-chevron-down show-more ${state.showMatchDetails ? 'rotate' : ''}`}
            onClick={() =>
              state.showMatchDetails
                ? setState({ ...state, showMatchDetails: false })
                : setState({ ...state, showMatchDetails: true })
            }></i>
        </div>
      </div>
      {state.showMatchDetails && <MatchDetails matchResult={props.matchResult} />}
    </>
  );
}
