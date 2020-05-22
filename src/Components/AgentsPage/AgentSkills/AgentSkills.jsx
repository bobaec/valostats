import React from 'react';
import './AgentSkills.scss';
import { ReactComponent as Money } from 'Images/money.svg';

export default function AgentSkills(props) {
  let skillDescriptions = props.skillDescription.split(/[.]+/);
  skillDescriptions.splice(-1, 1);
  skillDescriptions.map((str) => str.replace(/\s/g, ''));

  skillDescriptions = skillDescriptions.map((str) => str.trim());

  const descriptionMapper = skillDescriptions.map((sentence) => {
    if (sentence.split(' ')[0] === sentence.split(' ')[0].toUpperCase()) {
      return <div className='how-to-use'>{sentence}. </div>;
    } else {
      return <span className='related-skill-info'>{sentence}. </span>;
    }
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
