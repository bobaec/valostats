import React from 'react';
import './AgentSkills.scss';
import { ReactComponent as Money } from 'Images/money.svg';

export default function AgentSkills(props) {
  let skillDescriptions = props.skillDescription.split(/[.]+/);
  skillDescriptions.splice(-1, 1);
  const descriptionMapper = skillDescriptions.map((sentence) => {
    return <div>{sentence}.</div>;
  });

  return (
    <div className='skill-description-container'>
      <div className='skill-name'>
        {props.skillName}
        {<span className='hotkey'>{props.activeSkill}</span>}
      </div>
      <div className='skill-description-wrapper'>
        <div className='skill-description'>{descriptionMapper}</div>
        <div className='skill-cost'>
          Cost:
          <div className='skill-cost-icon'>
            <Money />
          </div>
          {props.skillCost}
          {props.activeSkill !== 'x' && <span className='dot'>•</span>}
          <div className='skill-use'>{props.skillUses}</div>
        </div>
      </div>
    </div>
  );
}
