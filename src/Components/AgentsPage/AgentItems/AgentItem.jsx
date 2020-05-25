import React from 'react';
import useAgentPortraits from 'Hooks/useAgentPortraits';
import { useHistory } from 'react-router-dom';

export default function AgentItem(props) {
  const img = useAgentPortraits(props.agent);
  const history = useHistory();

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
              history.push({
                pathname: `/agents/${props.agent}`,
              });
              // props.setAgentSkill()
            }}
          />
        </div>
      </div>
    </>
  );
}
