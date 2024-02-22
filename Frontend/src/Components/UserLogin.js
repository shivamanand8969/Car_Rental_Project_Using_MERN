import React, { useState } from 'react'
import './UserLogin.css'
const UserLogin = () => {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const handleLogin=async ()=>{
        let login=await fetch('http://localhost:5000/user/userlogin',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email:username,password:password}),
            credentials:'include'
        })
        login=await login.json();
        console.log(login);
        if(login.message==='Login SuccessFully'){
            localStorage.setItem('userDetail',JSON.stringify(login.isUser))
        }
    }
  return (
    <div className='mainloginbox'>
      <div className='innerloginbox'>
      <label>UserName</label>
        <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <label>Passoword</label>
        <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button className='userloginbtn' onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}

export default UserLogin