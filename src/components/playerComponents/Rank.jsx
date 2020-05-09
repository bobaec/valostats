import React from 'react';

export default function Rank() {
  return (
    <div id='rank-container'>
      <div id='rank-header' className='default-container header-container'>
        Competitive
      </div>
      <div className='default-container content-container competitive-container'>
        <div className='category-header'>Rank</div>
        <div className='rank-inner-container'>
          <img id='rank-icon' src='rankPlaceholder.jpg' alt='' />
          <div id='rank-info-container'>
            <span>Diamond III</span>
            <span>88W 83L / 51%</span>
          </div>
        </div>
        <div className='seperator horizontal' />
        <div className='category-header'>Summary</div>
        <div className='summary-container'>
          <div className='summary-item'>
            <img className='hero-icon' src='portraitPlaceholder.png' alt='' />
            <div className='summary-agent-name'></div>
            <div className='summary-agent-kda-container'>
              <div className='kda-summary'></div>
              <div className='kda-breakdown'></div>
            </div>
            <div className='summary-agent-winrate-container'>
              <div className='winrate-summary'></div>
              <div className='winrate-breakdown'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
