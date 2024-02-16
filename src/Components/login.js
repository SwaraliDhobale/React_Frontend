import React, { useState } from 'react';
import './login.css'; // Import the CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Add your authentication logic here (e.g., making an API request to your server)

    try {
      // Assuming a successful login for demonstration purposes
      // Replace this with your actual authentication logic
      // Simulate a delay to mimic an API request (remove this in production)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Redirect or perform actions upon successful login
      // For example, you can use react-router-dom's history to navigate
      // history.push('/dashboard');
    } catch (error) {
      // Handle authentication errors (e.g., incorrect credentials)
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
