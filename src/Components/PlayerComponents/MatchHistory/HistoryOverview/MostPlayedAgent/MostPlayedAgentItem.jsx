import React from 'react';
import useAgentPortraits from 'Hooks/useAgentPortraits';

export default function MostPlayedAgentItem(props) {
  const img = useAgentPortraits(props.agent);

  return (
    <div className='most-played-agent-item'>
      <img className='hero-icon medium' src={img} alt='' />
      <div className='most-played-agent-info'>
        <span className='agent-name'>{props.agent}</span>
        <span className='agent-info'>(6W 3L) / 5.54 KDA</span>
      </div>
    </div>
  );
}
