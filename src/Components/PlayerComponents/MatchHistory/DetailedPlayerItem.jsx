import React, { useState, useEffect } from 'react';
import heroIcon from 'Images/portraitPlaceholder.png';

export default function DetailedPlayerItem(props) {
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
      <div className='player-container'>
        <img className='hero-icon small' src={state.img} alt='' />
        <span className='player-name'>{props.player}</span>
      </div>
      <span className='player-rank'>Diamond 3</span>
      <span className='player-combat-score'>238</span>
      <div className='player-kda'>
        <span className='player-kda-summary'>0.83:1</span>
        <span className='player-kda-breakdown'>2/6/3</span>
      </div>
      <span className='player-econ-rating'>78</span>
      <span className='player-first-bloods'>3</span>
      <span className='player-plants'>4</span>
      <span className='player-defuses'>1</span>
    </div>
  );
}
