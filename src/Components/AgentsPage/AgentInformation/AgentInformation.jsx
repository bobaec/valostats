import React, { useState, useEffect } from 'react';
import 'Components/AgentsPage/AgentInformation/AgentInformation.scss';
import AgentSkills from 'Components/AgentsPage/AgentSkills/AgentSkills';
export default function AgentInformation(props) {
  const { agentName, setActiveSkill, activeSkill, agent /*prevSkill*/ } = props;

  const [state, setState] = useState({
    agent: '',
    agentImages: {},
    skillName: '',
    skillDescription: '',
    skillCost: '',
    skillUses: '',
    skillDamage: '',
    skillEffect: '',
    skillCooldown: '',
    skillDuration: '',
    skillOther: '',
    objSelected: false,
    inHover: false,
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
      skillDamage: agent[activeSkill] ? agent[activeSkill].damage : '',
      skillEffect: agent[activeSkill] ? agent[activeSkill].effect : '',
      skillCooldown: agent[activeSkill] ? agent[activeSkill].cooldown : '',
      skillDuration: agent[activeSkill] ? agent[activeSkill].duration : '',
      skillOther: agent[activeSkill] ? agent[activeSkill].other : '',
    }));
  }, [agentName, activeSkill, agent]);

  const setAgentSkill = (
    skillName,
    skillDescription,
    skillCost,
    skillUses,
    skillDamage,
    skillEffect,
    skillCooldown,
    skillDuration,
    skillOther
  ) => {
    setState({
      ...state,
      skillName,
      skillDescription,
      skillCost,
      skillUses,
      skillDamage,
      skillEffect,
      skillCooldown,
      skillDuration,
      skillOther,
    });
  };

  // const onMouseEnter = (letter) => {
  //   setActiveSkill(letter);
  //   setAgentSkill(
  //     state.agent[letter].name,
  //     state.agent[letter].description,
  //     state.agent[letter].cost,
  //     state.agent[letter].uses,
  //     state.agent[letter].damage,
  //     state.agent[letter].effect,
  //     state.agent[letter].cooldown,
  //     state.agent[letter].duration,
  //     state.agent[letter].other
  //   );
  //   setState({ ...state, objSelected: false });
  // };

  // let timeOut;

  // const onMouseLeave = () => {
  //   if (!state.objSelected) {
  //     setState({ ...state, objSelected: false });
  //     setActiveSkill(prevSkill);
  //   } else {
  //     setAgentSkill(
  //       state.agent[prevSkill].name,
  //       state.agent[prevSkill].description,
  //       state.agent[prevSkill].cost,
  //       state.agent[prevSkill].uses,
  //       state.agent[prevSkill].damage,
  //       state.agent[prevSkill].effect,
  //       state.agent[prevSkill].cooldown,
  //       state.agent[prevSkill].duration,
  //       state.agent[prevSkill].other
  //     );
  //   }
  // };

  const skills = ['c', 'q', 'e', 'x'];

  const skillMapper = skills.map((letter) => {
    return (
      state.agent[letter] && (
        <div
          key={letter + state.agent}
          className={`skill-inner-container ${letter === props.activeSkill && 'selected'}`}
          // onMouseEnter={() => {
          //   onMouseEnter(letter);
          // }}
          // onMouseLeave={() => {
          //   onMouseLeave();
          // }}
          onClick={() => {
            setAgentSkill(
              state.agent[letter].name,
              state.agent[letter].description,
              state.agent[letter].cost,
              state.agent[letter].uses,
              state.agent[letter].damage,
              state.agent[letter].effect,
              state.agent[letter].cooldown,
              state.agent[letter].duration,
              state.agent[letter].other
            );
            setActiveSkill(letter);
            setState({ ...state, objSelected: true });
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
            <span className='agent-type'>{state.agent.type}</span>
            <span className='agent-name'>{state.agent.name}</span>
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
              skillDamage={state.skillDamage}
              skillEffect={state.skillEffect}
              skillCost={state.skillCost}
              skillUses={state.skillUses}
              skillCooldown={state.skillCooldown}
              skillDuration={state.skillDuration}
              skillOther={state.skillOther}
              inHover={state.inHover}
            />
          )}
        </div>
      </div>
    )
  );
}
