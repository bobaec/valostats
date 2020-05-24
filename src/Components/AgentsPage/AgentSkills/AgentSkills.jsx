import React from 'react';
import './AgentSkills.scss';
import { ReactComponent as Money } from 'Images/money.svg';

export default function AgentSkills(props) {
  let regexAllCapitalWords = props.skillDescription.match(/\b[A-Z-]+\b/g);

  let skillDescriptions = props.skillDescription.split(/[.]+/);

  skillDescriptions.splice(-1, 1);

  skillDescriptions = skillDescriptions.map((str) => str.trim());
  const descriptionMapper = skillDescriptions.map((sentence) => {
    let splitSentence = sentence.split(' ');
    let text = [];
    for (let word of splitSentence) {
      if (!regexAllCapitalWords.includes(word)) {
        text.push(word);
        text.push(' ');
      } else {
        text.push(<span className='key-word'>{word}</span>);
        text.push(' ');
      }
    }

    text.pop();
    text.push('.');
    return (
      <div className='whole-sentence'>
        <span>{text}</span>
      </div>
    );
  });

  console.log(props);
  return (
    <div className='skill-description-container'>
      <div className='skill-name'>
        {props.skillName}
        {<span className='hotkey'>{props.activeSkill}</span>}
      </div>
      <div className={`skill-description-wrapper ${props.inHover && 'in-hover'}`}>
        <div className='skill-description'>{descriptionMapper}</div>

        <div className='other-related-info'>
          <div className='skill-damage'>
            {props.skillDamage ? 'DAMAGE' : 'EFFECT'}
            <div className='skill-damage-or-effect'>{props.skillDamage ? props.skillDamage : props.skillEffect}</div>
          </div>

          <div className='skill-cost'>
            COST
            <span className='skill-cost-separator'>
              {' '}
              <Money className='skill-cost-icon' />
              {props.skillCost}
            </span>
            <div className='skill-use'>{props.skillUses}</div>
          </div>
          <div className='skill-cooldown'>COOLDOWN </div>
          <div className='misc-skill-info'>OTHER </div>
        </div>
      </div>
    </div>
  );
}

//{props.activeSkill !== 'x' && <span className='dot'>•</span>}
