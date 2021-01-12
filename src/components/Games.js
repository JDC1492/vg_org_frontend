import React, { Component } from 'react';
import Game from '../components/Game';


class Games extends Component {
    render() {
        const eachGame = this.props.games.map((game, i) => <Game key={i} game={game} />)
        return (
            <div>
                {eachGame}
            </div>
        );
    }
}

export default Games;
