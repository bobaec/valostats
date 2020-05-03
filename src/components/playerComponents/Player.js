import React from 'react';
import './Player.scss';
import PlayerHeader from './PlayerHeader';

export default function Player() {
    return (
        <div className="player-wrapper">
            <div className="player-content">
                <PlayerHeader />
            </div>
        </div>
    );
}
