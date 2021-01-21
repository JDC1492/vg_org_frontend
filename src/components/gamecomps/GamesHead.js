import React from 'react';

const GamesHead = (props) => {
    return (
        <div>
            <p className="ghText">{props.games.count < 1 ? "You Havent Started your Collection yet." : `You've got ${props.games.length} games so Far!`}</p> 
        </div>
    );
}

export default GamesHead;
