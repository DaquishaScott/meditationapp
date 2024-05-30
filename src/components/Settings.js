import React, { useState } from 'react';
const Settings = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const handleSaveSettings = () => {
// Handle save settings logic
};
return (
<div>
<h2>Settings</h2>
<input
type="text"
placeholder="Username"
value={username}
onChange={(e) => setUsername(e.target.value)}
/>
<input
type="password"
placeholder="Password"
value={password}
onChange={(e) => setPassword(e.target.value)}
/>
<button onClick={handleSaveSettings}>Save</button>
</div>
);
};
export default Settings;