import React from 'react';
import './Signin.css';

const Signin = () => {
  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2>Sign In</h2>
        <form className="signin-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="signin-btn">Sign In</button>
        </form>
        <p className="signup-link">Don't have an account? <a href="#">Sign Up</a></p>
      </div>
    </div>
  );
};

export default Signin;