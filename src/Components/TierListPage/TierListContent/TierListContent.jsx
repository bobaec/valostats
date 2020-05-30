import React from 'react';
import useAgentPortraits from 'Hooks/useAgentPortraits';

export default function TierListContent(props) {
  const img = useAgentPortraits(props.agent);
  return (
    <tr>
      <td>{props.rank}</td>
      <td>{props.role}</td>
      <td>
        <img className={'tier-list-agent-icon'} src={img} alt='' />
        {props.agent}
      </td>
      <td>{props.tier}</td>
      <td>{props.winRate}</td>
      <td>{props.pickRate}</td>
      <td>{props.matches}</td>
    </tr>
  );
}
