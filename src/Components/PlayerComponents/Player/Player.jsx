import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './Player.scss';
import PlayerHeader from './PlayerHeader';
import Rank from '../Rank/Rank';
import HistoryOverview from 'Components/PlayerComponents/MatchHistory/HistoryOverview/HistoryOverview';
import MatchHistory from '../MatchHistory/MatchHistory';
import SummaryByAgent from '../AgentSummary/SummaryByAgent';
import { useParams } from 'react-router-dom';
import LiveGame from '../LiveGame/LiveGame';

export default function Player(props) {
  let params = useParams();
  const history = useHistory();

  const [state, setState] = useState({
    showPlayerStats: props.showPlayerStats,
    showLiveGame: props.showLiveGame,
  });

  const showPlayerStats = () => {
    history.push({
      pathname: `/player/username=${params.username}/profile`,
    });
  };

  const showLiveGame = () => {
    history.push({
      pathname: `/player/username=${params.username}/livegame`,
    });
  };

  return (
    <>
      <Helmet>
        <meta
          name='title'
          content='Valorant Stats, Database, Guide - VALOSTATS.GG'
        />
        <meta
          name='description'
          content='Real-time Valorant Stats! Check your profile, use powerful global Valorant Statistics!'
        />
        <meta
          name='keywords'
          content='Valorant Stats, Valorant Match History, Valorant GG, Valorant Guide, Valorantics,Real-time In Game, Statistics, Valorant Spectate, Leaderboards, Chart, Agent Guide, Agent Build, Agent Counter'
        />
        <title>Valorant Stats, Database, Guide - VALOSTATS.GG</title>
      </Helmet>
      <div className='player-wrapper'>
        <div className='player-content'>
          <PlayerHeader
            username={params.username}
            liveGame={() => showLiveGame}
            playerStats={() => showPlayerStats}
            showPlayerStats={state.showPlayerStats}
            showLiveGame={state.showLiveGame}
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
