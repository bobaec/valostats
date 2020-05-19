import React, { useState } from 'react';
import useAgentPortraits from 'Hooks/useAgentPortraits';
import AgentInformation from 'Components/AgentsPage/AgentInformation/AgentInformation';
import './AgentItem.scss';

export default function AgentItem(props) {
  const [state, setState] = useState({
    agentName: '',
    clicked: false,
  });

  const img = useAgentPortraits(props.agent);
  return (
    <>
      <AgentInformation agentName={state.agentName} />
      <div className='agent-content'>
        <div className='agent-header'>
          <img
            className='hero-icon small'
            src={img}
            alt=''
            onClick={(e) => {
              setState({ ...state, agentName: props.agent, clicked: true });
            }}
          />
        </div>
      </div>
    </>
  );
}
