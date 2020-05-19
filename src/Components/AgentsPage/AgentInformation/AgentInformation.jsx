import React from 'react';
// import AgentItem from './AgentItems/AgentItem';
import './AgentInformation.scss';

export default function AgentInformation(props) {
  return (
    <div className='agentInfo'>
      <div className='agentHeader' style={{ color: 'white' }}>
        {props.agentName}
      </div>
    </div>
  );
}
