import React from 'react';
import background from '../../../Images/BG_2.jpg';
import './HomePage.scss';
import HomePageSearchBox from './SearchBox/HomePageSearchBox';
export default function HomePage() {
  return (
    <>
      <img src={background} alt='' id='bg' />
      <HomePageSearchBox />
    </>
  );
}
