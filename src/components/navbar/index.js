import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar-menu">
            <NavLink className="navbar-menu-item home" exact to="/" activeClassName="active">Home</NavLink>
            <NavLink className="navbar-menu-item" exact to="/work" activeClassName="active">Work</NavLink>
            <NavLink className="navbar-menu-item" to="/about" activeClassName="active">About</NavLink>
        </div>
    );
};

export default Navbar;
