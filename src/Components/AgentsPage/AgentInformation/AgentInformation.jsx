import React, { useState, useEffect } from 'react';
// import AgentItem from './AgentItems/AgentItem';
import './AgentInformation.scss';

export default function AgentInformation(props) {
  const [state, setState] = useState({
    agent: '',
  });

  // Can't put props in the dependency array in useEffect
  // It's better to deconstruct the props this way
  const { agentName } = props;

  useEffect(() => {
    import(`AgentData/${agentName}.jsx`).then((agent) => {
      console.log(state.agent.cSkill);
      setState((prev) => ({ ...prev, agent: agent[agentName] }));
    });
  }, [agentName]);
  return (
    state.agent && (
      <div className='agent-info' style={{ color: 'white' }}>
        <h3>{state.agent.type}</h3>
        <h1>{state.agent.name}</h1>
        <div className='skills'>
          <div className='c-skill'>{state.agent.cSkill.name}</div>
          <div className='c-skill'>{state.agent.cSkill.description}</div>
          <div className='c-skill'> {state.agent.cSkill.cost}</div>
          <div className='c-skill'>{state.agent.cSkill.uses} </div>
        </div>
      </div>
    )
  );
}
