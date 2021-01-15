import React from 'react';
import { NavLink } from 'react-router-dom';

const NewLink = () => {
    return (
        <>
            <NavLink to="/games/new" exact> New Game </NavLink> |
        </>
    );
}

export default NewLink;

