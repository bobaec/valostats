import React from 'react';
import { Link } from 'react-router-dom';
import NavbarPlayerSearchBox from 'Components/NavBar/PlayerSearchBox/NavbarPlayerSearchBox';

export default function Navbar(props) {
  return (
    <>
      <nav className='navbar-container'>
        <div className='navbar-inner-container'>
          <div className='nav-left'>
            <Link to='/' className='home'>
              Valostats
            </Link>
            <div className='seperator' />
            <Link to='/agents/Breach' className='home'>
              Agents
            </Link>
            <div className='seperator' />
            <Link to='/tierlist' className='home'>
              Tier List
            </Link>
          </div>
          {props.allowSearch && <NavbarPlayerSearchBox />}
        </div>
      </nav>
    </>
  );
}
