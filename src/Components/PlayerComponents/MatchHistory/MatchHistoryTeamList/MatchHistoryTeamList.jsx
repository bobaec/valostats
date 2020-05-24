import React from 'react';
import MatchHistoryPlayerItem from './MatchHistoryPlayerItem';

export default function MatchHistoryTeamList(props) {
  return (
    <div className='team-list'>
      <MatchHistoryPlayerItem agent={'Cypher'} player={'WaffleSlayer'} />
      <MatchHistoryPlayerItem agent={'Brimstone'} player={'Bobae'} />
      <MatchHistoryPlayerItem agent={'Omen'} player={'Mikel'} />
      <MatchHistoryPlayerItem agent={'Breach'} player={'Urlan'} />
      <MatchHistoryPlayerItem agent={'Sova'} player={'Serge'} />
    </div>
  );
}
