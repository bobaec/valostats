import React from 'react';
import playerIcon from '../../Images/portraitPlaceholder.png';
export default function PlayerHeader(props) {
  return (
    <div id='player-header' className='default-container'>
      <img className='player-icon' src={playerIcon} alt='' />
      <div className='player-info-container'>
        <span className='player-name'>{props.username}</span>
        <button className='refresh-button'>Refresh</button>
      </div>
    </div>
  );
}
