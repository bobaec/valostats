import React, { useState, useEffect } from 'react';
import heroIcon from 'Images/portraitPlaceholder.png';

export default function MatchHistoryPlayerItem(props) {
  const [state, setState] = useState({
    showMatchDetails: false,
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
    <div className='team-player'>
      <img className='hero-icon small' src={state.img} alt='' />
      <span>{props.player}</span>
    </div>
  );
}
