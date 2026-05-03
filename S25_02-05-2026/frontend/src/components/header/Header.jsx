import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
function Header({ logout }) {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">GFG Ecommerce Mart</div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/redux">Redux</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/" id="logout" onClick={logout}>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
