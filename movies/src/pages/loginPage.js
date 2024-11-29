import React, { useState } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'; // Import Google provider methods
import { Link, useNavigate } from 'react-router-dom'; // Import Link for navigation
import { auth } from '../firebase'; // Use the already initialized auth instance
import { Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google'; // Material-UI icon for Google
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

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
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

      <div className="third-party-auth">
        <p>.</p>
        <Button
          variant="outlined"
          startIcon={<GoogleIcon />}
          onClick={handleGoogleLogin}
          className="google-button"
        >
          Log In with Google
        </Button>
      </div>

      {error && <p className="error-message">{error}</p>}

      <p className="auth-link">
        Don't have an account? 
        <Link to="/signup" className="link">Sign Up</Link>
      </p>
    </div>
  );
};

export default LoginPage;
