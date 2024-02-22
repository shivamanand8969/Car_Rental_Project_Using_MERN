import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import './AdminNavbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
      <Link to="/admin">Home</Link>
      </div>
      <div className="auth-links">
      <Link to="upload-car">Upload Car</Link>
        <Link to="managecard">Manage Car</Link>
        <Link to="/admin/login">Login</Link>
        <Link to="register">Signup</Link>
        <Link to="/logout">Logout</Link>
      </div>
    </nav>
  );
};

export default Navbar;
