import React from 'react';
import useAgentPortraits from 'Hooks/useAgentPortraits';
import useAgentData from 'Hooks/useAgentData';
export default function TierListContent(props) {
  const img = useAgentPortraits(props.agent);
  const agentType = useAgentData(props.agent);
  return (
    <tr>
      <td>{props.rank}</td>
      <td>{agentType.type}</td>
      <td>
        <td>
          <img className={'tier-list-agent-icon'} src={img} alt='' />
        </td>
        <td>{props.agent}</td>
      </td>
      <td>{props.tier}</td>
      <td>{props.winRate}</td>
      <td>{props.pickRate}</td>
      <td>{props.matches}</td>
    </tr>
  );
}
