import React from 'react';
import './AgentSkills.scss';
import { ReactComponent as Money } from 'Images/money.svg';
export default function AgentSkills(props) {
  return (
    <div className='skill-container'>
      <div className='skill-name'>{props.skillName.toUpperCase()}</div>
      <div className='skill-description'>{props.skillDescription}</div>
      <div className='skill-cost'>
        <div className='skill-cost-icon'>
          <Money />
        </div>
        {props.skillCost}
        <p className='dot'>•</p>
        <div className='skill-use'>{props.skillUses}</div>
      </div>
    </div>
  );
}
