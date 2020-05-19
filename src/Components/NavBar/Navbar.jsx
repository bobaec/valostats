import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import NavbarPlayerSearchBox from 'Components/NavBar/PlayerSearchBox/NavbarPlayerSearchBox';

export default function Navbar(props) {
  return (
    <>
      <nav className='navbar-container'>
        <div className='navbar-inner-container'>
          <Link to='/' className={`home ${props.offset && 'offset'}`}>
            Valostats
          </Link>
          <Link to='/agents' className='agents'>
            Agents
          </Link>
          {props.allowSearch && <NavbarPlayerSearchBox />}
        </div>
      </nav>
    </>
  );
}
