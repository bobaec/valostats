import React, { useState, useEffect } from 'react';

export default function AgentSummaryItem(props) {
  const [state, setState] = useState({
    img: '',
  });

  useEffect(() => {
    import(`Images/AgentPortraits/${props.agent}Portrait.jpg`).then((img) => {
      setState((prev) => ({ ...prev, img: img.default }));
    });
  }, [props.agent]);

  return (
    <>
      <div className='summary-item'>
        <img className='hero-icon' src={state.img} alt='' />
        <div className='summary-agent-name'>{props.agent}</div>
        <div className='summary-kda-container'>
          <div className='kda-summary'>3.82:1 KDA</div>
          <div className='kda-breakdown'>6.3 / 3.4 / 6.7</div>
        </div>
        <div className='summary-kda-container'>
          <div className='winrate-summary'>65%</div>
          <div className='winrate-breakdown'>20 Played</div>
        </div>
      </div>
      <div className='seperator horizontal' />
    </>
  );
}
