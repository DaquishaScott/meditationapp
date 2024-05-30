import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPlaylist, addToPlaylist } from '../redux/actions';
const PlaylistManager = () => {
const [playlistName, setPlaylistName] = useState('');
const [selectedTrack, setSelectedTrack] = useState(null);
const dispatch = useDispatch();
const playlists = useSelector((state) => state.music.playlists);
const { items } = useSelector((state) => state.music);
const handleCreatePlaylist = () => {
dispatch(createPlaylist(playlistName));
setPlaylistName('');
};
const handleAddToPlaylist = (playlistName) => {
dispatch(addToPlaylist(playlistName, selectedTrack));
};
return (
<div>
<input
type="text"
placeholder="New Playlist Name"
value={playlistName}
onChange={(e) => setPlaylistName(e.target.value)}
/>
<button onClick={handleCreatePlaylist}>Create Playlist</button>
<div>
{playlists.map((playlist, index) => (
<div key={index}>
<h3>{playlist.name}</h3>
{items.map((item, index) => (
<div key={index}>
<h3>{item.trackName}</h3>
<button onClick={() => setSelectedTrack(item)}>Add to Playlist</button>
</div>
))}
<button onClick={() => handleAddToPlaylist(playlist.name)}>Add Selected Track to
{playlist.name}</button>
</div>
))}
</div>
</div>
);
};
export default PlaylistManager;