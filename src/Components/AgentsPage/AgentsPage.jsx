import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AgentItem from './AgentItems/AgentItem';
import AgentInformation from './AgentInformation/AgentInformation';
import useAgentData from 'Hooks/useAgentData';
import usePrevious from 'Hooks/usePrevious';

export default function AgentsPage(props) {
  let params = useParams();

  const [state, setState] = useState({
    agentName: params.agent,
    activeSkill: 'c',
    agent: {},
  });

  useEffect(() => {
    setState((prev) => ({ ...prev, agentName: params.agent, activeSkill: 'c' }));
  }, [params.agent]);

  const { agent } = useAgentData(state.agentName);

  const prevSkill = usePrevious(state.activeSkill);

  const setAgentName = (name) => {
    setState({ ...state, agentName: name, activeSkill: 'c' });
  };

  const setActiveSkill = (activeSkill) => {
    setState({ ...state, activeSkill });
  };

  const setAgentSkill = (skillName, skillDescription, skillCost, skillUses) => {
    setState({
      ...state,
      skillName,
      skillDescription,
      skillCost,
      skillUses,
    });
  };

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
    <AgentItem
      key={agentListItem}
      agent={agentListItem}
      setAgentName={setAgentName}
      agentName={state.agentName}
      setAgentSkill={setAgentSkill}
    />
  ));

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta name='title' content='Valorant Stats, Database, Guide - Valostats.gg' />
          <meta
            name='description'
            content='Real-time Valorant Stats! Check your profile, use powerful global Valorant Statistics!'
          />
          <meta
            name='keywords'
            content='Valorant Stats, Valorant Match History, Valorant GG, Valorant Guide, Valorantics, Real-time In Game, Statistics, Valorant Spectate, Leaderboards, Chart, Agent Guide, Agent Build, Agent Counter'
          />
          <title> Agents - Valostats.gg - Valorant Agents Statistics</title>
        </Helmet>
      </HelmetProvider>
      <div className='agent-page-wrapper'>
        <div className='agent-details'>
          {state.agentName && (
            <AgentInformation
              agentName={state.agentName}
              setActiveSkill={setActiveSkill}
              prevSkill={prevSkill}
              activeSkill={state.activeSkill}
              agent={agent}
            />
          )}
        </div>
        <div className='agent-icons-wrapper'>{agentList}</div>
      </div>
    </>
  );
}
