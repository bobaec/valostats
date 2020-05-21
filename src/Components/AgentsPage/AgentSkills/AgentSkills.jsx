import React from 'react';
export default function AgentSkills(props) {
  return (
    <div style={{ color: 'white' }}>
      {props.skillDescription}

      {props.skillCost}

      {props.skillUses}
    </div>
  );
}
