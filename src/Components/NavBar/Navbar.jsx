import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import NavbarPlayerSearchBox from 'Components/NavBar/PlayerSearchBox/NavbarPlayerSearchBox';

export default function Navbar(props) {
  return (
    <>
      <nav className='navbar-container'>
        <div className='navbar-inner-container'>
          <Link to='/' className='home'>
            Valostats
          </Link>
          {props.allowSearch && <NavbarPlayerSearchBox />}
        </div>
      </nav>
    </>
  );
}
