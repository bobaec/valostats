import React from 'react';
import 'Components/AgentsPage/AgentSkills/AgentSkills.scss';
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
        text.push(
          <span key={word} className='key-word'>
            {word}
          </span>
        );
        text.push(' ');
      }
    }

    text.pop();
    text.push('.');
    return (
      <div key={text} className='whole-sentence'>
        <span>{text}</span>
      </div>
    );
  });

  return (
    <div className='skill-description-container'>
      <div className='skill-name'>
        {props.skillName}
        {<span className='hotkey'>{props.activeSkill}</span>}
      </div>
      <div className={`skill-description-wrapper ${props.inHover && 'in-hover'}`}>
        <div className='skill-description'>{descriptionMapper}</div>

        <div className='other-related-info'>
          <div className='row'>
            <div className='skill-damage'>
              <span className='skill-header'>{props.skillDamage ? 'DAMAGE' : 'EFFECT'}</span>
              <div className='skill-damage-definition'>{props.skillDamage ? props.skillDamage : props.skillEffect}</div>
            </div>

            <div className='skill-cost'>
              <span className='skill-header'>COST</span>
              <span className='skill-cost-definition'>
                <Money className='skill-cost-icon' />
                <span className='skill-cost-money'>{props.skillCost}</span>{' '}
                {props.activeSkill !== 'x' && <span className='dot'>•</span>}{' '}
                <span className='skill-uses'>{props.skillUses}</span>
              </span>
            </div>
          </div>
          <div className='row'>
            <div className='skill-duration'>
              <span className='skill-header'>DURATION</span>
              <div className='skill-duration-definition'>{props.skillDuration ? props.skillDuration : 'N/A'}</div>
            </div>
            <div className='skill-misc'>
              <span className='skill-header'>MISC</span>
              <div className='skill-misc-definition'>
                <div className={`${props.skillCooldown ? 'skill-spacer' : ''}`}>
                  {props.skillOther ? props.skillOther : props.skillCooldown ? '' : 'N/A'}
                </div>
                {props.skillCooldown && <div className=''>Cooldown: {props.skillCooldown}</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
