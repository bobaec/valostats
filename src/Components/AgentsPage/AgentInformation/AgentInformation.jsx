import React, { useState, useEffect } from 'react';
import './AgentInformation.scss';
import AgentSkills from 'Components/AgentsPage/AgentSkills/AgentSkills';
export default function AgentInformation(props) {
  const [state, setState] = useState({
    agent: '',
    agentImages: {},
    skillDescription: '',
    skillCost: '',
    skillUses: '',
  });
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

  const setAgentSkill = (skillDescription, skillCost, skillUses) => {
    setState({ ...state, skillDescription: skillDescription, skillCost: skillCost, skillUses: skillUses });
    console.log(state.skillDescription);
  };
  const skills = ['c', 'q', 'e', 'x'];

  const skillMapper = skills.map((letter) => {
    if (state.agent[letter] !== undefined) {
      return (
        <div
          className='skill-inner-container'
          onClick={() => {
            setAgentSkill(state.agent[letter].description, state.agent[letter].cost, state.agent[letter].uses);
          }}>
          <img src={state.agentImages[letter]} alt='' className='skill-icon' />
          <div className='skill-descriptions'>
            <div className='skill-item'>{state.agent[letter].name.toUpperCase()}</div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  });

  return (
    state.agent && (
      <div className='agent-wrapper'>
        <div className='agent-container'>
          <div className='agent-info'>
            <h3 className='agent-type'>{state.agent.type.toUpperCase()}</h3>
            <h3 className='agent-name'>{state.agent.name.toUpperCase()}</h3>
          </div>
          <div className='skill-wrapper'>
            <div className='skill-container'>{skillMapper}</div>
          </div>
        </div>
        {state.skillDescription && (
          <AgentSkills
            skillDescription={state.skillDescription}
            skillCost={state.skillCost}
            skillUses={state.skillUses}
          />
        )}
      </div>
    )
  );
}
