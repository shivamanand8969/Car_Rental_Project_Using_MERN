import React from 'react'
import './Section.css'
import { Link } from 'react-router-dom'
const Section = () => {
  return (
    <>
    <h1 className='heading'>Welcome To My Car Rentel Service</h1>
    <div className='section'>
       <div className='leftbox'>
       <h1> WE RENT THE HIGHEST CALIBER CAR</h1>
       <button className='ownerbutton'><Link className='link' to={'/admin'}>Become an Owner</Link></button>
       <button className='renter'><Link className='link' to={'/carhome'}>Find a Car to Rent</Link></button>
       </div>
        
        <img src='wp5055262.webp' alt='car Image'/>
    </div>
    
    <div className='info'>
        
        <h3>Find a Car to Rent</h3>
        <p>Find the perfect ride for your needs, whether it's for a trip or daily use</p>
        <h3>List Yours Car</h3>
        <p>List your car and earn extra cash when it's not in use.</p>
     
    </div>
    </>
  )
}

export default Section