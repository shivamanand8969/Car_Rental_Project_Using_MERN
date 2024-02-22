import React, { memo } from 'react';
import './Infomation.css'

const CarRentalBenefits = () => {
  return (
    <div className="car-rental-benefits-container">
      <div className="car-rental-benefits">
        <h2>Why Choose Our Car Rental Service?</h2>
        <div className="benefit">
          <h3>Seamless Booking Process</h3>
          <p>With our user-friendly web application, renting a car has never been easier. Our intuitive interface allows you to browse through a wide selection of vehicles and complete your booking in just a few simple steps.</p>
        </div>
        <div className="benefit">
          <h3>Competitive Prices</h3>
          <p>We offer competitive prices with transparent pricing structures, ensuring that you get the best value for your money. With our affordable rates, you can enjoy the convenience of renting a car without breaking the bank.</p>
        </div>
        <div className="benefit">
          <h3>Diverse Fleet</h3>
          <p>Whether you need a compact car for city driving or a spacious SUV for a family road trip, we've got you covered. Our diverse fleet includes vehicles of all sizes and types, so you can find the perfect car for your needs.</p>
        </div>
        <div className="benefit">
          <h3>Excellent Customer Service</h3>
          <p>At our company, customer satisfaction is our top priority. Our team of experienced professionals is dedicated to providing you with exceptional service every step of the way.</p>
        </div>
        <div className="benefit">
          <h3>Flexibility and Convenience</h3>
          <p>With flexible rental options and convenient pickup and drop-off locations, we make it easy for you to rent a car on your terms.</p>
        </div>
        <div className="benefit">
          <h3>Safety and Reliability</h3>
          <p>Rest assured that when you rent a car from us, you're getting a safe and reliable vehicle. Our fleet is regularly maintained and inspected to ensure that each car meets the highest safety standards.</p>
        </div>
        <div className="benefit">
          <h3>Personalized Experience</h3>
          <p>We offer personalized service to meet your specific needs. Whether you need additional amenities like GPS navigation or child seats, we'll work with you to customize your rental experience.</p>
        </div>
        <div className="benefit">
          <h3>Environmentally Conscious</h3>
          <p>We are committed to reducing our environmental impact by offering fuel-efficient vehicles and implementing eco-friendly practices throughout our operations.</p>
        </div>
      </div>
    </div>
  );
};

export default memo(CarRentalBenefits)
