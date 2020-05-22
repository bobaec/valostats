import React from 'react';
import './AgentSkills.scss';
import { ReactComponent as Money } from 'Images/money.svg';

export default function AgentSkills(props) {
  let skillDescriptions = props.skillDescription.split(/[.]+/);
  skillDescriptions.splice(-1, 1);
  skillDescriptions.map((str) => str.replace(/\s/g, ''));

  skillDescriptions = skillDescriptions.map((str) => str.trim());

  // function isUpperCase(str) {
  //   return str === str.toUpperCase();
  // }

  function addPeriodBack(array) {
    for (let i = 0; i < array.length; i++) {
      array[i] = array[i] + '.';
    }
    //   for (let x = 0; x < array.length; x++) {
    //     if (x + 1 < array.length) {
    //       if (isUpperCase(array[x].split(' ')[0]) && isUpperCase(array[x + 1].split(' ')[0])) {
    //         array[x] = array[x].concat(' ' + array[x + 1]);
    //         var el = skillDescriptions.find((a) => a.includes('aa'));
    //         if (!el) {
    //           array.splice(x + 1, 1);
    //         }
    //       }
    //     }
    //   }
    return array;
  }

  function addSpaceBack(array) {
    for (let i = 0; i < array.length; i++) {
      array[i] = ' ' + array[i] + ' ';
    }
    return array;
  }
  skillDescriptions = addPeriodBack(skillDescriptions);

  const descriptionMapper = skillDescriptions.map((sentence) => {
    console.log(sentence.split(' ').slice(1));
    addSpaceBack(sentence.split(' ').slice(1));
    if (sentence.split(' ')[0] === sentence.split(' ')[0].toUpperCase()) {
      return (
        <div className='whole-sentence'>
          <span className='first-word'>{sentence.split(' ')[0]}</span>
          <span className='rest-of-sentence'>{addSpaceBack(sentence.split(' ').slice(1))}</span>
        </div>
      );
    } else {
      return <span className='related-skill-info'>{sentence} </span>;
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
        <div className='other-related-info'>
          <div className='skill-damage'>Damage: </div>
          <div className='skill-cooldown'>Cooldown: </div>
          <div className='misc-skill-info'>Other: </div>
        </div>
      </div>
    </div>
  );
}
