import React from 'react';
import useAgentPortraits from 'Hooks/useAgentPortraits';

export default function LiveGameItem(props) {
  const img = useAgentPortraits(props.agent);

  return (
    <div className='team-player'>
      <div className='player-container'>
        <img className='hero-icon small' src={img} alt='' />
        <span className='player-name'>{props.player}</span>
      </div>
      <span className='player-rank'>{props.rank}</span>
      <div className='player-winrate'>
        <span className='player-winrate-percent'>{`${props.overallWinPercentage}% (487 played)`}</span>
        <div className='player-winrate-bar'>
          <div
            className='bar-filling'
            style={{ width: `${props.overallWinPercentage}%` }}></div>
        </div>
      </div>
      <div className='player-agent-information'>
        <div className='player-winrate-by-agent'>
          <span className='player-winrate-by-agent-percent'>73%</span>
          <span className='player-by-agent-games-played'>(11 played)</span>
        </div>
        <div className='player-kda'>
          <span className='player-kda-summary'>0.83:1</span>
          <span className='player-kda-breakdown'>2/6/3</span>
        </div>
      </div>
    </div>
  );
}
