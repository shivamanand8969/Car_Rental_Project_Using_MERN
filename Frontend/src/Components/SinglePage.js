import React from 'react';
import { useParams } from 'react-router-dom';
import './SinglePage.css';

const SingleCarPage = ({ cars }) => {
//   const { carId } = useParams();
//   const car = cars.find(car => car.id === parseInt(carId));

//   if (!car) {
//     return <div>Car not found!</div>;
//   }

  return (
    <div className="single-car-page">
      <div className="car-details">
        <h2>"car.name"</h2>
        <p>Make: "car.make"</p>
        <p>Model: "car.model"</p>
        <p>Year: "car.year"</p>
        <p>Color: "car.color"</p>
        <p>Transmission: "car.transmission"</p>
        <p>Seats: 'car.seats'</p>
        <p>Doors: "car.doors"</p>
        <p>Features: car.features.join(', ')</p>
        <p>Price: $car.price per day</p>
      </div>
      <div className="booking-details">
        <h2>Booking Details</h2>
        <p>Booking Date: car.bookingDate</p>
        {/* Add payment details here */}
        <button className="payment-button">Make Payment</button>
        {/* Display payment status here */}
      </div>
    </div>
  );
};

export default SingleCarPage;
