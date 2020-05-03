import React from 'react';
import './Player.scss';
import PlayerHeader from './PlayerHeader';
import Rank from './Rank';

export default function Player() {
    return (
        <div className='player-wrapper'>
            <div className='player-content'>
                <PlayerHeader />
                <Rank />
            </div>
        </div>
    );
}
