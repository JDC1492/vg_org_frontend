import React from 'react';
import { NavLink } from 'react-router-dom';

const GamesLink = () => {
    return (
        <div>
            <>
                <NavLink to="/games" exact> Games</NavLink> |
            </>
        </div>
    );
}

export default GamesLink;
