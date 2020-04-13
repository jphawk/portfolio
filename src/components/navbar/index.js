import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function Navbar() {
    return (
        <div className="navbar-menu">
            <Link className="navbar-menu-item" to="/">Home</Link>
            <Link className="navbar-menu-item" to="/work">Work</Link>
            <Link className="navbar-menu-item" to="/#about">About</Link>
            <Link className="navbar-menu-item" to="/#follow">Follow</Link>
        </div>
    );
};

export default Navbar;
