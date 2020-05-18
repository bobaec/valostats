import React, { useState, useEffect } from 'react';
import MatchDetails from './MatchDetails';
import heroIcon from 'Images/portraitPlaceholder.png';
import MatchHistoryTeamList from './MatchHistoryTeamList/MatchHistoryTeamList';

export default function MatchHistoryItem(props) {
  const [state, setState] = useState({
    showMatchDetails: false,
    img: '',
  });

  useEffect(() => {
    import(`Images/AgentPortraits/${props.agent}Portrait.jpg`)
      .then((img) => {
        setState((prev) => ({ ...prev, img: img.default }));
      })
      .catch(() => {
        setState((prev) => ({ ...prev, img: heroIcon }));
      });
  }, [props.agent]);

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
            <img className='hero-icon' src={state.img} alt='' />
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
