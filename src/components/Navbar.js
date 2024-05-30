import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => (
<nav>
<Link to="/player">Now Playing</Link>
<Link to="/stations">Stations</Link>
<Link to="/search">Search</Link>
<Link to="/settings">Settings</Link>
</nav>
);
export default Navbar;