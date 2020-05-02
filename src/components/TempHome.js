import React from 'react';
import './TempHome.scss';

export default function TempHome() {
    return (
        <>
            <div className="temp-image-container">
                <img src='tempBackground.jpg' alt="" />
            </div>
            <div className='announcement-container'>
                <div className="text-container">
                    <header className="announcement-header">
                        Valostats will be online asap
                </header>
                    <span className="announcement-text">Valostats will be the home for VALORANT statistics. We want to design a tool that will provide players with their match history, live game stats, their player profile, and various stats depending on what the api provides. User experience is at the top of our priority list, we want to make this website as easy and as pleasant to use as possible. The website will be up and running as soon as the VALORANT api is ready.We are stoked and can't wait to become part of the VALORANT community!</span>
                </div>
            </div>
        </>
    );
}
