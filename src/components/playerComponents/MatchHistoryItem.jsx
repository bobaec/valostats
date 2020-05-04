import React from 'react';

export default function MatchHistoryItem() {
    return (
        <>
            <div className='match-container'>
                <div className='win-loss-indicator victory'></div>
                <div className='match-inner-container victory'>
                    <div className='match-summary-container'>
                        <div className='row'>
                            <div className='match-type'>Competitive</div>
                            <div className='match-date'>15 days ago</div>
                        </div>
                        <div className='row'>
                            <div className='match-result victory'>Victory</div>
                            <div className='match-time'>26:41</div>
                        </div>
                    </div>
                    <div className='seperator'></div>
                    <div className='match-performance-container'>
                        <img className='hero-icon' src='portraitPlaceholder.png' alt='' />
                        <div className='kda-container'>
                            <div className='kda-breakdown'>4 / 6 / 7</div>
                            <div className='kda-ratio'>1.83 KDA</div>
                        </div>
                    </div>
                    <div className='seperator'></div>
                    <div className='best-round'></div>
                    <div className='seperator'></div>
                    <div className='match-players'>
                        <div className='team-list'>
                            <div className='team-player'>
                                <img className='hero-icon small' src='portraitPlaceholder.png' alt='' />
                                <span>Player 1</span>
                            </div>
                            <div className='team-player'>
                                <img className='hero-icon small' src='portraitPlaceholder.png' alt='' />
                                <span>Player 2</span>
                            </div>
                            <div className='team-player'>
                                <img className='hero-icon small' src='portraitPlaceholder.png' alt='' />
                                <span>Player 3</span>
                            </div>
                            <div className='team-player'>
                                <img className='hero-icon small' src='portraitPlaceholder.png' alt='' />
                                <span>Player 4</span>
                            </div>
                            <div className='team-player'>
                                <img className='hero-icon small' src='portraitPlaceholder.png' alt='' />
                                <span>Player 5</span>
                            </div>
                        </div>
                        <div className='team-list'>
                            <div className='team-player'>
                                <img className='hero-icon small' src='portraitPlaceholder.png' alt='' />
                                <span>Player 1</span>
                            </div>
                            <div className='team-player'>
                                <img className='hero-icon small' src='portraitPlaceholder.png' alt='' />
                                <span>Player 2</span>
                            </div>
                            <div className='team-player'>
                                <img className='hero-icon small' src='portraitPlaceholder.png' alt='' />
                                <span>Player 3</span>
                            </div>
                            <div className='team-player'>
                                <img className='hero-icon small' src='portraitPlaceholder.png' alt='' />
                                <span>Player 4</span>
                            </div>
                            <div className='team-player'>
                                <img className='hero-icon small' src='portraitPlaceholder.png' alt='' />
                                <span>Player 5</span>
                            </div>
                        </div>
                    </div>
                    <div className='seperator'></div>
                    <i class='fas fa-chevron-down show-more'></i>
                </div>
            </div>
        </>
    );
}
