import React from 'react';

export default function SummaryByAgent() {
  return (
    <>
      <div className='default-container header-container'>Summary</div>
      <div className='default-container content-container summary-container'>
        <div className='summary-item'>
          <img className='hero-icon' src='portraitPlaceholder.png' alt='' />
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
        <div className='summary-item'>
          <img className='hero-icon' src='portraitPlaceholder.png' alt='' />
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
        <div className='summary-item'>
          <img className='hero-icon' src='portraitPlaceholder.png' alt='' />
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
      </div>
    </>
  );
}
