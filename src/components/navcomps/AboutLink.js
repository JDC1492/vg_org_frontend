import React from 'react';
import { NavLink } from 'react-router-dom';

const AboutLink = () => {
    return (
        <div>
            <NavLink to="/about" exact> About The Dev</NavLink>
        </div>
    );
}

export default AboutLink;
