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
            <th className='tier-list-rank'>Rank</th>
            <th className='tier-list-role'>Role</th>
            <th className='tier-list-agent'>Agent</th>
            <th className='tier-list-tier'>Tier</th>
            <th className='tier-list-win-rate'>Win Rate</th>
            <th className='tier-list-pick-rate'>Pick Rate</th>
            <th className='tier-list-matches'>Matches</th>
          </tr>
        </table>
        <table className='tier-list-table-contents'>{agentList}</table>
      </div>
    </div>
  );
}
