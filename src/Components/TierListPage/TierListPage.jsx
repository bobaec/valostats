import React from 'react';

export default function TierListPage(props) {
  return (
    <div className='tier-list-wrapper'>
      <div className='tier-list-description'>Valorant Agent Tier List</div>
      <div className='tier-list-container'>
        <div className='s-tier'>S</div>
        <div className='a-tier'>A</div>
        <div className='b-tier'>B</div>
        <div className='c-tier'>C</div>
      </div>
    </div>
  );
}
