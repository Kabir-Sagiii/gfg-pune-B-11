import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Sign Up</h2>
        <form className="signup-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
            />
          </div>
          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>
        <p className="signin-link">
          Already have an account? <a href="#">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
