import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import NavbarPlayerSearchBox from '../../LiveGame/PlayerSearchBox/NavbarPlayerSearchBox';
import Slider from './Slider/Slider';

export default function Navbar(props) {
  return (
    <>
      <nav className='navbar-container'>
        <div className='navbar-inner-container'>
          <Link to='/' className='home'>
            Valostats
          </Link>
          {props.allowSearch && <NavbarPlayerSearchBox />}
          <Slider applyDarkMode={() => props.applyDarkMode()} />
          {/* <button onClick={props.applyDarkMode()}>xxxxxxx</button> */}
        </div>
      </nav>
    </>
  );
}
