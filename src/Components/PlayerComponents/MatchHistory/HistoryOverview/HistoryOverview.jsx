import React, { useState, useEffect } from 'react';
import './HistoryOverview.scss';
import HistoryOverviewSearchbox from './HistoryOverviewSearchbox';
import HistoryOverviewPiechart from './HistoryOverviewPiechart';
import heroIcon from 'Images/portraitPlaceholder.png';

export default function HistoryOverview(props) {
  const [state, setState] = useState({
    selected: 'total',
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
    <>
      <div className='default-container header-container history-overview-navigation'>
        <ul>
          <li
            className={state.selected === 'total' ? 'selected' : ''}
            onClick={() => setState({ ...state, selected: 'total' })}>
            Total
          </li>
          <li
            className={state.selected === 'comp' ? 'selected' : ''}
            onClick={() => setState({ ...state, selected: 'comp' })}>
            Competitive
          </li>
          <li
            className={state.selected === 'unrated' ? 'selected' : ''}
            onClick={() => setState({ ...state, selected: 'unrated' })}>
            Unrated
          </li>
        </ul>
        {/* this should be an input with autocomplete */}
        <div className='agent-searchbox'>
          <HistoryOverviewSearchbox />
        </div>
      </div>

      <div className='default-container content-container overview-container'>
        <div className='graph-stats-container'>
          <div className='overview-header left-side'>Win rate and KDA</div>
          <div className='graph-stats-inner-container'>
            {/* <i className='fas fa-chart-pie fa-8x pie-chart'></i> */}
            <HistoryOverviewPiechart />
            <div className='stats-container'>
              <span className='stats'>20G / 12W / 8L</span>
              <span className='stats'>5.3 / 3.5 / 10.0</span>
              <span className='stats'>4.36:1 (61%)</span>
            </div>
          </div>
        </div>
        <div className='seperator'></div>
        <div className='most-played-agent-container'>
          <div className='overview-header'>Most played agents</div>
          <div className='most-played-agent'>
            <div className='most-played-agent-item'>
              <img className='hero-icon medium' src={state.img} alt='' />
              <div className='most-played-agent-info'>
                <span className='agent-name'>Brimstone</span>
                <span className='agent-info'>(6W 3L) / 5.54 KDA</span>
              </div>
            </div>
            <div className='most-played-agent-item'>
              <img className='hero-icon medium' src={state.img} alt='' />
              <div className='most-played-agent-info'>
                <span className='agent-name'>Agent name</span>
                <span className='agent-info'>(6W 3L) / 5.54 KDA</span>
              </div>
            </div>
            <div className='most-played-agent-item'>
              <img className='hero-icon medium' src={state.img} alt='' />
              <div className='most-played-agent-info'>
                <span className='agent-name'>Agent name</span>
                <span className='agent-info'>(6W 3L) / 5.54 KDA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
