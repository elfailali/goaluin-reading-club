import React, { useState } from 'react'


function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // not refresh page after click submit

        console.log('Email:', email);
        console.log('Password:', password);
    }

    return (
        <div className='SignUp'>
            <h3>Welcome Back</h3>
            <form onSubmit={handleSubmit}>
                
                <input
                    type="email"
                    placeholder="john@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                
                <input
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default LogIn