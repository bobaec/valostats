import React from 'react';
import LiveGameItem from './LiveGameItem';
import './LiveGame.scss';

export default function LiveGame({ matchResult }) {
  const headerItems = ['Rank', 'Win Ratio', 'Agent Information'].map((item) => (
    <span className='header-item'>{item}</span>
  ));

  const playerItems = [
    'Player 1',
    'Player 2',
    'Player 3',
    'Player 4',
    'Player 5',
  ].map((player) => <LiveGameItem player={player} />);

  return (
    <div className='live-game-outer-container'>
      <div id='live-header' className='default-container header-container'>
        <span className='live-game-type'>Competitive</span>
        <div className='seperator' />
        <span className='live-game-map'>Haven</span>
        <div className='seperator' />
        <span className='live-game-time'>8 : 5</span>
        <div className='seperator' />
        <span className='live-game-time'>35:07</span>
      </div>
      <div className='match-details-container live-game-container'>
        <div className='live-game-header-container'>
          <div className={`win-loss-indicator victory`}></div>
          <div className='match-header live-game-header'>
            <span className={`header-item live-game-team`}>Attackers</span>
            <span className={`header-item live-game-rank`}>Rank</span>
            <span className={`header-item live-game-ratio`}>Win Ratio</span>
            <span className={`header-item live-game-agent-info`}>
              Agent Information
            </span>
          </div>
        </div>
        <div className={`team-container`}>
          <div className='team-inner-container'>{playerItems}</div>
        </div>
        <div className='live-game-header-container'>
          <div className={`win-loss-indicator defeat`}></div>
          <div className='match-header live-game-header'>
            <span className={`header-item live-game-team`}>Defenders</span>
            <span className={`header-item live-game-rank`}>Rank</span>
            <span className={`header-item live-game-ratio`}>Win Ratio</span>
            <span className={`header-item live-game-agent-info`}>
              Agent Information
            </span>
          </div>
        </div>
        <div className={`team-container`}>
          <div className='team-inner-container'>{playerItems}</div>
        </div>
      </div>
    </div>
  );
}
