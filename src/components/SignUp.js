import React, { useState } from 'react'
import './SignUp.css'
import {useNavigate} from "react-router-dom"

function SignUp() {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // not refresh page after click submit
        const user = {name, email, password}
        console.log(user)

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);

        // history.push('/posts');
        navigate("/posts")
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
                /> 
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
                
                <button  type="submit">Sign Up</button>
            </form>
        </div>
      );
  
}

export default SignUp