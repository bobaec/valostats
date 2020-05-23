import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useAgentPortraits from 'Hooks/useAgentPortraits';

export default function MatchHistoryPlayerItem(props) {
  const [state, setState] = useState({
    showMatchDetails: false,
  });

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
        }}>
        {props.player}
      </span>
    </div>
  );
}
