import React from 'react';
import { useHistory } from 'react-router-dom';
import useAgentPortraits from 'Hooks/useAgentPortraits';

export default function AgentSummaryItem(props) {
  const img = useAgentPortraits(props.agent);
  const history = useHistory();

  return (
    <>
      <div className='summary-item'>
        <img
          className='hero-icon'
          src={img}
          alt=''
          onClick={() => {
            history.push({
              pathname: `/agents/${props.agent}`,
            });
          }}
        />
        <div
          className='summary-agent-name'
          onClick={() => {
            history.push({
              pathname: `/agents/${props.agent}`,
            });
          }}>
          {props.agent}
        </div>
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
