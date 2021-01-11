import React, { Component } from 'react';
import Game from '../components/Game';

class Games extends Component {
    render() {
        const eachGame = this.props.games.map(game => <Game key={game.id} />)
        return (
            <div>
                {eachGame}
            </div>
        );
    }
}

export default Games;
