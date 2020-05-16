import React from 'react';
import background from '../../../Images/tempBackground.jpg';
import './HomePage.scss';
import '../HistoryOverviewSearchbox.scss';
import PlayerSearchBox from '../LiveGame/PlayerSearchBox/PlayerSearchBox';

export default function HomePage() {
  return (
    <>
      <img src={background} alt='' id='bg' />

      <PlayerSearchBox />
    </>
  );
}
