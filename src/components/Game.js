import React from 'react';

const Game = ({game}) =>  {
    // debugger
        return (
            <div> 
            <>               
                {game.title}
                {game.release_year}
                {game.console}
                {game.developer}
                {game.genre}
                {game.description}
                {game.cover_art}
            </>
            </div>
        );
}

export default Game;
