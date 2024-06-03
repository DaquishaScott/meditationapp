import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <div class="nav">
        <Link to="/signin"
        class="link">Sign In</Link>
        <Link to="/signup"
        class="link">Sign Up</Link>
        <Link to="/player" 
        class="link">Player</Link>
        <Link to="/search"
        class="link">Search</Link>
        <Link to="/stations"
        class="link">Stations</Link>
        <Link to="/settings"
        class="link">Settings</Link>
        <Link to="/playlists"
        class="link">Playlists</Link>
      </div>
  );
}

export default Navbar;
