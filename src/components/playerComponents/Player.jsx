import React from 'react';
import './Player.scss';
import PlayerHeader from './PlayerHeader';
import Rank from './Rank';
import MatchHistory from './MatchHistory';

export default function Player() {
    return (
        <div className='player-wrapper'>
            <div className='player-content'>
                <PlayerHeader />
                <div className='player-overview'>
                    <Rank />
                    <MatchHistory />
                </div>
            </div>
        </div>
    );
}
