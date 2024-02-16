// homepage.js
import React from 'react';
import './homepage.css';
import { Link } from 'react-router-dom';
const Homepage = () => {
  return (
    <div className="homepage">
      <header>
        <nav>
          <div className="navbar">
            <div className="navbar-logo">
              <a href="/">Child Vaccination Portal</a>
            </div>
            <div className="navbar-links">
            <Link to="/login">Login</Link>
              <Link to="/register"> Register </Link> 
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Welcome to the Child Vaccination Portal</h1>
          <p>Your trusted source for child vaccination information.</p>
          <a href="/learn-more">Learn More</a>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Child Vaccination Portal</p>
      </footer>
    </div>
  );
};

export default Homepage;
