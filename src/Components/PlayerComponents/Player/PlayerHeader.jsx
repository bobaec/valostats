import React from 'react';
import playerIcon from 'Images/portraitPlaceholder.png';

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
          className={`refresh-button summary-button ${!props.showPlayerStats && 'inactive'}`}
          onClick={props.playerStats()}>
          Profile
        </button>
        <button className={`refresh-button  ${!props.showLiveGame && 'inactive'}`} onClick={props.liveGame()}>
          Live Game
        </button>
      </div>
    </div>
  );
}
