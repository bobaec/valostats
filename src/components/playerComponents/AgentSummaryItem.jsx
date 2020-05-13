import React from 'react';
import heroIcon from './../../Images/portraitPlaceholder.png';

export default function AgentSummaryItem() {
  return (
    <>
      <div className='summary-item'>
        <img className='hero-icon' src={heroIcon} alt='' />
        <div className='summary-agent-name'>Brimstone</div>
        <div className='summary-kda-container'>
          <div className='kda-summary'>3.82:1 KDA</div>
          <div className='kda-breakdown'>6.3 / 3.4 / 6.7</div>
        </div>
        <div className='summary-kda-container'>
          <div className='winrate-summary'>65%</div>
          <div className='winrate-breakdown'>20 Played</div>
        </div>
      </div>
      <div className='seperator horizontal' />
    </>
  );
}
