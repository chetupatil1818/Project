import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <h1>Agriculture Portal</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/market">Market</Link></li>
                <li><Link to="/weather">Weather</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
