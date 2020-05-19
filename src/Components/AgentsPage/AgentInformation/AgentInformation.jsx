import React from 'react';
// import AgentItem from './AgentItems/AgentItem';
import './AgentInformation.scss';

export default function AgentInformation(props) {
  return (
    <div className='agentInfo'>
      <div className='agentDetails'>{props.agentName}</div>
    </div>
  );
}
