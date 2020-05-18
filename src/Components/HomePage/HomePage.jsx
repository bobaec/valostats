import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './HomePage.scss';
import 'Themes/DarkMode.scss';
import HomePageSearchBox from './SearchBox/HomePageSearchBox';

export default function HomePage(props) {
  const [state, setState] = useState({
    img: '',
  });

  // Can't put props in the dependency array in useEffect
  // It's better to deconstruct the props this way
  const { setImgLoaded } = props;

  useEffect(() => {
    import(`Images/Background/BG_1.jpg`)
      .then((img) => {
        setState((prev) => ({ ...prev, img: img.default }));
      })
      .then(() => {
        setImgLoaded();
      });
  }, [setImgLoaded]);

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
        <title>Valostats.gg - Valorant Stats, Database, Valorant Profile</title>
      </Helmet>

      {state.img && (
        <>
          <img src={state.img} alt='' className='bg' />
          <div className={`homepage-container ${props.isDarkMode && 'dark-mode'}`}>
            <div className='box-image-container'>
              <img src={state.img} alt='' className='box-image' />
            </div>
            <HomePageSearchBox />
          </div>
        </>
      )}
    </>
  );
}
