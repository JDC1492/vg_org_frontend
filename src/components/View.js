import React from 'react';
import { Link } from 'react-router-dom';

const View = (game) => {
    return (
        <>
            <Link to={`/pets/${game.id}`}>View Game</Link>
        </>
    );
}

export default View;
