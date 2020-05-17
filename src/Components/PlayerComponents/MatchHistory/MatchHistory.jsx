import React from 'react';
import MatchHistoryItem from './MatchHistoryItem';

export default function MatchHistory() {
  return (
    <div className='match-history'>
      <div className='default-container header-container'>Match history</div>
      <div className='default-container content-container match-history-container'>
        <MatchHistoryItem matchResult='victory' />
        <MatchHistoryItem matchResult='victory' />
        <MatchHistoryItem matchResult='defeat' />
        <MatchHistoryItem matchResult='defeat' />
        <MatchHistoryItem matchResult='victory' />
      </div>
    </div>
  );
}
