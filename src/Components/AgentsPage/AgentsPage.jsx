import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './AgentsPage.scss';
import AgentItem from './AgentItems/AgentItem';
import Footer from 'Components/Footer/Footer';
import AgentInformation from './AgentInformation/AgentInformation';

export default function AgentsPage(props) {
  const [state, setState] = useState({
    agentName: 'Brimstone',
  });

  const setAgentName = (name) => {
    setState({ ...state, agentName: name });
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
      <div className='agent-details'>{state.agentName && <AgentInformation agentName={state.agentName} />}</div>
      <div className='agent-icons-wrapper'>
        <AgentItem agent={'Brimstone'} setAgentName={setAgentName} agentName={state.agentName} />
        <AgentItem agent={'Jett'} setAgentName={setAgentName} agentName={state.agentName} />
        <AgentItem agent={'Phoenix'} setAgentName={setAgentName} agentName={state.agentName} />
        <AgentItem agent={'Sage'} setAgentName={setAgentName} agentName={state.agentName} />
        <AgentItem agent={'Sova'} setAgentName={setAgentName} agentName={state.agentName} />
        <AgentItem agent={'Breach'} setAgentName={setAgentName} agentName={state.agentName} />
        <AgentItem agent={'Cypher'} setAgentName={setAgentName} agentName={state.agentName} />
        <AgentItem agent={'Omen'} setAgentName={setAgentName} agentName={state.agentName} />
        <AgentItem agent={'Raze'} setAgentName={setAgentName} agentName={state.agentName} />
        <AgentItem agent={'Viper'} setAgentName={setAgentName} agentName={state.agentName} />
      </div>
    </>
  );
}
