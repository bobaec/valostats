import React from 'react';
import useAgentPortraits from 'Hooks/useAgentPortraits';
import useAgentData from 'Hooks/useAgentData';
export default function TierListContent(props) {
  const img = useAgentPortraits(props.agent);
  const agentType = useAgentData(props.agent);
  return (
    <tr>
      <td className='tier-list-rank'>{props.rank}</td>
      <td className='tier-list-role'>{agentType.type}</td>
      <td className='tier-list-agent'>
        <span>
          <img className={'tier-list-agent-icon'} src={img} alt='' />
        </span>
        <span>{props.agent}</span>
      </td>
      <td className='tier-list-tier'>{props.tier}</td>
      <td className='tier-list-win-rate'>{props.winRate}</td>
      <td className='tier-list-pick-rate'>{props.pickRate}</td>
      <td className='tier-list-matches'>{props.matches}</td>
    </tr>
  );
}
