import React from 'react';
import AgentSummaryItem from './AgentSummaryItem';
import './SummaryByAgent.scss';

export default function SummaryByAgent() {
  return (
    <div className='summary-wrapper'>
      <div className='default-container header-container'>Summary</div>
      <div className='default-container content-container summary-container'>
        <AgentSummaryItem />
        <AgentSummaryItem />
        <AgentSummaryItem />
        <AgentSummaryItem />
        <AgentSummaryItem />
      </div>
    </div>
  );
}
