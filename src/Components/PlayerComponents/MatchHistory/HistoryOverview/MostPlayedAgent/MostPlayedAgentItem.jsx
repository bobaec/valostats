import React, { useState, useEffect } from 'react';
import heroIcon from 'Images/portraitPlaceholder.png';

export default function MostPlayedAgentItem(props) {
  const [state, setState] = useState({
    img: '',
  });

  useEffect(() => {
    import(`Images/AgentPortraits/${props.agent}Portrait.jpg`)
      .then((img) => {
        setState((prev) => ({ ...prev, img: img.default }));
      })
      .catch(() => {
        setState((prev) => ({ ...prev, img: heroIcon }));
      });
  }, [props.agent]);

  return (
    <div className='most-played-agent-item'>
      <img className='hero-icon medium' src={state.img} alt='' />
      <div className='most-played-agent-info'>
        <span className='agent-name'>{props.agent}</span>
        <span className='agent-info'>(6W 3L) / 5.54 KDA</span>
      </div>
    </div>
  );
}
