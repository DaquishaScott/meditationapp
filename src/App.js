import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Player from './components/Player';
import Search from './components/Search';
import Stations from './components/Stations';
import Settings from './components/Settings';
import PlaylistManager from './components/PlaylistManager';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      
        <Navbar />
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/player" element={<Player />} />
          <Route path="/search" element={<Search />} />
          <Route path="/stations" element={<Stations />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/playlists" element={<PlaylistManager />} />
          <Route exact path="/" element={<SignIn />} />
        </Routes>
      
    </div>
  );
}

export default App;