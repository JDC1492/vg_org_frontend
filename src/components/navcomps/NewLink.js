import React from 'react';
import { NavLink } from 'react-router-dom';

const NewLink = () => {
    return (
        <div>
            <NavLink to="/games/new" exact> New Game </NavLink> |
        </div>
    );
}

export default NewLink;

