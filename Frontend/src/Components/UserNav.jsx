import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import './AdminNavbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
      <Link to="/carhome">Home</Link>
      </div>
      <div className="auth-links">
      <Link to="login">Login</Link>
        <Link to="register">Sign Up</Link>
        <Link to="user">Find Car</Link>
        <Link to="mybookedcar">My Car</Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
