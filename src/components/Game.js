import React from 'react';

const Game = ({game}) =>  {
    // debugger
        return (
            <div> 
        
                {game.cover_art} <br />            
                {game.title}<br />
                {game.release_year}<br />
                {game.console}<br />
                {game.developer}<br />
                {game.genre}<br />
                {game.description}<br />
                
        
            </div>
        );
}

export default Game;
