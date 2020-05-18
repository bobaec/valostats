import React, { useState, useEffect } from 'react';
import useAgentPortraits from 'Hooks/useAgentPortraits';

export default function MatchHistoryPlayerItem(props) {
  const [state, setState] = useState({
    showMatchDetails: false,
  });

  const img = useAgentPortraits(props.agent);

  return (
    <div className='team-player'>
      <img className='hero-icon small' src={img} alt='' />
      <span>{props.player}</span>
    </div>
  );
}
