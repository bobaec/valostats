import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import 'Components/HomePage/HomePage.scss';
import HomePageSearchBox from './SearchBox/HomePageSearchBox';
import img from 'Images/Background/BG_5.jpg';

export default function HomePage(props) {
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
          <title>Valostats.gg - Valorant Stats, Database, Valorant Profile</title>
        </Helmet>
      </HelmetProvider>
      <>
        <img src={img} alt='' className='bg' />
        <div className={`homepage-container`}>
          <div className='box-image-container'>
            <img src={img} alt='' className='box-image' />
          </div>
          <HomePageSearchBox />
        </div>
      </>
    </>
  );
}
