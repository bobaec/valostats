import React from 'react';
import './MatchDetails.scss';
import DetailedPlayerItem from './DetailedPlayerItem';

export default function MatchDetails({ matchResult }) {
  const headerItems = [
    'Rank',
    'Combat Score',
    'KDA',
    'Econ Rating',
    'First Bloods',
    'Plants',
    'Defuses',
  ].map((item) => <span className='header-item'>{item}</span>);

  const playerItems = ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'].map((player) => (
    <DetailedPlayerItem player={player} />
  ));

  return (
    <>
      <div className='match-details-container'>
        <div className={`team`}>
          <div className='match-header'>
            <span className={`header-item match-result ${matchResult}`}>{matchResult}</span>
            {headerItems}
          </div>
          <div className={`team-container ${matchResult}`}>
            <div className='team-inner-container'>{playerItems}</div>
          </div>
        </div>
        <div className={`team`}>
          <div className='match-header'>
            <span className={`header-item match-result ${matchResult === 'victory' ? 'defeat' : 'victory'}`}>
              {matchResult === 'victory' ? 'defeat' : 'victory'}
            </span>
            {headerItems}
          </div>
          <div className={`team-container ${matchResult === 'victory' ? 'defeat' : 'victory'}`}>
            <div className='team-inner-container'>{playerItems}</div>
          </div>
        </div>
      </div>
    </>
  );
}
