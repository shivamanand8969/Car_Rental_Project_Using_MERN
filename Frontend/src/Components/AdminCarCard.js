import React, { useState } from 'react';
import './AdminCarCard.css';
import { Link } from 'react-router-dom';


const CarCard = ({ imageUrl, name, rentPrice, id, setRefresh,refresh}) => {
  const handleDelete=async ()=>{
      let deletedata=await fetch(`http://localhost:5000/car/owner/${id}`,{
        method:"DELETE"
      })
       deletedata=await deletedata.json();
       console.log(deletedata);
       setRefresh(!refresh)
  }
  return (
    <div className="car-card">
      <img src={`http://localhost:5000/imagename/${imageUrl}`} alt="car image" className="car-image" />
    <div className='infobox'>
    <div className="car-details">
        <h3 className="car-name"> Car Name :{name}</h3>
        <p id="rent-price">Rent Price: {rentPrice}</p>
      </div>
      <div className='carbtn2'>
        <button className="delete" onClick={handleDelete}>Delete</button>
        <Link to={`/admin/singlecar/${id}`} className='update' >Update</Link>
      </div>
    </div>
    </div>
  );
};

export default CarCard;

