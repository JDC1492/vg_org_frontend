import React from 'react';
import { NavLink } from 'react-router-dom';

const AboutLink = () => {
    return (
        <>
            <NavLink to="/about" exact> About The Dev</NavLink>
        </>
    );
}

export default AboutLink;
