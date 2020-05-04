import React from 'react';
import MatchHistoryItem from './MatchHistoryItem';

export default function MatchHistory() {
    return (
        <div className='match-history'>
            <div className='default-container header-container'>Match history</div>
            <div className='default-container content-container match-history-container'>
                <MatchHistoryItem />
                <MatchHistoryItem />
                <MatchHistoryItem />
                <MatchHistoryItem />
                <MatchHistoryItem />
            </div>
        </div>
    );
}
