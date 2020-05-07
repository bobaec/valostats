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
        <div className='agent-searchbox'>
          <span className='agent-text'>Search an Agent</span>
          <i class='fas fa-search'></i>
        </div>
      </div>

      <div className='default-container content-container overview-container'>
        <div className='flex-row'>
          <table>
            <tr>
              <span>20G</span>
              <span> </span>
              <span>12W</span>
              <span> </span>
              <span>7L</span>
              <span> </span>
            </tr>
            <tr>
              <i class='fas fa-chart-pie fa-6x'></i>
            </tr>
          </table>
          <table id='table2'>
            <tr>
              <span>5.3 / 3.5 / 10.0</span>
            </tr>
            <tr>
              <span>4.36:1 (61%)</span>
            </tr>
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
