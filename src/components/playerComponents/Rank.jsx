import React from 'react';
import './Rank.scss';
export default function Rank() {
  return (
    <>
      <div className='default-container header-container'>Competitive</div>
      <div className='default-container content-container competitive-container'>
        <div className='rank-inner-container'>
          <img id='rank-icon' src='rankPlaceholder.jpg' alt='' />
          <div id='rank-info-container'>
            <span>Diamond III</span>
            <span>88W 83L</span>
            <span>Winrate 51%</span>
          </div>
        </div>
      </div>
    </>
  );
}
