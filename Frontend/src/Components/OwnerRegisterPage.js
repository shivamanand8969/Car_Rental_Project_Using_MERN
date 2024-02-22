import React, { useState } from 'react';
import './OwnerRegisterPage.css';
import { useNavigate } from 'react-router-dom';

const OwnerRegisterPage = () => {
     const [name,setName]=useState('');
     const [email,setEmail]=useState(' ');
     const [phone,setPhone]=useState('');
     const [password,setPassword]=useState('');
    const navigate= useNavigate();
     const handleRegister=async (e)=>{
        e.preventDefault();
     let data=await fetch('http://127.0.0.1:5000/admin/register',{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({name,email,phone,password})
     })
     console.log(data)
     if(data.statusText=="OK"){
      navigate('/admin/login')
     }
     }
  return (
    <div className="owner-register-page">
      <div className="owner-register-container">
        <h2>Owner Registration</h2>
        <form className="owner-register-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} id="fullName" name="fullName" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Phone Number</label>
            <input type="text" id="password" value={phone} onChange={(e)=>setPhone(e.target.value)} name="password" />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Password:</label>
            <input type="password" id="confirmPassword" value={password} onChange={(e)=>setPassword(e.target.value)} name="confirmPassword" />
          </div>
          <div className="form-group">
            <button type="submit" onClick={handleRegister}>Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OwnerRegisterPage;
