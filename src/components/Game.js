import React, { Component } from 'react';

class Game extends Component {
    render() {
        return (
            <div>
                <img src={game.cover_art}/>
                <h4>{game.title}</h4>
                <h5>{game.release_year}</h5>
                <h5>{game.console}</h5>
                <h5>{game.developer}</h5>
                <h5>{game.genre}</h5>
                <p>{game.description}</p>
            </div>
        );
    }
}

export default Game;
