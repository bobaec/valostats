import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import background from 'Images/BG_1.jpg';
import './HomePage.scss';
import 'Themes/DarkMode.scss';
import HomePageSearchBox from './SearchBox/HomePageSearchBox';

export default function HomePage(props) {
  const [state, setState] = useState({
    imageLoaded: false,
  });

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
        <title>Valostats.gg - Valorant Stats, Database</title>
      </Helmet>

      <img src={background} alt='' className='bg' onLoad={() => setState({ ...state, imageLoaded: true })} />
      {state.imageLoaded && (
        <div className={`homepage-container ${props.isDarkMode && 'dark-mode'}`}>
          <div className='box-image-container'>
            <img src={background} alt='' className='box-image' />
          </div>
          <HomePageSearchBox />
        </div>
      )}
    </>
  );
}
