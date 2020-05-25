import React from 'react';
import { useHistory } from 'react-router-dom';
import useAgentPortraits from 'Hooks/useAgentPortraits';

export default function MatchHistoryPlayerItem(props) {
  const img = useAgentPortraits(props.agent);

  const history = useHistory();

  return (
    <div className='team-player'>
      <img className='hero-icon small' src={img} alt='' />
      <span
        onClick={(e) => {
          history.push({
            pathname: `/player/username=${e.target.innerText}`,
          });
          window.scrollTo(0, 0);
        }}>
        {props.player}
      </span>
    </div>
  );
}
