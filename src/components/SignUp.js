import React, { useState } from 'react'


function SignUp() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // not refresh page after click submit
        const user = {name, email, password}

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
    }

    return (
        <div className='SignUp'>
            <h3>Welcome To Goaluin</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /> <br />
                <input
                    type="email"
                    placeholder="john@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button type="submit">Sign Up</button>
            </form>
        </div>
      );
  
}

export default SignUp