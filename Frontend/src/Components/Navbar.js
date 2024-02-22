import React, { useState } from 'react'
import './Navbar.css'
const Navbar = () => {
    const [isOpen,setIsOpen]=useState(false);
  return (
    <nav>
        <div className='logo'>Logo</div>
        <input type='checkbox' hidden checked={isOpen} onChange={()=>setIsOpen(!isOpen)}  id='toggle'/>
        <label htmlFor='toggle' className='threeLine'>&#9776;</label>
        <ul className={`nav-item ${isOpen ? "open" :''}`}>  
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Detail</li>
        </ul>
    </nav>
  )
}

export default Navbar