import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import './AdminLogin.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(username, password);
    
    try {
      const loginData = await fetch('http://localhost:5000/admin/login', { 
        method: "POST",
        headers: {
          'Content-Type': "application/json",
        },
        body:JSON.stringify({ username, password }),
        credentials:"include"
      });

      if (!loginData.ok) {
        throw new Error("Login Failed");
      }

      const data = await loginData.json();
      if(data.message=="Login"){
        localStorage.setItem('admindata',JSON.stringify(data.isAdmin));
        console.log("Login data", data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="form-group">
            <button type="submit">Login</button>
          </div>
        </form>
        <p>Don't have an account? <Link to="/signup">Signup</Link></p>
      </div>
    </div>
  );
};

export default Login;
