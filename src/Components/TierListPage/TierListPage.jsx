import React from 'react';
import TierListContent from './TierListContent/TierListContent';
export default function TierListPage(props) {
  const agentList = [
    'Breach',
    'Brimstone',
    'Cypher',
    'Jett',
    'Omen',
    'Phoenix',
    'Raze',
    'Sage',
    'Sova',
    'Viper',
  ].map((agentListItem) => (
    <TierListContent
      rank={'1'}
      role={'Duelist'}
      agent={agentListItem}
      tier={'S'}
      winRate={'50%'}
      pickRate={'50%'}
      matches={'69'}
    />
  ));

  return (
    <div className='tier-list-wrapper'>
      <div className='tier-list-description'>Valorant Agent Tier List</div>
      <div className='tier-list-container'>
        <table className='tier-list-table'>
          <tr className='tier-list-table-header'>
            <th>Rank</th>
            <th>Role</th>
            <th>Agent</th>
            <th>Tier</th>
            <th>Win Rate</th>
            <th>Pick Rate</th>
            <th>Matches</th>
          </tr>
        </table>
        <table className='tier-list-table-contents'>{agentList}</table>
        {/* <div className='tier-list-table'>
          <div className='tier-list-table-header'>
            <div className='tier-list-rank'>Rank</div>
            <div className='tier-list-role'>Role</div>
            <div className='tier-list-agent'>Agent</div>
            <div className='tier-list-tier'>Tier</div>
            <div className='tier-list-win-rate'>Win Rate</div>
            <div className='tier-list-pick-rate'>Pick Rate</div>
            <div className='tier-list-matches'>Matches</div>
          </div>
          <div className='tier-list-table-contents'>{agentList}</div>
        </div> */}
      </div>
    </div>
  );
}
