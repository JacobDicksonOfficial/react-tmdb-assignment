import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // Import navigate for redirecting
import './Auth.css'; // Import the CSS file

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Use navigate function for redirection

  const handleSignup = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/login'); // After successful signup, redirect to login page
    } catch (error) {
      setError(error.message); // Handle any error
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

      {/* Display error if there's one */}
      {error && <p className="error-message">{error}</p>}

      <p className="auth-link">
        Already have an account? 
        <a href="/login" className="link">Login here</a>
      </p>
    </div>
  );
};

export default SignupPage;
