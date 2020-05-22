import React from 'react';
import './AgentSkills.scss';
import { ReactComponent as Money } from 'Images/money.svg';

export default function AgentSkills(props) {
  let skillDescriptions = props.skillDescription.split(/[.]+/);
  skillDescriptions.splice(-1, 1);
  skillDescriptions.map((str) => str.replace(/\s/g, ''));

  skillDescriptions = skillDescriptions.map((str) => str.trim());

  function addPeriodBack(array) {
    for (let i = 0; i < array.length; i++) {
      array[i] = array[i] + '.';
    }

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
    for (let i = 0; i < skillDescriptions.length; i++) {
      let check = sentence.split(', ');
      if (check.length > 1) {
        for (let i = 1; i < check.length; i++) {
          if (check[i].split(' ')[0] === check[i].split(' ')[0].toUpperCase()) {
            return (
              <span className='whole-sentence'>
                {check[0]}, <span className='key-word'>{check[i].split(' ')[0]} </span>
                <span className='rest-of-sentence'>{check[i].split(' ').slice(1).join(' ')} </span>
              </span>
            );
          }
        }
      }
      if (sentence.split(' ').slice(-1)[0] === sentence.split(' ').slice(-1)[0].toUpperCase()) {
        let temp = sentence.split(' ');
        temp.pop();
        temp = temp.join(' ');
        return (
          <span className='whole-sentence'>
            <span className='rest-of-sentence'>{temp} </span>
            <span className='key-word'>{sentence.split(' ').slice(-1)[0]}</span>
          </span>
        );
      }
      if (sentence.split(' ')[i] && sentence.split(' ')[i] === sentence.split(' ')[i].toUpperCase()) {
        if (sentence.split(' ')[i + 1] && sentence.split(' ')[i + 1] === sentence.split(' ')[i + 1].toUpperCase()) {
          if (sentence.split(' ')[i + 2] && sentence.split(' ')[i + 2] === sentence.split(' ')[i + 2].toUpperCase()) {
            return (
              <div className='whole-sentence'>
                <span className='key-word'>
                  {sentence.split(' ')[i]} {sentence.split(' ')[i + 1]} {sentence.split(' ')[i + 2]}
                </span>
                <span className='rest-of-sentence'>{addSpaceBack(sentence.split(' ').splice(3))}</span>
              </div>
            );
          }
          return (
            <div className='whole-sentence'>
              <span className='key-word'>
                {sentence.split(' ')[i]} {sentence.split(' ')[i + 1]}
              </span>
              <span className='rest-of-sentence'>{addSpaceBack(sentence.split(' ').splice(2))}</span>
            </div>
          );
        }

        if (sentence.split(' ')[i].includes('.')) {
          console.log(sentence.split(' ')[i]);
          return <span className='key-word'>{sentence.split(' ')[i]}</span>;
        }
        if (i === 0) {
          return (
            <div className='whole-sentence'>
              <span className='key-word'>{sentence.split(' ')[i]}</span>
              <span className='rest-of-sentence'>{addSpaceBack(sentence.split(' ').splice(1))}</span>
            </div>
          );
        }
      } else {
        let temp = sentence.split(' RE-USED');

        if (sentence.search('RE-USED') > 1) {
          return (
            <span className='related-skill-info'>
              <span>
                {temp[0]} <span className='key-word'>RE-USED</span>
              </span>
              <span>{temp[1]}</span>{' '}
            </span>
          );
        } else {
          return <span className='related-skill-info'>{sentence}</span>;
        }
      }
    }
  });

  return (
    <div className='skill-description-container'>
      <div className='skill-name'>
        {props.skillName}
        {<span className='hotkey'>{props.activeSkill}</span>}
      </div>
      <div className={`skill-description-wrapper`}>
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
