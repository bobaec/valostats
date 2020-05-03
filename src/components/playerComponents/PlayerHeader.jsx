import React from 'react';

export default function PlayerHeader() {
    return (
        <div id='player-header' className='default-container'>
            <img className='player-icon' src='portraitPlaceholder.png' alt='' />
            <div className='player-info-container'>
                <span className='player-name'>Mikel</span>
                <button className='refresh-button'>Refresh</button>
            </div>
        </div>
    );
}
