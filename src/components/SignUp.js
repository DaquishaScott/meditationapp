import React, { useState } from 'react';
const SignUp = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const handleSignUp = () => {
// Handle sign up logic
};
return (
<div>
<h2>Sign Up</h2>
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
<button onClick={handleSignUp}>Sign Up</button>
</div>
);
};
export default SignUp;
