import React from 'react';
import { useHistory } from 'react-router-dom';
import useAgentPortraits from 'Hooks/useAgentPortraits';

export default function DetailedPlayerItem(props) {
  const img = useAgentPortraits(props.agent);
  const history = useHistory();

  return (
    <div className='team-player'>
      <div className='player-container'>
        <img className='hero-icon small' src={img} alt='' />
        <span
          className='player-name'
          onClick={(e) => {
            history.push({
              pathname: `/player/username=${e.target.innerText}/profile`,
            });
          }}>
          {props.player}
        </span>
      </div>
      <span className='player-rank'>Diamond 3</span>
      <span className='player-combat-score'>238</span>
      <div className='player-kda'>
        <span className='player-kda-summary'>0.83:1</span>
        <span className='player-kda-breakdown'>2/6/3</span>
      </div>
      <span className='player-econ-rating'>78</span>
      <span className='player-first-bloods'>3</span>
      <span className='player-plants'>4</span>
      <span className='player-defuses'>1</span>
    </div>
  );
}
