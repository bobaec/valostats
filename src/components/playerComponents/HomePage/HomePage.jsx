import React from 'react';
import background from '../../../Images/BG_2.jpg';
import './HomePage.scss';
import PlayerSearchBox from '../LiveGame/PlayerSearchBox/PlayerSearchBox';
import Img from 'react-cool-img';

export default function HomePage() {
  return (
    <>
      <img src={background} alt='' id='bg' />
      <PlayerSearchBox />
    </>
  );
}
