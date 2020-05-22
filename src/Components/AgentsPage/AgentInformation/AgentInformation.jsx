import React, { useState, useEffect } from 'react';
import './AgentInformation.scss';
import AgentSkills from 'Components/AgentsPage/AgentSkills/AgentSkills';
export default function AgentInformation(props) {
  const { agentName, setActiveSkill, activeSkill, agent } = props;

  const [state, setState] = useState({
    agent: '',
    agentImages: {},
    skillName: '',
    skillDescription: '',
    skillCost: '',
    skillUses: '',
  });

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

    setState((prev) => ({
      ...prev,
      skillName: agent[activeSkill] ? agent[activeSkill].name : '',
      skillDescription: agent[activeSkill] ? agent[activeSkill].description : '',
      skillCost: agent[activeSkill] ? agent[activeSkill].cost : '',
      skillUses: agent[activeSkill] ? agent[activeSkill].uses : '',
    }));
  }, [agentName, activeSkill, agent]);

  const setAgentSkill = (skillName, skillDescription, skillCost, skillUses) => {
    setState({
      ...state,
      skillName,
      skillDescription,
      skillCost,
      skillUses,
    });
  };

  const skills = ['c', 'q', 'e', 'x'];

  const skillMapper = skills.map((letter) => {
    return (
      state.agent[letter] && (
        <div
          className={`skill-inner-container ${letter === props.activeSkill && 'selected'}`}
          onClick={() => {
            setAgentSkill(
              state.agent[letter].name,
              state.agent[letter].description,
              state.agent[letter].cost,
              state.agent[letter].uses
            );
            setActiveSkill(letter);
          }}>
          <img src={state.agentImages[letter]} alt='' className={`skill-icon`} />
          <div className='skill-descriptions'>
            <div className='skill-item'>{state.agent[letter].name}</div>
          </div>
        </div>
      )
    );
  });

  return (
    state.agent && (
      <div className='agent-wrapper'>
        <div className='agent-container'>
          <div className='agent-info'>
            <h3 className='agent-type'>{state.agent.type}</h3>
            <h3 className='agent-name'>{state.agent.name}</h3>
          </div>
          <div className='skill-wrapper'>
            <div className='skill-container'>{skillMapper}</div>
          </div>
        </div>
        <div className='description-container'>
          {state.skillDescription && (
            <AgentSkills
              activeSkill={activeSkill}
              skillName={state.skillName}
              skillDescription={state.skillDescription}
              skillCost={state.skillCost}
              skillUses={state.skillUses}
            />
          )}
        </div>
      </div>
    )
  );
}
