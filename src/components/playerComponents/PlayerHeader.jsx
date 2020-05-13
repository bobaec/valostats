import React from 'react';
import playerIcon from '../../Images/portraitPlaceholder.png';

export default function PlayerHeader(props) {
  return (
    <div className='player-header-container2'>
      <div id='player-header' className='default-container'>
        <img className='player-icon' src={playerIcon} alt='' />
        <div className='player-info-container'>
          <span className='player-name'>{props.username}</span>
          <button className='refresh-button'>Refresh</button>
        </div>
      </div>
      <div>
        <button
          className='refresh-button summary-button'
          onClick={props.summary}>
          Summary
        </button>
        <button className='refresh-button' onClick={props.liveGame()}>
          Live Game
        </button>
      </div>
    </div>
  );
}
