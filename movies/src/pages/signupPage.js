import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google'; // Material-UI icon for Google
import './Auth.css';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/login'); // Redirect to login page after successful signup
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/'); // Redirect to homepage or dashboard after successful login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="auth-container">
      <h1 className="auth-title">Have you Signed Up?</h1>
      <form onSubmit={handleSignup} className="auth-form">
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
        <button type="submit" className="submit-button">Sign Up</button>
      </form>

      <div className="third-party-auth">
      <p>.</p>
        <Button
          variant="outlined"
          startIcon={<GoogleIcon />}
          onClick={handleGoogleSignup}
          className="google-button"
        >
          Sign Up with Google
        </Button>
      </div>

      {error && <p className="error-message">{error}</p>}

      <p className="auth-link">
        Already have an account? 
        <a href="/login" className="link">Login here</a>
      </p>
    </div>
  );
};

export default SignupPage;
