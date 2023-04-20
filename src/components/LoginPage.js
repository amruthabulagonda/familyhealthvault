import React, { useState } from 'react';
import { auth } from "../firebase";
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import "../css/formstyle.css"; 

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`Email: ${email} Password: ${password}`);
    // Handle login logic here
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        // User is logged in, you can do any further processing here
        console.log(`User logged in: ${userCredential.user.email}`);
        navigate("/home");
      } catch (error) {
        setError('Incorrect email or password.');
        console.error(`Error logging in: ${error.message}`);
      }
    };

  return (
    <div>
        <Header/>
        <div className="form-container">
        <h2>Login Page</h2>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            </div>
            <div>
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            </div>
            <button type="submit">Login</button>
            {error && <h3 id="error">{error}</h3>}

            <p class="text-center text-muted mt-5 mb-0">New user? &nbsp;
            <a href="/register" class="fw-bold text-body"><u>SignUp here</u></a></p>

        </form>
        </div>
    </div>
  );
};

export default LoginPage;
