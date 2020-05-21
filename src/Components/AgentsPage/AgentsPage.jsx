import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './AgentsPage.scss';
import AgentItem from './AgentItems/AgentItem';
import AgentInformation from './AgentInformation/AgentInformation';
import useAgentData from 'Hooks/useAgentData';

export default function AgentsPage(props) {
  const [state, setState] = useState({
    agentName: 'Brimstone',
    activeSkill: 'c',
    agent: {},
  });

  const { agent } = useAgentData(state.agentName);

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

  return (
    <>
      <Helmet>
        <meta name='title' content='Valorant Stats, Database, Guide - VALOSTATS.GG' />
        <meta
          name='description'
          content='Real-time Valorant Stats! Check your profile, use powerful global Valorant Statistics!'
        />
        <meta
          name='keywords'
          content='Valorant Stats, Valorant Match History, Valorant GG, Valorant Guide, Valorantics, Real-time In Game, Statistics, Valorant Spectate, Leaderboards, Chart, Agent Guide, Agent Build, Agent Counter'
        />
        <title>Valorant Agents - VALOSTATS.GG</title>
      </Helmet>
      <div className='agent-details'>
        {state.agentName && (
          <AgentInformation
            agentName={state.agentName}
            setActiveSkill={setActiveSkill}
            activeSkill={state.activeSkill}
            agent={agent}
          />
        )}
      </div>
      <div className='agent-icons-wrapper'>
        <AgentItem
          agent={'Brimstone'}
          setAgentName={setAgentName}
          agentName={state.agentName}
          setAgentSkill={setAgentSkill}
        />
        <AgentItem
          agent={'Jett'}
          setAgentName={setAgentName}
          agentName={state.agentName}
          setAgentSkill={setAgentSkill}
        />
        <AgentItem
          agent={'Phoenix'}
          setAgentName={setAgentName}
          agentName={state.agentName}
          setAgentSkill={setAgentSkill}
        />
        <AgentItem
          agent={'Sage'}
          setAgentName={setAgentName}
          agentName={state.agentName}
          setAgentSkill={setAgentSkill}
        />
        <AgentItem
          agent={'Sova'}
          setAgentName={setAgentName}
          agentName={state.agentName}
          setAgentSkill={setAgentSkill}
        />
        <AgentItem
          agent={'Breach'}
          setAgentName={setAgentName}
          agentName={state.agentName}
          setAgentSkill={setAgentSkill}
        />
        <AgentItem
          agent={'Cypher'}
          setAgentName={setAgentName}
          agentName={state.agentName}
          setAgentSkill={setAgentSkill}
        />
        <AgentItem
          agent={'Omen'}
          setAgentName={setAgentName}
          agentName={state.agentName}
          setAgentSkill={setAgentSkill}
        />
        <AgentItem
          agent={'Raze'}
          setAgentName={setAgentName}
          agentName={state.agentName}
          setAgentSkill={setAgentSkill}
        />
        <AgentItem
          agent={'Viper'}
          setAgentName={setAgentName}
          agentName={state.agentName}
          setAgentSkill={setAgentSkill}
        />
      </div>
    </>
  );
}
