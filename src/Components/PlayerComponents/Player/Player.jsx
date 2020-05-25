import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import PlayerHeader from './PlayerHeader';
import Rank from '../Rank/Rank';
import HistoryOverview from 'Components/PlayerComponents/MatchHistory/HistoryOverview/HistoryOverview';
import MatchHistory from '../MatchHistory/MatchHistory';
import SummaryByAgent from '../AgentSummary/SummaryByAgent';
import { useParams } from 'react-router-dom';
import LiveGame from '../LiveGame/LiveGame';

export default function Player(props) {
  let params = useParams();
  // const history = useHistory();

  const [state, setState] = useState({
    showPlayerStats: true,
    showLiveGame: false,
  });

  const showPlayerStats = () => {
    setState({ ...state, showPlayerStats: true, showLiveGame: false });
  };

  const showLiveGame = () => {
    setState({ ...state, showPlayerStats: false, showLiveGame: true });
  };

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
            content='Valorant Stats, Valorant Match History, Valorant GG, Valorant Guide, Valorantics,Real-time In Game, Statistics, Valorant Spectate, Leaderboards, Chart, Agent Guide, Agent Build, Agent Counter'
          />
          <title>{params.username} - Valorant Stats, Database, Guide - Valostats.gg</title>
        </Helmet>
      </HelmetProvider>
      <div className='player-wrapper'>
        <div className='player-content'>
          <PlayerHeader
            username={params.username}
            liveGame={() => showLiveGame}
            playerStats={() => showPlayerStats}
            showPlayerStats={props.showPlayerStats}
            showLiveGame={props.showLiveGame}
          />
          {state.showPlayerStats && (
            <div className='player-header-container'>
              <div className='player-overview'>
                <div className='spacer'>
                  <Rank />
                  <SummaryByAgent />
                </div>
                <div className='data-container'>
                  <HistoryOverview agent={'Brimstone'} />
                  <MatchHistory />
                </div>
              </div>
            </div>
          )}
          {state.showLiveGame && <LiveGame />}
        </div>
      </div>
    </>
  );
}
