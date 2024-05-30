import React, { useState } from 'react';
import { useSelector } from 'react-redux';
const Player = () => {
useSelector((state) => state.music);
const [currentTrack, setCurrentTrack] = useState(null);
const [audioPlayer] = useState(new Audio());
const handlePlay = (track) => {
if (currentTrack === track) {
if (audioPlayer.paused) {
audioPlayer.play();
} else {
audioPlayer.pause();
}
} else {
audioPlayer.pause();
audioPlayer.src = track.previewUrl;
setCurrentTrack(track);
audioPlayer.play();
}
};
return (
<div>
<h2>Now Playing</h2>
{currentTrack ? (
<div>
<h3>{currentTrack.trackName}</h3>
<p>{currentTrack.artistName}</p>
<button onClick={() => handlePlay(currentTrack)}>
{audioPlayer.paused ? 'Play' : 'Pause'}
</button>
</div>
) : (
<p>Select a track to play</p>
)}
</div>
);
};
export default Player;