import React from 'react';
import AgentSummaryItem from './AgentSummaryItem';

export default function SummaryByAgent() {
  return (
    <div className='summary-wrapper'>
      <div className='default-container header-container'>Summary</div>
      <div className='default-container content-container summary-container'>
        <AgentSummaryItem agent={'Brimstone'} />
        <AgentSummaryItem agent={'Viper'} />
        <AgentSummaryItem agent={'Breach'} />
        <AgentSummaryItem agent={'Jett'} />
        <AgentSummaryItem agent={'Omen'} />
      </div>
    </div>
  );
}
