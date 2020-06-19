import React from 'react';
import { Link } from 'react-router-dom';
import NavbarPlayerSearchBox from 'Components/NavBar/PlayerSearchBox/NavbarPlayerSearchBox';
import { ReactComponent as Logo } from 'Images/Logo/logo-color.svg';

export default function Navbar(props) {
    return (
        <>
            <nav className='navbar-container'>
                <div className='navbar-inner-container'>
                    <div className='nav-left'>
                        <Link to='/'>
                            <Logo className='logo'/>
                        </Link>
                        <Link to='/' className='home'>
                            Valostats
                        </Link>
                        <div className='seperator' />
                        <Link to='/agents/Breach' className='home'>
                            Agents
                        </Link>
                        <div className='seperator' />
                        <div className='tier-list-container'>
                            <span className='home-disabled'>Tier List</span>
                            <span className='coming-soon'>Coming Soon</span>
                        </div>
                    </div>
                    {props.allowSearch && <NavbarPlayerSearchBox />}
                </div>
            </nav>
        </>
    );
}
