import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './AgentsPage.scss';
import AgentItem from './AgentItems/AgentItem';
import Footer from 'Components/Footer/Footer';
import AgentInformation from './AgentInformation/AgentInformation';

export default function AgentsPage(props) {
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
      <div className='agent-wrapper'>
        <AgentItem agent={'Brimstone'} />
        <AgentItem agent={'Jett'} />
        <AgentItem agent={'Phoenix'} />
        <AgentItem agent={'Sage'} />
        <AgentItem agent={'Sova'} />
        <AgentItem agent={'Breach'} />
        <AgentItem agent={'Cypher'} />
        <AgentItem agent={'Omen'} />
        <AgentItem agent={'Raze'} />
        <AgentItem agent={'Viper'} />
      </div>
      <Footer className='footer' />
    </>
  );
}
