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
      <div className='agent-wrapper'>
        <div className='agent-info'>
          <h3 className='agent-type'>{state.agent.type.toUpperCase()}</h3>
          <h3 className='agent-name'>{state.agent.name.toUpperCase()}</h3>
        </div>
        <div className='skills-container'>
          <div className='skill-inner-container'>
            <div className='skill-item'>{state.agent.cSkill.name.toUpperCase()}</div>
            <div className='skill-item'>{state.agent.cSkill.description}</div>
            <div className='skill-item'>Cost: {state.agent.cSkill.cost}</div>
            <div className='skill-item'>{state.agent.cSkill.uses}</div>
          </div>
          <div className='skill-inner-container'>
            <div className='skill-item'>{state.agent.qSkill.name.toUpperCase()}</div>
            <div className='skill-item'>{state.agent.qSkill.description}</div>
            <div className='skill-item'>Cost: {state.agent.qSkill.cost}</div>
            <div className='skill-item'>{state.agent.qSkill.uses} </div>
          </div>
          <div className='skill-inner-container'>
            <div className='skill-item'>{state.agent.eSkill.name.toUpperCase()}</div>
            <div className='skill-item'>{state.agent.eSkill.description}</div>
            <div className='skill-item'>Cost: {state.agent.eSkill.cost}</div>
            <div className='skill-item'>{state.agent.eSkill.uses} </div>
          </div>
          <div className='skill-inner-container'>
            <div className='skill-item'>{state.agent.xSkill.name.toUpperCase()}</div>
            <div className='skill-item'>{state.agent.xSkill.description}</div>
            <div className='skill-item'>Cost: {state.agent.xSkill.cost}</div>
            <div className='skill-item'>{state.agent.xSkill.uses} </div>
          </div>
        </div>
      </div>
    )
  );
}
