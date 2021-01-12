import React from 'react';

const Game = ({game}) =>  {
    // debugger
        return (
            <div className="list">        
                <br /><img src={game.cover_art} alt="" /><br/>    
                Game Title: <h4>{game.title}</h4>
                Release Year: <h4>{game.release_year}</h4>
                Console: <h4>{game.console}</h4>
                Developer: <h4>{game.developer}</h4>
                Game: <h4>{game.genre}</h4>
                Game Description: <h4>{game.description}</h4>   
            </div>
        );
}

export default Game;
