import React, { useState, useContext } from 'react';
import background from '../../../Images/BG_1.jpg';
import './HomePage.scss';
import './SearchBox/DarkMode.scss';
import HomePageSearchBox from './SearchBox/HomePageSearchBox';
import { ThemeContext } from 'Context/ThemeContext';

export default function HomePage(props) {
  const [state, setState] = useState({
    imageLoaded: false,
  });

  return (
    <>
      <img src={background} alt='' id='bg' onLoad={() => setState({ ...state, imageLoaded: true })} />
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
