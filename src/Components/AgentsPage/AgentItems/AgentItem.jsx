import React, { useState } from 'react';
import useAgentPortraits from 'Hooks/useAgentPortraits';
import './AgentItem.scss';

export default function AgentItem(props) {
  const img = useAgentPortraits(props.agent);

  return (
    <>
      <div className='agent-content'>
        <div className='agent-header'>
          <img
            className={`hero-icon small ${props.agentName === props.agent && 'selected'}`}
            src={img}
            alt=''
            onClick={(e) => {
              props.setAgentName(props.agent);
            }}
          />
        </div>
      </div>
    </>
  );
}
