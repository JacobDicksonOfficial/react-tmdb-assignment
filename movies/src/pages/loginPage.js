import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom'; // Import Link for navigation
import { auth } from '../firebase'; // Make sure this is your Firebase setup
import './Auth.css'; // Import the CSS file

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); // Redirect to the home page after successful login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="auth-container">
      <h1 className="auth-title">TMDB Client</h1>
      <form onSubmit={handleLogin} className="auth-form">
        <div className="input-group">
          <label className="input-label">Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label className="input-label">Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-button">Log In</button>
      </form>

      {/* Display error if any */}
      {error && <p className="error-message">{error}</p>}

      <p className="auth-link">
        Don't have an account? 
        <Link to="/signup" className="link">Sign Up</Link>
      </p>
    </div>
  );
};

export default LoginPage;
