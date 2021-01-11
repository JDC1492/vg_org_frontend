import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () =>
    <div>
        <NavLink to="/" exact> Home </NavLink>
        <NavLink to="/games/new" exact> New Game </NavLink>
        <NavLink to="/games" exact> Game Collection </NavLink>
    </div>


export default NavBar;