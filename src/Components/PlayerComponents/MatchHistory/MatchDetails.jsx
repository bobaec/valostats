import React from 'react';
import 'Components/PlayerComponents/MatchHistory/MatchDetails.scss';
import DetailedPlayerItem from './DetailedPlayerItem';

export default function MatchDetails({ matchResult }) {
  const headerItems = ['Rank', 'Combat Score', 'KDA', 'Econ Rating', 'First Bloods', 'Plants', 'Defuses'].map(
    (item) => (
      <span key={item} className='header-item'>
        {item}
      </span>
    )
  );

  return (
    <>
      <div className='match-details-container'>
        <div className={`team`}>
          <div className='match-header'>
            <span className={`header-item match-result ${matchResult}`}>{matchResult}</span>
            {headerItems}
          </div>
          <div className={`team-container ${matchResult}`}>
            <div className='team-inner-container'>
              <DetailedPlayerItem agent={'Cypher'} player={'WaffleSlayer'} />
              <DetailedPlayerItem agent={'Brimstone'} player={'Bobae'} />
              <DetailedPlayerItem agent={'Omen'} player={'Mikel'} />
              <DetailedPlayerItem agent={'Breach'} player={'Urlan'} />
              <DetailedPlayerItem agent={'Sova'} player={'Serge'} />
            </div>
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
            <div className='team-inner-container'>
              <DetailedPlayerItem agent={'Breach'} player={'Shroud'} />
              <DetailedPlayerItem agent={'Sage'} player={'summit1g'} />
              <DetailedPlayerItem agent={'Sova'} player={'Dustin'} />
              <DetailedPlayerItem agent={'Viper'} player={'NadeShot'} />
              <DetailedPlayerItem agent={'Jett'} player={'Myth'} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
