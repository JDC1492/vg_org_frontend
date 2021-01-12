import React from 'react';
import { connect } from 'react-redux';
import { deleteGame } from '../actions/ActIndex';

const Delete = ({game, deleteGame}) => {
    return (
        <div>
            <button onClick={() => deleteGame(game.id)}>Delete Game</button>
        </div>
    );
}

export default connect(null, { deleteGame })(Delete);
