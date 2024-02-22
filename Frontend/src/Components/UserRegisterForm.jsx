
import React, { useState } from 'react';
import './UserRegisterForm.css'

const UserRegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileno: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    console.log(formData);
   let data=await fetch(`http://localhost:5000/user/register`,{
    method:"POST",
    headers:{
        'Content-Type':"application/json"
    },
    body:JSON.stringify(formData)
   })
   data=await data.json();
   console.log(data);
  };

  return (
    <div className="registration-container-dark">
    <form className="registration-form-dark" onSubmit={handleSubmit}>
      <h2 className="dark">Register</h2>
      <div className="form-group-dark">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="dark"
        />
      </div>
      <div className="form-group-dark">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="dark"
        />
      </div>
      <div className="form-group-dark">
        <input
          type="tel"
          name="mobileno"
          id="mobileNo"
          placeholder="Mobile Number"
          value={formData.mobileno}
          onChange={handleChange}
          required
          className="dark"
        />
      </div>
      <div className="form-group-dark">
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="dark"
        />
      </div>
      <button type="submit" className="dark">Register</button>
    </form>
  </div>
  );
};

export default UserRegisterForm;
