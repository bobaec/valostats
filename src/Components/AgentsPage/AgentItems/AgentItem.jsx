import React, { useState } from 'react';
import useAgentPortraits from 'Hooks/useAgentPortraits';
import AgentInformation from 'Components/AgentsPage/AgentInformation/AgentInformation';
import './AgentItem.scss';

export default function AgentItem(props) {
  const [state, setState] = useState({
    agentName: '',
    showComponent: false,
  });

  const img = useAgentPortraits(props.agent);

  let firstClick = false;

  const showAgent = async () => {
    setState({ ...state, agentName: props.agent, showComponent: true });
  };
  const changeAgent = async () => {
    setState({ ...state, agentName: props.agent, showComponent: false });
  };

  return (
    <>
      {/* <AgentInformation agentName={state.agentName} /> */}
      {state.showComponent === true && (
        <AgentInformation agentName={state.agentName} showComponent={state.showComponent} />
      )}
      <div className='agent-content'>
        <div className='agent-header'>
          <img
            className='hero-icon small'
            src={img}
            alt=''
            onClick={(e) => {
              if (firstClick === false) {
                showAgent();
              }
              if (state.showComponent === false) {
                showAgent();
              }
              if (state.showComponent === true) {
                changeAgent();
              }

              console.log(state);
            }}
          />
        </div>
      </div>
    </>
  );
}
