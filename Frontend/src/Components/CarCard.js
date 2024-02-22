import React from 'react';
import './CarCard.css';

const CarCard = ({carData,isOpen}) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src="/wp5055262.webp" alt="Car" />
      </div>
      <div className="card-info">
        <h2>{carData.carname}</h2>
        <p>Model: Brezza</p>
        <p>Year: 2002</p>
        <p>Color: red</p>
        <p>Seats: {carData.totalSheet}</p>
        <p>Doors: 6</p>
        <p>Price: {carData.rateperhour} per day</p>
        <button className="book-now-button" onClick={()=>isOpen({carData:carData.ownerId,carId:carData._id})}>Book Now</button>
      </div>
    </div>
  );
};

export default CarCard;
