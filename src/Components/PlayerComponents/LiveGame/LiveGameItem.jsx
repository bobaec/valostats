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
        <span className='player-winrate-percent'>{`${props.overallWinPercentage}% (${props.gamesPlayedTotal} played)`}</span>
        <div className='player-winrate-bar'>
          <div
            className='bar-filling'
            style={{ width: `${props.overallWinPercentage}%` }}></div>
        </div>
      </div>
      <div className='player-agent-information'>
        <div className='player-winrate-by-agent'>
          <span className='player-winrate-by-agent-percent'>{`${props.winRateByAgent}%`}</span>
          <span className='player-by-agent-games-played'>{`(${props.gamesPlayedByAgent} played)`}</span>
        </div>
        <div className='player-kda'>
          <span className='player-kda-summary'>
            {props.deaths
              ? Math.round(
                  (10 * (props.kills + props.assists)) / props.deaths
                ) /
                  10 +
                ' :1'
              : 'n/a'}
          </span>
          <span className='player-kda-breakdown'>{`${props.kills}/${props.deaths}/${props.assists}`}</span>
        </div>
      </div>
    </div>
  );
}
