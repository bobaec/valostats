import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './AgentsPage.scss';
import AgentItem from './AgentItems/AgentItem';
import Footer from 'Components/Footer/Footer';
import AgentInformation from './AgentInformation/AgentInformation';

export default function AgentsPage(props) {
  const [state, setState] = useState({
    agentName: '',
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
      <div className='agentDetails'>{state.agentName && <AgentInformation agentName={state.agentName} />}</div>
      <div className='agent-wrapper'>
        <AgentItem agent={'Brimstone'} setAgentName={setAgentName} />
        <AgentItem agent={'Jett'} setAgentName={setAgentName} />
        <AgentItem agent={'Phoenix'} setAgentName={setAgentName} />
        <AgentItem agent={'Sage'} setAgentName={setAgentName} />
        <AgentItem agent={'Sova'} setAgentName={setAgentName} />
        <AgentItem agent={'Breach'} setAgentName={setAgentName} />
        <AgentItem agent={'Cypher'} setAgentName={setAgentName} />
        <AgentItem agent={'Omen'} setAgentName={setAgentName} />
        <AgentItem agent={'Raze'} setAgentName={setAgentName} />
        <AgentItem agent={'Viper'} setAgentName={setAgentName} />
      </div>
      <Footer className='footer' />
    </>
  );
}
