import React from 'react';
import MatchHistoryItem from './MatchHistoryItem';

export default function MatchHistory() {
  return (
    <div className='match-history'>
      <div className='default-container header-container'>Match history</div>
      <div className='default-container content-container match-history-container'>
        <MatchHistoryItem matchResult='victory' agent={'Brimstone'} />
        <MatchHistoryItem matchResult='victory' agent={'Cypher'} />
        <MatchHistoryItem matchResult='defeat' agent={'Breach'} />
        <MatchHistoryItem matchResult='defeat' agent={'Jett'} />
        <MatchHistoryItem matchResult='victory' agent={'Brimstone'} />
      </div>
    </div>
  );
}
