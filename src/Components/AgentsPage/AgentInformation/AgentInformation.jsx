import React, { useState, useEffect } from 'react';
import './AgentInformation.scss';

export default function AgentInformation(props) {
  const [state, setState] = useState({
    agent: '',
    agentImages: {},
  });

  // Can't put props in the dependency array in useEffect
  // It's better to deconstruct the props this way
  const { agentName } = props;

  useEffect(() => {
    import(`AgentData/${agentName}.jsx`).then((agent) => {
      setState((prev) => ({ ...prev, agent: agent[agentName] }));
    });

    const skills = ['c', 'q', 'e', 'x'];

    skills.forEach((letter) => {
      import(`Images/Skills/${agentName}-${letter}.svg`).then((agent) => {
        setState((prev) => ({ ...prev, agentImages: { ...prev.agentImages, [letter]: agent.default } }));
      });
    });
  }, [agentName]);
  return (
    state.agent && (
      <div className='agent-wrapper'>
        <div className='agent-info'>
          <h3 className='agent-type'>{state.agent.type.toUpperCase()}</h3>
          <h3 className='agent-name'>{state.agent.name.toUpperCase()}</h3>
        </div>
        <div className='skill-wrapper'>
          <div className='skills-container'>
            <div className='skill-inner-container'>
              <img src={state.agentImages.c} alt='' className='skill-icon' />
              <div className='skill-descriptions'>
                <div className='skill-item'>{state.agent.cSkill.name.toUpperCase()}</div>
                <div className='skill-item'>{state.agent.cSkill.description}</div>
                <div className='skill-item'>Cost: {state.agent.cSkill.cost}</div>
                <div className='skill-item'>{state.agent.cSkill.uses}</div>
              </div>
            </div>
            <div className='skill-inner-container'>
              <img src={state.agentImages.q} alt='' className='skill-icon' />
              <div className='skill-descriptions'>
                <div className='skill-item'>{state.agent.qSkill.name.toUpperCase()}</div>
                <div className='skill-item'>{state.agent.qSkill.description}</div>
                <div className='skill-item'>Cost: {state.agent.qSkill.cost}</div>
                <div className='skill-item'>{state.agent.qSkill.uses} </div>
              </div>
            </div>
            <div className='skill-inner-container'>
              <img src={state.agentImages.e} alt='' className='skill-icon' />
              <div className='skill-descriptions'>
                <div className='skill-item'>{state.agent.eSkill.name.toUpperCase()}</div>
                <div className='skill-item'>{state.agent.eSkill.description}</div>
                <div className='skill-item'>Cost: {state.agent.eSkill.cost}</div>
                <div className='skill-item'>{state.agent.eSkill.uses} </div>
              </div>
            </div>
            <div className='skill-inner-container'>
              <img src={state.agentImages.x} alt='' className='skill-icon' />
              <div className='skill-descriptions'>
                <div className='skill-item'>{state.agent.xSkill.name.toUpperCase()}</div>
                <div className='skill-item'>{state.agent.xSkill.description}</div>
                <div className='skill-item'>Cost: {state.agent.xSkill.cost}</div>
                <div className='skill-item'>{state.agent.xSkill.uses} </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
