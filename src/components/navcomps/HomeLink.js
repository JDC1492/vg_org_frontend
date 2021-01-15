import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeLink = () => {
    return (
        <div>
              <NavLink to="/" exact> Home  </NavLink> |
        </div>
    );
}

export default HomeLink;
