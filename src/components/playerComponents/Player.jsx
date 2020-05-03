import React from 'react';
import './Player.scss';
import PlayerHeader from './PlayerHeader';

export default function Player() {
    return (
        <div className='player-wrapper'>
            <div className='player-content'>
                <PlayerHeader />
                <div className='default-container'>
                    <img id='rank-icon' src='rankPlaceholder.jpg' alt='' />
                </div>
            </div>
        </div>
    );
}
