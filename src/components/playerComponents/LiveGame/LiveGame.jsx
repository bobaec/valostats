import React from 'react';
import LiveGameItem from './LiveGameItem';
import './LiveGame.scss';

export default function LiveGame({ matchResult }) {
  const headerItems = ['Rank', 'Win Ratio', 'Agent Information'].map((item) => (
    <span className='header-item'>{item}</span>
  ));

  const playerItems = ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'].map((player) => (
    <LiveGameItem player={player} />
  ));

  return (
    <>
      <div className='default-container header-container '>Live Game</div>
      <div className='match-details-container live-game-container'>
        <div className='match-header'>
          <span className={`header-item match-result`}>xxxxx</span>
          {headerItems}
        </div>
        <div className={`team-container ${matchResult}`}>
          <div className='team-inner-container'>{playerItems}</div>
        </div>
        <div className='match-header'>
          <span className={`header-item match-result`}>xxxxx</span>
          {headerItems}
        </div>
        <div className={`team-container ${matchResult === 'victory' ? 'defeat' : 'victory'}`}>
          <div className='team-inner-container'>{playerItems}</div>
        </div>
      </div>
    </>
  );
}
