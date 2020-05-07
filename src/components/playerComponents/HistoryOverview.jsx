import React from 'react';
import './HistoryOverview.scss';

export default function Rank() {
  return (
    <>
      <div className='default-container header-container history-overview-navigation'>
        <ul>
          <li className='selected'>Total</li>
          <li>Competitive</li>
          <li>Unrated</li>
        </ul>
        {/* <div className='seperator'></div> */}
        {/* this should be an input with autocomplete */}
        <div className='agent-searchbox'>
          <span className='agent-text'>Search an Agent</span>
          <i class='fas fa-search'></i>
        </div>
      </div>

      <div className='default-container content-container overview-container'>
        <div>
          <div className='graph-stats-container'>
            <i class='fas fa-chart-pie fa-6x pie-chart'></i>
            <div className='stats-container'>
              <span className='stats'>20G / 12W / 8L</span>
              <span className='stats'>5.3 / 3.5 / 10.0</span>
              <span className='stats'>4.36:1 (61%)</span>
            </div>
          </div>
        </div>
        <div className='seperator'></div>
        <div className='flex-row'>
          <table>
            <tr>
              <td>icon </td>
              <td>info </td>
              <td>info </td>
            </tr>
            <tr></tr>
            <tr></tr>
          </table>
        </div>

        <div className='seperator'></div>

        <div className='flex-row'>
          <table>
            <tr>
              <td>icon </td>
              <td>info </td>
              <td>info </td>
            </tr>
            <tr></tr>
            <tr></tr>
          </table>
        </div>
      </div>
    </>
  );
}
