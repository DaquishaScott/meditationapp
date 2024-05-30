import React, { useState } from 'react';
const SignIn = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const handleSignIn = () => {
// Handle sign in logic
};
return (
<div>
<h2>Sign In</h2>
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
<button onClick={handleSignIn}>Sign In</button>
</div>
);
};
export default SignIn;