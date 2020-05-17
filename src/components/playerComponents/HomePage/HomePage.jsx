import React, { useState } from 'react';
import background from 'Images/BG_6.jpg';
import './HomePage.scss';
import 'Themes/DarkMode.scss';
import HomePageSearchBox from './SearchBox/HomePageSearchBox';

export default function HomePage(props) {
  const [state, setState] = useState({
    imageLoaded: false,
  });

  return (
    <>
      {/* {!props.isDarkMode && (
        <img src={lightBackground} alt='' className='bg' onLoad={() => setState({ ...state, imageLoaded: true })} />
      )} */}
      <img src={background} alt='' className='bg' onLoad={() => setState({ ...state, imageLoaded: true })} />
      {state.imageLoaded && (
        <div className={`homepage-container ${props.isDarkMode && 'dark-mode'}`}>
          <div className='box-image-container'>
            {/* {!props.isDarkMode && <img src={lightBackground} alt='' className='box-image' />} */}
            <img src={background} alt='' className='box-image' />
          </div>
          <HomePageSearchBox />
        </div>
      )}
    </>
  );
}
