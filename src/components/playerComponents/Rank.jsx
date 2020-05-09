import React from 'react';
import './SummaryByAgent.scss';

export default function Rank() {
  return (
    <div id='rank-container'>
      <div id='rank-header' className='default-container header-container'>
        Competitive
      </div>
      <div className='default-container content-container competitive-container'>
        <div className='rank-inner-container'>
          <img id='rank-icon' src='rankPlaceholder.jpg' alt='' />
          <div id='rank-info-container'>
            <span>Diamond III</span>
            <span>88W 83L / 51%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
